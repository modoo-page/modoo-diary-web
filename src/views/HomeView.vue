<template>
  <diary-component :diaryProp="diaryList"></diary-component>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { GetAxios, FormattedDate } from "@/utils/utils";
import DiaryComponent, { Diary } from "@/components/DiaryComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    DiaryComponent,
  },
  setup() {
    const diaryList: Ref<Array<Diary>> = ref([]);

    function getDiaryList() {
      let axios = GetAxios();
      axios
        .get("/diaries")
        .then((result) => {
          diaryList.value = (result.data as Array<Diary>).map((value) => {
            return {
              ...value,
              createdAt: FormattedDate(value.createdAt),
            };
          });
        })
        .catch(() => {
          diaryList.value = [];
        });
    }

    function init() {
      getDiaryList();
    }

    init();
    return {
      diaryList,
    };
  },
});
</script>
