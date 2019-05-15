export const Option={
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
        }
    },
    data(){
        return {};
    },
    computed:{
        inputStyle: function(){
            return {
                'width': this.width,
                'height': this.height
            };
        }
    }
};