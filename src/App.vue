<template>

  <div id='app'>
    <Header/>
    <div class="general-content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>

</template>

<script>

import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>

<style>
@import './assets/styles/styles.scss';
</style>
