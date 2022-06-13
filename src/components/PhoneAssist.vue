<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }" class="el-icon-s-home"></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">电话辅销</a></el-breadcrumb-item>
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
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneAssist'
}
</script>

<style scoped>
.communicate_box{
  overflow: hidden;
  height: 300px;
  color: #B3C0D1;
}

.scrollMenuBox {
  height: 200px;
  width: 100px;
  border: 1px solid red;
}
</style>
