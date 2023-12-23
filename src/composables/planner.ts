import { useDataStore } from '../stores/dataStore'
import { useWarehouseStore } from '../stores/warehouseStore'
import { useActivityStore } from '../stores/activityStore';
import { usePlannerSettingsStore } from '../stores/plannerSettingsStore'
import { getSolve } from './solver';
import { getActivityImagePathByStage } from './images'
import { IMaterialUnit, IStages } from '@/types';

const items = useDataStore().items;

export function getDrops () {
    const {
        enableGreedyMethod,
        enabledUnreleasedStages
    } = usePlannerSettingsStore().settings;
    const dataStore = useDataStore();
    if (enableGreedyMethod) {
        return dataStore[enabledUnreleasedStages ? 'stages1_4_greedy' : 'stages_greedy'] || {}
    }
    return dataStore[enabledUnreleasedStages ? 'stages1_4' : 'stages'] || {}
}

interface ICard {
    stage: string,
    runs: number,
    activity: number,
    days: number,
    materials: IMaterialUnit[],
    activityImagePath: string,
}

function calculateOneiric (matlInfo) {
    const item = items.find(item => item.Name === matlInfo.Material);
    if (item) {
        const rarity = item.Rarity;
        const quantity = matlInfo.Quantity;

        if (rarity === 3) return quantity * 40;
        if (rarity === 4) return quantity * 100;
        if (rarity === 5) return quantity * 250;
        if (rarity === 6) return quantity * 1500;
    }
    return 0;
}

function processOneiric (matlInfo: IMaterialUnit, generatedCards: ICard[]) {
    if (matlInfo.Quantity <= 0) return;
    const matlCategory = items.find((item) => item.Name === matlInfo.Material)?.Category;
    if (matlCategory !== 'Resonate Material') return;
    const oneiricCard = getCardByStage('Oneiric Shop', generatedCards);
    oneiricCard.materials.push(matlInfo);
    oneiricCard.activity += calculateOneiric(matlInfo);
}

function subtractResonanceMaterials (materials: IMaterialUnit[]) {
    const warehouse = useWarehouseStore().data;

    materials.forEach((matlInfo) => {
        const subtractItem = warehouse.find((item) => item.Category === 'Resonate Material' && item.Material === matlInfo.Material);
        if (subtractItem) {
            matlInfo.Quantity -= subtractItem.Quantity;
        }
    });
    return materials;
}

function processResonanceMaterials (materials: IMaterialUnit[], generatedCards: ICard[]) {
    let casketCount = 0;

    materials.forEach((matlInfo) => {
        const matl = items.find((item) => item.Name === matlInfo.Material);
        if (matl?.Category !== 'Resonate Material' || matl?.Rarity !== 6) return;
        casketCount += matlInfo.Quantity;
        matlInfo.Quantity = 0;
    });

    // add casket materials
    if (casketCount > 0) {
        const material = {
            Material: 'Crystal Casket',
            Quantity: casketCount
        }
        materials.unshift(material);
    }

    subtractResonanceMaterials(materials);

    materials.forEach((matlInfo) => {
        processOneiric(matlInfo, generatedCards);
    });
}

function generateCard (
    stage: string,
    runs: number | null,
    activity: number | null,
    days: number | null,
    materials: IMaterialUnit[]
): ICard {
    return {
        stage,
        runs: runs || 0,
        activity: activity || 0,
        days: days || 0,
        materials,
        activityImagePath: getActivityImagePathByStage(stage)
    };
}

function getCardByStage (stage: string, generatedCards: ICard[]): ICard {
    let card = generatedCards.find(c => c.stage === stage);
    if (!card) {
        card = generateCard(stage, null, stage === 'Oneiric Shop' ? 0 : null, null, []);
        generatedCards.push(card);
    }
    return card;
}

