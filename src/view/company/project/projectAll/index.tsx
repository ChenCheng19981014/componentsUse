import { defineComponent, reactive, ref } from "vue";
import router from "../../../../router";

export default defineComponent({
  name: "projectMenu",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="project-menu">
    <h1>所有项目页</h1>
    <button
      onClick={() => {
        router.push("/company/1/project/1/editor");
      }}
    >
      大海则项目
    </button>
  </div>
);
