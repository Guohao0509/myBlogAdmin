<template>

  <el-form ref="form" :model="form" label-width="80px" size="small" >
    <el-form-item label="用户邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password"></el-input>
    </el-form-item>
    <el-form-item label="头像">
      <el-input v-model="form.profile"></el-input>
    </el-form-item>
    <el-form-item label="昵称">
      <el-input v-model="form.nickname"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button>取消</el-button>
      <el-button type="primary" @click="submit">确定修改</el-button>
    </el-form-item>
  </el-form>
  
</template>

<script>
export default {
  name: 'editUser',
  props: {

  },
  data () {
    return {
      form: {
        email: '',
        password: '',
        profile: '',
        nickname: ''
      },
      userId: '',
      password: ''
    }
  },
  created () {
    // 接收个路由传值来的tagId;
    this.userId = this.$route.params.userId;
    this.getUserById();
  },
  methods: {
    getUserById() {
      this.$http({
        type: 'post',
        url: 'api/user/getUserById',
        params: {userId: this.userId},
        success: (data) => {
          this.form.email = data.email;
          this.form.password = data.password;
          this.form.profile = data.profile;
          this.form.nickname = data.nickname;
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    submit() {
      if (this.password) {
        this.form.password = this.$md5(this.password);
      }
      this.$http({
        type: 'post',
        url: 'api/user/update',
        params: {
          userId: this.userId,
          email: this.form.email,
          password: this.form.password,
          profile: this.form.profile,
          nickname: this.form.nickname
        },
        success: (data) => {
          this.$message({
            message: '用户修改成功',
            type: 'success'
          });
          this.$router.push({name: 'userList'});
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