function sortLayer (cards: ICard[], drops: IStages) {
    return cards.sort((a, b) => {
        if (a.stage === 'Oneiric Shop') {
            return -1;
        } else if (b.stage === 'Oneiric Shop') {
            return 1;
        }

        const stageA = drops[a.stage];
        const stageB = drops[b.stage];
        if (stageA && stageB) {
            // If both stages have an id, sort based on id
            return stageA.id - stageB.id;
        }
        if (stageA) {
            // If only stageA has an id, place it before stageB
            return -1;
        }
        if (stageB) {
            // If only stageB has an id, place it before stageA
            return 1;
        }

        // If neither stage has an id, maintain the original order
        return 0;
    });
}

function sortByRunCount (cards: ICard[]) {
    return cards.sort((a, b) => b.runs - a.runs);
}

interface IPlanCard {
    id: number,
    cards: ICard[]
}
export interface IPlanCards extends Array<IPlanCard>{}

export function getPlan (materials: IMaterialUnit[]): IPlanCards {
    const generatedCards: ICard[] = [];
    const drops = getDrops();

    processResonanceMaterials(materials, generatedCards);

    const plan = getSolve(materials);

    plan.variables.forEach((stage) => {
        const stageInfo = drops[stage[0]];
        if (stageInfo) {
            const runs = Math.ceil(stage[1]);
            const activity = Math.ceil(runs * stageInfo.cost);
            const days = Number((activity / useActivityStore().settings.activity).toFixed(1));
            let materials = Object.entries(stageInfo.drops).map(([matlName, count]) => {
                let quantity = (count / stageInfo.count) * runs;
                quantity = (quantity % 1 >= 0.9) ? Math.ceil(quantity) : Math.floor(quantity); // flooring, takes 0.99 for now
                return {
                    Material: matlName,
                    Quantity: quantity
                };
            });
            materials = materials.filter((matl) => matl.Quantity > 0);
            const card = generateCard(stage[0], runs, activity, days, materials);
            generatedCards.push(card);
        } else { // handle crafting
            const splitString = stage[0].split('-');
            const matName = splitString[1].trim();
            const material = {
                Material: matName,
                Quantity: stage[1]
            }
            const crafting = getCardByStage('Wilderness Wishing Spring', generatedCards);
            crafting.materials.push(material);
        }
    });

    // console.log(generatedCards);

    const cardsFirstLayer = generatedCards.filter(
        (card) =>
            ['The Poussiere VI', 'Mintage Aesthetics VI', 'Oneiric Shop'].includes(card.stage) &&
            card.materials.length > 0
    );

    const cardsSecondLayer = generatedCards.filter(
        (card) =>
            (card.stage.endsWith('II') || card.stage.endsWith('IV') || card.stage.endsWith('VI')) &&
            !cardsFirstLayer.some((firstLayerCard) => firstLayerCard.stage === card.stage) &&
            card.materials.length > 0
    );
    const cardsThirdLayer = generatedCards.filter(
        (card) =>
            !['Wilderness Wishing Spring', ...cardsFirstLayer.map((card) => card.stage), ...cardsSecondLayer.map((card) => card.stage)].includes(
                card.stage
            ) && card.materials.length > 0
    );
    // the rest of the stages are in the fourth layer
    const cardsFourthLayer = generatedCards.filter(
        (card) =>
            ['Wilderness Wishing Spring'].includes(card.stage) && card.materials.length > 0
    );

    // console.log(cardsFourthLayer);
    const cardLayers = [
        { id: 0, cards: sortLayer(cardsFirstLayer, drops) },
        { id: 1, cards: sortLayer(cardsSecondLayer, drops) },
        { id: 2, cards: sortByRunCount(cardsThirdLayer) },
        { id: 3, cards: cardsFourthLayer }
    ];
    return cardLayers;
}

export function getTotalActivityAndDays (cardLayers) {
    let totalActivity = 0;
    let totalDays = 0;

    cardLayers.forEach((layer) => {
        layer.cards.forEach((card) => {
            if (card.days !== 0) {
                totalActivity += card.activity;
                totalDays += parseFloat(card.days);
            }
        });
    });
    return [totalActivity, totalDays.toFixed(0)];
}
