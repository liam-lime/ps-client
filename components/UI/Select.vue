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
            console.log('selectedOption: ', option, this, this.value);
            if (this.value) {
                return option.code === this.value.code;
            }
            return false;
        },
        change(event) {
            console.log('event: ', event);
            console.log('event target: ', event.target);
            console.log('event target value: ', event.target.value);
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
