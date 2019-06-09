<script>
    import Option from './dropdown';

    export default Option;
</script>
<template>
    <div class="dropdown"  v-outsideClick="close" >
        <v-button v-if="!hasCustomButton" ref="button" :type="type" @click="openMenu">{{ text }}</v-button>
        <div v-else  ref="button" @click="openMenu" ><slot name="button"></slot></div>
<!--        <v-panel class="menu" :show="panel.show">-->
<!--            <slot name="menu"></slot>-->
<!--        </v-panel>-->
        <v-modal ref="menu" @mask-click="close" class="menu" :hasMask="modal.hasMask" :position="modal.position" :size="'unlimited'" :show="modal.show">
            <slot></slot>
        </v-modal>
    </div>
</template>
<style scoped>
    .dropdown{
        display: inline-block;
        width: auto;
        position: relative;
    }
    .menu{
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        z-index: 2;
    }
    .dropdown > div{
        /*display: inline-block;*/
    }
    @media screen and (min-width:480px){

    }

    @media screen and (max-width:480px){
        .menu{
            width: 100%;
            height: 100%;
            position: fixed;
            display: flex;
            top: 0;
            left: 0;
            z-index: 999;
        }
        .menu >>> .modal{
            box-shadow: none;
        }
    }
</style>