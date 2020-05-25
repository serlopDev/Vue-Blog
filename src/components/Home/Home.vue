<template>
<div>
    <Jumbotron text='Bienvenidos a mi blog' home='true'/>
<div class="content">
    <section id="articles" class="articles">
        <h2 class="generalTitle">Últimos artículos</h2>
        <Articles :articles="articles"/>
    </section>
    <Sidebar/>
</div>
</div>
</template>

<script>
import Jumbotron from '../Jumbotron/Jumbotron';
import Sidebar from '../Sidebar/Sidebar';
import Articles from '../Articles/Articles';
import Global from '../../Global';
import Axios from 'axios';

export default {
    name: 'Home',
    components: {Jumbotron, Sidebar, Articles},
    mounted(){
        this.getLastArticles()
    },
    data(){
        return{
            url: Global.url,
            articles: null
        }
    },
    methods: {
        getLastArticles(){
            Axios.get(this.url + 'articles/true')
            .then(res => {
                this.articles = res.data.articles;
            }).catch(err => {
                console.log('Ha ocurrido el siguiente error: ' + err)
            })
        }
    }
}
</script>