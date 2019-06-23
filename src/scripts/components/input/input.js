const Text = resolve => require(['./text/text.vue'],resolve);
const File = resolve => require(['./file/file.vue'],resolve);
const Switch = resolve => require(['./switch/switch.vue'],resolve);

export default {
    Text,File,Switch
}