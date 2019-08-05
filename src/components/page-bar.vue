<template>
    <div class="page-bar">
        <v-button class="first-btn" @click="goto(current - 1)" :size="size" :emotion="emotion" :disabled="first">&lt;</v-button>
        <div class="btn-list">
            <v-button class="number-btn" :emotion="emotion" :size="size"
                      v-show="preMore" @click="goto( current - length)" >...</v-button>
            <v-button class="number-btn" :emotion="emotion" :size="size"
                      v-show =" num <= all && num >= 1"
                      v-for="num in showPageArray" :key="num" :class="{pressed: current === num }"
                      @click="goto( num )"
            >{{ num }}</v-button>
            <v-button class="number-btn" :emotion="emotion" :size="size"
                      v-show="nextMore" @click="goto( current + length)" >...</v-button>
        </div>
        <v-button class="end-btn" :emotion="emotion" @click="goto(current + 1)" :disabled="end" :size="size" >&gt;</v-button>
    </div>
</template>
<script>
    import Button from './button.vue';
    import VueUtils from '../scripts/util/VueUtils';

    export default {
        name: 'v-page-bar',
        components:{
            'v-button': Button
        },
        props:{
            current:{
                type: Number,
                required: false,
                default: 1
            },
            all:{
                type: Number,
                required: false,
                default: 1
            },
            length:{
                type: Number,
                required: false,
                default: 6
            },
            emotion:VueUtils.props.emotion,
            size: VueUtils.props.size,
        },
        computed:{
            first(){
                return this.current === 1;
            },
            end(){
                return this.current === this.all;
            },
            nextMore(){
                return this.current < this.all - this.length/2;
            },
            preMore(){
                return this.current > this.length/2;
            },
            showLength(){
                return this.all >= this.length? this.length: this.all;
            },
            showPageArray(){
                let half = this.showLength / 2;
                let start = this.current - half;
                if(start < 1){
                    start = 1;
                }else if( start > this.all - this.showLength){
                    start = this.all - this.showLength;
                }
                let arr = [];
                for( let i = start; i <= start + this.showLength ; i++){
                    arr.push(i);
                }
                return arr;
            }
        },
        methods:{
            goto( num ){
                if(num > this.all){
                    num = this.all;
                }else if( num < 1){
                    num = 1;
                }
                this.$emit('goto', num);
            }
        }
    }

</script>
<style>
    @import url('../assets/styles/themes/bootstrap/page-bar.css');
</style>