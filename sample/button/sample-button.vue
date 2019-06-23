<template>
    <div class="sample-button">
        <v-button :size="'smaller'">button</v-button>
        <v-button :size="'small'" :type="'info'" >button</v-button>
        <v-button :size="'medium'" :type="'warning'" >button</v-button>
        <v-button :size="'large'" :type="'danger'">button</v-button>
        <v-button :size="'larger'" :type="'success'" >button</v-button>
        <v-button disabled >disabled button</v-button>
    </div>
</template>
<script>
    import FComponents from '../../src/main';
    export default {
        components:{
            'v-button': FComponents.Button
        },
        data(){
            return {
                buttonType: 'info'
            };
        },
        methods:{

        },
        created(){
        }
    }
</script>
<style scoped>
    .sample-button{
        display: flex;
        flex-flow: row wrap;
        align-items: flex-end;
        justify-content: left;
    }
</style>