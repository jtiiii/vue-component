<script>
    import Button from '../button/button.vue';
    import Modal from '../modal/modal.vue';
    import VueUtils from '../../util/VueUtils';
    import WindowUtils from '../../util/WindowUtils';

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
                default: undefined,
            },
            position: {
                type: String,
                required: false,
                default: 'under-left'
            }
        },
        directives:{
            outsideClick: VueUtils.directives.outsideClick
        },
        data(){
            return {
                modal:{
                    show: false,
                    position: 'under-left',
                    hasMask: false
                },
                customButton: false,
            };
        },
        methods: {
            closeMenu(){
                this.$emit('openOrClose',false);
                this.modal.show = false;
            },
            openMenu(){
                this.$emit('openOrClose',true);
                this.modal.show = true;
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
<template>
    <div class="dropdown"  v-outsideClick="closeMenu" >
        <v-button v-if="!hasCustomButton" ref="button" :size="size" :emotion="emotion" @click="openMenu">{{ text }}</v-button>
        <div v-else  ref="button" @click="openMenu" ><slot name="button"></slot></div>
        <v-modal ref="menu" @mask-click="closeMenu" class="menu" :hasMask="modal.hasMask" :position="modal.position" :size="'unlimited'" :show="show === undefined? modal.show : show">
            <slot></slot>
        </v-modal>
    </div>
</template>
<style scoped>
    @import url("../../../styles/themes/components/bootstrap/dropdown.css");
</style>