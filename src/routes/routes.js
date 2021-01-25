import {
    DashboardPage,
    LeadsPage,
    CustomersPage,
    SettingsPage
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
      component: LeadsPage,
      icon: <UsergroupAddOutlined />
    },
    {
        name: 'Customers',
        path: '/customers',
        component: CustomersPage,
        icon: <TeamOutlined />
    },
    {
        name: 'Settings',
        path: '/settings',
        component: SettingsPage,
        icon: <SettingOutlined />
      }
  ]