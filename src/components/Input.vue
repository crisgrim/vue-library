<template>
    <div>
        <label for="input">
            <div class='label'>
                <div class='label-content'>
                    <slot></slot>
                </div>
            </div>
        </label>
        <input
            type="text"
            @input="$emit('input', $event.target.value)"
            id="input"
        >
    </div>
</template>

<script>
    export default {
        name: 'Input',
        model: {
            prop: 'value',
            event: 'input'
        },
        props: {
            value: String
        }
    }
</script>

<style scoped>
    label {
        display: flex;
        position: relative;
        height: auto;
    }
    input {
        border: 0 solid #ffff;
        border-bottom: 4px solid #ffffff;
        background-color: rgba(0, 0, 0, 0);
        color: #ffffff;
        font-size: 20px;
        margin-bottom: 20px;
        padding: 20px;
        display: block;
        position: relative;
        width: 100%;
    }
    input:focus {
        outline: #ffffff;
    }
    .label {
        position: relative;
        height: auto;
        margin-left: 10px;
    }
    .label .label-content {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
</style>