<script setup>
import { useI18n } from 'vue-i18n';

const emit = defineEmits({
    closeOverlay: {
        type: Function,
        required: true
    }
});

const { t } = useI18n()

const closeOverlay = () => {
    emit('closeOverlay');
};

// { name: '', author:'', comment:'', link: '' },
const resources = [
    { name: 'Huji wiki', author: 'Huji wiki team', comment: t('very-detailed-most-of-the-data-is-from-this-wiki'), link: 'https://res1999.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5' },
    { name: '必要的记录', author: 'Chinese community', comment: t('the-drop-rates-of-farming-stages-are-provided-by-this-sheet'), link: 'https://www.kdocs.cn/l/cd5MWeCl5bKw' },
    { name: 'ArkPlanner', author: 'Penguine Statistics', comment: t('referred-to-arkplanner-s-farming-route-algorithm-enhanced-with-linear-programming-magic'), link: 'https://penguin-stats.io/planner' },
    { name: 'Vanity Cake Reverse 1999', author: 'Vanity & Cake', comment: t('spreadsheet-for-a-lot-of-things-insight-iii-levels-are-taken-here'), link: 'https://docs.google.com/spreadsheets/d/1qQinxxU_e0-YXwPj5WAd2PgTFksyLwIaHXwEcosUxU0/edit#gid=470385843' },
    { name: 'Seelie', author: 'Gabriel', comment: t('ever-wonder-why-this-looks-like-seelie'), link: 'https://hsr.seelie.me/' },
    { name: 'Star Rail Station', author: 'Star Rail Station', comment: t('summon-tracker-ideas'), link: 'https://starrailstation.com/' },
    { name: 'Schale', author: 'lonqie', comment: 'cunny uwooghh', link: 'https://schale.gg/' }
    // Add more resources as needed
];
</script>

<template>
    <div class="list-overlay">
        <div class="custom-modal-small h-2/3 overflow-y-scroll hidden-scrollbar">
            <button @click="closeOverlay" class="absolute top-2 right-2 text-white">
                <i class="fas fa-times"></i>
            </button>

            <h1 class="text-white font-bold text-2xl pb-2">{{ $t('credits') }}</h1>

            <ul class="text-white space-y-5">
                <li v-for="(resource, index) in resources" :key="index">
                    <a :href="resource.link" target="_blank" class="text-sky-300 text-lg"> <i class="fa-solid fa-link"></i>
                        {{
                            resource.name }} </a>
                    <span class="text-sm pl-1">
                        <i18n-t keypath="by-author">
                            <template #author>
                                <span class="text-sm">{{ resource.author }}</span>
                            </template></i18n-t>
                    </span>
                    <p class="text-sm"> {{ resource.comment }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
