<template>
  <div>
    <h1>Flash Cards</h1>

    <div class="ui stackable grid">
      <div class="row">
        <div class="sixteen wide column">
          <router-link to="/words" class="ui button basic">
            <i class="arrow left icon"></i> Back to Words
          </router-link>
        </div>
      </div>

      <div class="row" v-if="words.length === 0">
        <div class="sixteen wide column">
          <div class="ui info message">
            <div class="header">No words available</div>
            <p>Add some words first, then return here to study them.</p>
          </div>
        </div>
      </div>

      <div class="row" v-else>
        <div class="sixteen wide column">
          <div class="ui centered card" style="max-width: 600px; width: 100%; margin: 0 auto;">
            <div class="content">
              <div class="header">Card {{ currentIndex + 1 }} / {{ words.length }}</div>
              <div class="meta">Click the card or Flip to turn it over</div>
            </div>
            <div class="content flashcard-wrapper">
              <div class="flip-card" @click="flipCard">
                <div :class="['flip-card-inner', { flipped: showBack, 'no-transition': !transitionEnabled }]">
                  <div class="flip-card-face flip-card-front">
                    <div class="card-content">
                      <h2>{{ currentWord?.english }}</h2>
                      <div class="sub-label">English</div>
                    </div>
                  </div>
                  <div class="flip-card-face flip-card-back">
                    <div class="card-content">
                      <h2>{{ currentWord?.german }}</h2>
                      <div class="sub-label">German</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="extra content">
              <div class="ui three buttons">
                <button class="ui button" @click="prevCard" :disabled="words.length <= 1">
                  Prev
                </button>
                <button class="ui primary button" @click="flipCard">
                  Flip
                </button>
                <button class="ui button" @click="nextCard" :disabled="words.length <= 1">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { viewAllWords } from '@/helpers/api';
import '@/assets/Flashcards.css';

export default {
  name: 'Flashcards',
  setup() {
    const words = ref([]);
    const currentIndex = ref(0);
    const showBack = ref(false);
    const transitionEnabled = ref(true);

    const currentWord = computed(() => {
      return words.value[currentIndex.value] || null;
    });

    const currentText = computed(() => {
      if (!currentWord.value) return '';
      return showBack.value ? currentWord.value.german : currentWord.value.english;
    });

    const currentLabel = computed(() => {
      return showBack.value ? 'German' : 'English';
    });

    const loadWords = async () => {
      const data = await viewAllWords();
      if (data && Array.isArray(data)) {
        words.value = data;
        currentIndex.value = 0;
        showBack.value = false;
      }
    };

    const flipCard = () => {
      transitionEnabled.value = true;
      showBack.value = !showBack.value;
    };

    const resetToEnglish = () => {
      transitionEnabled.value = false;
      showBack.value = false;
    };

    const nextCard = () => {
      if (!words.value.length) return;
      resetToEnglish();
      currentIndex.value = (currentIndex.value + 1) % words.value.length;
    };

    const prevCard = () => {
      if (!words.value.length) return;
      resetToEnglish();
      currentIndex.value = (currentIndex.value - 1 + words.value.length) % words.value.length;
    };

    onMounted(loadWords);

    return {
      words,
      currentIndex,
      currentWord,
      currentText,
      currentLabel,
      showBack,
      transitionEnabled,
      flipCard,
      nextCard,
      prevCard,
    };
  }
};
</script>
