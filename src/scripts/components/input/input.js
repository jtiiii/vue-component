const Text = resolve => require(['./text.vue'],resolve);
const File = resolve => require(['./file.vue'],resolve);
const Switch = resolve => require(['./switch/switch.vue'],resolve);

export default {
    Text,File,Switch
}