<template>
  <div id="app">
    <navbar v-if="navbarStatus" />
    <crumbs v-if="crumbStatus"></crumbs>
    <router-view />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['navbarStatus', 'crumbStatus'])
  }
}
</script>>
<style>

</style>
