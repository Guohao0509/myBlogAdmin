import axios from 'axios';
import qs from 'qs';
import config from '@/config';
var http = {};
var baseUrl = config.host;
var apiLoading = false;

http.install = function (Vue, options) {
  Vue.prototype.$http = function (config) {
    switch (config.type) {
      case 'get' :
        get(config.url, config.params, config.success, config.error);
        break;
      case 'post' :
        post(config.url, config.params, config.success, config.error);
        break;
    }
  }

  function get(url, params, success, error) {
    var loading = Vue.prototype.$loading({
      customClass: 'my-el-loading',
      spinner: 'el-icon-loading'
    });
    axios.get(baseUrl + url, {
        params: params
      })
      .then(function (response) {
        if (response.data.code == 0) {
          success && success(response.data.data);
        } else {
          error && error(response.data.data);
        }
        loading.close();
      })
      .catch(function (err) {
        console.log(err);
        if (!apiLoading) {
          apiLoading = true;
          Vue.prototype.$alert('请检查您的网络', '网络连接超时', {
            confirmButtonText: '确定',
            type: 'warning'
          });
        }
        loading.close();
      });
  }

  function post(url, params, success, error) {
    var loading = Vue.prototype.$loading({
      customClass: 'my-el-loading',
      spinner: 'el-icon-loading'
    });
    axios.post(baseUrl + url, qs.stringify(params))
      .then(function (response) {
        if (response.data.code == 0) {
          success && success(response.data.data);
        } else {
          error && error(response.data.data);
        }
        loading.close();
      })
      .catch(function (err) {
        console.log(err);
        if (!apiLoading) {
          apiLoading = true;
          Vue.prototype.$alert('请检查您的网络', '网络连接超时', {
            confirmButtonText: '确定',
            type: 'warning'
          });
        }
        loading.close();
      });
  }
}

export default http;