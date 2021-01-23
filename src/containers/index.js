import {lazy} from 'react';

const SigninPage = lazy(() => import('./signin/signin.component'))
const DashboardPage = lazy(() => import('./dashboard/dashboard.component'))
const MenuPage = lazy(() => import('./menu/menu.component'))

export {
    SigninPage,
    DashboardPage,
    MenuPage
}