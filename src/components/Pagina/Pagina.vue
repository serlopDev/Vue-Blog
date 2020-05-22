<template>
<div>
    <Jumbotron text='Página de pruebas'/>
<div class="content">
    <section id="articles" class="articles">
        <h2 class="generalTitle">Pagina</h2>

    </section>
    <Sidebar/>
</div>
</div>
</template>

<script>
import Sidebar from '../Sidebar/Sidebar';
import Jumbotron from '../Jumbotron/Jumbotron';

export default {
    name: 'Pagina',
    components: {Sidebar, Jumbotron},
}
</script>