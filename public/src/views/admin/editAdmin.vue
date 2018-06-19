<template>

  <el-form ref="form" :model="form" label-width="80px" size="small" >
    <el-form-item label="用户账户">
      <el-input v-model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password"></el-input>
    </el-form-item>
    <el-form-item label="昵称">
      <el-input v-model="form.adminName"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button>取消</el-button>
      <el-button type="primary" @click="submit">立即创建</el-button>
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
        account: '',
        password: '',
        adminName: ''
      },
      adminId: '',
      password: ''
    }
  },
  created () {
    // 接收个路由传值来的tagId;
    this.adminId = this.$route.params.adminId;
    this.getAdminById();
  },
  methods: {
    getAdminById() {
      this.$http({
        type: 'post',
        url: 'api/admin/getAdminById',
        params: {adminId: this.adminId},
        success: (data) => {
          this.form.account = data.account;
          this.form.password = data.password;
          this.form.adminName = data.adminName;
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
        url: 'api/admin/update',
        params: {
          adminId: this.adminId,
          account: this.form.account,
          password: this.form.password,
          adminName: this.form.adminName
        },
        success: (data) => {
          this.$message({
            message: '管理员修改成功',
            type: 'success'
          });
          this.$router.push({name: 'adminList'});
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

