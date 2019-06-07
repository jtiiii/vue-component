<script>
    import Option from './navigator';

    export default Option;
</script>
<template>
    <nav>
        <a v-for="tab in tabs" :href="tab.link" @click="click(tab)">{{ tab.text }}</a>
    </nav>
</template>
<style scoped>
    nav{
        width: 100%;
    }
    a{
        display: inline-block;
        text-decoration: none;
        color: #000;
        border-radius: 0.375rem;
        font-size: 1.5rem; /* 24px  */
        background: #eee;
        padding: 0.375rem; /* 6px */
        margin: 0.375rem; /* 6px */
        cursor: pointer;
    }
    a:hover{
        opacity: .7;
    }

    @media screen and (max-width:480px){
        nav{
            /*color: #fff;*/
        }
        nav > a{
            width: 6.25rem; /* 100px */
            font-weight: bolder;
            text-align: center;
            text-decoration: none;
        }
    }
</style>