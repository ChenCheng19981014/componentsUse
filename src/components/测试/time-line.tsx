import { ElScrollbar } from "element-plus";
import { da } from "element-plus/lib/locale";
import { dom } from "js-funcs";
import { mapObj } from "js-funcs/type/obj";
import { defineComponent, reactive, ref } from "vue";
import core from "../../../../../../../../Core/Core";
import { TimeLineType } from "../../../../../../../../Engine/TimeLine/TimeLine";
import TimeLineBase from "../../../../../../../../Engine/TimeLine/TimeLineBase";
import refs from "../../../../../../../../Refs/Refs";
import { changeLevel } from "../../../../../../../Ui/Utils";
import { Checkbox, Input } from "../../../../../../component/until";
export default defineComponent({
  name: "TimeLine",
  mounted() {
    // dataTimeLine.areaLeft = dom.get(".tl-area").getBoundingClientRect();
    const parent = dom.get(".tl-area");
    dataTimeLine.parentDom = parent;
    dataTimeLine.parentRect = parent.getBoundingClientRect();
    dataTimeLine.lineDom = dom.get(".tl-title-line");

    changeTimeLineHeight();
  },
  setup: () => () => com(),
});
const { dataTimeLine } = refs.timeLine;

core.events.mouseEventMap.move.timeLineMove = dataTimeLine.move;
core.events.mouseEventMap.up.timeLineUp = dataTimeLine.up;

// 改变高度
const changeTimeLineHeight = () => {
  let isDown = false;
  const editorDom = dom.get(".editor");
  const timeLineDom = dom.get(".time-line");
  const contentDom = dom.get(".content");
  const auxLineDom = dom.get(".auxLine");
  const titleDom = dom.get(".tl-title");
  const contentDomInfo = [contentDom.getBoundingClientRect()][0];
  const titleDomInfo = [titleDom.getBoundingClientRect()][0];
  const { height } = document.body.getBoundingClientRect();
  console.log(contentDomInfo, "contentDomInfo");

  auxLineDom.onmousedown = () => {
    isDown = true;
  };
  editorDom.onmousemove = (e: any) => {
    const h = height - e.clientY;
    if (!isDown) return;

    if (h <= 36) {
      timeLineDom.style.height = `${36}px`;
      return;
    } else if (h >= contentDomInfo.height - titleDomInfo.height) {
      timeLineDom.style.height = `${
        contentDomInfo.height - titleDomInfo.height
      }px`;
    } else {
      timeLineDom.style.height = `${h}px`;
    }
  };
  editorDom.onmouseup = () => {
    //开关关闭
    isDown = false;
  };
  editorDom.onmouseleave = () => {
    //开关关闭
    isDown = false;
  };
  auxLineDom.onmouseup = () => {
    //开关关闭
    isDown = false;
  };
};

