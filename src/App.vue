<template>
  <div id="app">
    <sample-hint id="hint" />
    <hr/>
    <sample-input id="input" />
    <hr/>
    <sample-loading id="loading" />
    <hr/>
    <sample-navigator id="navigator" />
    <hr/>
    <sample-button id="button" />
    <hr/>
    <sample-panel id="panel" />
    <hr/>
    <sample-modal id="modal" />
    <hr/>
    <sample-thumbnail id="thumbnail" />
    <hr/>
    <sample-page-bar id="page-bar" />
    <hr/>
    <sample-dropdown id="dropdown" />
    <hr/>
    <sample-selector id="selector" />
    <hr/>
    <sample-upload-image id="upload-image" />
    <hr/>
    <sample-tree id="tree" />
    <hr/>
    <sample-table id="table" />
    <hr/>
    <sample-quill id="quill" />
    <hr/>
    <sample-cover id="cover" />
    <hr/>
    <sample-card id="card" />
    <hr/>
  </div>
</template>

<script>
  import SampleHint from '../sample/sample-hint.vue';
  import SampleInput from '../sample/sample-input.vue';
  import SampleNavigator from '../sample/sample-navigator.vue';
  import SamplePageBar from '../sample/sample-page-bar.vue';
  import SampleLoading from '../sample/sample-loading.vue';
  // import SampleSearch from '../sample/sample-search.vue';
  import SampleButton from '../sample/sample-button.vue';
  import SamplePanel from '../sample/sample-panel.vue';
  import SampleModal from '../sample/sample-modal.vue';
  import SampleThumbnail from '../sample/sample-thumbnail.vue';
  import SampleDropdown from '../sample/sample-dropdown.vue';
  import SampleSelector from '../sample/sample-selector.vue';
  import SampleUploadImage from '../sample/sample-upload-image.vue';
  import SampleTree from '../sample/sample-tree.vue';
  import SampleTable from '../sample/sample-table.vue';
  import SampleQuill from '../sample/sample-quill.vue';
  import SampleCover from '../sample/sample-cover.vue';
  import SampleCard from '../sample/sample-card.vue';

  export default {
  name: 'app',
  components: {
    SampleHint,
    SampleInput,
    SampleNavigator,
    SamplePageBar,
    SampleCard,
    // SampleSearch,
    SampleButton,
    SamplePanel,
    SampleModal,
    SampleThumbnail,
    SampleDropdown,
    SampleSelector,
    SampleUploadImage,
    SampleTree,
    SampleTable,
    SampleQuill,
    SampleCover,
    SampleLoading,
  }
}
</script>

<style>
  @import url("vue-components.css");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif, alibaba;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #app > div{
    min-height: 10rem;
  }
  hr{
    margin-top: 10px;
    clear: both;
  }

  @font-face {
    font-family: 'alibaba';
    font-display: swap;
    src: url('//at.alicdn.com/t/webfont_vqswb7vrm5l.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/webfont_vqswb7vrm5l.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('//at.alicdn.com/t/webfont_vqswb7vrm5l.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_vqswb7vrm5l.woff') format('woff'), /* chrome、firefox */
    url('//at.alicdn.com/t/webfont_vqswb7vrm5l.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/webfont_vqswb7vrm5l.svg#Alibaba-PuHuiTi-Regular') format('svg'); /* iOS 4.1- */
  }
</style>
