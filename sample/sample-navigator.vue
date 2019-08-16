<template>
    <div>
        <div>
            <v-button :size="'small'" @click="type = 'default'"> default</v-button>
            <v-button :size="'small'" :emotion="'warning'" @click="type = 'warning'">warning</v-button>
            <v-button :size="'small'" :emotion="'danger'" @click="type = 'danger'">danger</v-button>
            <v-button :size="'small'" :emotion="'success'" @click="type = 'success'">success</v-button>
            <v-button :size="'small'" :emotion="'info'" @click="type = 'info'">info</v-button>
        </div>
        <br/>
        <v-navigator
                :length="length"
                :selects="select"
                :emotion="type"
                @click="changeTab"
        >
            <template #item="{ index }">
                {{ list[index] }}
            </template>
        </v-navigator>

        <br/>

        <v-navigator
                :length="length"
                :selects="select"
                :emotion="type"
                :direction="'column'"
                @click="changeTab"
        >
            <template #item="{ index }">
                {{ list[index] }}
            </template>
        </v-navigator>
    </div>
</template>

<script>
    import FComponents from '../src/vue-components';

    export default {
        name: "sample-navigator",
        components:{
            'v-navigator': FComponents.Navigator,
            'v-button': FComponents.Button,
        },
        data(){
            return {
                list:['测试1', '测试2', '测试3', '测试4'],
                type: 'default',
                select: [2]
            };
        },
        computed:{
            length(){
                return this.list.length;
            }
        },
        methods:{
            changeTab( index ){
                this.select.shift();
                this.select.push(index);
            }
        }
    }
</script>

<style scoped>

</style>