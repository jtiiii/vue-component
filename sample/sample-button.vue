<template>
    <div class="sample-button">
        <div>
            <v-button :size="'smaller'">button</v-button>
            <v-button :size="'small'" :emotion="'info'" >button</v-button>
            <v-button :size="'medium'" :emotion="'warning'" >button</v-button>
            <v-button :size="'large'" :emotion="'danger'">button</v-button>
            <v-button :size="'larger'" :emotion="'success'"  >button</v-button>
        </div>
        <div>
            <v-button disabled >disabled button</v-button>
        </div>
        <div>
            <v-button :pressed="true" :size="'smaller'">pressed</v-button>
            <v-button :pressed="true" :size="'small'" :emotion="'info'" >pressed</v-button>
            <v-button :pressed="true" :size="'medium'" :emotion="'warning'" >pressed</v-button>
            <v-button :pressed="true" :size="'large'" :emotion="'danger'">pressed</v-button>
            <v-button :pressed="true" :size="'larger'" :emotion="'success'" >pressed</v-button>
        </div>
    </div>
</template>
<script>
    import Button from '../src/components/button.vue';
    export default {
        components:{
            'v-button': Button
        },
        data(){
            return {
                buttonType: 'info'
            };
        }
    }
</script>
<style scoped>
    .sample-button{
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
        justify-content: flex-start;

    }
</style>