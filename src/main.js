import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import CompaniesListPage from './pages/CompaniesListPage.vue'
import CompanyProfilePage from './pages/CompanyProfilePage.vue'
import UserAuthorizationPage from './pages/UserAuthorizationPage.vue'
import UserProfilePage from './pages/UserProfilePage.vue'
import UserRegistrationPage from './pages/UserRegistrationPage.vue'
import UsersListPage from './pages/UsersListPage.vue'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/about', component: AboutPage },
        { path: '/companylist', component: CompaniesListPage },
        { path: '/company', component: CompanyProfilePage },
        { path: '/userauthorization', component: UserAuthorizationPage },
        { path: '/user', component: UserProfilePage },
        { path: '/userregistration', component: UserRegistrationPage },
        { path: '/userlist', component: UsersListPage },
    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')