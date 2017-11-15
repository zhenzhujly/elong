<template>
  <div id="register"> 
    <div class="heade">
      <div class="logo"></div>
    </div>
    <div class="contain">
       <h1>
         <label>注册新会员</label>
         <span>已有艺龙账号,</span>
         <a href="#">直接登录</a>
       </h1>
       <div class="card">
         <input type="checkbox" name="">我有艺龙合作卡
         <div></div>
       </div>
       <div class="fillmge"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
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
#register{
  width: 100%;
  height: 1000px;
  background: pink;
    .heade{
       width: 1000px;
       height: 100px;
       background: #f5c;
       margin: 0 auto; 
       display: flex;
       align-items: center;
         .logo{
           width: 113px;
           height: 48px;
           background: url(../assets/login.png) 0 0 no-repeat;
       }
   }
   .contain{
     width: 940px;
     height: 684px;
     background:#d4ba12;
     margin: 10px auto;
     border:1px solid #999;
     padding:30px 30px 0 30px;
      h1{
        width: 940px;
        height: 42px;
        background:#a4e128;
        margin: 0 auto;
          label{
            font-size: 24px;
          }
          span,a{
            font-size: 14px;
            font-weight: normal;
          }
          a{
            text-decoration: none;
            color:#36c;
            margin: 0 0 0 3px;
          }
      }
      .card{
        width: 600px;
        height: 17px;
        border-bottom:1px dashed gray;
        padding: 0 0 10px 0;
        font-size: 14px;
        background: #d34c5b;
        input{
          // font-size: 14px;
        }
      }
      .fillmge{
        width: 940px;
        height: 353px;
        background: #d12e42;
      }
   }
}
</style>