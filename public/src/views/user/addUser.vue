<template>

  <el-form ref="form" :model="form" label-width="80px" size="small" >
    <el-form-item label="用户邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="头像">
      <el-input v-model="form.profile"></el-input>
    </el-form-item>
    <el-form-item label="昵称">
      <el-input v-model="form.nickname"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button>取消</el-button>
      <el-button type="primary" @click="submit">立即添加</el-button>
    </el-form-item>
  </el-form>
  
</template>

<script>

export default {
  name: 'addUser',
  props: {

  },
  data () {
    return {
      form: {
        email: '',
        password: '',
        profile: '',
        nickname: ''
      }
    }
  },
  methods: {
    submit() {
      var password = this.$md5(this.form.password);
      this.$http({
        type: 'post',
        url: 'api/user/add',
        params: {
          email: this.form.email,
          password: password,
          profile: this.form.profile,
          nickname: this.form.nickname
        },
        success: (data) => {
          this.$message({
            message: '用户添加成功',
            type: 'success'
          });
          this.$reload();
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

