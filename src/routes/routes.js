import {
    DashboardPage
  } from './../containers'
import { TeamOutlined, UsergroupAddOutlined, SettingOutlined, DesktopOutlined } from '@ant-design/icons';

export const routes = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: DashboardPage,
      icon: <DesktopOutlined />
    },
    {
    name: 'Leads',
      path: '/leads',
      component: DashboardPage,
      icon: <UsergroupAddOutlined />
    },
    {
        name: 'Customers',
        path: '/customers',
        component: DashboardPage,
        icon: <TeamOutlined />
    },
    {
        name: 'Settings',
        path: '/settings',
        component: DashboardPage,
        icon: <SettingOutlined />
      }
  ]