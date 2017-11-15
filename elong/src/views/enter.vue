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
       <div class="mobile">
         <a href="">
           <span></span>
           iPhone / iPad
         </a>
         <a href="">
           <span></span>
           Android
         </a>
       </div>
       <div>
         <a href="">代理合作</a>|
         <a href="">广告服务</a>|
         <a href="">联系我们</a>
        ©1999 - 2014 eLong, Inc or its affiliates. All Rights Reserved.
    
       </div>
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
  background: #fff;
   .heade{
     width: 1000px;
     height: 100px;
     // background: #fff;
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
     // background: #df4;
     margin: 15px auto;
     display: flex;
     justify-content: flex-end;
       a{
         width: 66px;
         height: 14px;
         // background: #ba4;
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
     height: 92px;
     // background: #d8c;
     margin: 35px auto;
     display: flex;
     flex-flow: column;
     align-content: flex-start;
       div{
         // background: #d8f;
         width: 1000px;
         height: 30px; 
       }
       .mobile{
          // background: #abe421;
          display: flex;
          justify-content: center;
          align-items: center;
          a{
             width: 150px;
             height: 22px;
             // background: #fb5;
             margin: 0 0 0 3px;
             display: flex;
             justify-content: center;
             align-items: center;
             text-decoration: none;
             color:gray;
             font-size: 13px;
              span{
              background: url(../assets/login.png);
              width:18px;
              height: 23px;
              display: block;
              margin: 0 4px 0 0;
              } 
           }
           a:nth-of-type(1){
             span{
                background-position: 0 -276px;
              }
           }
           a:nth-of-type(2){
             span{
                background-position: -24px -276px;
                width: 20px;
              }
           }
           a:hover {
             color:orange;
           }
           a:nth-of-type(1):hover{
             span{
                background-position: 0 -303px;
              }
           }
           a:nth-of-type(2):hover{
             span{
                background-position: -24px -303px;
              }
           }
       }
       div:nth-of-type(2){
        margin: 10px 0 0 0;
        color:gray;
        font-size:12px;
        display: flex;
        justify-content: center;
        align-items: center;
         a{
           text-decoration: none;
           color:gray;
           margin: 0 5px 0 5px;
         }
         a:nth-of-type(3){
          margin:  0 40px 0 5px;
         }
         a:hover{
           color:orange;
         }
       }
   }
}
</style>