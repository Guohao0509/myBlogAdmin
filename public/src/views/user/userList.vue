<template>

  <table-page url="api/user/list" ref="tablePage">
    <template slot="columns">
      <el-table-column label="用户ID" prop="userId" width="260px;"></el-table-column>
      <el-table-column label="用户邮箱" prop="email"></el-table-column>
      <!-- <el-table-column label="密码" prop="password"></el-table-column> -->
      <el-table-column label="头像" prop="profile"></el-table-column>
      <el-table-column label="昵称" prop="nickname"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="tiny" @click="editUser(scope.row.userId)">编辑</el-button>
          <el-button size="tiny" type="danger" @click="deleteUser(scope.row.userId)">删除</el-button>
        </template>
      </el-table-column>
    </template>
  </table-page>
  
</template>

<script>
import TablePage from '@/components/TablePage';

export default {
  name: 'userList',
  components: {
    TablePage
  },
  methods: {
    editUser(userId) {
      // 这里不能用name
      this.$router.push({path: `/dashboard/editUser/${userId}`});
    },
    deleteUser(userId) {
      this.$confirm('确认删除用户', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          type: 'post',
          url: 'api/user/delete',
          params: {
            userId: userId
          },
          success: (data) => {
            this.$refs.tablePage.reloadTable();
            this.$message({
              message: '用户删除成功',
              type: 'success'
            });
          },
          error: (err) => {
            console.log(err);
          }
        });
      }).catch(() => {
        this.$message({
          message: '已取消删除',
          type: 'info'
        });          
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
