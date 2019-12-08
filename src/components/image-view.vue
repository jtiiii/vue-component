<template>
    <div class="image-view">
        <img :src="src">
    </div>
</template>
<script type="text/javascript">
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
        }
    }
</script>