<template src='./Blog.html'></template>

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