<template>
    <div class="snippet-card">
        <h3 class="snippet-card__title">{{ snippet.title }}</h3>
        <ul>
            <li v=for="link in snippet.additionalLinks">{{ link.text }}</li>
        </ul>
        <div class="snippet-card__content text-content" v-html="snippet.content"></div>
    </div>
</template>

<script>
export default {
    props: {
        snippet: {
            type: Object,
            required: true
        }
    }
}
</script>
