<template>
    <div>
        <v-button >default button</v-button>
        <v-button :type="'info'" >info button</v-button>
        <v-button :type="'warning'" >warning button</v-button>
        <v-button :type="'danger'">danger button</v-button>
        <v-button :type="'success'" >success button</v-button>
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
    /*div > button{*/
    /*    margin: 0 5px;*/
    /*}*/
</style>