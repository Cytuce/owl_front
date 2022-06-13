<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }" class="el-icon-s-home"></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/#/Main/phoneAssist">电话辅销</a></el-breadcrumb-item>
    </el-breadcrumb>
    <el-row><br></el-row>
    <el-row>
      <el-col :span="4"><el-button type="primary">开始对话</el-button>  <i class="el-icon-microphone"></i>
      <el-col :span="4"></el-col></el-col>
      <el-col :span="4"></el-col>
      <el-col :span="4"></el-col>
      <el-col :span="4"></el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <br>
    <div class="communicate_box">
      <el-scrollbar style="height:100%">
      <el-card class="box-card">
        <el-card class="box-card" v-for="item in list" :key="item">
          <div v-for="o in item" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-card>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneAssist',
  data () {
    return {
      list: [
        {
          name: 'zjh',
          para: 'xsaxsaxsa'
        }, {
          xsax: 'xsa',
          xsa: '111'
        }, {
          xsax: 'xsa',
          xsa: '111'
        }, {
          xsax: 'xsa',
          xsa: '111'
        }, {
          xsax: 'xsa',
          xsa: '111'
        }, {
          xsax: 'xsa',
          xsa: '111'
        }
      ]
    }
  }
}
</script>

<style>
.communicate_box{
  overflow: hidden;
  margin: 0 auto;
  width: auto;
  height: 570px;
  color: #B3C0D1;
  /*margin: 0 auto;*/
}

/*.scrollMenuBox {*/
/*  height: 200px;*/
/*  width: 100px;*/
/*  border: 1px solid red;*/
/*}*/

/* 需要在外层套一个div,切记命名特殊一点,防止因缺少scoped，对其他页面会有冲突 */
.center .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
