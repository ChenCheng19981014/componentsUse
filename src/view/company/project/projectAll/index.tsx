import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "projectAll",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="project-all">
    <h1>所有项目页面</h1>
  </div>
);
