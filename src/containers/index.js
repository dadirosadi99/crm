import {lazy} from 'react';

const SigninPage = lazy(() => import('./signin/signin.component'))
const DashboardPage = lazy(() => import('./dashboard/dashboard.component'))
const MenuPage = lazy(() => import('./menu/menu.component'))
const LeadsPage = lazy(() => import('./leads/leads.component'))
const CustomersPage = lazy(() => import('./customers/customers.component'))
const SettingsPage = lazy(() => import('./settings/settings.component'))

export {
    SigninPage,
    DashboardPage,
    MenuPage,
    SettingsPage,
    LeadsPage,
    CustomersPage
}