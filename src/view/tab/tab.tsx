import { defineComponent } from "vue";
import until from "../component/until";
import "./../../assets/style/tab.less";

// 配置页面
const config = {
  data: {
    // 参数
    param: {
      ls: ["属性", "场景配置", "编辑历史"],
      com: until.menu(["属性", "场景配置", "编辑历史"]),
    },
    // 材质
    material: {
      ls: ["材质", "材质库"],
      com: until.menu(["材质", "材质库"]),
    },
    // 脚本
    script: {
      ls: ["脚本", "脚本库", "脚本组"],
      com: until.menu(["脚本", "脚本库", "脚本组"]),
    },
    // 状态
    state: {
      ls: ["状态", "状态库", "状态组"],
      com: until.menu(["状态", "状态库", "状态组"]),
    },
  },
};

// 编辑器页面
export default defineComponent({
  name: "tab",
  setup: () => () => {
    return (
      <div class="tab">
        <div class="tab-change1">{}</div>
        <div class="tab-change2">{}</div>
      </div>
    );
  },
});
