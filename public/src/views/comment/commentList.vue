<template>

  <table-page url="api/comment/list" ref="tablePage">
    <template slot="columns">
      <el-table-column label="评论ID" prop="commentId"></el-table-column>
      <el-table-column label="所属文章" prop="title"></el-table-column>
      <el-table-column label="评论用户" prop="nickname"></el-table-column>
      <el-table-column label="回复评论用户" prop="toNickname"></el-table-column>
      <el-table-column label="评论" prop="comment"></el-table-column>
      <el-table-column label="点赞数" prop="stars"></el-table-column>
      <el-table-column label="举报数" prop="tipOffs"></el-table-column>
      <el-table-column label="评论时间" prop="createTime"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="tiny" type="danger" @click="deleteComment(scope.row.commentId)">删除</el-button>
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
    deleteComment(commentId) {
      this.$confirm('确认删除此评论', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          type: 'post',
          url: 'api/comment/delete',
          params: {
            commentId: commentId
          },
          success: (data) => {
            this.$refs.tablePage.reloadTable();
            this.$message({
              message: '评论删除成功',
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

