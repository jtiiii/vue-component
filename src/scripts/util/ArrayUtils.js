const ArrayUtils = {
    dyadicArray: function(rows,cols){
        let arr = new Array(rows);
        for(let i= 0; i < rows; i++){
            arr[i] = new Array(cols);
            for(let j = 0; j< cols; j++){
                arr[i][j] = undefined;
            }
        }
        return arr;
    },
    deepForEach: function(arr, process, level){
        level = level || 0;
        arr.forEach( (item,index) => {
            if( item instanceof Array){
                ArrayUtils.deepForEach(item, process, index);
            }else{
                process(item,level,index);
            }
        });
    }
};
export default ArrayUtils;