import CommonStore from '../../store/Common';

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

function cellBinding( el, binding, vnode){
    let value = binding.value[1].format(binding.value[0]);
    if( typeof value === 'string' ){
        // vnode.text = value;
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
}

function cellUpdating( el, binding, vnode){
    let value = binding.value[1].format(binding.value[0]);
    if( typeof value === 'string' ){
        // vnode.text = value;
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
        if(el._cell_vue_){
            el._cell_vue_.$destroy();
        }
        el._cell_vue_ = value;
    }
}


const Option = {
    created(){
        this.tableTemp = this.createTable( this.list );

    },
    props: {
        type:{
            type: String,
            required: false,
            default: 'default',
            validator: function( value ){
                return ['default','info','success','warning','danger'].indexOf( value ) !== -1;
            }
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
            bind: cellBinding,
            update: cellUpdating,
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
            tableTemp: null
        };
    },
    watch:{
        list( value ){
            this.tableTemp = this.createTable( value );
        }
    },
    computed: {
        table:{
            get(){
                return this.tableTemp;
            },
            set( value ){
                this.tableTemp = value;
            }
        },
        style(){
            return CommonStore.state.style;
        },
        tableClass(){
            let tableClass = this.table.tableClass || {};
            tableClass['table-corner-'+this.style.corner] = true;
            tableClass['table-type-'+this.type] = true;
            return tableClass;
        }
    },
    methods: {
        rowClass(index, row){
            let rowClass = row? row.rowClass || {} : {};
            if(index % 2 === 1){
                rowClass['row-line'] = true;
            }
            return rowClass;
        },

        cellClass(index ,cell){
            let cellClass = cell
                ? cell.cellClass || {}
                : {};

            if(index === 0){
                cellClass['cell-first'] = true;
            }
            return cellClass;
        },
        formatCell( cell, row ){
            return cell instanceof Cell? cell.format( row ): '';
        },
        formatHeader( header ){
            return header instanceof Header? header.format(): '';
        },
        createTable( list ){
            return new Table({
                rows: list || [],
                headers: this.headers
            });
        }
    }
};
export default Option;