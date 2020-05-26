import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home/Home.vue'
import Blog from './components/Blog/Blog.vue'
import Article from './components/Articles/Subcomponents/Article'
import CreateArticle from './components/Articles/Subcomponents/CreateArticle'
import EditArticle from './components/Articles/Subcomponents/EditArticle.vue'
import SearchArt from './components/Articles/Subcomponents/SearchArt'
import Redirect from './components/Redirect/Redirect'
import Formulario from './components/Formulario/Formulario.vue'
import Peliculas from './components/Peliculas/Peliculas.vue'
import Pagina from './components/Pagina/Pagina.vue'
import ErrorComponent from './components/ErrorComponent/ErrorComponent.vue'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);
const moment = require('moment')
require('moment/locale/es');
Vue.use(require('vue-moment'), {
  moment
})

const routes = [
  {path: '/', component: Home},
  {path: '/inicio', component: Home},
  {path: '/blog', component: Blog},
  {path: '/blog/busqueda/:searchString', component: SearchArt},
  {path: '/blog/articulo/:id', name:'article', component: Article},
  {path: '/blog/crear-articulo/', component: CreateArticle},
  {path: '/blog/editar-articulo/:id', name: 'editar', component: EditArticle},
  {path: '/redirect/:searchString', component: Redirect},
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
