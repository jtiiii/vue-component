<template>
    <div class="page-bar">
        <v-button class="first-btn" @click="goto(current - 1)" :type="type" :disabled="first" :size="'small'"> < </v-button>

        <div class="btn-list">
            <v-button class="number-btn" :type="type" :size="'small'"
                      v-show="preMore" @click="goto( current - length)" >...</v-button>
            <v-button class="number-btn" :type="type" :size="'small'"
                      v-show =" num <= all && num >= 1"
                      v-for="num in showPageArray" :key="num" :pressed="current === num"
                      @click="goto( num )"
            >{{ num }}</v-button>
            <v-button class="number-btn" :type="type" :size="'small'"
                      v-show="nextMore" @click="goto( current + length)" >...</v-button>
        </div>

        <v-button class="end-btn" :type="type" @click="goto(current + 1)" :disabled="end" :size="'small'" > > </v-button>
    </div>
</template>
<script>
    import Button from '../../button/button.vue';

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
            type:{
                type: String,
                required: false,
                default: 'default'
            }
        },
        computed:{
            first(){
                return this.current === 1;
            },
            end(){
                return this.current === this.all;
            },
            nextMore(){
                return this.current < this.all - this.showLength/2;
            },
            preMore(){
                return this.current > this.showLength/2;
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
                // let end = start + this.showLength;
                let arr = [];
                for( let i = start; i <= start + this.showLength ; i++){
                    arr.push(i);
                }
                return arr;
            }
        },
        methods:{
            goto( num ){
                console.log('goto',num);
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
    .page-bar{
        display: flex;
        flex-flow: row wrap;
    }
    .btn-list{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }
    .btn-list .number-btn{
        flex:1;
        margin: 0;
        width: 2.25rem;
        max-height: 2.25rem;
    }
    .first-btn{
        width: 2.25rem;
        height: 2.25rem;
    }
    .end-btn{
        width: 2.25rem;
        height: 2.25rem;
    }
</style>