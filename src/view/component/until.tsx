import { ref } from "vue";
import "../../assets/style/untils/until.less";

// 工具组件
class Untils {
  // 抬头组件
  title(name: string, isShow: any) {
    return (
      <div class="title">
        <p>{name}</p>
        <i
          class={isShow ? "iconfont icon-unfolded-s" : "iconfont icon-shouqi"}
        ></i>
      </div>
    );
  }

  menu(nameList: any) {
    const select = ref(nameList[0]);
    const dom = () => (
      <div>
        {nameList.map((tab: any) => {
          return (
            <div
              onClick={() => {
                select.value = tab;
              }}
            >
              {tab}
            </div>
          );
        })}
      </div>
    );
  }

  // 菜单组件
  // menu(nameList: any) {
  //   // 选中的属性
  //   const select = ref(nameList[0]);
  //   const dom = () => (
  //     <div class="menu">
  //       {nameList.map((i: string) => {
  //         return (
  //           <div
  //             onClick={() => {
  //               select.value = i;
  //             }}
  //             class={select.value === i ? "select" : ""}
  //           >
  //             {i}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  //   return {
  //     select,
  //     dom,
  //   };
  // }

  // 属性组件
  attribute(name: string) {}
}
export default new Untils();
