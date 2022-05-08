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
  cc = (() => {
    let com = document.createElement("input");
    com.type = `file`;
    let targerr = (files: File[]) => {};
    com.addEventListener("change", (e: any) => {
      e.target && targerr([...e.target.files]);
    });
    return {
      test(cb: (fils: File[]) => void) {
        targerr = cb;
        com.click();
      },
    };
  })();
}

let tool = new Tool();

export default tool;
