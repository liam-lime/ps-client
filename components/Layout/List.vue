<template>
    <ul class="list list--desktop-3">
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
    margin: -10px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__item {
        padding: 10px;
    }

    &--desktop-3 {

        .list__item {
            width: 100%;
        }

        @include tablet {

            .list__item {
                width: 50%;
            }
        }

        @include desktop {

            .list__item {
                width: 33.33%;
            }
        }

    }

    @include tablet {

    }

    @include desktop {

    }
}
</style>
