import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "editer",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="editer">
    <h1>editer</h1>
    <h2>编辑器</h2>
  </div>
);
