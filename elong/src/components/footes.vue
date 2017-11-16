<template>
  <div id="footes"> 
     <ul>
       <!-- <li v-for="(item,index) in $router.options.routes">
          <router-link :to="{path:item.path}">
              {{ item.alias }}
          </router-link>
        </li> -->
       <li><a href="#">酒店预订</a></li>
       <li><a href="#">机票查询</a></li>
       <li><a href="#">酒店团购</a></li>
       <li><a href="#">热门城市</a></li>
       <li><a href="#">合作伙伴</a></li>
       <li><a href="#">常见酒店</a></li>
     </ul>
     <section>
        <router-view></router-view> 
     </section>
  </div>
</template>

<script>
export default {
  name: 'footes',
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
#footes{
  width: 100%;
  height: 40px;
  background: #7c8fa2;
   ul{
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     list-style: none;
     align-items: center;
       li{
         width: 166px;
         height: 40px;
         // background: #ad4;
         // margin: 0 0 0 3px;
         display: flex;
         justify-content: center;
           a{
             text-decoration: none;
             color:#fff;
             font-size:13px;
             line-height: 40px;
           }
       }
       li:hover{
         background: #a9d5e9;
       }
       li:nth-of-type(1){
        background: #c0d2e4;
        color:#000;
       }
   }
}
</style>