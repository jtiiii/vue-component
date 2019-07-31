<template>
    <div class="sample-modal-container">
        <modal :show="show" :size="'large'" :position="position" :canClose="canClose" :hasMask="hasMask" :emotion="type" @close="show = false">
            <template #title v-if="title"> This is a modal title.</template>
            Change position to the inside:
            <br/>
            <v-button @click="position ='top-left'">top-left</v-button>
            <v-button @click="position ='top-right'">top-right</v-button>
            <v-button @click="position ='bottom-right'">bottom-right</v-button>
            <v-button @click="position ='bottom-left'">bottom-left</v-button>
            <v-button @click="position ='center'">center</v-button>
            <v-button @click="position ='top-center'">top-center</v-button>
            <v-button @click="position ='bottom-center'">bottom-center</v-button>
            <v-button @click="position ='left-center'">left-center</v-button>
            <v-button @click="position ='right-center'">right-center</v-button>
            <br/>
            Change position to the outside:
            <br/>
            <v-button @click="position ='under-left'">under-left</v-button>
            <v-button @click="position ='under-right'">under-right</v-button>
            <v-button @click="position ='above-left'">above-left</v-button>
            <v-button @click="position ='above-right'">above-right</v-button>
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
</template>
<script>
    import Modal from '@/scripts/components/modal.vue';
    import Button from '@/scripts/components/button.vue';

    export default {
        components:{
            'modal': Modal,
            'v-button': Button
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

<style scoped>
    .sample-modal-container{
        float: left;
        position: relative;
        width: 100%;
        height: 800px;
    }
</style>