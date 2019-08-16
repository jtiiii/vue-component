<template>
    <div class="sample-modal">
        <div class="sample-modal-container">
            <modal :show="show" :size="'large'" :position="position" :canClose="canClose" :hasMask="hasMask" :emotion="type" @close="show = false">
                <template #title v-if="title"> This is a modal title.</template>
                Change position to the inside:
                <br/>
                <v-button @click="position ='inside-top-left'">top-left</v-button>
                <v-button @click="position ='inside-top-right'">top-right</v-button>
                <v-button @click="position ='inside-bottom-right'">bottom-right</v-button>
                <v-button @click="position ='inside-bottom-left'">bottom-left</v-button>
                <v-button @click="position ='inside-center'">center</v-button>
                <v-button @click="position ='inside-top-center'">top-center</v-button>
                <v-button @click="position ='inside-bottom-center'">bottom-center</v-button>
                <v-button @click="position ='inside-left-center'">left-center</v-button>
                <v-button @click="position ='inside-right-center'">right-center</v-button>
                <br/>
                Change position to the outside:
                <br/>
                <v-button @click="position ='outside-top-left'">top-left</v-button>
                <v-button @click="position ='outside-top-right'">top-right</v-button>
                <v-button @click="position ='outside-bottom-right'">bottom-right</v-button>
                <v-button @click="position ='outside-bottom-left'">bottom-left</v-button>
                <v-button @click="position ='outside-center'">center</v-button>
                <v-button @click="position ='outside-top-center'">top-center</v-button>
                <v-button @click="position ='outside-bottom-center'">bottom-center</v-button>
                <v-button @click="position ='outside-left-center'">left-center</v-button>
                <v-button @click="position ='outside-right-center'">right-center</v-button>
                <hr/>
                <v-button :emotion="'info'" @click="changeHasMask"> Open / Close the mask.</v-button>
                <hr/>
                Change emotion to:
                <br/>
                <v-button @click="type = 'default'"> default</v-button>
                <v-button :emotion="'warning'" @click="type = 'warning'">warning</v-button>
                <v-button :emotion="'danger'" @click="type = 'danger'">danger</v-button>
                <v-button :emotion="'success'" @click="type = 'success'">success</v-button>
                <v-button :emotion="'info'" @click="type = 'info'">info</v-button>
            </modal>
            <v-button @click="show = true">show modal</v-button>
        </div>
    </div>
</template>
<script>
    import FComponents from '../src/vue-components';

    export default {
        components:{
            'modal': FComponents.Modal,
            'v-button': FComponents.Button
        },
        data: function(){
            return {
                show: true,
                type: 'default',
                hasMask: true,
                position: 'center',
                title: true,
                canClose: true,
            };
        },
        methods:{
            changeHasMask(){
                this.hasMask = !this.hasMask;
            }
        }
    }
</script>

<style>
    .sample-modal{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 800px;
    }
    .sample-modal-container{
        float: left;
        position: relative;
        width: 50%;
        height: 100%;
    }
</style>