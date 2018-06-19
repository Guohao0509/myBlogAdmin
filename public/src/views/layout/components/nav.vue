<template>
  <div class="nav-wrapper">
    <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :collapse="isCollapse"
      :router="true"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="tag">
        <template slot="title" style="height:50px;">
          <i class="el-icon-star-off"></i>
          <span>标签管理</span>
        </template>
        <el-menu-item index="/dashboard/tagList">
          标签列表
        </el-menu-item>
        <el-menu-item index="/dashboard/addTag">
          添加标签
        </el-menu-item>
      </el-submenu>
      <el-submenu index="article">
        <template slot="title" style="height:50px;">
          <i class="el-icon-document"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item index="/dashboard/articleList">
          文章列表
        </el-menu-item>
        <el-menu-item index="/dashboard/addArticle">
          添加文章
        </el-menu-item>
      </el-submenu>
      <el-submenu index="comment">
        <template slot="title" style="height:50px;">
          <i class="el-icon-edit-outline"></i>
          <span>评论管理</span>
        </template>
        <el-menu-item index="/dashboard/commentList">
          评论列表
        </el-menu-item>
      </el-submenu>
      <el-submenu index="user">
        <template slot="title" style="height:50px;">
          <i class="el-icon-service"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/dashboard/userList">
          用户列表
        </el-menu-item>
        <el-menu-item index="/dashboard/addUser">
          添加用户
        </el-menu-item>
      </el-submenu>
      <el-submenu index="admin">
        <template slot="title" style="height:50px;">
          <i class="el-icon-view"></i>
          <span>系统管理员</span>
        </template>
        <el-menu-item index="/dashboard/adminList">
          管理员列表
        </el-menu-item>
        <el-menu-item index="/dashboard/addAdmin">
          添加管理员
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
  }
  .nav-wrapper {
    width: 250px;
    overflow-y: scroll;
    height: 100%;
  }
</style>

<script>
export default {
  name: 'myNav',
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
