<template>
    <div class="single-post">
        <header class="single-post__header">
            <h1>{{ post.title }}</h1>
        </header>
        <template v-if="post.published">
            <div class="single-post__main" v-html="post.content"></div>
            <footer class="single-post__footer">
                <p>{{ $t('post.author') }}: Nazar Lynovetsky</p>
            </footer>
        </template>
        <template v-if="!post.published">
            <Alert :text="$t('post.translation-still-underway')" />
        </template>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss">
.single-post {

    &__main {
        font-family: 'EB Garamond', serif;
        color: rgba(0, 0, 0, .80);

        p {
            line-height: 1.5;
            font-size: 1.27rem;
        }
    }


    @include tablet {

        &__main {

            p {
                font-size: 1.33rem;
            }
        }
    }


    @include desktop {

        &__main {

            p {
                font-size: 1.36rem;
            }
        }
    }
}
</style>
