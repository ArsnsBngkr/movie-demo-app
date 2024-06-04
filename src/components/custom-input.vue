<template>
    <div class="form-group">
        <label for=""><span>{{ label }}</span></label>
        <input :type="type" v-model="inputValue" @keyup='handleOnKeyUp()' />

    </div>
</template>

<script>
export default {
    props: ['label', 'type', 'modelValue', 'handleOnKeyUp'],
    computed: {
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    },
}

</script>

<style>
.form-group {
    display: flex;
    flex-direction: column;
    width: auto;
    margin-top: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    width: 100%;
    text-align: left;
    font-size: 1.2em;
    margin-bottom: 5px;
}

.form-group input {
    width: 350px;
    outline: none;
    font-size: 1.1em;
    padding: 10px 10px;
    margin-bottom: 1rem;
    border: 1px solid rgb(133, 129, 129);
}

.newUser span {
    color: rgb(25, 176, 176);
}
</style>