<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $padding.big })" v-border.bottom>
            <Container>
                <PageIntro :title="'Snippets'" />
            </Container>
        </Section>
        <Section v-border.bottom>
            <Container>
                <h3>Javascript:</h3>
                <ul>
                    <li><a href="#">Три случая использования ... оператора</a></li>
                </ul>
            </Container>
        </Section>
        <Section v-border.bottom>
            <Container>
                <SectionHeader :title="'Rest and Spread operators'" />
                <h3>1</h3>
                <p>Записанный случай</p>
                <pre>// some code</pre>
            </Container>
        </Section>
        <Section>
            <Container>
                <List :items="snippets" #default="{ item }">
                    <SnippetCard :snippet="item" />
                </List>
            </Container>
        </Section>
    </div>
</template>

<script>
import PageIntro from "~/components/Page/PageIntro"
import SnippetCard from "~/components/Snippets/SnippetCard"

export default {
    head() {
        return { title: this.$t('about.title') }
    },
    components: {
        PageIntro,
        SnippetCard
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('about.page-title'))
    },
    computed: {
        snippets () {
            return this.$store.getters['snippets/SNIPPETS'](this.$store.getters['lang/LOCALE'])
        }
    }
}
</script>
