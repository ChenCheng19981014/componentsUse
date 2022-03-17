import { defineComponent, reactive, ref } from "vue";
import { RouterView } from "vue-router";

// 整个公司页面
export default defineComponent({
  name: "companyInfo",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="company-info">
    <RouterView></RouterView>
  </div>
);
