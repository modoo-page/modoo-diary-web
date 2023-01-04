<template>
  <div v-if="status === 'email'">
    <p>email</p>
    <input type="email" />
    <br />
    <button @click="requestToken">토큰 요청</button>
  </div>
  <div v-if="status === 'token'">
    <p>token</p>
    <input type="text" />
    <br />
    <button @click="login">로그인</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "diary-component",
  setup() {
    const status = ref("email");
    const requestToken = function () {
      console.log("A");
      status.value = "token";
    };
    const login = function () {
      console.log("login");
    };
    return { status, requestToken, login };
  },
});
</script>
