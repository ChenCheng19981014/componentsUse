import { defineComponent, reactive, ref } from "vue";
import router from "../../router";

export default defineComponent({
  name: "login",
  mounted() {},
  setup: () => () => com(),
});

const com = () => (
  <div class="login">
    <h1>登陆页面</h1>
    <button
      onClick={() => {
        router.push("/company/all");
      }}
    >
      登陆进入公司
    </button>
  </div>
);
