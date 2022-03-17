import { defineComponent, reactive, ref } from "vue";
import router from "../../../router";

export default defineComponent({
  name: "projectMenu",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="project-menu">
    <h1>单个页面</h1>
  </div>
);
