<template>
  <div v-if="status === 'email'">
    <p>email</p>
    <input type="email" v-model="email" />
    <br />
    <button @click="requestToken">토큰 요청</button>
  </div>
  <div v-if="status === 'token'">
    <p>token</p>
    <input type="text" v-model="token" />
    <br />
    <button @click="login">로그인</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { GetAxios } from "@/utils/utils";
import { useRouter } from "vue-router";
import { useListStore } from "../stores/list";
export default defineComponent({
  name: "diary-component",
  setup() {
    const router = useRouter();
    const list = useListStore();
    const status = ref("email");
    const email = ref("");
    const token = ref("");
    let axios = GetAxios();
    const requestToken = function () {
      axios
        .post("/login/token", { email: email.value })
        .then(() => {
          status.value = "token";
        })
        .catch(() => {
          alert("로그인 서버에 문제가 발생했습니다");
        });
    };
    const login = function () {
      axios
        .post("/login", { email: email.value, token: token.value })
        .then((response) => {
          list.Login(response.data["userToken"] as string);
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          alert("토큰이 맞지 않습니다");
        });
    };
    return { status, email, token, requestToken, login };
  },
});
</script>
