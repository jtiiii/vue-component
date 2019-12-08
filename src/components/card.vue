<template>
    <div class="card">
            <div class="cover">
                <img :src="cover" />
            </div>
            <div class="content">
                <slot></slot>
            </div>
    </div>
</template>

<script>
    export default {
        components:{
        },
        props: {
            cover:{
                type: String,
                required: false,
                default: '',
            }
        },
        data(){
            return {};
        }
    }
</script>

<style scoped>

</style>