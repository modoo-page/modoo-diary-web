import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore = defineStore("list", () => {
  const isLogin = ref(false);
  const userToken = ref("");
  function Login(token: string) {
    isLogin.value = true;
    userToken.value = token;
    localStorage.setItem("userToken", token);
  }
  function Logout() {
    isLogin.value = false;
    localStorage.removeItem("userToken");
    userToken.value = "";
  }

  return { isLogin, userToken, Login, Logout };
});
