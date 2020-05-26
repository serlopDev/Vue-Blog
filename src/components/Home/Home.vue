<template src='./Home.html'></template>

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