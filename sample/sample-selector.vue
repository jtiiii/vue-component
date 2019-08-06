<template>
    <div>
        <selector :size="'small'"
                  :emotion="'warning'"
                  :selects="selects"
                  :text="selectedText"
                  :length="length"
                  v-model="listShow"
                  @itemClick="select"
        >
            <template #button>
                <v-button class="selector-button" :emotion="'warning'">{{selectedText}} <i class="v-iconfont v-icon-down" ></i></v-button>
            </template>
            <template #item="{index}">
                {{ list[index].text }}
            </template>
        </selector>
    </div>
</template>

<script>
    import Selector from '../src/components/selector.vue';
    import Button from '../src/components/button.vue';

    let list = [
        {text:'123'},
        {text: 'sdfsdf'}
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
            'selector': Selector,
            'v-button': Button
        },
        computed:{
            length(){
                return this.list.length;
            },
            selectedText(){
                return this.list[this.selects[0]].text;
            }
        },
        methods:{
            select( index ){
                console.info(index);
                this.selects.pop();
                this.selects.push(index);
                this.listShow = false;

            }
        }
    }
</script>

<style scoped>
    .selector-button{
        min-width: 6rem;
    }
</style>