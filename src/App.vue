<template>
  <router-view v-if="isRouterAlive" />
</template>

<script>
export default {
  provide() {
    return {
      reloadPage: this.reloadPage,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    // 畫面重新整理
    reloadPage() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style lang="scss">
@import 'assets/SideBar/sideBar.css';
@import './assets/all.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url('assets/backStyle.png');
  background-size: 100% 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  transition: background 0.2s;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
