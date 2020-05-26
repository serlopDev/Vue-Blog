<template src='./CreateArticle.html'></template>

<script>
import SideBar from '../../Sidebar/Sidebar';
import ModelArticle from '../../../models/ModelArticle';
import Global from '../../../Global';
import { required } from 'vuelidate/lib/validators';
import Axios from 'axios';
import swal from 'sweetalert'


export default {
  name: "EditArticle",
  components: { SideBar },
  mounted(){
      this.articleId = this.$route.params.id;
      this.getArticle(this.articleId);
  },

  data(){
    return{
    isEdit: true,
    article: new ModelArticle('', '', null, ''),
    url: Global.url,
    submitted: false,
    file: ''
    }
  },
  methods:{
    getArticle(articleId){
    Axios.get(this.url+ 'article/' + articleId)
        .then(res => {
            this.article = res.data.article;
        }).catch(err => {
            console.log('Ha ocurrido un error: ' + err)
        });
    },
    getImage(){
      this.file = this.$refs.file.files[0];
    },

    createArticle(){
      this.submitted = true;
      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      } else {
      Axios.put(this.url + 'article/' + this.articleId, this.article)
      .then(response => {
        if(response.data.article){
          swal("Artículo creado", "El artículo ha sido creado con éxito", "success");

          if(this.file != null && this.file != undefined && this.file != ''){
            const formData = new FormData();
            formData.append('file0', this.file, this.file.name);
            this.article = response.data.article;
            var articleId = response.data.article._id;

            Axios.post(this.url + 'upload-image/' + articleId, formData)
              .then(response => {
                if(response.data.article){
                  swal("Artículo editado", "El artículo ha sido editado con éxito", "success");

                  this.article = response.data.article;
                  this.$router.push('/blog/articulo/' + this.article._id);
                } else {
                  swal('Operación fallida', 'Fallo al intentar guardar el artículo', 'error');
                }
              }).catch(error => {
                console.log('Ha ocurrido un error: ' + error);
              })
          } else {
          swal("Artículo editado", "El artículo ha sido editado con éxito", "success");

          this.article = response.data.article;
          this.$router.push('/blog/articulo/' + this.article._id);
        }
      }}).catch(error => {
        console.log('Ha ocurrido un error: ' + error);
      })
    }
    },
  },
  validations: {
    article: {
      title:{
        required
      },
      content: {
        required
      }
    }
  },
};
</script>
