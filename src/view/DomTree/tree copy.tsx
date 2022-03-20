import { defineComponent } from "vue";
import "./../../assets/style/tree.less";
// 总菜单
const titleMenu = {
  scene: {
    name: "场景",
    menu: [
      {
        name: "新建场景",
        fn: () => {},
      },

      {
        name: "场景截图",
        fn: () => {},
      },

      {
        name: "保存场景",
        fn: () => {},
      },
      {
        name: "导出",
        menu: [
          {
            name: "导出模型glb",
            fn: () => {},
          },
          {
            name: "导出模型obj",
            fn: () => {},
          },
          {
            name: "导出模型json",
            fn: () => {},
          },
          {
            name: "导出材质",
            fn: () => {},
          },
          {
            name: "导出场景json文件和glb模型文件",
            fn: () => {},
          },
        ],
      },
      {
        name: "发布场景",
        fn: () => {},
      },
      {
        name: "合并无用材质",
        fn: () => {},
      },
      {
        name: "发布无材质场景",
        fn: () => {},
      },
      {
        name: "发布场景json",
        fn: () => {},
      },
      {
        name: "分析场景",
        fn: () => {},
      },
      {
        name: "压缩场景贴图",
        fn: async () => {},
      },
      {
        name: "下载压缩后的模型",
        fn: async () => {},
      },
    ],
  },
  editor: {
    name: "编辑",
  },
  player: {
    name: "运行",
  },
  sync: {
    name: "同步",
  },
};

const createTree = (map: any) => {
  const { name, menu, fn } = map;
  return (
    <div>
      {menu && menu.length && <p class="title-next">{">"}</p>}
      <span>{name}</span>
      <ul>
        {menu &&
          menu.map((menuChildren: any) => {
            const { name, menu, fn } = menuChildren;
            if (menu && menu.length) return createTree(menuChildren);
            return <li onClick={fn && fn()}>{name}</li>;
          })}
      </ul>
    </div>
  );
};

// 编辑器页面
export default defineComponent({
  name: "Tree",
  setup: () => () => {
    return (
      <div class="tree-menu">
        <div class="title">
          {Object.values(titleMenu).map((item: any) => {
            return createTree(item);
          })}
        </div>
      </div>
    );
  },
});
