<template>
    <div>
        <v-table :list="list" :headers="headers" ></v-table>
    </div>
</template>
<script>
    import Table from '../../src/scripts/components/table/table.vue';
    import FComponents from '../../src/main';

    import Vue from 'vue';

    function defaultFormatter( data ){
        return data.text;
    }
    let headers = [
        {column: 'id', text: '用户ID', formatter: defaultFormatter },
        {column: 'username', text:'用户名', formatter: defaultFormatter},
        {column: 'admin', text: '是否为管理员', formatter: defaultFormatter,
            columnFormatter: ( data, row, cell ) => {
                // let node = document.createElement('div');
                FComponents.Button( ( c ) => {
                    console.info(c);
                });
                // return FComponents.Button
                return new Vue({
                    name: 'cell',
                    render( createElement ){
                        return createElement(FComponents.Button,{
                            domProps:{
                                innerHTML: 'test'
                            }
                        });
                    }
                });
                // return FComponents.Button;
            }},
        {column: 'company', text: '公司信息', formatter: defaultFormatter},
        {column: 'personnel', text: '人员信息', formatter: defaultFormatter}
    ];
    let sample = {
        "content": [
            {
                "id": 32,
                "username": "test-test",
                "password": "$2a$10$dO04BbS.sumObxOCd/bGZe/3TQt2ATKOWYFzwfQiqQPdw0lvX8p.2",
                "status": 1,
                "userExtension": {
                    "userId": 32,
                    "apiLimit": -1,
                    "admin": 1,
                    "companyId": 30,
                    "personnelId": 31
                },
                "company": {
                    "id": 30,
                    "fullName": "天宫蟠桃公司",
                    "simpleName": "天蟠",
                    "representative": "未知",
                    "businessType": "挖煤的",
                    "address": "天晶石",
                    "telephone": "12312434",
                    "creditCode": "xcvsdfsdfsdf",
                    "bank": "银河银行",
                    "bankAccount": "Milky-Way-1123x",
                    "status": 1
                },
                "personnel": {
                    "id": 31,
                    "name": "瓜娃子",
                    "idCard": "123123123",
                    "job": "测试职位",
                    "telephone": "1223312312312",
                    "email": "sdfsdf@123123",
                    "qq": "123123",
                    "status": 1
                }
            }
        ],
        "pageable": {
            "sort": {
                "unsorted": true,
                "sorted": false,
                "empty": true
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 10,
            "paged": true,
            "unpaged": false
        },
        "totalElements": 1,
        "totalPages": 1,
        "last": true,
        "size": 10,
        "number": 0,
        "sort": {
            "unsorted": true,
            "sorted": false,
            "empty": true
        },
        "first": true,
        "numberOfElements": 1,
        "empty": false
    };
    export default {
        components:{
            'v-table': Table
        },
        data(){
            return {
                listSample: [],
                headersSample: []
            };
        },
        computed:{
            list(){
                return this.listSample;
            },
            headers(){
                return this.headersSample;
            }
        },
        mounted(){
            this.listSample = sample.content;
            this.headersSample = headers;
        },
        methods: {

        }
    };
</script>
<style scoped>

</style>