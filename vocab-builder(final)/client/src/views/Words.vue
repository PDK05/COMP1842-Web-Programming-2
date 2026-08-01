<!-- <script setup lang="ts">
import router from '@/router';

</script> -->

<!-- <template>
  <div class="words">
    <h1>Words List</h1>
  </div>
</template>

<script>
export default {
  name: 'Words'
}
</script> -->

<template>
  <div>
    <h1>Word List</h1>

    <table class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th>Show</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, index) in words" :key="index">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
          <td width="75">
            <router-link
              class="ui button green"
              :to="{ name: 'Show', params: { id: word._id } }"
              >Show</router-link
            >
          </td>
          <td width="75">
            <router-link
              class="ui button yellow"
              :to="{ name: 'Edit', params: {id: word._id } }"
              >Edit</router-link
            >
          </td>
          <td width="75">
            <a @click.prevent="onDelete(word._id)" class="ui red button"
              >Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { viewAllWords, deleteWord } from "../helpers/api";
// import Swal from 'sweetalert2'

export default {
  name: 'Words',
  setup() {
    const words = ref([]);

    const loadWords = async () => {
      const data = await viewAllWords();
      if (data) {
        words.value = data;
      }
    };

    const onDelete = async (id) => {
      if (confirm('Delete this word?')) {
        const result = await deleteWord(id);
        if (result) {
          alert('Word deleted successfully!');
          await loadWords();
        } else {
          alert('Failed to delete!');
        }
      }
    };

    onMounted(async () => {
      await loadWords();
    });

    return {
      words,
      onDelete
    };
  }
};
</script>


<!-- <template></template>
<script></script> -->