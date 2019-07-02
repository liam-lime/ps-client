<template>
    <div class="logo"><span class="logo__inner">Nazar Lynovetsky</span></div>
</template>

<style lang="css">
.logo {
    display: flex;
    align-items: center;
    background: #1e1a7e;
    color: #fff;
}

.logo::before {
    content: "";
    width: 30px;
    height: 30px;
    background: #f0ef97;
}

.logo__inner {
    padding-left: 10px;
}
</style>
