export const Option={
    model:{
        prop: 'text',
        event: 'input'
    },
    props:{
        width: {
            type: String,
            required: false,
            default: 'auto',
        },
        height:{
            type: String,
            required: false,
            default: '18px'
        },
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
    computed:{
        inputStyle: function(){
            return {
                'width': this.width,
                'height': this.height
            };
        }
    },
    methods: {
        textChange: function(e){
            this.$emit('input',e.target.value)
        }
    }
};