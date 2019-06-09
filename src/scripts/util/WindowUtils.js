const WindowUtils = {
    inWindow: true,
    onresize( foo ){
        this.__handlers__.onresize.push(foo);
    },
    __handlers__:{
        onresize:[],
    },
    __initHandlers__(){
        if(this.inWindow){
            Object.keys(this.__handlersInitial__).forEach(init => this.__handlersInitial__[init]());
        }
    },
    __handlersInitial__:{
        onresize(){
            window.onresize = function(){
                WindowUtils.__handlers__.onresize.forEach( handler => {
                    new Promise( resolve => {
                        resolve( handler);
                    }).then( handler => {
                        handler();
                    }).catch( error => {
                        handler(error);
                    });
                });
            };
        },
    }
};
((global,factory) => {
    if(typeof module === 'object' && typeof module.exports === 'object' ){
        //当为commonjs（node）的环境时候
        module.exports = factory(global,true);
    }else{
        //不然为浏览器环境下
        factory(global);
    }
})(typeof window !== 'undefined' ? window : this,function(window,isGlobal){
    WindowUtils.inWindow = !isGlobal;
    WindowUtils.__initHandlers__();
});




export default WindowUtils;