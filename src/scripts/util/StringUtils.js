const StringUtils = {
    __getRegExp__: () => new RegExp("{[0-9]+}","g"),
    format( str , args){
        let temp = null;
        let result = str;
        let regExp = this.__getRegExp__();
        do{
            temp = regExp.exec(str);
            if(temp == null){
                break;
            }
            temp = temp[0];
            let position = Number(temp.substr(1,temp.length - 2));
            result = result.replace(temp,args[position])
        }while ( true ) ;
        return result;
    },
    fixLength( str, length ,join, left ) {
        if (!join) {
            join = '';
        }
        let temp = new Array(length).join(join);
        let result = left? str+ temp : temp + str;
        return left?
            result.substring(0,length):
            result.slice(-length);
    },
    isString( obj ){
        return typeof obj === 'string' && obj.constructor === String;
    }
};

export default StringUtils;