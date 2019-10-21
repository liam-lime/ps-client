<template>
    <div class="image-with-info" :style="cssProperties">
        <div class="image-with-info__header">
            <img :src="imageWithInfo.imageUrl" :alt="imageWithInfo.imageAlt">
        </div>
        <div class="image-with-info__main" v-html="imageWithInfo.content"></div>
    </div>
</template>

<script>
export default {
    props: {
        imageWithInfo: {
            /*
                Object example:
                {
                    imageUrl: 'url',
                    imageAlt: 'description',
                    content: 'html like string'
                }
            */
            type: Object,
            required: true
        },
        imagePosition: {
            // true - image on the left side
            // false - image on the right side
            type: Boolean,
            default: true
        },
    },
    computed: {
        cssProperties() {
            if (this.imagePosition) return {}
            return {
                'justify-content': 'end'
            }
        }
    }
}
</script>

<style lang="scss">
.image-with-info {
    display: flex;

    &__header {
        background: $color-light-gray;
    }
}
</style>
