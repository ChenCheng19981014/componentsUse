import { defineComponent, reactive, ref } from "vue";
import { RouterView } from "vue-router";
import router from "../../../router";

export default defineComponent({
  name: "companyAll",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="company-all">
    <RouterView></RouterView>
  </div>
);
