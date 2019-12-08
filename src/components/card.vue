<template>
    <div class="card" :class="cardClass">
            <div class="cover">
                <img :alt="coverText" :src="cover" />
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
            flow:{
                type: String,
                required: false,
                default: 'row'
            },
            coverText:{
                type: String,
                required: false,
                default: '',
            },
            cover:{
                type: String,
                required: false,
                default: '',
            }
        },
        data(){
            return {};
        },
        computed:{
            cardClass(){
                let isRow = this.flow === 'row';
                return {
                    "row": isRow,
                    "column": !isRow
                };
            }
        }
    }
</script>

<style scoped>

</style>