<template>
    <div v-show="show" class="image-view" @click="$emit('click',{src:src,show:show})">
        <img alt="" :src="src" />
    </div>
</template>
<script type="text/javascript">
    import FUtils from 'fo-utils'

    export default {
        props:{
            show:{
                type: Boolean,
                required: false,
                default: false,
            },
            src: {
                type: String,
                required: false,
                default: ''
            }
        },
        data() {
            return {
                image: null,
            };
        },
        watch:{
            show:{
                handler( value ){
                    if(value){
                        FUtils.WindowUtils.disableBodyScroll();
                        return;
                    }
                    FUtils.WindowUtils.enableBodyScroll();
                },
                immediate: true
            }
        }
    }
</script>