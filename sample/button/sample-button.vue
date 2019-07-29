<template>
    <div class="sample-button">
        <v-button :size="'smaller'">button</v-button>
        <v-button :size="'small'" :emotion="'info'" >button</v-button>
        <v-button :size="'medium'" :emotion="'warning'" >button</v-button>
        <v-button :size="'large'" :emotion="'danger'">button</v-button>
        <v-button :size="'larger'" :emotion="'success'"  >button</v-button>
        <v-button disabled >disabled button</v-button>
        <v-button :pressed="true" :size="'smaller'">pressed button</v-button>
        <v-button :pressed="true" :size="'small'" :emotion="'info'" >pressed button</v-button>
        <v-button :pressed="true" :size="'medium'" :emotion="'warning'" >pressed button</v-button>
        <v-button :pressed="true" :size="'large'" :emotion="'danger'">pressed button</v-button>
        <v-button :pressed="true" :size="'larger'" :emotion="'success'" >pressed button</v-button>
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