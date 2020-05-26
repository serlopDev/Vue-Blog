<template src='./Peliculas.html'></template>

<script>
import TWCover from '../../assets/images/the-warriors-película.jpg';
import ITCover from '../../assets/images/81nxiNy8tsL._SL1500_.jpg';
import ACover from '../../assets/images/Annabelle-671994408-large.jpg';
import SWCover from '../../assets/images/star-wars-el-ascenso-de-skywalker-poster-1572913527.jpeg';
import PeliculaVue from './Subcomponents/Pelicula.vue';
import Sidebar from '../Sidebar/Sidebar';

export default {

  name: "Peliculas",
  components: {PeliculaVue, Sidebar},
  methods:{
    peliculaFavorita(favorita){
      this.favorita = favorita;
    }
  },

  data() {
    return {
      favorita: null,
      peliculas: [
        {
          title: "The Warriors",
          year: 1979,
          image: TWCover,
        },
        {
          title: "In Time",
          year: 2011,
          image: ITCover,
        },
        {
          title: "Anabelle",
          year: 2014,
          image: ACover,
        },
        {
          title: "Star Wars - El ascenso de Skywalker",
          year: 2019,
          image: SWCover,
        },
      ],
    };
  },
};
</script>
