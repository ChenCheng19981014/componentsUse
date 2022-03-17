import { defineComponent, reactive, ref } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "company",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="company">
    <RouterView></RouterView>
  </div>
);
