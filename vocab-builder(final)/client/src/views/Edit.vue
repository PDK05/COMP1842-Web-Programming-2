<template>
  <div>
    <h1>Edit Word</h1>
    <form action="" @submit.prevent="onSubmit">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="united kingdom flag"></i> English</div>
        <input type="text" required v-model="word.english" />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="german flag"></i> German</div>
        <input type="text" required v-model="word.german" />
      </div>
      <br />
      <button class="ui primary button">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { editWord, viewWordById } from '@/helpers/api';

export default {
  name: "Edit",
  setup() {
    const word = ref("");
    const route = useRoute();
    const router = useRouter();

    onMounted(async () => {
      const result = await viewWordById(route.params.id);
      if (result === null) {
        alert("Failed to load word data. Please try again later.");
        word.value = {};
      } else {
        word.value = result;
      }
    });

    const onSubmit = async () => {
      const result = await editWord(route.params.id, word.value);

      if (result === null) {
        alert("Failed to update word. Please try again later.");
        return;
      }

      alert("Edit word successfully !");
      //auto redirect to word list page
      router.push('/words');
    };

    return {
      word,
      onSubmit,
    };
  }
};
</script>