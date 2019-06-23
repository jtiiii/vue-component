<template>
    <div class="modal-container">
        <modal :show="show" :position="position" :canClose="canClose" :hasMask="hasMask" :type="type" @close="show = false">
            <template #title v-if="title"> This is a modal title.</template>
            Change position to the inside:
            <br/>
            <v-button @click="position ='top-left'">top-left</v-button>
            <v-button @click="position ='top-right'">top-right</v-button>
            <v-button @click="position ='bottom-right'">bottom-right</v-button>
            <v-button @click="position ='bottom-left'">bottom-left</v-button>
            <v-button @click="position ='center'">center</v-button>
            <br/>
            Change position to the outside:
            <br/>
            <v-button @click="position ='under-left'">under-left</v-button>
            <v-button @click="position ='under-right'">under-right</v-button>
            <hr/>
            <v-button :type="'info'" @click="changeHasMask"> Open / Close the mask.</v-button>
            <hr/>
            Change type to:
            <br/>
            <v-button @click="type = 'default'"> default</v-button>
            <v-button :type="'warning'" @click="type = 'warning'">warning</v-button>
            <v-button :type="'danger'" @click="type = 'danger'">danger</v-button>
            <v-button :type="'success'" @click="type = 'success'">success</v-button>
            <v-button :type="'info'" @click="type = 'info'">info</v-button>
        </modal>
        <v-button @click="show = true">show modal</v-button>
    </div>
</template>
<script>
    import Modal from '../../src/scripts/components/modal/modal.vue';
    import Button from '../../src/scripts/components/button/button.vue';

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
    .modal-container{
        float: left;
        position: relative;
        width: 100%;
        height: 800px;
    }
</style>