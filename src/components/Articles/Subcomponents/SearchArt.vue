<template>
<div>
    <Jumbotron text='Blog'/>
<div class="content">
    <section id="articles" class="articles" v-if="articles">
        <h2 class="generalTitle">Articulos encontrados</h2>
        <Articles :articles="articles"/>
    </section>
    <section id="articles" class="articles" v-else>
        <h2 class="generalTitle">La búsqueda no ha dado resultados</h2>
        <p>El artículo que buscas no existe</p>
        <Articles :articles="articles"/>
    </section>
    <Sidebar/>
</div>
</div>
</template>

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