<template>
  <login-component></login-component>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { LoginComponent },
  name: "diary-component",
});
</script>
