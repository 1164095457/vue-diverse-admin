<template>
	<div style="border: 1px solid #ccc; z-index: 99999">
		<!-- 工具栏 -->
		<Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" style="border-bottom: 1px solid #ccc" :mode="mode" />
		<!-- 编辑器 -->
		<Editor
			:defaultConfig="editorConfig"
			v-model="defaultHtml"
			@on-change="handleChange"
			style="height: 500px; overflow-y: hidden"
			:mode="mode"
			@on-created="handleCreated"
		/>
	</div>
</template>

<script setup>
import { onBeforeUnmount, shallowRef, reactive, toRefs } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

const props = defineProps({
	modelValue: {
		type: [String],
		default: ""
	}
});

const emit = defineEmits(["update:modelValue"]);

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

const state = reactive({
	toolbarConfig: {},
	editorConfig: {
		placeholder: "请输入内容...",
		MENU_CONF: {
			uploadImage: {
				// 自定义图片上传
			}
		}
	},
	defaultHtml: props.modelValue,
	mode: "default"
});

const { toolbarConfig, editorConfig, defaultHtml, mode } = toRefs(state);

const handleCreated = editor => {
	editorRef.value = editor; // 记录 editor 实例，重要！
};

function handleChange(editor) {
	emit("update:modelValue", editor.getHtml());
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
	const editor = editorRef.value;
	if (editor == null) return;
	editor.destroy();
});
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
