<template>
    <ul class="list">
        <template v-if="!items.length">
            <li>Items not found.</li>
        </template>
        <template v-if="items.length">
            <li
                class="list__item"
                v-for="item in items"
                :key="item.id"
            >
                <slot :item="item"></slot>
            </li>
        </template>
    </ul>
</template>

<script>


export default {
    props: {
        items: {
            type: Array,
            default: () => [],
            required: true
        }
    }
}
</script>

<style lang="scss">
.list {
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>
