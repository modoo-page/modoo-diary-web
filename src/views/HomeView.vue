<template>
  <diary-component :diaryProp="diaryList" :pageProp="page"></diary-component>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watchEffect } from "vue";
import { GetAxios, FormattedDate } from "@/utils/utils";
import DiaryComponent, { Diary } from "@/components/DiaryComponent.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "HomeView",
  components: {
    DiaryComponent,
  },
  setup() {
    const route = useRoute();
    const diaryList: Ref<Array<Diary>> = ref([]);
    let page = ref(1);
    function getDiaryList() {
      let axios = GetAxios();
      axios
        .get("/diaries?page=" + page.value)
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

    function GetPage() {
      if (typeof route.query.page === "string") {
        page.value = parseInt(route.query.page);
      }
    }
    function init() {
      GetPage();
      getDiaryList();
    }
    watchEffect(() => {
      page.value = parseInt(route.query.page as string);
      getDiaryList();
    });
    init();
    return {
      diaryList,
      page,
    };
  },
});
</script>
