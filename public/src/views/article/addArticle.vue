<template>

  <div>
    <el-form ref="form" :model="form" label-width="80px" size="small" >
      <el-form-item label="文章名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="添加标签">
        <el-select multiple  v-model="tags" placeholder="请选择文章标签">
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
        <el-button type="primary" @click="submit">确认创建</el-button>
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script>
import Editor from '@/components/Editor';
export default {
  name: 'addArticle',
  components: {
    Editor
  },
  props: {

  },
  data () {
    return {
      form: {
        title: '',
        author: '',
        text: '',
        info: ''
      },
      tags: [],
      tagOptions: []
    }
  },
  created() {
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
    submit() {
      for (var i = 0; i < this.tags.length; i++) {
        this.tags[i] = {tagId: this.tags[i]};
      }
      this.form.tags = JSON.stringify(this.tags);
      this.form.text = this.form.text;
      this.$http({
        type: 'post',
        url: 'api/article/add',
        params: this.form,
        success: (data) => {
          this.$message({
            message: '文章添加成功',
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
  .pre-view {
    min-height: 400px;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 4px;
  }
  .el-select-dropdown .el-tag {
    width: 100%;
    text-align: center;
  }
</style>

