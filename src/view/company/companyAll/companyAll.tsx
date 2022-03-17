import { defineComponent, reactive, ref } from "vue";
import router from "../../../router";

export default defineComponent({
  name: "companyAll",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="company-all">
    <h1>所有公司页面</h1>
    <button
      onClick={() => {
        router.push("/company/1/project/all");
      }}
    >
      无锡零拓
    </button>
    <button>梦途科技</button>
  </div>
);
