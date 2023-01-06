<template>
  <p>일기 내용</p>
  <textarea v-model="diary"></textarea>
  <br />
  <button @click="WriteDiary">일기 쓰기</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { GetAxios } from "@/utils/utils";
import { useRouter } from "vue-router";
import { useListStore } from "../stores/list";
export default defineComponent({
  name: "write-component",
  setup() {
    const router = useRouter();
    const list = useListStore();
    const diary = ref("");
    let axios = GetAxios();
    function WriteDiary() {
      if (diary.value === "") {
        alert("내용이 비어있습니다");
        return;
      }
      axios
        .post(
          "/diaries",
          { diary: diary.value },
          { headers: { Authorization: "Token " + list.userToken } }
        )
        .then(() => {
          alert("작성 완료");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return { diary, WriteDiary };
  },
});
</script>

<style scoped>
textarea {
  width: 600px;
  height: 600px;
}
</style>
