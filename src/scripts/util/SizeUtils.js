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
    },
    zoom({width, height}, max, isMaxWidth){
        let scale = 0;
        let type=  isMaxWidth? 1: 0;
        if(isMaxWidth === undefined || isMaxWidth == null){
            type = 2;
        }
        switch(type){
            case 0:
                scale = max / height;
                break;
            case 1:
                scale = max / width;
                break;
            case 2:
                if(width >= height){
                    scale = max / width;
                    break;
                }
                scale = max / height;
                break;
            default:
                break;
        }
        return {width: width * scale, height: height * scale};
    }
};
export default SizeUtils;