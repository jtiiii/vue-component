const VueUtils = {
    directives:{
        outsideClick:{
            bind: function(el, binding, vnode){
                let documentHandle = function(e){
                    console.info(el.dataset);
                    console.info(vnode);
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
    }
};
export default VueUtils;