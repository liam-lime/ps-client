<template>
    <div class="section">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.section {
    padding: 50px 0;
    border-bottom: 1px solid $base-border-color;

    &--light-gray {
        background: $light-gray-background-color;
    }

    &--tight {

        & .container {
            max-width: 1024px;
        }
    }
}
</style>
