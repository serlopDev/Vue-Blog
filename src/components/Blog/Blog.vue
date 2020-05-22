<template>
<div>
    <Jumbotron text='Blog'/>
<div class="content">
    <section id="articles" class="articles">
        <h2 class="generalTitle">Blog</h2>
    </section>
    <Sidebar/>
</div>
</div>
</template>

<script>
import Jumbotron from '../Jumbotron/Jumbotron';
import Sidebar from '../Sidebar/Sidebar';
export default {
    name: 'Blog',
    components: {Jumbotron, Sidebar},
}
</script>