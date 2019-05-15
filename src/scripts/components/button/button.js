const Option = {
    name: 'v-button',
    props: {
        width:{
            type: String,
            required: false,
            default: 'auto',
        },
        height:{
            type: String,
            required: false,
            default: '35px'
        },
        type:{
            type: String,
            required: false,
            default: 'default',
            validator: function( value ){
                return ['default','info','success','warning','danger'].indexOf( value ) !== -1;
            }
        }
    },
    data(){
        return { };
    },
    computed: {
        buttonStyle: function(){
            return {
                'width': this.width,
                'height': this.height
            };
        },
        typeClass: function(){
            switch (this.type) {
                case 'success': return { 'button-success': true };
                case 'info': return { 'button-info': true };
                case 'warning': return { 'button-warning': true };
                case 'danger': return {'button-danger': true};
                default: return {'button-default': true};
            }
        }
    },
    methods:{
        click: function(){
            this.$emit('click',this);
        },
    }
};
export {Option};