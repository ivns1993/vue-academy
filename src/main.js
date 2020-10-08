import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Contacts from './pages/Contacts.vue'
import AddContact from './pages/AddContact.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/contacts' },
  { path: '/contacts', component: Contacts, name: 'contacts' },
  { path: '/contacts/:id', component: Contacts, name: 'contact-details' },
  { path: '/add-contact', component: AddContact },
  { path: '/edit-contact/:id', component: AddContact, name: 'edit' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.filter('toUpperCase', function(value, shouldFormatToUpperCase) {
  if (!shouldFormatToUpperCase) {
    return value;
  }

  return value.toUpperCase();
})

Vue.filter('toLowerCase', function(value) {
  return value.toLowerCase();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
