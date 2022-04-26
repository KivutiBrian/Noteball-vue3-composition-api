<script setup>

/*
    imports
*/
import { ref } from '@vue/reactivity';
import { onMounted, onUnmounted } from '@vue/runtime-core';
import { onClickOutside } from '@vueuse/core'
import { useStoreNotes } from "@/stores/storeNotes.js";

/*
    store
*/
const storeNotes = useStoreNotes();

/*
props
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
      type: Number,
      required: true
  }
});

/*
emits
*/
const emit = defineEmits(['update:modelValue'])

/*
close modal
*/
const closeModal = () => {
  emit('update:modelValue', false)
};

/*
click outside
*/
const modalCardRef = ref(null)
onClickOutside(modalCardRef, closeModal)

/*
keyboard control
*/

const handleKeyboard = (event)=> {
    if(event.key === 'Escape') closeModal()
}

onMounted(()=>{
    document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(()=> {
    document.removeEventListener('keyup', handleKeyboard)
})




</script>


<template>
  <div class="modal is-active p-6">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note ID {{ noteId }}?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note ?
        <!-- <pre>{{ noteId }}</pre> -->
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click="storeNotes.deleteNote(noteId)" class="button is-danger">Delete</button>
        <button @click="closeModal" class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>