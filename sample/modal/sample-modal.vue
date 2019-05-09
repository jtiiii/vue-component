<template>
    <div class="modal-container">
        <modal :show="show" :position="position" :hasMask="hasMask" :type="type" :width="'500px'" :height="'400px'" @close="show = false">
            Change position:
            <br/>
            <template #title> This is a modal title.</template>
            <v-button @click="position ='top-left'">To top-left</v-button>
            <v-button @click="position ='top-right'">To top-right</v-button>
            <v-button @click="position ='bottom-right'">To bottom-right</v-button>
            <v-button @click="position ='bottom-left'">To bottom-left</v-button>
            <v-button @click="position ='center'">To center</v-button>
            <hr/>
            <v-button :type="'info'" @click="hasMask = !hasMask"> Open / Close the mask.</v-button>
            <hr/>
            Change type:
            <br/>
            <v-button @click="type = 'default'"> default</v-button>
            <v-button :type="'warning'" @click="type = 'warning'">to warning</v-button>
            <v-button :type="'danger'" @click="type = 'danger'">to danger</v-button>
            <v-button :type="'success'" @click="type = 'success'">to success</v-button>
            <v-button :type="'info'" @click="type = 'info'">to info</v-button>
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
            };
        },
        methods:{

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