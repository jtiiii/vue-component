<script>
    import Option from './navigator';

    export default Option;
</script>
<template>
    <nav>
        <a v-for="tab in items" :class="{ 'select': tab.select }" :href="tab.link" @click="click(tab)">{{ tab.text }}</a>
    </nav>
</template>
<style scoped>
    nav{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
    }
    a{
        text-decoration: none;
        color: #000;
        font-size: 1.2rem; /* 19.2px  */
        padding: 0.375rem; /* 6px */
        cursor: pointer;
    }
    a:hover{
        opacity: .7;
    }

    @media screen and (min-width:480px){
        nav > a{
            margin: 0.375rem; /* 6px */
            border-radius: 0.375rem;
            background: #eee;
        }
    }

    @media screen and (max-width:480px){
        nav{
            /*color: #fff;*/
        }
        nav > a{
            flex: 1;
            box-sizing: border-box;
            height: 2.5rem; /* 40px */
            line-height: 2.25rem; /* 36px */
            font-size: 1rem; /* 16px */
            font-weight: bolder;
            text-align: center;
            text-decoration: none;
            min-width: 5rem; /* 100px */
            color: #999;
        }
        nav > a.select{
            border-bottom: 0.25rem /* 4px */ solid #777;
            color: #000;
        }
    }
</style>