// 时间线总方法
const timeLineInfo = {
  // 选择的组名 现未索引
  selectGroupName: ref(-1),
  // 添加组
  addGroup: () => {
    core.e.timeLine.addGroup(core.e.timeLine.getDefName());
  },
  addModel: () => {
    timeLineInfo.addModelGroup.value = !timeLineInfo.addModelGroup.value;
  },

  setSelectModel: (target: TimeLineBase) => {
    refs.timeLine.selectTarget.value = target;
  },
  allGroup: refs.timeLine.groupMap,
  // 所有模型组
  allModel: refs.timeLine.selectModels,
  // 是否显示改属性
  isShowAttribute: ref(false),
  // 添加模型组
  addModelGroup: ref(false),
  domOnOff: ref(false),
  addTarget(type: string) {
    console.log(type, "type");
    if (type === "材质") {
      core.e.timeLine.addTargetToGroup((core.e.model.select as any)?.material);
    }
    if (type === "模型") {
      core.e.timeLine.addTargetToGroup(core.e.model.select);
    }
  },
  // 选中模型
  selectedModelFn: (model: any) => {
    console.log(model, "model");
  },

  selectedModel: ref(-1),

  // 播放按钮
  progressKey: {
    firstFrame: {
      iconfont: "icon-di1zhen",
      fn: () => {
        dataTimeLine.setProgress(0);
      },
    },
    previousFrame: {
      iconfont: "icon-qian1zhen",
      fn: () => {},
    },
    play: {
      iconfont: refs.timeLine.groupMap.value[
        refs.timeLine.selectGroupName.value
      ]?.run
        ? "icon-zanting"
        : "icon-bofang",
      fn: () => {
        const select = core.e.timeLine.getSelectGroup();
        console.log(select.run, "select.run");
        core.e.timeLine[select.run ? "closeGroup" : "playGroup"](
          refs.timeLine.selectGroupName.value
        );
      },
    },
    nextFrame: {
      iconfont: "icon-xia1zhen",
      fn: () => {},
    },
    lastFrame: {
      iconfont: "icon-zuihouzhen",
      fn: () => {
        dataTimeLine.setProgress(1);
      },
    },
  },
  timeLineConfigCb(type: "enable" | "loop" | "reverse" | "curve") {
    const group = core.e.timeLine.getSelectGroup();
    if (!group) return;
    console.log(group[type], "group[type]");
    core.e.timeLine.setGroupInfo(group, type, !group[type]);
  },
  // 时间线配置选项
  timeLineConfig: {
    enable: {
      name: "启用",
      isTrue: ref(
        refs.timeLine.selectGroup.value
          ? refs.timeLine.selectGroup.value["enable"]
          : false
      ),
      cb: () => {
        timeLineInfo.timeLineConfig.enable.isTrue.value =
          !timeLineInfo.timeLineConfig.enable.isTrue.value;
        timeLineInfo.timeLineConfigCb("enable");
      },
    },
    loop: {
      name: "循环",
      isTrue: ref(
        refs.timeLine.selectGroup.value
          ? refs.timeLine.selectGroup.value["loop"]
          : false
      ),
      cb: () => {
        timeLineInfo.timeLineConfig.loop.isTrue.value =
          !timeLineInfo.timeLineConfig.loop.isTrue.value;
        timeLineInfo.timeLineConfigCb("loop");
      },
    },
    flip: {
      name: "翻转",
      isTrue: ref(
        refs.timeLine.selectGroup.value
          ? refs.timeLine.selectGroup.value["reverse"]
          : false
      ),
      cb: () => {
        timeLineInfo.timeLineConfig.flip.isTrue.value =
          !timeLineInfo.timeLineConfig.flip.isTrue.value;
        timeLineInfo.timeLineConfigCb("reverse");
      },
    },
    linear: {
      name: "线性",
      isTrue: ref(
        refs.timeLine.selectGroup.value
          ? refs.timeLine.selectGroup.value["curve"]
          : false
      ),
      cb: () => {
        timeLineInfo.timeLineConfig.linear.isTrue.value =
          !timeLineInfo.timeLineConfig.linear.isTrue.value;
        timeLineInfo.timeLineConfigCb("curve");
      },
    },
  },

  // 清除模型组
  removeModelGroup: (e: any) => {
    const parentNode = e.target.parentElement;
    parentNode.parentElement.style.display = "none";
  },
  // 属性的功能
  setTransForm: (item: TimeLineBase) => {
    timeLineInfo.allModel.value[item.uuid].showTransform =
      !timeLineInfo.allModel.value[item.uuid].showTransform;
  },
  // 事件线收起展开
  changeDomHeight: () => {
    timeLineInfo.domOnOff.value = !timeLineInfo.domOnOff.value;
    dom.get(".time-line").style.height = timeLineInfo.domOnOff.value
      ? `277px`
      : `36px`;
  },

  selectAllAttr: (item: TimeLineBase) => {
    refs.timeLine.selectTarget.value = item;
    const local = dataTimeLine.getLocal();
    core.e.timeLine.saveDataByTime(local);
  },
};

const com = () => {
  return (
    <div
      class="time-line"
      style="height:277px"
      onClick={(e: any) => {
        changeLevel.change("time-line");
      }}
    >
      <div class="auxLine"></div>
      <div class="tl-title">
        <div class="tl-anima-title">
          <div class="name">动画</div>
          <div class="add-group">
            <i class="iconfont icon-jiahao"></i>
            <div class="add" onClick={timeLineInfo.addGroup}>
              添加组
            </div>
          </div>
        </div>
        <div class="tl-selector-title">
          <div
            class="put-away"
            onClick={() => {
              timeLineInfo.changeDomHeight();
            }}
          >
            <i
              class={`icon iconfont ${
                timeLineInfo.domOnOff.value
                  ? "icon-shuangxia"
                  : "icon-shuangshang"
              }`}
            ></i>
            <div class="name" v-show={timeLineInfo.domOnOff.value}>
              收起
            </div>
            <div class="name" v-show={!timeLineInfo.domOnOff.value}>
              打开
            </div>
          </div>
        </div>
      </div>
      <Group />
      {/* 空组 */}
      {/* <EmptyGroup /> */}
    </div>
  );
};

