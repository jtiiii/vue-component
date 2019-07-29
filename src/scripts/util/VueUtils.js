import CommonStore from '../store/Common';

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
                let arr = ['top','bottom','right','left','center','under','above'];
                return position.split("-").every( p => arr.includes(p));
            }
        },
    },
    computed:{
        style(){
            return CommonStore.state.style;
        }
    }
};
export default VueUtils;