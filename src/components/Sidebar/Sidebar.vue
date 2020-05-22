<template>

    <aside id="sidebar" class="sidebar">
        <div class="menuBlog">
            <h3>Puedes hacer esto</h3>
            <a href="#" class="btn-Create">Crear un artículo</a>
        </div>
        <div class="search">
            <h3>Buscador</h3>
            <p>Encuentra el articulo que buscas</p>
            <form>
                <input type="text" id="searchBox" class="searchBox">
                <input type="button" id="searchBtn" class="searchBtn" value="Buscar">
            </form>
        </div>
    </aside>
    
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>