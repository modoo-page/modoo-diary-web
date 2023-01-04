<template>
  <nav>
    <router-link to="/">일기 보기</router-link> |
    <router-link to="/write">일기 쓰기</router-link> |
    <router-link to="/login">로그인</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/reset.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
