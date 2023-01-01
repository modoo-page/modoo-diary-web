<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>글쓴이</td>
          <td>내용</td>
          <td>작성 시간</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ diaryId, author, contents, createdAt } in diaryProp"
          :key="diaryId"
        >
          <td>{{ diaryId }}</td>
          <td>{{ author }}</td>
          <td>{{ contents }}</td>
          <td>{{ createdAt }}</td>
        </tr>
      </tbody>
    </table>
    <div id="pagingDiv">
      <router-link to="?">&lt;</router-link>
      <router-link :to="{}" v-for="index in 10" :key="index">{{
        index + startPage
      }}</router-link>
      <router-link to="?">&gt;</router-link>
    </div>
  </div>
</template>

<style scoped>
div {
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  width: 80%;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
}

thead {
  background: #cff4fc;
}

thead tr,
tbody tr {
  height: 30px;
}

table,
tr,
td {
  border: 1px black solid;
}
#pagingDiv {
  flex-direction: row;
}
#pagingDiv a {
  margin: 10px;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export type Diary = {
  diaryId: number;
  author: string;
  contents: string;
  createdAt: string;
};

export default defineComponent({
  name: "diary-component",
  props: {
    diaryProp: {
      type: Array as PropType<Array<Diary>>,
      default: () => [],
      required: true,
    },
    pageProp: {
      type: Number,
      default: () => 1,
      required: true,
    },
  },
  setup(props) {
    var startPage = Math.floor(props.pageProp / 10) * 10;
    return {
      startPage,
    };
  },
});
</script>
