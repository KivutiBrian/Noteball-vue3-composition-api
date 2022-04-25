<script setup>

/*
    imports
*/
import { ref } from 'vue'

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
    default: "success"
  }
});

/*
    emits
*/
const emit = defineEmits(['update:modelValue'])

/*
    focus textarea
*/
const textareaRef = ref(null)

const focusTextArea = ()=>{
    textareaRef.value.focus()
}

defineExpose({
    focusTextArea
})

</script>

<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          ref="textareaRef"
          class="textarea"
          placeholder="Add new note"
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