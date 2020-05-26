<template src='./Sidebar.html'></template>

<script>
export default {
    name: 'Sidebar',
    data(){
        return{
            searchString: null
    }
    },
    methods: {
        goSearch(){
            this.$router.push('/redirect/' + this.searchString);
        }
    }
}
</script>