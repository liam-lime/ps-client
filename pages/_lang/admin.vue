<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $padding.big })" v-border.bottom>
            <Container>
                <PageIntro :title="'Admin Panel'" />
            </Container>
        </Section>
        <Section v-border.bottom>
            <Container>
                <h3>Blog:</h3>
                <ul>
                    <li><a href="#">Add Article</a></li>
                    <li><a href="#">Edit Article</a></li>
                    <li><a href="#">Remove Article</a></li>
                </ul>
                <h3>Portfolio:</h3>
                <ul>
                    <li><a href="#">Edit Portfolio</a></li>
                </ul>
            </Container>
        </Section>
        <Section v-border.bottom>
            <Container>
                <SectionHeader :title="'Add new Post'" />
                <h3>Title:</h3>
                <input type="text" name="" value="">
                <h3>Content:</h3>
                <textarea name="name" rows="8" cols="80"></textarea>
                <h3>Select category:</h3>
                <select class="" name="">
                    <option value="1">Vue.js</option>
                    <option value="1">Javascript</option>
                    <option value="1">Node.js</option>
                    <option value="1">Web Design</option>
                    <option value="1">React.js</option>
                </select>
            </Container>
        </Section>
    </div>
</template>

<script>
import PageIntro from "~/components/Page/PageIntro"

export default {
    head() {
        return { title: this.$t('about.title') }
    },
    components: {
        PageIntro,
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('about.page-title'))
    }
}
</script>
