<template>

  <table-page url="api/tag/list" ref="tablePage" style="width: 50%">
    <template slot="columns">
      <el-table-column label="标签ID" prop="tagId" width="260px;"></el-table-column>
      <el-table-column label="标签名称" prop>
        <template slot-scope="scope">
          <el-tag size="mini" :type="scope.row.styles">{{ scope.row.tagName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="tiny" @click="editTag(scope.row.tagId)">编辑</el-button>
          <el-button size="tiny" type="danger" @click="deleteTag(scope.row.tagId)">删除</el-button>
        </template>
      </el-table-column>
    </template>
  </table-page>
  
</template>

<script>
import TablePage from '@/components/TablePage';
export default {
  name: 'tagList',
  components: {
    TablePage
  },
  methods: {
    editTag(tagId) {
      // 这里不能用name
      this.$router.push({path: `/dashboard/editTag/${tagId}`});
    },
    deleteTag(tagId) {
      this.$confirm('确认删除标签', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          type: 'post',
          url: 'api/tag/delete',
          params: {
            tagId: tagId
          },
          success: (data) => {
            this.$refs.tablePage.reloadTable();
            this.$message({
              message: '标签删除成功',
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

