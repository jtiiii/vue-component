import ArrayUtils from '../../util/ArrayUtils';

function Cell({area,html,data}){
    this.area = area;
    this.html = html;
    this.data = data;
}
Cell.prototype = {
    constructor: Cell,
    merge: function( cell ){
        this.area.merge(cell.area);
    }
};

function Area(left, right, top, bottom){
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
}

Area.prototype =  {
    constructor: Area,
    merge: function( area ){
        if(this.left - area.left > 0){
            this.left = area.left;
        }
        if(this.right - area.right < 0){
            this.right = area.right;
        }
        if(this.top - area.top > 0){
            this.top = area.top;
        }
        if(this.bottom - area.bottom < 0){
            this.bottom = area.bottom;
        }
    }
};

function Position(x,y){
    this.x = x;
    this.y = y;
}

function Table( cells ){
    this.cells = cells;
}
Table.prototype = {
    constructor: Table,
    merge: function( prePosition, lastPosition ){
        let cell1 = this.cells[prePosition.x][prePosition.y];
        let cell2 = this.cells[lastPosition.x][lastPosition.y];
        cell1.merge(cell2);
        for(let i = cell1.area.left ; i < cell1.area.right; i++){
            for( let j = cell1.area.top; j< cell1.area.bottom; j++){
                this.cells[i][j] = cell1;
            }
        }
    }
};

const Option = {
    created(){
        this.cells = ArrayUtils.dyadicArray(this.rows,this.cols);
        ArrayUtils.deepForEach(this.cells,
            (cell, level, index) =>{
            this.cells[level][index] = new Cell({
                area: new Area(index,index,level,level),
                html: '['+level+':'+index+']',
                data: undefined
            });
        });
        this.table = new Table(this.cells);
    },
    props: {
        rows: {
            type: Number,
            required: true
        },
        cols: {
            type: Number,
            required: true
        },
        cellWidth: {
            type: String,
            required: false,
            default: ''
        },
        cellHeight: {
            type: String,
            required: false,
            default: ''
        }
    },
    data(){
        return {
            cells: [],
            table: null,
        };
    },
    computed: {
        cellStyle: function(){
            return {
                'width': this.cellWidth || 'auto',
                'height': this.cellHeight || 'auto'
            };
        },
        rowStyle: function(){
            return {
                'height': this.cellHeight || 'auto'
            };
        }
    },
    methods: {
        // cellStyle: function( cell ){
        //
        // }
    }
};
export default Option;