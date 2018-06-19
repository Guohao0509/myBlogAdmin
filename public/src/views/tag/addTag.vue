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
      <el-button type="primary" @click="submit">确定添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'addTag',
  props: {

  },
  data () {
    return {
      form: {
        tagName: '',
        styles: ''
      }
    }
  },
  methods: {
    submit() {
      this.$http({
        type: 'post',
        url: 'api/tag/add',
        params: this.form,
        success: (data) => {
          this.$reload();
          this.$message({
            message: '标签添加成功',
            type: 'success'
          });
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

