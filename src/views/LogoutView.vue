<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useListStore } from "../stores/list";
export default defineComponent({
  setup() {
    const router = useRouter();
    const list = useListStore();
    list.Logout();
    // localStorage.setItem();
    router.push("/");
  },
});
</script>
