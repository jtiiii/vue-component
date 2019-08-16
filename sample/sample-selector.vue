<template>
    <div>
        <selector :size="'small'"
                  :emotion="'warning'"
                  :selects="selects"
                  :length="length"
                  :listShow="listShow"
                  @openOrClose="openOrClose"
                  @itemClick="select"
        >
            <v-button class="selector-button" :emotion="'success'" @click="listShow=true" >{{ selectedText }}</v-button>
            <template #item="{index}">
                {{ list[index].text }}
            </template>
        </selector>
    </div>
</template>

<script>
    import FComponents from '../src/vue-components';

    let list = [
        {text:'测试1'},
        {text: '测试2'}
    ];

    export default {
        name:"sample-selector",
        data(){
            return {
                list: list,
                selects: [0],
                listShow: false,
            };
        },
        components:{
            'selector': FComponents.Selector,
            'v-button': FComponents.Button
        },
        computed:{
            length(){
                return this.list.length;
            },
            selectedText(){
                return this.list[this.selects[0]].text;
            }
        },
        watch:{
            listShow( nv ){
                console.log('list-show: ', nv);
            }
        },
        methods:{
            select( index ){
                console.info(index);
                this.selects.pop();
                this.selects.push(index);
                this.listShow = false;

            },
            openOrClose( flag ){
                console.info(flag);
                this.listShow = flag;
            }
        }
    }
</script>

<style scoped>
    .selector-button{
        min-width: 6rem;
    }
</style>