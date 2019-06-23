<script>
    import Option from './navigator';
    export default Option;
</script>
<template>
    <nav :class="navClass">
        <a v-for="tab in items" :key="tab.key" :class="{ 'select': tab.select }" :href="tab.link" @click="click(tab)">{{ tab.text }}</a>
    </nav>
</template>
<style scoped>
    nav{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .nav-direction-row{
        flex-direction: row;
    }
    .nav-direction-column{
        flex-direction: column;
    }
    a{
        height: 1.5rem; /* 24px */
        text-decoration: none;
        font-weight: bolder;
        color: #999;
        font-size: 1.2rem; /* 19.2px  */
        padding: 0.375rem; /* 6px */
        cursor: pointer;
    }

    .nav-corner-circle > a{
        border-radius: 0.375rem;
    }
    .nav-corner-square > a{
        border-radius: 0;
    }

    .nav-direction-row > a.select{
        border-bottom: 0.25rem /* 4px */ solid #777;
        color: #000;
    }
    .nav-direction-column > a.select{
        background: #eee;
        color: #000;
    }

    @media screen and (min-width:480px){
        .nav-direction-column > a{
            /*border-radius: 0.375rem;*/
            line-height: 1.5rem; /* 24px */
        }

        .nav-direction-row > a{
            box-sizing: border-box;
            line-height: 0.5rem; /* 8px */
        }
        a:hover{
            background: #eeeeeeee;
            opacity: .7;
        }
        nav > a{
            margin: 0.375rem; /* 6px */
            background: #fff;
        }
    }

    @media screen and (max-width:480px){
        .nav-direction-column > a{
            height: 2rem; /* 32px */
            /*border-radius: 0.375rem;*/
            line-height: 1.5rem; /* 24px */
        }
        .nav-direction-row > a{
            box-sizing: border-box;
            line-height: 0.5rem; /* 8px */
        }
        nav{
            /*color: #fff;*/
        }
        nav > a{
            flex: 1;
            line-height: 2rem; /* 32px */
            font-size: 1rem; /* 16px */
            text-align: center;
            min-width: 5rem; /* 100px */
        }
        /*nav > a.select{*/
        /*    border-bottom: 0.25rem !* 4px *! solid #777;*/
        /*    color: #000;*/
        /*}*/
    }
</style>