import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'  
import en from './locales/en.json'
import ua from './locales/ua.json'

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

// i18n configuration
const messages = {
    en: en,
    ua: ua
  }
  
  // Get locale from localStorage, or default to 'en'
  let savedLocale = localStorage.getItem('language');
  const i18n = createI18n({
    legacy: false,   // you must specify 'legacy: false' option
    locale: savedLocale || 'en',
    messages
  })
  
  const app = createApp(App)
  app.use(router)
  app.use(i18n)    // <-- Using i18n
  
  app.mount('#app')