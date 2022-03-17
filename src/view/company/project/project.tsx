import { defineComponent, reactive, ref } from "vue";
import { RouterView } from "vue-router";
import router from "../../../router";

export default defineComponent({
  name: "project",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="project">
    <RouterView></RouterView>
  </div>
);
