<template>
    <div class="nav-box">
        <nav class="nav" :class="navClass">
            <a class="item"
               v-for="index in length"
               :active="isActive(index)"
               @click="$emit('click', index)"
            >
                <slot name="item" :index="index - 1"></slot>
            </a>
        </nav>
    </div>
</template>

<script>
    import VueUtils from '../util/VueUtils';

    export default {
        name: "v-navigator",
        props:{
            length:{
                type: Number,
                required: false,
                default: 0
            },
            selects:{
                type: Array,
                required: false,
                default: () => []
            },
            direction:{
                type: String,
                required: false,
                default: 'row',
                validator( value ){
                    return ['row', 'column'].includes(value);
                }
            },
            emotion: VueUtils.props.emotion
        },
        computed:{
            navClass(){
                let result={};
                result['direction-'+this.direction] = true;
                result['emotion-'+this.emotion] = true;
                return result;
            }
        },
        methods:{
            isActive( index ){
                return this.selects.includes(index);
            }
        }
    }
</script>

<style>
    @import url('../../styles/themes/bootstrap/navigator.css');
</style>