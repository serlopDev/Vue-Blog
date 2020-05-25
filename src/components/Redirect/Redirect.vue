<template>
    <h1>Redirigendo...</h1>
</template>

<script>
export default {
    name: 'Redirect',
    mounted(){
        var searchString = this.$route.params.searchString;
        this.$router.push('/blog/busqueda/' + searchString);
    }
}
</script>