<template src='./SearchArt.html'></template>

<script>
import Global from '../../../Global';
import axios from 'axios';
import Jumbotron from '../../Jumbotron/Jumbotron';
import Sidebar from '../../Sidebar/Sidebar';
import Articles from '../../Articles/Articles';

export default {
    name: 'SearchArt',
    components: {Jumbotron, Sidebar, Articles},

    mounted(){
        this.searchString = this.$route.params.searchString;
        this.getArticlesBySearch(this.searchString);
    },

    data() {
        return{
        url: Global.url,
        articles: null,
        searchString: null
        }
    },

    methods: {
        getArticlesBySearch(){
            axios.get(this.url + 'search/' + this.searchString)
                .then(res => {
                    this.articles = res.data.articles;
                }).catch(err => {
                    console.log('Ha ocurrido un error: ' + err);
                })
        }
    }
}
</script>