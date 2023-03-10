import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './pages/LoginPage.vue'
import DashboardPage from './pages/DashboardPage.vue'
import RentPage from './pages/RentPage.vue'
import TasksPage from './pages/TasksPage.vue'
import ControlPage from './pages/ControlPage.vue'
import VideoPage from './pages/VideoPage.vue'
import ReportPage from './pages/ReportPage.vue'
import ProfilePage from './pages/ProfilePage.vue'
import ApplicationPage from './pages/ApplicationPage.vue'

const routes = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/',
    component: ControlPage
    // component: DashboardPage
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
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/application',
    component: ApplicationPage
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

