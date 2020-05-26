<template src='./Articles.html'></template>

<script>
import Global from '../../Global'
export default {
    data() {return{ url: Global.url}},
    props: ["articles"],
}
</script>