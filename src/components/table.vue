<template>
    <div class="table" :class="tableClass">
        <div class="table-header">
            <div class="row">
                <div class="cell"
                     v-for="(header, index) in headers"
                     :key="index"
                >
                    <slot :name="'header-'+header"></slot>
                </div>
            </div>
        </div>
        <div class="table-body">
            <div class="row"
                 v-for="index in rowsSize"
                 :key="index"
                 :class="rowClass(index)"
            >
                <div class="cell"
                     v-for="header in headers"
                     :key="header+ '-'+ index"
                >
                    <slot :name="'row-'+header" :header="header" :index="index - 1"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VueUtils from '../scripts/util/VueUtils';
    export default {
        name: "v-table",
        props:{
            headers:{
                type: Array,
                required: false,
                default: () => []
            },
            rowsSize:{
                type: Number,
                required: false,
                default: 0
            },
            emotion: VueUtils.props.emotion
        },
        computed:{
            tableClass(){
                let result = {};
                result['emotion-'+this.emotion] = true;
                return result;
            }
        },
        methods:{
            rowClass( index ){
                let result = {};
                result['row-line'] = !Boolean(index % 2);
                return result;
            }
        }
    }
</script>

<style>
</style>