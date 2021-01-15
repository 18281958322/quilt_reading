<template>
  <div class="content-cell">
    <div class="sidebarContent">
      <sidebar :defaultActive="'/novel'" @subMenuOpen="subMenuOpens" @subMenuClose="subMenuCloses"
        @activeChange="activeChanges" :treeData="sidebarData" />
    </div>
    <div class="mainContent">
      <router-view />
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>