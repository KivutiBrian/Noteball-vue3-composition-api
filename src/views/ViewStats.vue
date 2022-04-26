<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import { vAutofocus } from "@/directives/vAutofocus.js";
import { useWatchCharacters } from "@/use/useWatchCharacters.js";

/*
    store
*/
const storeNotes = useStoreNotes();

/*
    love noteballs
*/
const loveNoteballs = ref("");
useWatchCharacters(loveNoteballs, 10);
</script>


<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character</td>
          <td>{{ storeNotes.totalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>

    <input
      v-model="loveNoteballs"
      type="text"
      class="input"
      placeholder="Do you love noteballs?"
      v-autofocus
    />
  </div>
</template>