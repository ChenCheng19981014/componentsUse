import { defineComponent, reactive, ref } from "vue";
import { RouterView } from "vue-router";
import router from "../../router";

export default defineComponent({
  name: "companyInfo",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="company-info">
    <h1>无锡零拓的公司详情</h1>
    <button
      onClick={() => {
        router.push("/company/1/project/1/editer");
      }}
    >
      查看项目一
    </button>
  </div>
);
