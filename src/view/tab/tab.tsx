import { defineComponent, ref } from 'vue';
import tool from '../../components/untils';
import until from '../component/until';
import './../../assets/style/tab.less';

// 配置页面
const config = {
  data: {
    // 参数
    param: {
      ls: ['属性', '场景配置', '编辑历史'],
      com: until.menu(['属性', '场景配置', '编辑历史']),
    },
    // 材质
    material: {
      ls: ['材质', '材质库'],
      com: until.menu(['材质', '材质库']),
    },
    // 脚本
    script: {
      ls: ['脚本', '脚本库', '脚本组'],
      com: until.menu(['脚本', '脚本库', '脚本组']),
    },
    // 状态
    state: {
      ls: ['状态', '状态库', '状态组'],
      com: until.menu(['状态', '状态库', '状态组']),
    },
  },
};

const imgUrl = ref('');

//将base64转换为文件
const dataURLtoFile = (dataurl: any, filename: any) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

// 编辑器页面
export default defineComponent({
  name: 'tab',
  setup: () => () => {
    return (
      <div class="tab">
        <div class="tab-change1 menu">
          <p>{config.data.param.com.selectVal.value}</p>
          {config.data.param.com.dom()}
        </div>
        <div class="tab-change2 menu">
          <p>{config.data.material.com.selectVal.value}</p>
          {config.data.material.com.dom()}
        </div>
        <div class="tab-change3 menu">
          <p>{config.data.script.com.selectVal.value}</p>
          {config.data.script.com.dom()}
        </div>
        <div class="tab-change4 menu">
          <p>{config.data.state.com.selectVal.value}</p>
          {config.data.state.com.dom()}
        </div>
        <div class="select-picture">
          <button
            onClick={() => {
              tool.getImage.target((files) => {
                if (files.length < 0) return;
                let reader = new FileReader();
                reader.readAsDataURL(files[0]);
                reader.onload = () => {
                  imgUrl.value = reader?.result as any;
                  // console.log(imgUrl.value,'imgUrl.value');
                  let img = dataURLtoFile(imgUrl.value, 'cc');
                  console.log(img, 'img');
                };
              });
            }}
          >
            选择图片
          </button>
          <img src={`${imgUrl.value ? imgUrl.value : ''}`} alt="" />
        </div>
      </div>
    );
  },
});
