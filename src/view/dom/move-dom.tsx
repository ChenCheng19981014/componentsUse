import { defineComponent } from "vue";
import "./../../assets/style/move-dom.less";

// 编辑器页面
export default defineComponent({
  name: "moveDom",
  mounted() {
    const dom = document.querySelector(".dom1");
    const domList = [
      document.querySelector(".dom1"),
      document.querySelector(".dom2"),
      document.querySelector(".dom3"),
      document.querySelector(".dom4"),
    ];
    const canvas = document.querySelector(".canvas");
    new MoveDom(domList, canvas);
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

class MoveDom {
  //   dom: HTMLElement | null | Element;
  // 移动的目标dom
  parentDom: any | null;
  parentOffsetLeft = 0;
  parentOffsetTop = 0;
  isDown = false;
  domList: any | null;
  mouseOffsetX: any | null;
  mouseOffsetY: any | null;
  map: { [type: string]: string } | any | null;
  dom: any | null;
  constructor(domList: any | null, parentDom: any | null) {
    this.domList = domList;
    this.parentDom = parentDom;
    console.log(this.domList, "domList");
    this.domList.map((doms: any) => {
      doms.addEventListener("mousedown", (e: any) => {
        this.down(e, doms);
      });
    });
    this.init();
  }
  down(e: any, dom: any) {
    e.stopPropagation();
    e.preventDefault();
    // 鼠标按下事件
    this.mouseOffsetX = e.offsetX;
    this.mouseOffsetY = e.offsetY;
    this.dom = dom;
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

      if (!this.dom) return;
      this.dom.onmouseup = () => {
        //开关关闭
        this.isDown = false;
      };
    };

    window.onmouseup = (e: any) => {
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
