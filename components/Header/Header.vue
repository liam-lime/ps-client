<template>
    <header class="header">
        <div class="header__inner container">
            <div class="header__item">
                <Button :onClick="onClickMenuButton">Menu</Button>
            </div>
            <div class="header__item">
                <Logo />
            </div>
            <div class="header__item">
                <PageTitle />
            </div>
            <div class="header__item">
                <Navigation />
            </div>
        </div>
    </header>
</template>

<script>
import Button from "~/components/Button/Button"
import Logo from "~/components/Logo/Logo"
import PageTitle from "~/components/Page/PageTitle"
import Navigation from "~/components/Navigation/Navigation"

export default {
    components: {
        Button,
        Logo,
        PageTitle,
        Navigation
    },
    methods: {
        onClickMenuButton() {
            console.log('Menu Button Clicked!')
        }
    }
}
</script>

<style lang="scss">
.header {
    padding: 20px 0;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .05);

    &__inner {
        display: flex;
        justify-content: flex-start;
    }

    &__item {
        margin-right: 24px;

        &:last-child {
            margin-right: 0;
            margin-left: auto;
        }
    }
}
</style>
