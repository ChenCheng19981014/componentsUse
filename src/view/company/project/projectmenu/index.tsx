import { defineComponent, reactive, ref } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "projectmenu",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="project-menu">
    <RouterView></RouterView>
  </div>
);
