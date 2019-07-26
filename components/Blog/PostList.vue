<template>
    <ul class="post-list">
        <template v-if="!posts.length">
            <li>Posts not found.</li>
        </template>
        <template v-if="posts.length">
            <li
                class="post-list__item"
                v-for="post in posts"
                :key="post.id"
            >
                <slot :post="post"></slot>
            </li>
        </template>
    </ul>
</template>

<script>


export default {
    computed: {
        posts () {
            return this.$store.getters['blog/POSTS'](this.$store.getters['lang/LOCALE'])
        }
    }
}
</script>
