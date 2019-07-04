<template>
    <section class="section">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="scss">
.section {
    padding: 50px 0;
    border-bottom: 1px solid $base-border-color;

    &--light-gray {
        background: $light-gray-background-color;
    }
}
</style>
