<script setup>
/*
    imports
*/
import { ref} from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import { useWatchCharacters } from "@/use/useWatchCharacters.js"
/*
    store
*/
const storeNotes = useStoreNotes();

/*

    Notes
*/
const newNote = ref("");
const addEditNoteRef = ref(null)

const notes = ref([
  {
    id: 1,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi porro officiis minus maxime asperiores, veniam quidem dolorem ut quas distinctio consequatur commodi. Nulla quibusdam, dolore est ipsa repellat minus eos?",
  },
  {
    id: 2,
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi porro officiis minus maxime asperiores, veniam quidem dolorem ut quas distinctio consequatur commodi. Nulla quibusdam, dolore est ipsa repellat minus eos?",
  },
]);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextArea()
};

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => note.id != idToDelete);
};

/*

    Watch characters
*/
useWatchCharacters(newNote)


</script>

<template>
  <div class="notes">
    <AddEditNote v-model="newNote" placeholder="Add New Note" ref="addEditNoteRef">
      <template #buttons>
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button
              :disabled="!newNote"
              @click="addNote"
              class="button is-link has-background-success"
            >
              Add New Note
            </button>
          </div>
        </div>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>