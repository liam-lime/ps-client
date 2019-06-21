<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">
        {{ $t('home.title') }}
      </h1>
      <p>{{ $t('home.introduction') }}</p>
      <div v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    head() {
        return { title: this.$t('home.title') }
    },
    computed: {
        posts () {
            return this.$store.getters['blog/posts']
        }
    },
    async fetch ({ store }) {
        if (!store.getters['blog/posts'].length) {
            await store.dispatch('blog/GET_POSTS')
        }
    }
}
</script>
