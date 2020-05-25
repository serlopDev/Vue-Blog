<template>
    <div v-if="articles && articles.length >= 1">
        <article class="article-item" id="article-item" v-for="article in articles" :key="article._id">
            <div class="image-wrap">
                <img class="imgArt" :src="url + 'get-image/' + article.image" alt="foto-artículo" v-if="article.image">
                <img class="imgArt" src="../../assets/images/unnamed.png" alt="foto-artículo" v-if="!article.image">
            </div>
            <div class="articleText">
            <h2>{{article.title}}</h2>
            <span class="dateArt">{{article.date | moment('from', 'now')}}</span>
            <a href="/article.html">Leer más</a>
            </div>
        </article>
    </div>
    <div v-else-if="articles && articles.length < 1">
        No hay artículos para msotrar
    </div>
    <div v-else>
        <h1 class="loading-title">Cargando...</h1>
        <img src='../../assets/images/loading/cargando.gif' alt='Cargando artículos' class="loading-logo"/>
    </div>
</template>
<script>
import Global from '../../Global'
export default {
    data() {return{ url: Global.url}},
    props: ["articles"],
}
</script>