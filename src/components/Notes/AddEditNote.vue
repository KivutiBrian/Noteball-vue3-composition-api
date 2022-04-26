<script setup>
/*
    imports
*/
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus.js"

/*
    props
*/
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

/*
    emits
*/
const emit = defineEmits(["update:modelValue"]);

/*
    focus textarea
*/
const textareaRef = ref(null);

const focusTextArea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextArea,
});

/*
    directives
*/
// const vAutofocus = {
//   mounted : (el) => {
//     el.focus()
//   }
// }


</script>

<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <div class="field">
      <label v-if="label" class="label has-text-white">{{ label }}</label>
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          ref="textareaRef"
          class="textarea"
          :placeholder="placeholder"
          v-autofocus
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>