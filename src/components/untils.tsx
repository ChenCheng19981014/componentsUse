import { defineComponent } from "vue";

// 工具组件
class Tool {
  constructor() {}
  getImage = (() => {
    let com = document.createElement("input");
    com.type = `file`;
    let targerr = (files: File[]) => {};
    com.addEventListener("change", (e: any) => {
      e.target && targerr([...e.target.files]);
    });
    return {
      target(cb: (files: File[]) => void) {
        targerr = cb;
        com.click();
      },
    };
  })();

  getInputInfo = (() => {
    let dom = document.createElement("input");
    dom.type = "file";
    let targerr = (files: any) => {};
    dom.addEventListener("change", (e: any) => {
      console.log(e.target.files, "target---");
      e.target && targerr([...e.target.files]);
    });
    return {
      fn: (fn: any) => {
        targerr = fn;
        dom.click();
      },
    };
  })();

  getcc = (() => {
    let fn = (info: any) => {};
    let myFn = () => {
      let info = { name: "cc", age: 24 };
      fn(info);
    };
    return {
      cc: (fnCb: any) => {
        fn = fnCb;
        myFn();
      },
    };
  })();
}

let tool = new Tool();

export default tool;
