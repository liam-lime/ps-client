<template>
    <div class="post-card">
        <h3>{{ post.title }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
