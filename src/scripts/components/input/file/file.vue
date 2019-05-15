<script type="text/javascript">
    import {Option} from './file';

    export default Option;
</script>
<template>
    <div class="input-file">
        <input ref="uploadFile" @change="change" multiple hidden type="file" class="upload" :accept="accept" />
        <v-button :type="type" @click="click"><slot></slot></v-button>
    </div>
</template>
<style scoped>
    .input-file{
        display: inline-block;
    }
</style>