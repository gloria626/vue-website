// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Entry from './components/Entry.vue'
import EnrollForm from './components/EnrollForm.vue'
import Student from './Student'
import About from './components/About'
import Home from './components/Home'
import News from './components/News'
import Notice from './components/Notice'
import Rule from './components/Rule'




Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Rule',
      component: Rule
    },
    {
      path: '/News',
      component: News
    },
    {
      path: '/Notice',
      component: Notice
    },
    {
      path: '/Student',
      component: Student,
      children: [
        { path: 'EnrollForm',  component: EnrollForm },
        { path: 'Entry', component: Entry }
      ]
    },
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')