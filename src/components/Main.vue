<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4"><i class="left">猫头鹰助理</i></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4">
          <el-popover
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          class="right">
          <el-button slot="reference">Shawn</el-button>
        </el-popover>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="activeIndex"
          class="el-menu-vertical-demo"
          @select="handleSelect">
          <el-menu-item index="/home">
            <i class="el-icon-s-home"> 首页</i>
          </el-menu-item>
          <el-menu-item index="/phoneAssist">
            <i class="el-icon-phone-outline"> 电话辅销</i>
          </el-menu-item>
          <el-menu-item index="/recordList">
            <i class="el-icon-document"> 记录列表</i>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === this.$route.path) {
        return
      }
      this.$router.push(key)
    }
  }
}

</script>

<style scoped>
/*.el-container{height:100%;padding:0;margin:0;width:100%;}*/

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 800px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  height: 800px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.right {
  position: absolute;
  right: 25px;
  /*width: 300px;*/
  /*border: 3px solid #73AD21;*/
  /*padding: 10px;*/
}

.left {
  position: absolute;
  left: 25px;
  /*width: 300px;*/
  /*border: 3px solid #73AD21;*/
  /*padding: 10px;*/
}

</style>
