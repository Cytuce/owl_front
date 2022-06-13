import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import User from '../components/user'
import PhoneAssist from '../components/PhoneAssist'
import RecordList from '../components/RecordList'
import Login from '../components/Login'
import OA from '../components/OA'
import Main from '../components/Main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/user',
    name: 'user',
    component: User
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/OA',
    name: 'OA',
    component: OA
  }, {
    path: '/Main',
    name: 'Main',
    component: Main,
    redirect: {name: 'Home'},
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: Home
      },
      {
        path: 'recordList',
        name: 'recordList',
        component: RecordList
      }, {
        path: 'phoneAssist',
        name: 'phoneAssist',
        component: PhoneAssist
      }
    ]
  }
  ]
})
