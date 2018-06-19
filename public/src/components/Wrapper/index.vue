<template>
  <div class="">
    
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    url: {
      type: String
    },
    params: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      total: 0
    }
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
  
</style>
