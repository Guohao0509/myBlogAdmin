var dictionary = {};
var TagStyles = function(value) {
  switch (value) {
    case 'default': return '默认'; break;
    case 'warning': return '警告'; break;
    case 'info': return '信息'; break;
    case 'success': return '成功'; break;
    default : return '未知';
  }
}
TagStyles.DEFAULT = 'default';
TagStyles.WARNING = 'warning';
TagStyles.INFO = 'info';
TagStyles.SUCCESS = 'success';

dictionary.install = function (Vue, options) {
  Vue.prototype.$dictionary = {
    TagStyles
  }
}

export default dictionary;   