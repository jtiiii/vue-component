export const Option={
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
            type: String,
            required: false,
            default: ''
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