const Group = () => {
  return (
    <>
      <div class="tl-content">
        <div class="tl-all-group">
          <div class="title">所有组</div>
          <div class="anima-group">
            <ElScrollbar class="anima-tree-scroll">
              {Object.keys(timeLineInfo.allGroup.value).map((name, index) => {
                const val = timeLineInfo.allGroup.value[name];
                console.log(val, "val");
                return (
                  <div class="group">
                    <div
                      onClick={() => {
                        dataTimeLine.setSelectGroup(val);
                      }}
                      class={
                        timeLineInfo.selectGroupName.value === index
                          ? "anima-group-selected"
                          : ""
                      }
                    >
                      <input
                        class={
                          timeLineInfo.selectGroupName.value === index
                            ? "group-name input-selected"
                            : "group-name"
                        }
                        value={`组${index + 1}`}
                        onClick={(e: any) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        onDblclick={(e) => {}}
                      />
                      <i
                        class="iconfont icon-shibai1"
                        onClick={(e: any) => {
                          e.stopPropagation();
                          e.preventDefault();
                          e.target.parentNode.remove();
                        }}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </ElScrollbar>
          </div>
        </div>
        <div class="tl-unitls-menu" v-show={timeLineInfo.addModelGroup.value}>
          <div
            onClick={() => {
              timeLineInfo.addTarget("模型");
              core.e.timeLine.addTargetToGroup(core.e.model.select);
            }}
          >
            模型
          </div>
          <div
            onClick={() => {
              timeLineInfo.addTarget("材质");
            }}
          >
            材质
          </div>
        </div>
        <div class="model-selector-title">
          <div class="tl-content-title">
            <div class="tl-models-title">
              <div class="model-name">所有模型</div>
              <i
                class="iconfont icon-jiahao"
                onClick={() => {
                  timeLineInfo.addTarget("模型");
                }}
              ></i>
            </div>
            {TimeLineTitle()}
          </div>
          <div class="tl-content-main">
            <ElScrollbar>
              <div class="tl-models">
                {mapObj(timeLineInfo.allModel.value, (id, item, index) => {
                  const { target } = item;
                  const modelType = ["model", "Mesh"];
                  return (
                    <div>
                      <div
                        class={`title ${
                          refs.timeLine.selectTarget.value?.uuid === item.uuid
                            ? "anima-group-selected"
                            : ""
                        }`}
                        onClick={() => {
                          timeLineInfo.setSelectModel(item);
                        }}
                      >
                        <div
                          class={`open-button iconfont icon-shouqi`}
                          onClick={(e: any) => {
                            timeLineInfo.setTransForm(item);
                            e.target.classList[
                              item.showTransform ? "add" : "remove"
                            ]("icon-zhankai");
                            e.target.classList[
                              item.showTransform ? "remove" : "add"
                            ]("icon-shouqi");
                          }}
                        ></div>
                        <div
                          class={`model-icon iconfont ${
                            modelType.includes(item.type)
                              ? "icon-icon_moxingxiao"
                              : "icon-icon_caizhixiao"
                          }`}
                        ></div>
                        <div class="model-name">
                          {target.name || target.type}
                        </div>
                        <div
                          class="select-btn iconfont icon-zanting"
                          onClick={(e: any) => {
                            timeLineInfo.selectAllAttr(item);
                          }}
                        ></div>
                        <i
                          class="show-button iconfont icon-jianhao"
                          onClick={(e: any) => {
                            timeLineInfo.removeModelGroup(e);
                          }}
                        ></i>
                      </div>
                      <div
                        v-show={
                          timeLineInfo.allModel.value[item.uuid].showTransform
                        }
                        class="content"
                      >
                        {mapObj(item.defOptions, (name) => {
                          return (
                            <div>
                              <h1>{name}</h1>
                              <i
                                class="iconfont icon-zanting"
                                onClick={() => {}}
                              ></i>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              {TimeLineMain()}
            </ElScrollbar>
          </div>
        </div>
      </div>
    </>
  );
};

// 空组
const EmptyGroup = () => {
  return (
    <>
      <div class="tl-empty-group">
        <div class="group-left"></div>
        <div class="group-right">
          <div class="tips">
            <div class="text-left">{`点击上方蓝色按钮`}</div>
            <div class="text-center">{`“+添加组”`}</div>
            <div class="text-right">{`点击上方蓝色按钮`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const TimeLineTitle = () => {
  let bodyHeight = 0;
  if (refs.timeLine.selectModels.value) {
    mapObj(refs.timeLine.selectModels.value, (id, item) => {
      return (bodyHeight += item.showTransform
        ? Object.keys(item.defOptions).length * 24 + 32
        : 32);
    });
  }
  return (
    <div class="tl-area-title">
      <div class="tl-title-progress">
        <ul>
          {new Array(dataTimeLine.scale.value).fill("").map((_, index) => {
            return <li>{index * 50}</li>;
          })}
        </ul>
      </div>
      <div
        class="tl-title-line"
        onMousedown={() => {
          dataTimeLine.down();
        }}
      >
        <div class="head"></div>
        <div class="body" style={{ height: bodyHeight + "px" }}>
          <div class="inner"></div>
        </div>
      </div>
    </div>
  );
};

const groupMenu = () => {
  if (!refs.timeLine.selectGroup.value) return;
  const group = refs.timeLine.selectGroup.value;
  const rightMenu = ["enable", "loop", "reverse", "curve"];
  return (
    <>
      <div class="name">时间线</div>
      <div class="progress-key">
        {Object.values(timeLineInfo.progressKey).map((i: any) => {
          const { iconfont, isShow, fn } = i;
          return (
            <div
              class={`iconfont ${iconfont}`}
              onClick={() => {
                fn();
              }}
            ></div>
          );
        })}
      </div>
      <div class="speed-progress">
        <p></p>
        {Checkbox(
          rightMenu.map((type) => {
            return {
              name: type,
              def: (group as any)[type],
              cb: (val) => {
                timeLineInfo.timeLineConfigCb(type as any);
              },
            };
          })
        )}
      </div>
      <div class="division-line"></div>
      <div class="tl-speed">
        <div>速度</div>
        {Input({
          def: group.speed,
          width: 72,
          cb: (val, target) => {
            const num = Number(val);
            if (isNaN(num)) return (target.value = group.speed);
            core.e.timeLine.setGroupInfo(group, "speed", num);
          },
        })}
      </div>
      <div class="division-line"></div>
    </>
  );
};

const TimeLineMain = () => {
  return (
    <div class="tl-area" onWheel={dataTimeLine.wheel}>
      <div class="tl-divider">
        <ul>
          {new Array(dataTimeLine.scale.value).fill("").map((_, index) => {
            return <li></li>;
          })}
        </ul>
      </div>

      {mapObj(timeLineInfo.allModel.value, (id, item, index) => {
        const optionLength = Object.keys(item.defOptions).length;
        const { target, showTransform } = item;
        console.log(item, "item");
        const contentHeight = 35 + (item.showTransform ? 24 * optionLength : 0);
        return (
          <div>
            <div class="tl-divider" style={{ height: contentHeight + "px" }}>
              <ul>
                {new Array(dataTimeLine.scale.value)
                  .fill("")
                  .map((_, index) => {
                    return <li></li>;
                  })}
              </ul>
            </div>

            <div
              class="tl-area-content"
              style={{
                height: contentHeight + "px",
              }}
              v-show={item.showTransform}
            >
              {mapObj(item.data, (time, data) => {
                return (
                  <ul
                    style={{
                      left: dataTimeLine.transLocal(time as string) + "px",
                    }}
                  >
                    {mapObj(item.defOptions, (type) => {
                      return (
                        <li v-show={data[type] !== undefined}>
                          <p class="inner"></p>
                        </li>
                      );
                    })}
                  </ul>
                );
                console.log(time, data, "time.data");
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
