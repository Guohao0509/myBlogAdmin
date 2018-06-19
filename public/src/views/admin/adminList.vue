<template>

  <table-page url="api/admin/list" ref="tablePage">
    <template slot="columns">
      <el-table-column label="管理员ID" prop="adminId" width="260px;"></el-table-column>
      <el-table-column label="账户" prop="account"></el-table-column>
      <el-table-column label="昵称" prop="adminName"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="tiny" @click="editAdmin(scope.row.adminId)">编辑</el-button>
          <el-button size="tiny" type="danger" @click="deleteAdmin(scope.row.adminId)">删除</el-button>
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
    editAdmin(adminId) {
      this.$router.push({path: `/dashboard/editAdmin/${adminId}`});
    },
    deleteAdmin(adminId) {
      this.$confirm('确认删除管理员', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          type: 'post',
          url: 'api/admin/delete',
          params: {
            adminId: adminId
          },
          success: (data) => {
            this.$refs.tablePage.reloadTable();
            this.$message({
              message: '管理员删除成功',
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
