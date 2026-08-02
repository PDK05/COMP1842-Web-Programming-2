<template>
  <div>
    <h1>Show Word</h1>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i>
        English
      </div>
      <input type="text" disabled :value="word.english" />
    </div>
    <br>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i>
        German
      </div>
      <input type="text" disabled :value="word.german" />
    </div>
    <br>
    <div>
      <router-link :to="{ name: 'Edit', params: { id: route.params.id } }"
        class="ui yellow button"
      >
        Edit word
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { viewWordById } from '@/helpers/api';

export default {
  name: "Show",
  setup() {
    const word = ref("");
    const route = useRoute();

    onMounted(async () => {
      word.value = (await viewWordById(route.params.id)) || "";
    });

    return {
      word,
      route,
    };
  },
};
</script>