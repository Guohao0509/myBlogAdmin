<template>

  <table-page url="api/article/list" ref="tablePage">
    <template slot="columns">
      <el-table-column label="文章ID" prop="articleId" width="260px;"></el-table-column>
      <el-table-column label="文章标题" prop="title"></el-table-column>
      <el-table-column label="作者" prop="author" width="100px;"></el-table-column>
      <el-table-column label="创建时间" prop="createTime" width="120px;"></el-table-column>
      <el-table-column label="修改时间" prop="updateTime" width="120px;"></el-table-column>
      <el-table-column label="标签">
        <template slot-scope="scope">
          <el-tag size="mini" v-for="item in scope.row.tags" :key="item.tagId" :type="item.styles">{{ item.tagName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="访问量" prop="visits" width="80px;"></el-table-column>
      <el-table-column label="点赞数" prop="stars" width="80px;"></el-table-column>
      <el-table-column label="收藏数" prop="keeps" width="80px;"></el-table-column>
      <el-table-column label="操作" width="150px;">
        <template slot-scope="scope">
          <el-button size="tiny" @click="editArticle(scope.row.articleId)">编辑 / 查看</el-button>
          <el-button size="tiny" type="danger" @click="deleteArticle(scope.row.articleId)">删除</el-button>
        </template>
      </el-table-column>
    </template>
  </table-page>
  
</template>

<script>
import TablePage from '@/components/TablePage';
export default {
  name: 'articleList',
  components: {
    TablePage
  },
  methods: {
    editArticle(articleId) {
      this.$router.push({path: `/dashboard/editArticle/${articleId}`});
    },
    
    deleteArticle(articleId) {
      this.$confirm('确认删除文章', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          type: 'post',
          url: 'api/article/delete',
          params: {
            articleId: articleId
          },
          success: (data) => {
            this.$refs.tablePage.reloadTable();
            this.$message({
              message: '文章删除成功',
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

<style lang="scss">
   .article-el-message-box {
    width: 850px !important;
    height: 600px;
    overflow-y: scroll;          
  }
  .el-tag {
    margin-right: 10px;
  }
</style>
