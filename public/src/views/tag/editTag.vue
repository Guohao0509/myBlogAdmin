<template>

  <el-form ref="form" :model="form" label-width="80px" size="small" >
    <el-form-item label="标签名称">
      <el-input v-model="form.tagName"></el-input>
    </el-form-item>
    <el-form-item label="标签风格">
      <el-select
        v-model="form.styles"
        placeholder="请选择文章标签">
        <el-option value="default">
          <el-tag type="default">default</el-tag>
        </el-option>
        <el-option value="success">
          <el-tag type="success">success</el-tag>
        </el-option>
        <el-option value="info">
          <el-tag type="info">info</el-tag>
        </el-option>
        <el-option value="warning">
          <el-tag type="warning">warning</el-tag>
        </el-option>
        <el-option value="danger">
          <el-tag type="danger">danger</el-tag>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="预览标签">
      <el-tag :type="form.styles">{{ form.tagName || '标签' }}</el-tag>
    </el-form-item>
    <el-form-item>
      <el-button>取消</el-button>
      <el-button type="primary" @click="submit">确定编辑</el-button>
    </el-form-item>
  </el-form>
  
</template>

<script>
export default {
  name: 'editTag',
  data () {
    return {
      form: {
        tagName: '',
        styles: '',
        tagId: ''
      }
    }
  },
  created () {
    // 接收个路由传值来的tagId;
    this.form.tagId = this.$route.params.tagid;
    this.getTagById();
  },
  methods: {
    getTagById() {
      this.$http({
        type: 'post',
        url: 'api/tag/getTagById',
        params: {tagId: this.form.tagId},
        success: (data) => {
          this.form.tagName = data.tagName;
          this.form.styles = data.styles;
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    submit() {
      this.$http({
        type: 'post',
        url: 'api/tag/update',
        params: this.form,
        success: (data) => {
          this.$message({
            message: '标签修改成功',
            type: 'success'
          });
          this.$router.push({name: 'tagList'});
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
  .el-select-dropdown .el-tag {
    width: 100%;
    text-align: center;
  }
</style>

