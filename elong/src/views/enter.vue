<template>
  <div id="enter"> 
    <div class="heade">
      <div class="logo"></div>
    </div>
    <div class="loginbox">
       <div class="pic"></div>
       <div class="code"></div>
    </div>
    <div class="tip">
      <a href="">
        立即注册
        <i></i>
      </a>
    </div>
    <div class="footer">
       <p>
         <a href="">
           <span></span>
           iPhone / iPad
         </a>
       </p>
       <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enter',
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
#enter{
  width: 100%;
  height: 636px;
  background: purple;
   .heade{
     width: 1000px;
     height: 100px;
     background: #e2b;
     margin: 0 auto; 
     display: flex;
     align-items: center;
       .logo{
         width: 113px;
         height: 48px;
         background: url(../assets/login.png) 0 0 no-repeat;
       }
   }
   .loginbox{
     width: 1000px;
     height: 350px;
     margin: 0 auto;
     background: #a8f;
     display: flex;
     justify-content: space-between;
       .pic{
         width: 620px;
         height: 350px;
         background: url(../assets/banner.jpg);
       }
       .code{
         width: 375px;
         height: 346px;
         background: #ab4;
       }
   }
   .tip{
     width: 1012px;
     height: 15px;
     background: #df4;
     margin: 15px auto;
     display: flex;
     justify-content: flex-end;
       a{
         width: 66px;
         height: 14px;
         background: #ba4;
         text-decoration: none;
         color:#3365CB;
         display: flex;
         flex-flow: row;
         font-size: 12px;
           i{
             background: url(../assets/login.png) 0 -430px no-repeat;
             width:15px;
             height: 15px;
             display: block;
           }
       }
       a:hover{
         color:orange;
          i{
             background: url(../assets/login.png) 0 -445px no-repeat;
          }
       }
   }
   .footer{
     width: 1000px;
     height: 141px;
     background: #d8c;
     margin: 5px auto;
       p{
         background: #d8f;
         width: 1000px;
         height: 30px;
           a{
             width: 100px;
             height: 14px;
             
           }
       }
   }
}
</style>