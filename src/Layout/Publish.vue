<template>
  <div class="publish-container">
    <el-form :model="videoForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="上传视频" prop="videoUrl">
        <!-- action必选参数, 上传的地址 -->
        <el-upload class="video-uploader"
                   :action="videoUploadUrl"
                   :show-file-list="false"
                   :headers="headers"
                   :limit="1"
                   :on-success="handleVideoSuccess"
                   :before-upload="beforeUploadVideo"
                   :on-progress="uploadVideoProcess">
          <video v-if="videoForm.videoUrl !== '' && videoFlag === false"
                 :src="videoForm.videoUrl"
                 class="video"
                 controls
          ></video>
          <div v-else-if="videoForm.videoUrl === '' && videoFlag === false" class="el-icon-plus video-uploader-icon">
            <Plus style="width: 1em; height: 1em;"/>
          </div>
          <el-progress v-if="videoFlag === true"
                       type="circle"
                       :percentage="videoUploadPercent"
                       style="margin-top:30px;"></el-progress>
          <img v-if="videoForm.videoUrl !== '' && videoFlag === false"
               :src="videoForm.coverImage"
               class="video"
          />
        </el-upload>
      </el-form-item>
      <el-form-item label="视频标题" prop="videoTitle">
        <el-input v-model="videoForm.videoTitle"></el-input>
      </el-form-item>
      <el-form-item label="视频简介" prop="videoDesc">
        <el-input type="textarea" v-model="videoForm.videoDesc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 接口引入
import {publishVideo} from "@/api/video";
// 七牛引入
import * as qiniu from "qiniu-js";
import {ElMessage} from "element-plus";

export default {
  name: "Publish",
  data() {
    return {
      title: "发布视频",
      videoFlag: false,
      videoUploadUrl: "http://localhost:9090/video/api/v1/upload",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAC2LUQrDIBBE77LfEap165rbaLOCgSSSNdBQevduIPM1b4b3hblXGAEDlXd4kiFnvfGFHyYHZFMwFp8tky4wQE0dRvuKpHERB5Ajqy2ndF6uX0Rx385pWxXTMSmm1rTzp6kaCN2tVv3c7w8QZaD7gQAAAA.yZsuNb-qHfy8jBDmpVsTtz2_OYiPmHtwS_2HHpXsxfln1HxEHxpMO0qSN11KbPVVukZO0MuomaeFzrgJAMDMhA",
      },
      videoUploadPercent: undefined,
      // coverImage: '',
      videoForm: {
        videoTitle: '',
        videoUrl: '',
        coverImage: '',
        videoDesc: ''
      },
      rules: {
        videoTitle: [
          {required: true, message: '请输入视频标题', trigger: 'blur'},
          {min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur'}
        ],
        videoDesc: [
          {required: true, message: '请填写视频简介', trigger: 'blur'}
        ]
      }
    };
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.showVideoPlayer = true;
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          publishVideo(this.videoForm).then(res => {
            if (res.code === 200) {
              ElMessage({
                message: res.msg,
                type: 'success',
              })
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 验证视频格式
    beforeUploadVideo(file) {
      if ([
        'video/mp4',
        'video/ogg',
        'video/flv',
        'video/avi',
        'video/wmv',
        'video/rmvb',
        'video/mkv'
      ].indexOf(file.type) === -1) {
        this.$message.error('请上传正确的视频格式')
        return false
      }
    },
    // 上传进度显示
    uploadVideoProcess(event, file, fileList) {
      console.log(event.percent, file, fileList)
      this.videoFlag = true
      this.videoUploadPercent = Math.floor(event.percent)
    },
    // 获取上传地址
    handleVideoSuccess(res, file) {
      this.videoFlag = false
      this.videoUploadPercent = 0
      if (res.code === 200) {
        console.log(res.data)
        this.videoForm.videoUrl = res.data.videoUrl
        this.videoForm.coverImage = res.data.vframe
      } else {
        this.$message.error('视频上传失败，请重新上传！')
      }
    },
  }
};
</script>

<style scoped lang="less">
.publish-container {
  border-radius: 1rem;
  height: calc(100vh - 160px);
  backdrop-filter: blur(20px);
}

.video-uploader {
  width: 100%;

  .video-uploader-icon {
    border: 2px dashed darkblue !important;
    border-radius: 0.5rem;
    font-size: 28px;
    color: #8c939d;
    width: 100%;
    height: calc(100vw / 7);
    line-height: 180px;
    text-align: center;
  }

}

.video-uploader .el-upload:hover {
  border: 2px dashed #d9d9d9 !important;
  border-color: #409eff;
}

.video {
  width: 320px;
  height: 180px;
  border-radius: 1rem;
  display: block;
}

</style>

