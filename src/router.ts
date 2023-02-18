import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import DashboardPage from './pages/DashboardPage.vue'
import RentPage from './pages/RentPage.vue'
import TasksPage from './pages/TasksPage.vue'
import ControlPage from './pages/ControlPage.vue'
import VideoPage from './pages/VideoPage.vue'
import ReportPage from './pages/ReportPage.vue'

const routes = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/',
    component: DashboardPage
  },
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/rent',
    component: RentPage
  },
  {
    path: '/control',
    component: ControlPage
  },
  {
    path: '/video',
    component: VideoPage
  },
  {
    path: '/report',
    component: ReportPage
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})

