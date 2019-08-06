<template>
    <div class="dropdown"  v-outsideClick="closeMenu" >
        <v-button v-if="!hasCustomButton" ref="button" :size="size" :emotion="emotion" @click="openMenu">{{ text }}</v-button>
        <div v-if="hasCustomButton" @click="openMenu">
            <slot name="button"></slot>
        </div>
        <v-modal ref="menu"
                 class="menu"
                 :size="'unlimited'"
                 :emotion="emotion"
                 :hasMask="modal.hasMask"
                 :position="modal.position"
                 :show="show"
                 @mask-click="closeMenu"
        >
            <slot></slot>
        </v-modal>
    </div>
</template>
<script>
    import Button from './button.vue';
    import Modal from './modal.vue';
    import VueUtils from '../scripts/util/VueUtils';
    import WindowUtils from '../scripts/util/WindowUtils';

    export default {
        model:{
            prop: 'show',
            event: 'openOrClose',
        },
        components:{
            'v-button': Button,
            'v-modal': Modal
        },
        props:{
            text: {
                type: String,
                required: false,
                default: 'Dropdown'
            },
            emotion: VueUtils.props.emotion,
            size: VueUtils.props.size,
            show:{
                type: Boolean,
                required: false,
                default: false,
            },
            position: {
                type: String,
                required: false,
                default: 'outside-bottom-center'
            }
        },
        directives:{
            outsideClick: VueUtils.directives.outsideClick
        },
        data(){
            return {
                modal:{
                    position: 'outside-bottom-left',
                    hasMask: false
                },
                customButton: false,
            };
        },
        methods: {
            closeMenu(){
                this.$emit('openOrClose',false);
            },
            openMenu(){
                this.$emit('openOrClose',true);
            },
            mobileSize(){
                if(window.innerWidth <= 480){
                    this.modal.position = 'center';
                    this.modal.hasMask = true;
                    return ;
                }
                this.modal.position = this.position;
                this.modal.hasMask = false;
            }
        },
        computed:{
            hasCustomButton(){
                return Boolean(this.$slots.button);
            }
        },
        mounted(){
            this.mobileSize();
            WindowUtils.onresize( this.mobileSize.bind(this) );
        }
    };
</script>
<style>
</style>