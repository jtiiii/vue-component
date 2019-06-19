
class Table{
    constructor({ rows = [], headers , style, tableClass }){
        this.rows = rows.map( row => {
            let nRow = new Row(row,row);
            nRow.settCellByHeader(headers);
            return nRow;
        });
        // this.rows.forEach( ( row, index ) => {row.index = index;});
        this.style = style;
        this.tableClass = tableClass;
        this.headers = headers.map( header => new Header(header));
        this._data = arguments[0];
    }

    get(){
        return this._data;
    }
}

class Header {
    constructor({column, formatter , style, headerClass, columnFormatter , hidden = false }){
        this.column = column;
        this.formatter = formatter;
        this.style = style;
        this.headerClass = headerClass;
        this.columnFormatter = columnFormatter;
        this.hidden = hidden;
        this._data = arguments[0];
    }

    format(){
        if(this.formatter && typeof this.formatter === 'function'){
            return this.formatter( this._data );
        }
        return this.column;
    }

    get(){
        return this._data;
    }
}

class Row{
    constructor({ style, rowClass, hidden = false }){
        this.cells = {};

        this.style = style;
        this.rowClass = rowClass;
        this.hidden = hidden;
        this.data = arguments[0];
    }

    settCellByHeader( headers ){
        headers.forEach( header => {
            this.cells[header.column] = new Cell(this.data[header.column],{ columnFormatter: header.columnFormatter});
        });
    }

    get(){
        return this.data;
    }
}

class Cell{
    constructor(data,{ formatter , style, cellClass , columnFormatter }){
        this.formatter = formatter;
        this.style = style;
        this.cellClass = cellClass;
        this.data = data;
        this.columnFormatter = columnFormatter;
    }

    format(row){
        if(this.formatter && typeof this.formatter === 'function'){
            return this.formatter( this.data, row, this );
        }
        if(this.columnFormatter && typeof this.columnFormatter === 'function'){
            return this.columnFormatter( this.data, row, this );
        }
        if(this.data === undefined || this.data === null){
            return '';
        }
        return this.data.toString();
    }

    get(){
        return this.data;
    }
}


const Option = {
    created(){
        // this.createTable();

    },
    props: {
        option:{
            type: Object,
            required: false,
            default: null,
        },
        headers:{
            type: Array,
            required: false,
            default: null
        },
        list:{
            type: Array,
            required: false,
            default: null
        }
    },
    directives:{
        'cell': {
            bind(el, binding, vnode){
                let value = binding.value[1].format(binding.value[0]);
                if( typeof value === 'string' ){
                    el.innerHTML = value;
                }
                //判断是否为为vue对象
                else if( value && value._isVue ){
                    //创建一个新的div来挂载回传的vue对象
                    let node = document.createElement('div');
                    el.appendChild( node );
                    //将Vue对象挂载到node节点上
                    value.$mount(node);
                    //互相赋予父子值
                    value.$parent = vnode.context;
                    vnode.context.$children.push(value);
                    //将vue对象绑定到el上
                    el._cell_vue_ = value;
                }
            },
            unbind(el){
                //解绑的时候销毁vue对象
                if(el._cell_vue_){
                    el._cell_vue_.$destroy();
                }
            }
        }
    },
    data(){
        return {
            // table: null
        };
    },
    computed: {
        table(){
            return new Table({
                rows: this.list || [],
                headers: this.headers
            });
        }
    },
    methods: {
        createTable(){
            this.table = new Table({
                rows: this.list || [],
                headers: this.headers
            });
        },
        cellClass(index ,cell){
            let cellClass = cell? cell.cellClass : undefined;
            let first = {'cell-first': true};
            let notFirst = {'cell-notFirst': true};
            if(index !== 0){
                return Object.assign( notFirst, cellClass);
            }
            return Object.assign( first, cellClass);
        },
        formatCell( cell, row ){
            return cell instanceof Cell? cell.format( row ): '';
        },
        formatHeader( header ){
            return header instanceof Header? header.format(): '';
        }
    }
};
export default Option;