<template>
  <div class="publish-container" style="margin: 100px auto">
    <!--    <el-dialog :title="title" :visible.sync="open" width="60%" append-to-body>-->
    <el-form :model="videoForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="上传视频" prop="videoUrl">
        <!-- action必选参数, 上传的地址 -->
        <el-upload class="avatar-uploader el-upload--text"
                   :action="videoUploadUrl"
                   :show-file-list="false"
                   :on-success="handleVideoSuccess"
                   :before-upload="beforeUploadVideo"
                   :on-progress="uploadVideoProcess">
          <video v-if="videoForm.videoUrl != '' && videoFlag == false"
                 :src="videoForm.videoUrl"
                 class="avatar"
                 controls="controls"
          >您的浏览器不支持视频播放
          </video>
          <i v-else-if="videoForm.videoUrl == '' && videoFlag == false"
             class="el-icon-plus avatar-uploader-icon"></i>
          <el-progress v-if="videoFlag == true"
                       type="circle"
                       :percentage="videoUploadPercent"
                       style="margin-top:30px;"></el-progress>
        </el-upload>
      </el-form-item>
      <el-form-item label="视频标题" prop="name">
        <el-input v-model="videoForm.name"></el-input>
      </el-form-item>
      <el-form-item label="视频分类" prop="resource">
        <el-radio-group v-model="videoForm.resource">
          <el-radio label="VLOG"></el-radio>
          <el-radio label="番剧"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="视频简介" prop="desc">
        <el-input type="textarea" v-model="videoForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
      </el-form-item>
    </el-form>
    <!--    </el-dialog>-->
    <!--    <el-button @click="clickPublishVideo" type="primary">发布</el-button>-->
  </div>
</template>

<script>
// 接口引入
import {publishVideo} from "@/api/video";
// 七牛引入
import * as qiniu from "qiniu-js";

export default {
  name: "Publish",
  data() {
    return {
      title: "发布视频",
      open: false,
      videoFlag: false,
      form: {},
      videoUploadUrl: "http://39.101.67.45:9090/video/api/v1/upload",
      videoUploadPercent: undefined,
      videoForm: {
        name: '',
        videoUrl: '',
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        desc: [
          {required: true, message: '请填写活动形式', trigger: 'blur'}
        ]
      }
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
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
      if (res.status === 200) {
        console.log(res.data)
        this.videoForm.videoUrl = res.data.videoUrl
      } else {
        this.$message.error('视频上传失败，请重新上传！')
      }
    },
    clickPublishVideo() {
      this.open = true
      // publishVideo(this.form).then(res => {
      //   if (res.code === 200) {
      //     console.log(res)
      //   }
      // })
    }
  }
};
</script>

<style scoped lang="less">
.avatar-uploader-icon {
  border: 1px dashed #d9d9d9 !important;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9 !important;
  border-radius: 6px !important;
  position: relative !important;
  overflow: hidden !important;
}

.avatar-uploader .el-upload:hover {
  border: 1px dashed #d9d9d9 !important;
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 300px;
  height: 178px;
  display: block;
}

</style>

