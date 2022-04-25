<script setup>

/*
    imports
*/
import { ref } from "vue"
import AddEditNote from "@/components/Notes/AddEditNote.vue";

/*
    note
*/
const noteContent = ref("")


</script>

<template>
  <div class="edit">
    <AddEditNote v-model="noteContent" placeholder="Edit Note" label="Edit Note" bgColor="link"  ref="addEditNoteRef">
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