<template>
    <section id="jumbotron" :class="{
        'jumbotron': home, 
        'jumbotron-small': !home
        }">
        <h1>{{this.text}}</h1>
        <router-link to='/blog' class="blogBtn" href="/blog.html" v-if="home">Ir a mi BLOG</router-link>
    </section>
</template>

<script>
export default {
    name: 'Jumbotron',
    props: ['text', 'home']
}
</script>