<template>

  <el-form ref="form" :model="form" label-width="80px" size="small" >
    <el-form-item label="文章名称">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="文章作者">
      <el-input v-model="form.author"></el-input>
    </el-form-item>
    <el-form-item label="绑定标签">
      <el-select
        multiple
        v-model="tags"
        placeholder="">
        <el-option v-for="item in tagOptions" :key="item.tagId" :label="item.tagName" :value="item.tagId">
          <el-tag :type="item.styles">{{ item.tagName }}</el-tag>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章简介">
      <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 8}" placeholder="请输入文章简介" v-model="form.info">
      </el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <editor v-model="form.text"></editor>
    </el-form-item>
    <el-form-item>
      <el-button>取消</el-button>
      <el-button type="primary" @click="submit">确定修改</el-button>
    </el-form-item>
  </el-form>
  
</template>

<script>
import Editor from '@/components/Editor';
export default {
  name: 'editArticle',
  components: {
    Editor
  },
  data () {
    return {
      form: {
        title: '',
        author: '',
        text: '',
        info: ''
      },
      articleId: '',
      tags:[],
      tagOptions: []
    }
  },
  created () {
    // 接收个路由传值来的tagId;
    this.articleId = this.$route.params.articleId;
    this.getArticleById();
    this.getTagList();
    
  },
  methods: {
    getTagList() {
      this.$http({
        type: 'get',
        url: 'api/tag/all',
        success: (data) => {
          this.tagOptions = data.list;
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    getArticleById() {
      this.$http({
        type: 'post',
        url: 'api/article/getArticleById',
        params: {articleId: this.articleId},
        success: (data) => {
          this.form.title = data.title;
          this.form.author = data.author;
          this.form.info = data.info;
          this.form.text = data.text;
          this.tagOptions = data.tags;
          for (var i = 0; i < data.tags.length; i++) {
            this.tags[i] = data.tags[i].tagId;
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    submit() {
      for (var i = 0; i < this.tags.length; i++) {
        this.tags[i] = {tagId: this.tags[i]};
      }
      this.$http({
        type: 'post',
        url: 'api/article/update',
        params: {
          articleId: this.articleId,
          title: this.form.title,
          author: this.form.author,
          info: this.form.info,
          text: this.form.text,
          tags: JSON.stringify(this.tags)
        },
        success: (data) => {
          this.$message({
            message: '文章修改成功',
            type: 'success'
          });
          this.$router.push({name: 'articleList'});
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
  .pre-view {
    min-height: 400px;
    border: 1px solid #ddd;
    padding: 0px 20px;
    border-radius: 4px;
  }
  .el-tag {
    margin-right: 10px;
  }
  .el-select-dropdown .el-tag {
    width: 100%;
    text-align: center;
  }
</style>

