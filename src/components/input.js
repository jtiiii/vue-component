const Text = resolve => require(['./input/text.vue'],resolve);
const File = resolve => require(['./input/file.vue'],resolve);
const Switch = resolve => require(['./input/switch.vue'],resolve);

export default {
    Text,File,Switch
}