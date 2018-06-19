<template>

  <el-form ref="form" :model="form" label-width="80px" size="small" >
    <el-form-item label="用户账户">
      <el-input v-model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
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
  name: 'addAdmin',
  props: {

  },
  data () {
    return {
      form: {
        account: '',
        password: '',
        adminName: ''
      }
    }
  },
  methods: {
    submit() {
      var password = this.$md5(this.form.password);
      this.$http({
        type: 'post',
        url: 'api/admin/add',
        params: {
          account: this.form.account,
          password: password,
          adminName: this.form.adminName
        },
        success: (data) => {
          this.$message({
            message: '管理员添加成功',
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

