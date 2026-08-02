<!-- <script setup lang="ts">
import router from './router';

</script> -->

<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div class="ui inverted segment navbar">
    <div class="ui center aligned container">
      <div class="ui large secondary inverted pointing menu com">
        <router-link to="/words" class="item">
          <i class="List icon"></i>Words
        </router-link>
        <router-link to="/words/new" class="item">
          <i class="plus icon"></i>New
        </router-link>
<<<<<<< HEAD
        <router-link to="/words/flashcards" class="item">
          <i class="book icon"></i>Flashcards
        </router-link>
=======
>>>>>>> b0482e08e10f87986513b5ce12a5656beedbc53c
      </div>
    </div>
  </div>

  <div class="ui container">
<<<<<<< HEAD
    <div class="ui centered grid">
      <div class="row">
        <div class="twelve wide centered column">
=======
    <div class="ui grid">
      <div class="row">
        <div class="twelve wide column">
>>>>>>> b0482e08e10f87986513b5ce12a5656beedbc53c
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>