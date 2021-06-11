import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/home/Home.vue');
const Info = () => import('@/views/info/Info.vue');
const Setting = () => import('@/views/setting/Setting.vue');
const BaseSetting = () => import('@/views/setting/BaseSetting.vue');
const ImportExportSetting = () => import('@/views/setting/ImportExportSetting.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: "主页"
    }
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
    meta:{
      title: "主页-信息"
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
    meta:{
      title: "主页-设置"
    },
    children:[
      {
        path: '',
        name: 'BaseSetting',
        component: BaseSetting
      },
      {
        path: 'port',
        name: 'ImportExportSetting',
        component: ImportExportSetting
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  document.title = to.meta.title;
})

export default router
