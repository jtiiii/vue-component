<template>
    <div class="input-text" :class="componentClass">
        <label v-if="label">{{ label }}</label>
        <input :value="text"
               :placeholder="placeholder"
               :type ="type"
               @input="textChange"
               @keydown="$emit('keydown')"
               @keyup="keyup"
               @keypress="$emit('keypress')"
               @focusout="$emit('focusout')"
               @focusin="$emit('focusin')"
        />
    </div>
</template>
<script>
    import VueUtils from '../../util/VueUtils';

    export default {
        name: 'input-text',
        model:{
            prop: 'text',
            event: 'input'
        },
        props:{
            placeholder:{
                type: String,
                required: false,
                default: ''
            },
            text:{
                type: [String, Number],
                required: false,
                default: ''
            },
            label:{
                type: String,
                required: false,
                default: '',
            },
            type:{
                type: String,
                required: false,
                default: 'text',
                validator( value ){
                    return ['text','password'].includes(value);
                }
            },
            emotion: VueUtils.props.emotion,
            labelPosition:{
                type: String,
                required: false,
                default: 'left',
                validator( value ){
                    return  ['left', 'top', 'right', 'bottom'].includes(value);
                }
            }
        },
        data(){
            return {};
        },
        watch:{
            'text': function( value ){
                this.$emit('change', value);
            }
        },
        computed:{
            componentClass(){
                let result = {};
                result['emotion-' + this.emotion] = true;
                result['position-' + this.labelPosition] = true
                return result;
            }
        },
        methods: {
            textChange: function(e){
                this.$emit('input',e.target.value)
            },
            keyup(e){
                if(e.key === 'Enter'){
                    this.$emit('enter');
                }
                this.$emit('keyup');
            }
        }
    };
</script>
<style>
    @import url('../../../styles/themes/bootstrap/input-text.css');
</style>