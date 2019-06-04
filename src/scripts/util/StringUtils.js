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
    },
    toByteArrayWithUtf8(str){
        let bytes = [];
        let len, c;
        len = str.length;
        for(let i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if(c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if(c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if(c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            } else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;
    },
    getLength(str){
        return this.toByteArrayWithUtf8(str).length;
    }
};

export default StringUtils;