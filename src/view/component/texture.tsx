import { defineComponent, ref } from "vue";
import "../../assets/style/untils/texture.less";

export default defineComponent({
  mounted() {},
  setup: () => () => map.main(),
});

const map = {
  methods: () => {},

  main: () => (
    <div class="texture">
      {map.titleArea.coms()}
      {map.upLoadArea.coms()}
    </div>
  ),

  titleArea: {
    methods: {},
    coms: () => (
      <div class="title">
        <p>编辑贴图</p>
        <i class="iconfont icon-guanbi"></i>
      </div>
    ),
  },

  upLoadArea: {
    methods: {},
    coms: () => (
      <div class="upload-img">
        {map.uploadConfig.coms()}
        {map.uploadContent.coms()}
        {map.uploadImg.coms()}
      </div>
    ),
  },

  uploadConfig: {
    coms: () => (
      <div class="upload-config">
        <div class="left">
          <i class="iconfont icon-refresh"></i>
        </div>
        <div class="right">
          <i class="iconfont icon-xiazai"></i>
          <i class="iconfont icon-shanchu"></i>
        </div>
      </div>
    ),
  },

  uploadImg: {
    coms: () => (
      <div class="upload-texture">
        <img
          src="https://img0.baidu.com/it/u=2495658973,2184971954&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
          alt=""
        />
      </div>
    ),
  },

  uploadContent: {
    isShowUpLoad: ref(false),
    coms: () => (
      <div class="upload-content">
        {!map.uploadContent.isShowUpLoad ? (
          <div class="upload">
            <div>
              <div class="iconfont icon-jiahao"></div>
              <div>点击或拽到此处上传 支持 .jpg .png</div>
            </div>
            <input type="text" placeholder="...或在此处粘贴链接" />
          </div>
        ) : (
          <div class="upload-again">
            <div>
              <div class="iconfont icon-upload"></div>
              <div>重新上传</div>
            </div>
            <input type="text" placeholder="...或在此处粘贴链接" />
          </div>
        )}
      </div>
    ),
  },

  upLoadMenuConfig: {
    methods: {},
    coms: () => <div></div>,
  },
};
