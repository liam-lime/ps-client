<template lang="html">
    <footer class="footer">
        <Section>
            <Container>
                <div class="footer__inner">
                    <div class="footer__item">
                        <span>{{ $t('footer.copyright') }}</span>
                    </div>
                    <div class="footer__item">
                        <LocaleSelect />
                        <Select v-model="selected" :options="options" />
                    </div>
                </div>
            </Container>
        </Section>
    </footer>
</template>

<script>
import LocaleSelect from "~/components/App/LocaleSelect"

export default {
    data() {
        return {
            selected: null,
            options: [{
              name: "Argentina",
              code: "AR",
            },
            {
              name: "United States of America",
              code: "US"
            },
            {
              name: "Germany",
              code: "DE"
            },
            {
              name: "China",
              code: "CN"
            }
          ]
        }
    },
    components: {
        LocaleSelect
    }
}
</script>

<style lang="scss">
.footer__inner {
    display: flex;
    justify-content: space-between;
}
</style>
