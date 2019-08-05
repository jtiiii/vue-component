<template>
    <div class="nav-box">
        <nav class="nav" :class="navClass">
            <a class="item"
               v-for="index in length"
               :active="isActive(index - 1)"
               @click="$emit('click', index - 1)"
            >
                <slot name="item" :index="index - 1"></slot>
            </a>
        </nav>
    </div>
</template>

<script>
    import VueUtils from '../scripts/util/VueUtils';

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
    @import url('../assets/styles/themes/bootstrap/navigator.css');
</style>