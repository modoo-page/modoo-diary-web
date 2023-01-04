<template>
  <p>일기 내용</p>
  <textarea></textarea>
  <br />
  <button>일기 쓰기</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "write-component",
});
</script>

<style scoped>
textarea {
  width: 600px;
  height: 600px;
}
</style>
