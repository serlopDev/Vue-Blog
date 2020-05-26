<template src='./Article.html'></template>

<script>
import Axios from 'axios';
import Global from '../../../Global';
import Sidebar from '../../Sidebar/Sidebar';
import swal from 'sweetalert';

export default {
    name: 'Article',
    components: {Sidebar},
    mounted(){
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    data(){
        return{
            url: Global.url,
            article: null,
        }},
    methods: {
        getArticle(articleId){
            Axios.get(this.url+ 'article/' + articleId)
            .then(res => {
                this.article = res.data.article;
            }).catch(err => {
                console.log('Ha ocurrido un error: ' + err)
            });
        },
        deleteArticle(articleId){
    
            swal({
                title: "¿Estás seguro?",
                text: "Una vez borrado el artículo, no podrá ser recuperado",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
            Axios.delete(this.url + 'article/' + articleId)
            .then(response => {
                swal('Artículo eliminado', 'Artículo eliminado con éxito', 'success');
                this.article = response.data.article;
                this.$router.push('/blog');
            }).catch(error => {
                console.log('Ha ocurrido un error: ' + error)
            });
            } else {
                swal("El artículo no se ha eliminado");
                this.$router.push('/blog');
            }
            });
// soy el fin
        }
    }
}
</script>