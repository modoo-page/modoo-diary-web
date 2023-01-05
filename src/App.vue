<template>
  <nav>
    <router-link to="/">일기 보기</router-link> |
    <div class="inline" v-show="isLogin">
      <router-link to="/write">일기 쓰기</router-link> |
    </div>
    <router-link to="/login" v-show="!isLogin">로그인</router-link>
    <router-link to="/logout" v-show="isLogin">로그아웃</router-link>
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
.inline {
  display: inline;
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

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useListStore } from "./stores/list";

export default defineComponent({
  setup() {
    const list = useListStore();
    const { isLogin } = toRefs(list);
    function GetUserToken() {
      let userToken = localStorage.getItem("userToken");
      if (userToken != null) {
        list.Login(userToken);
      }
    }
    GetUserToken();
    return { isLogin };
  },
});
</script>
