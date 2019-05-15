const SizeUtils = {
    __unit__:['B','KB','MB','GB','TB','PB','EB','ZB','YB'],
    format( size ){
        if( !size ){
            return "0 KB";
        }
        let index = 0;
        let temp = size / 1024;
        let result = size +' '+ this.__unit__[index];
        while(temp >= 1){
            index ++;
            result = temp.toFixed(2) +' '+ this.__unit__[index];
            temp = temp / 1024;
        }
        return result;
    }
};
export default SizeUtils;