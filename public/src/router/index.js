import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
let _import = require('./import.' + process.env.NODE_ENV);

Vue.use(Router);

var router =  new Router({
  
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: _import('login/login')
    },
    {
      path: '/dashboard',
      name: 'layout',
      meta: {
        name: '首页'
      },
      component: _import('layout/layout'),
      children: [
        {
          path: 'userList',
          name: 'userList',
          meta: {
            name: '用户列表'
          },
          component: _import('user/userList')
        },
        {
          path: 'addUser',
          name: 'addUser',
          meta: {
            name: '添加用户'
          },
          component: _import('user/addUser')
        },
        {
          path: 'editUser/:userId',
          name: 'editUser',
          meta: {
            name: '编辑用户'
          },
          component: _import('user/editUser')
        },
        {
          path: 'commentList',
          name: 'commentList',
          meta: {
            name: '评论列表'
          },
          component: _import('comment/commentList')
        },
        {
          path: 'adminList',
          name: 'adminList',
          meta: {
            name: '管理员列表'
          },
          component: _import('admin/adminList')
        },
        {
          path: 'addAdmin',
          name: 'addAdmin',
          meta: {
            name: '添加管理员'
          },
          component: _import('admin/addAdmin')
        },
        {
          path: 'editAdmin/:adminId',
          name: 'editAdmin',
          meta: {
            name: '编辑管理员'
          },
          component: _import('admin/editAdmin')
        },
        {
          path: 'articleList',
          name: 'articleList',
          meta: {
            name: '文章列表'
          },
          component: _import('article/articleList')
        },
        {
          path: 'addArticle',
          name: 'addArticle',
          meta: {
            name: '添加文章'
          },
          component: _import('article/addArticle')
        },
        {
          path: 'editArticle/:articleId',
          name: 'editArticle',
          meta: {
            name: '编辑文章'
          },
          component: _import('article/editArticle')
        },
        {
          path: 'tagList',
          name: 'tagList',
          meta: {
            name: '标签列表'
          },
          component: _import('tag/tagList')
        },
        {
          path: 'addTag',
          name: 'addTag',
          meta: {
            name: '添加标签'
          },
          component: _import('tag/addTag')
        },
        {
          path: 'editTag/:tagid',
          name: 'editTag',
          meta: {
            name: '编辑标签'
          },
          component: _import('tag/editTag')
        },
        {
          path: 'mine',
          name: 'mine',
          meta: {
            name: '测试路由'
          },
          component: _import('mine/mine')
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // ...
  next();
  // router.push({path: '/login'});
});

export default router;
