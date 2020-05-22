<template>
<div>
    <Jumbotron text='Bienvenidos a mi blog' home='true'/>
<div class="content">
    <section id="articles" class="articles">
        <h2 class="generalTitle">Últimos artículos</h2>
        <article class="article-item" id="article-item">
            <div class="image-wrap">
                <img class="imgArt" src="../../assets/images/lp-header.jpg" alt="foto-artículo">
            </div>
            <div class="articleText">
                <h2>Árticulo de prueba</h2>
                <span class="dateArt">Hace 5 minutos</span>
                <a href="/article.html">Leer más</a>
            </div>
        </article>
    </section>
    <Sidebar/>
</div>
</div>
</template>

<script>
import Jumbotron from '../Jumbotron/Jumbotron';
import Sidebar from '../Sidebar/Sidebar';

export default {
    name: 'LastArticles',
    components: {Jumbotron, Sidebar},
}
</script>