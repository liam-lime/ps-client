<template>
    <select @change="change">
        <option disabled value="">Choose</option>
        <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.code"

        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    props: ['options', 'value'],
    data() {
        return {
            selected: null
        }
    },
    methods: {
        selectedOption(option) {
            if (this.value) {
                return option.code === this.value.code;
            }
            return false;
        },
        change(event) {
            const selectedCode = event.target.value;
            const option = this.options.find((option) => {
                return selectedCode === option.code;
            });
            this.$emit("input", option);
        }
    }
}
</script>

<style lang="scss">
.select {}
</style>
