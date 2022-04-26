<script setup>
/*
    imports
*/
import { computed, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";

/*
    store
*/
const storeNotes = useStoreNotes();

/*
    props
*/
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/*
    emits
*/
const emit = defineEmits(["deleteClicked"]);

/*
    character length
*/
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

/*
    handle delete clicked
*/
const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};

/*
    modals
*/
const modals = reactive({
  deleteNote: false,
});
</script>

<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/edit-note/${note.id}`"
        href="#"
        class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>

    <ModalDeleteNote 
      v-if="modals.deleteNote" 
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>