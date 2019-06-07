const Option = {
    props:{
        tabs: {
            type: Array,
            required: false,
            default : () => []
        }
    },
    methods:{
        click( tab ){
            this.$emit('a-click',tab);
        }
    }
};
export default Option;