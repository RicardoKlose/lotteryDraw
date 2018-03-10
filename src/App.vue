<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="brand-title">彩票机选器</span>
        <div
          :class="{ 'navbar-burger': true, 'burger': true, 'is-active': expandMenu }"
          @click="toggleExpand">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div :class="{ 'navbar-menu': true, 'is-active': expandMenu }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/Double">
            <span>双色球</span>
          </router-link>
          <router-link class="navbar-item" to="/Mega">
            <span>大乐透</span>
          </router-link>
        </div>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view class="main-app" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      expandMenu: false,
    };
  },
  methods: {
    toggleExpand() {
      this.expandMenu = !this.expandMenu;
    },
  },
};
</script>
