<template>
  <div id="app">
    <navbar v-if="navbarStatus" />
    <router-view />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['navbarStatus'])
  }
}
</script>>
<style>

</style>
