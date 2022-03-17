import { defineComponent, reactive, ref } from "vue";
import { NPagination } from "naive-ui";
import "./../assets/style/hello.less";
export default defineComponent({
  name: "HelloWorld",
  mounted() {
    t.init();
  },
  setup: () => () => com(),
});

// 测试数组
const list = [
  "设备7_1",
  "设备7_3",
  "设备7_8",
  "设备7_9",
  "设备4_6",
  "设备3_5",
  "设备3_8",
  "设备3_6",
  "设备3_2",
  "设备3_3",
  "设备3_7",
  "设备3_4",
  "设备3_1",
  "设备2_10",
  "设备2_6",
  "设备2_11",
  "设备2_1",
  "设备2_8",
  "设备2_2",
  "设备2_4",
  "设备2_5",
  "设备2_9",
  "设备2_7",
  "去刺架",
  "设备J_C01",
  "设备J_C02",
  "设备J_C04",
  "设备1_4",
  "设备1_6",
  "设备1_5",
  "设备1_9",
  "设备1_7",
  "设备1_2",
  "设备1_1",
  "设备1_3",
  "设备1_8",
  "设备1_10",
  "导轨1",
  "导轨2",
  "导轨3",
  "导轨4",
  "导轨5",
  "设备SY_04",
  "设备SY_07",
  "设备SY_12",
  "设备SY_05",
  "设备SY_10",
  "设备SY_02",
  "设备SY_06",
  "设备SY_09",
  "设备SY_11",
  "设备SY_08",
  "设备SY_03",
];

// 总函数
const t = {
  page: reactive({
    count: 0,
    num: 6,
    now: 1,
  }),
  init() {
    t.page.count = Math.floor(list.length / t.page.num);
  },
};

const com = () => (
  <div class="hello">
    <div class="content">
      {list
        .slice((t.page.now - 1) * t.page.num, t.page.now * t.page.num)
        .map((i, index) => {
          return (
            <div>
              <h1>
                索引-{index}
                {i}
              </h1>
              <h2>设备名称:{i}</h2>
            </div>
          );
        })}
    </div>
    <div class="page">
      <div class="change-page">
        <NPagination v-model:page={t.page.now} page-count={t.page.count} />
      </div>
    </div>
  </div>
);
