<template>

    <header id="header" class="header">
        <div class="center">
        <!--Logo-->
        <div id="logo" class="logo">
            <img src="../../assets/images/vue-logo.png" class="app-logo" alt="logotipo"/> 
        <span class="brand">
            <strong>Curso</strong>ReactJS
        </span>
    </div>
        <!--Menu-->
        <nav id="menu" class="menu">
            <ul>
                <li>
                    <router-link to = '/inicio' active-class='active'>Inicio</router-link>
                </li>
                <li>
                    <router-link to = '/blog' active-class='active'>Blog</router-link>
                </li>
                <li>
                    <router-link to = '/formulario' active-class='active'>Formulario</router-link>
                </li>
                <li>
                    <router-link to = '/peliculas' active-class='active'>Películas</router-link>
                </li>
                <li>
                    <router-link to = '/pagina' active-class='active'>Página</router-link>
                </li>
            </ul> 
        </nav>
        </div>

    </header>
</template>

<script>

export default {
    name: 'Header'
}

</script>