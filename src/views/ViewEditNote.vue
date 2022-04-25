<script setup>
/*
    imports
*/
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";

/*
    store
*/
const storeNotes = useStoreNotes();

/*
    route
*/
const route = useRoute();

/*
    router
*/
const router = useRouter();

/*
    note
*/
const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);

/*
    save clicked
*/
const handleSaveClicked = ()=>{
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
    
}


</script>

<template>
  <div class="edit">
    <AddEditNote
      v-model="noteContent"
      placeholder="Edit Note"
      label="Edit Note"
      bgColor="link"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button
              @click="$router.push('/')"
              class="button is-link is-light mr-3"
            >
              Cancel
            </button>
            <button
              @click="handleSaveClicked"
              class="button is-link has-background-link"
              :disabled="!noteContent"
            >
              Save Note
            </button>
          </div>
        </div>
      </template>
    </AddEditNote>
  </div>
</template>