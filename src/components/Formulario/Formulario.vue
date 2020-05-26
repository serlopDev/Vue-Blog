<template src='./Formulario.html'></template>

<script>
import Sidebar from '../Sidebar/Sidebar';
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Formulario',
    components: {Sidebar},

    data(){
        return {

        submitted: false,

        user: {
            name: '',
            surname: '',
            bio: '',
            genre: ''
            }
        }
    },
    validations: {
        user: {
            name: {
                required,
                minLength: minLength(2)
            },
            surname: {
                required,
                minLength: minLength(2)
            },
            bio: {
                required,
                minLength: minLength(10)
            },
            genre: {
                required
            }
        }
    },
    methods: {
        mostrarUsuario(){
            this.submitted = true;

            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }
        }
    }
}
</script>