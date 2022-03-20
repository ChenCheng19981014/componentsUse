import { defineComponent } from "vue";

import "./../../assets/style/domTree.less";

// 总菜单
const array = [
  {
    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
    name: "内部设备1",
    type: "Object3D",
    children: [
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备a",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备b",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备c",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备d",
        type: "Object3D",
        children: [
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-a",
            type: "Object3D",
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-b",
            type: "Object3D",
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-c",
            type: "Object3D",
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-d",
            type: "Object3D",
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-e",
            type: "Object3D",
          },
        ],
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备e",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备f",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备j",
        type: "Object3D",
      },
    ],
  },
  {
    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
    name: "内部设备2",
    type: "Object3D",
    children: [
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备a",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备b",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备c",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备d",
        type: "Object3D",
        children: [
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-a",
            type: "Object3D",
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-b",
            type: "Object3D",
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-c",
            type: "Object3D",
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-d",
            type: "Object3D",
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内部设备d-e",
            type: "Object3D",
          },
        ],
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备e",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备f",
        type: "Object3D",
      },
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备j",
        type: "Object3D",
      },
    ],
  },
  {
    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
    name: "内部设备3",
    type: "Object3D",
    children: [
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备000",
        type: "Object3D",
      },
    ],
  },
  {
    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
    name: "内部设备4",
    type: "Object3D",
    children: [
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备000",
        type: "Object3D",
      },
    ],
  },
  {
    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
    name: "内部设备5",
    type: "Object3D",
    children: [
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备000",
        type: "Object3D",
      },
    ],
  },
  {
    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
    name: "内部设备6",
    type: "Object3D",
    children: [
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备000",
        type: "Object3D",
      },
    ],
  },
  {
    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
    name: "内部设备7",
    type: "Object3D",
    children: [
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备000",
        type: "Object3D",
      },
    ],
  },
  {
    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
    name: "内部设备8",
    type: "Object3D",
    children: [
      {
        uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
        name: "内部设备",
        type: "Object3D",
        children: [
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "内000",
            type: "Object3D",
            children: [
              {
                uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
                name: "内000",
                type: "Object3D",
                children: [
                  {
                    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
                    name: "内部设00",
                    type: "Object3D",
                  },
                ],
              },
            ],
          },
          {
            uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
            name: "部设备000",
            type: "Object3D",
            children: [
              {
                uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
                name: "内部备000",
                type: "Object3D",
                children: [
                  {
                    uuid: "003a87fb-81cc-6558-569a-87fb81cc569a",
                    name: "内部000",
                    type: "Object3D",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const createDom = (itemDom: any) => {
  const { uuid, name, type, children } = itemDom;
  return (
    <div>
      <span>{name}</span>
      <ul>
        {children &&
          children.map((childDom: any) => {
            const { uuid, name, type, children } = childDom;
            if (children && children.length) return createDom(childDom);
            return <li>{name}</li>;
          })}
      </ul>
    </div>
  );
};

// 编辑器页面
export default defineComponent({
  name: "domTree",
  setup: () => () => {
    return (
      <div class="tree-menu">
        <div class="title">
          {Object.values(array).map((itemDom: any) => {
            return createDom(itemDom);
          })}
        </div>
      </div>
    );
  },
});
