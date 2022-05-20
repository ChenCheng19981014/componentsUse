import { defineComponent } from "vue";
import "./../../assets/style/https.less";
import https from "../../http/base";
export default defineComponent({
  name: "http",
  mounted() {},
  setup: () => () => httpCom.coms(),
});
const httpCom = {
  methods: {
    fn1: async () => {
      await https.get("/3d/workshop/tree").then((res) => {
        console.log(res, "res");
      });
    },
  },
  coms: () => (
    <div class="http-com">
      <div class="http-title">名称</div>
      <div class="http-fn1">
        <button
          onClick={() => {
            httpCom.methods.fn1();
          }}
        >
          测试接口
        </button>
      </div>
    </div>
  ),
};
