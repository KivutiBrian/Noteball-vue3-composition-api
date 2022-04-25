<script setup>

/*
    imports
*/
import { ref } from "vue"
import AddEditNote from "@/components/Notes/AddEditNote.vue";

/*
    note
*/
const note = ref("")


</script>

<template>
  <div class="edit">
    <AddEditNote v-model="note"  ref="addEditNoteRef">
      <template #buttons>
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button
              class="button is-link has-background-success"
            >
              Save Note
            </button>
          </div>
        </div>
      </template>
    </AddEditNote>
  </div>
</template>