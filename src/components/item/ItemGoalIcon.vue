<script setup>
import { computed } from 'vue';
import { normalizeDisplayMaterial, formatQuantity } from '../../composables/materials';
import { useWarehouseStore } from '../../stores/warehouseStore.ts';

const props = defineProps({
    material: {
        type: Object,
        required: true
    }
});

const checkQuantity = () => {
    if (props.material.Quantity > 99 || useWarehouseStore().getItemQuantity(props.material.Material) > 99) {
        return true;
    }
    return false;
};

const normalizedMaterial = computed(() => {
    const result = normalizeDisplayMaterial(props.material);
    return result;
});

</script>

<template>
    <div class="tooltip" :data-tip="$t(normalizedMaterial.material)">
        <div class="relative inline-block">
            <img :src="normalizedMaterial.borderImagePath" alt="Border Image" class="w-20 h-20 absolute"
                :class="{ 'w-36': checkQuantity() }" />
            <img :src="normalizedMaterial.itemImagePath" alt="Material Image" class="w-20 h-20"
                :class="{ 'mx-5': checkQuantity() }" />
            <div class="flex items-center justify-center small-text text-white absolute -bottom-3 left-3 input input-xs rounded-t-none"
                :class="{
                    'left-[17px] w-[85px]': checkQuantity(), 'w-14': !checkQuantity(),
                    'bg-green-800/80': useWarehouseStore().getItemQuantity(props.material.Material) >= props.material.Quantity, 'bg-red-500/60': useWarehouseStore().getItemQuantity(props.material.Material) < props.material.Quantity
                }">
                {{ formatQuantity(useWarehouseStore().getItemQuantity(normalizedMaterial.material)) }} / {{
                    normalizedMaterial.quantity }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.small-text {
    font-size: 11px;
}
</style>
