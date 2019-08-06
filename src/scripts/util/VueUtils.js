const VueUtils = {
    directives:{
        outsideClick:{
            bind: function(el, binding, vnode){
                let documentHandle = function(e){
                    if(el.contains(e.target)){
                        return false;
                    }
                    if(binding.expression && binding.value instanceof Function){
                        if(binding.modifiers.el){
                            binding.value(el);
                        }else{
                            binding.value(e);
                        }
                    }
                };
                el._outsideclick_ = documentHandle;
                document.addEventListener("click", documentHandle);
            },
            unbind: function (el) {
                document.removeEventListener("click", el._outsideclick_);
                delete el._outsideclick_;
            }
        }
    },
    props:{
        emotion:{
            type: String,
            required: false,
            default: 'default',
            validator: function( value ){
                return ['default','info','success','warning','danger'].indexOf( value ) !== -1;
            }
        },
        size:{
            type: String,
            required: false,
            default: 'medium',
            validator: function( size ){
                return ['unlimited','auto','smaller','small','medium','large','larger'].indexOf( size ) !== -1;
            }
        },
        position:{
            type: String,
            required: false,
            default: 'center',
            validator: function( position ){
                let arr = ['top','bottom','right','left','center','inside','outside'];
                return position.split("-").every( p => arr.includes(p));
            }
        },
    },
    computed:{
        // style(){
        //     return CommonStore.state.style;
        // },
        positionClass(){
            let result = {};
            let positions = this.position.split('-');
            positions.forEach( p => {
                result['position-'+p] = true;
            });
            if(this.position.includes('center')){
                if(this.position.includes('left')
                    || this.position.includes('right')){
                    result['position-verticalCenter'] = true;
                }else if( this.position.includes('top')
                    || this.position.includes('bottom')
                ){
                    result['position-alignCenter'] = true;
                }else{
                    result['position-alignCenter'] = true;
                    result['position-verticalCenter'] = true;
                }
            }
            return result;
        }
    },
    methods:{
        positionStyles( positionClass, width, height ){
            let result = {};
            if(positionClass['position-verticalCenter']) {
                result['margin-top'] = -height / 32 + 'rem';
            }
            if(positionClass['position-alignCenter']){
                result['margin-left'] = -width / 32 + 'rem';
            }
            return result;
        }
    }
};
export default VueUtils;