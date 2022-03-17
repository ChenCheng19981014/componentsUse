import { defineComponent, reactive, ref } from "vue";
import router from "../../../router";

export default defineComponent({
  name: "project",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="project">
    <h1>项目一</h1>
    <button
      onClick={() => {
        router.push("/company/all");
      }}
    ></button>
  </div>
);
