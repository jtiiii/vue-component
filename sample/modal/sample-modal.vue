<template>
    <div>
        <div class="modal-container">
            <modal :show="show1" :type="'warning'" @close="show1 = false">
                <template #title> This is a modal title.</template>
                This is a modal.
            </modal>
            <button type="button" @click="show1 = true"> show modal1 </button>
        </div>
        <div class="modal-container">
            <modal :show="show2" :hasMask="false" :type="'info'" @close="show2 = false">
                <template #title> This is a modal title.</template>
                This is a modal without the mask.
            </modal>
            <button type="button" @click="show2 = true"> show modal2 </button>
        </div>
        <div class="modal-container">
            <modal :show="true" :height="'100px'" :width="'240px'" :canClose="false" :position="position3" :hasMask="false" :type="'success'">
                <template #title> This is a modal title.</template>
                This is a modal without the mask.
            </modal>
            <button type="button" @click="position3 = position3 === 'top-right'? 'bottom-right': 'top-right'">Change Position</button>
        </div>

        <div class="modal-container">
            <modal :show="show4" :height="'100px'" :width="'240px'" :position="position4" @close="show4 = false" :type="'danger'">
                <template #title> This is a modal title.</template>
                This is a modal without the mask.
            </modal>
            <button style="float:right;" type="button" @click="position4 = position4 === 'top-left'? 'bottom-left': 'top-left'">Change Position</button>
            <button style="float:right;" type="button" @click="show4 = true"> show modal4 </button>
        </div>
    </div>
</template>
<script>
    import Modal from '../../src/scripts/components/modal/modal.vue';
    export default {
        components:{
            'modal': Modal,
        },
        data: function(){
            return {
                show1: true,
                show2: true,
                position3: 'top-right',
                position4: 'bottom-left',
                show4: true
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
        width: 50%;
        height: 400px;
    }
</style>