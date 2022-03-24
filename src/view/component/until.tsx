import { ref } from 'vue';
import '../../assets/style/untils/until.less';

// 工具组件
class Untils {
  // 抬头组件
  title(name: string, isShow: any) {
    return (
      <div class="title">
        <p>{name}</p>
        <i
          class={isShow ? 'iconfont icon-unfolded-s' : 'iconfont icon-shouqi'}
        ></i>
      </div>
    );
  }

  menu(nameList: any) {
    const selectVal = ref(nameList[0]);
    const dom = () => {
      return (
        <>
          {nameList.map((item: any) => {
            return (
              <div
                onClick={() => {
                  selectVal.value = item;
                  console.log(selectVal.value, 'selectVal.value');
                }}
                class={item === selectVal.value ? 'select' : ''}
              >
                {item}
              </div>
            );
          })}
        </>
      );
    };
    return {
      selectVal,
      dom,
    };
  }

  // 属性组件
  attribute(name: string) {}
}
export default new Untils();
