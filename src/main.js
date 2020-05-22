import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles/LastArticles.vue'
import Blog from './components/Blog/Blog.vue'
import Formulario from './components/Formulario/Formulario.vue'
import Peliculas from './components/Peliculas/Peliculas.vue'
import Pagina from './components/Pagina/Pagina.vue'
import ErrorComponent from './components/ErrorComponent/ErrorComponent.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: LastArticles},
  {path: '/inicio', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/formulario', component: Formulario},
  {path: '/peliculas', component: Peliculas},
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '*', component: ErrorComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
