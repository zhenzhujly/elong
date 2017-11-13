<template>
  <div id="admin"> 
    <header>
        <headers></headers>
    </header>
    <section>      
        <conters></conters>
    </section>
    <footer>
        <foots></foots> 
    </footer>
  </div>
</template>

<script>
import headers from '../components/headers'
import conters from '../components/conters'
import foots from '../components/foots'
export default {
  name: 'admin',
  components:{
    headers,
    conters,
    foots
  },
  data () {
    return {
    
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>
<style lang="scss" scope>
#admin{
  width: 1349px;
  height: 2653px;
  background: red;
  margin: 0 auto;
}
</style>