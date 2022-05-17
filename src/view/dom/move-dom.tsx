import { defineComponent } from "vue";
import "./../../assets/style/move-dom.less";
// import { NodeEditor } from "../../../../node-editor/index";
import gsap from "gsap";

// 编辑器页面
export default defineComponent({
  name: "moveDom",
  mounted() {
    // new NodeEditor(document.querySelector(".canvas") as HTMLElement);
    const dom = document.querySelector(".dom1");

    (() => {
      let onUpdate = (_: any) => {
        console.log(_, "修改的值");
      };

      let a = () => {
        let infoStart = { left: 0 };
        // let newBegin = Object.assign({}, infoStart);
        let tween = gsap
          ?.to(infoStart, 2, { left: 50 })
          .eventCallback("onUpdate", (_) => {
            console.log(infoStart, "infoStart");
          })
          .eventCallback("onComplete", (_) => {
            console.log("结束");
            gsap.killTweensOf(tween);
            // tween = null | undefined;
          });
        return tween;
      };
      let aName = a().repeat(2).repeatDelay(1);
      console.log(aName, "A");
    })();

    let G = new Gasp(dom);

    // G.anima(
    //   {
    //     go: 0,
    //   },
    //   { to: 500 },
    //   3,
    //   (data: any) => {
    //     console.log(data.to, "data----");
    //     gsap.dom.style.left = data.to + "px";
    //   },
    //   () => {}
    // );

    const domList = [
      document.querySelector(".dom1"),
      document.querySelector(".dom2"),
      document.querySelector(".dom3"),
      document.querySelector(".dom4"),
    ];
    const canvas = document.querySelector(".canvas");
    // new MoveDom(domList, canvas);
  },
  setup: () => () => {
    return (
      <div class="canvas">
        <div class="dom1"></div>
        <div class="dom2"></div>
        <div class="dom3"></div>
        <div class="dom4"></div>
      </div>
    );
  },
});

class Gasp {
  dom: null | undefined;
  constructor(dom: any) {
    this.dom = dom;
  }
  anima(begin: any, end: any, time: any, onUpdate: any, onComplete: any) {
    let newBegin = Object.assign({}, begin);
    // console.log(newBegin, end, "newBegin");
    let tween = gsap
      .to(newBegin, time, end)
      .eventCallback("onUpdate", (_) => onUpdate && onUpdate(newBegin))
      .eventCallback("onComplete", (_) => {
        onComplete && onComplete();
        gsap.killTweensOf(tween);
        // tween = null | undefined;
      });
    return tween;
  }
}

class MoveDom {
  //   dom: HTMLElement | null | Element;
  // 移动的目标dom
  parentDom: any | null;
  parentOffsetLeft = 0;
  parentOffsetTop = 0;
  isDown = false;
  domList: any | null;
  map: any;
  constructor(domList: any | null, parentDom: any | null) {
    this.domList = domList;
    this.parentDom = parentDom;
    console.log(this.domList, "domList");
    this.domList.map((doms: any) => {
      this.map[doms.className] = doms;
      console.log(doms, "doms");
      doms.addEventListener("mousedown", (e: any) => {
        this.down(e, doms);
      });
      console.log(this.map, "map");
    });
    // this.init();
  }
  down(e: any, dom: any) {
    // 鼠标按下事件
    // this.mouseOffsetX = e.offsetX;
    // this.mouseOffsetY = e.offsetY;
    console.log(this.map, "map");

    //开关打开
    this.isDown = true;
  }
  init() {
    //鼠标移动
    window.onmousemove = (e: any) => {
      if (!this.isDown) return;
      const { clientX, clientY } = e;
      const { offsetLeft, offsetTop, offsetHeight, offsetWidth } =
        this.parentDom;
      let left = clientX - offsetLeft - this.mouseOffsetX;
      let top = clientY - offsetTop - this.mouseOffsetY;
      if (left <= 0) {
        left = 0;
      }
      if (top <= 0) {
        top = 0;
      }
      if (left >= offsetWidth - this.dom.offsetWidth) {
        left = offsetWidth - this.dom.offsetWidth;
      }
      if (top >= offsetHeight - this.dom.offsetHeight) {
        top = offsetHeight - this.dom.offsetHeight;
      }
      this.dom.style.top = top + "px";
      this.dom.style.left = left + "px";
    };

    this.dom.onmouseup = () => {
      //开关关闭
      this.isDown = false;
    };
  }
}

class MoveDomSecond {
  dom: HTMLElement;
  parent: HTMLElement;
  constructor(dom: HTMLElement, parent: HTMLElement) {
    dom.addEventListener("mousedown", this.down);
    window.addEventListener("mouseup", this.up);
    window.addEventListener("mousemove", this.move);
    this.dom = dom;
    this.parent = parent;
  }
  local = {
    x: 0,
    y: 0,
  };
  private isDown = false;
  private down = (e: MouseEvent) => {
    const { offsetX, offsetY } = e;
    this.local.x = offsetX;
    this.local.y = offsetY;
    this.isDown = true;
  };

  private move = (e: MouseEvent) => {
    if (!this.isDown) return;
    const { clientX, clientY } = e;
    const { offsetLeft, offsetTop, offsetHeight, offsetWidth } = this.parent;
    let left = clientX - offsetLeft - this.local.x;
    let top = clientY - offsetTop - this.local.y;
    if (left <= 0) {
      left = 0;
    }
    if (left >= offsetWidth - this.dom.offsetWidth) {
      left = offsetWidth - this.dom.offsetWidth;
    }
    if (top <= 0) {
      top = 0;
    }
    if (top >= offsetHeight - this.dom.offsetHeight) {
      top = offsetHeight - this.dom.offsetHeight;
    }
    this.dom.style.left = left + "px";
    this.dom.style.top = top + "px";
  };
  private up = () => {
    this.isDown = false;
  };
}

class MoveMoreDom {}
