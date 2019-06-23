<template>
    <f-v-dropdown v-model="menuShow">
        <template #button>
            <f-v-button class="button" :type="type" :size="size">
                <span class="button-text">{{ selectedText }}</span>
                <img class="dropdown-icon" :src="icon">
            </f-v-button>
        </template>
        <f-v-navigator class="selects" :tabs="list" :selects="selects" @a-click="singleSelect" :direction="'column'" />
    </f-v-dropdown>
</template>
<script>
    import Option from './selector';
    export default Option;
</script>

<style scoped>
    .dropdown-icon{
        width: 1rem;
        height: 1rem;
    }
    .selects >>> a{
        margin: 0;
    }
    .button{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }
    .button-text{
        margin-right: 10px;
    }
</style>