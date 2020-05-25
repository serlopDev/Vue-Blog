<template>
<div>
    <Jumbotron text='Blog'/>
<div class="content">
    <section id="articles" class="articles">
        <h2 class="generalTitle">Blog</h2>
        <Articles :articles="articles"/>
    </section>
    <Sidebar/>
</div>
</div>
</template>

<script>
import Global from '../../Global';
import axios from 'axios';
import Jumbotron from '../Jumbotron/Jumbotron';
import Sidebar from '../Sidebar/Sidebar';
import Articles from '../Articles/Articles';

export default {
    name: 'Blog',
    components: {Jumbotron, Sidebar, Articles},

    mounted(){
        this.getArticles();
    },

    data() {
        return{
        url: Global.url,
        articles: null
        }
    },

    methods: {
        getArticles(){
            axios.get(this.url + 'articles')
                .then(res => {
                    this.articles = res.data.articles;
                }).catch(err => {
                    console.log('Ha ocurrido un error: ' + err);
                })
        }
    }
}
</script>