<template>
  <el-container>
    <el-header>
      <!-- 头部 -->
      <my-header></my-header>
    </el-header>
    <el-container>
      <el-aside width="180px" style="overflow: hidden;">
        <!-- 导航栏 -->
        <my-nav></my-nav>
      </el-aside>
      <el-container>
        <!-- 面包屑导航条 -->
        <my-breadcrumb></my-breadcrumb>
        <!-- app 主体 -->
        <el-main>
          <div id="main">
            <transition name="fade">
              <router-view/>
            </transition>
          </div>
        </el-main>
        <el-footer>
          2016 © www.ghao.com
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

import myNav from './components/nav.vue';
import myHeader from './components/header.vue';
import myBreadcrumb from './components/myBreadcrumb.vue';

export default {
  name: 'layout',
  components: {
    myNav,
    myHeader,
    myBreadcrumb
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
  } 
  .el-header {
    height: 50px !important;
    line-height: 50px;
    background-color: #373d41;
    padding: 0;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-footer {
    height: 35px !important;
    background-color: #eee;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
    color: #313131;
  }
  .el-main {
    background-color: #fff;
  }
  .my-popper {
    padding: 0px !important;
    background-color: #eee;
  }

  /** 路由切换的过度动画 **/
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>
