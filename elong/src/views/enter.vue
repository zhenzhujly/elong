<template>
  <div id="enter"> 
    <div class="heade">
      <div class="logo"></div>
    </div>
    <div class="loginbox">
       <div class="pic" @click='admins'></div>
       <div class="code">
         <div class="user">
               <label>
                 <input type="radio" name="">
                 普通登录
               </label>
               <label>
                 <input type="radio" name="">
                 手机动态密码登录
               </label>
         </div>
         <div class="nami-l">
           <div class="inpbox">
             <input type="text" placeholder="用户名/卡号/手机号/邮箱">
             <i class="i1"></i>
           </div>
           <div class="inpbox">
             <input type="text" placeholder="密码">
             <i class="i2"></i>
           </div>
           <div class="err">
             <input type="text" placeholder="验证码">
             <span>degA</span>
             <a href="">换一张</a>
           </div>
           <div class="forget">
              <span>√</span>
              <span>两个月内免登陆</span>
            </div>
           <a href="" class="dl">登录</a>
         </div>
         <div class="nami">
            <div class="inpbox">
              <select name="">
                    <option value="">中国大陆+86</option>
                    <option value="">中国香港+852</option>
                    <option value="">中国澳门+853</option>
                    <option value="">中国台湾+886</option>
              </select>
              <input type="text" placeholder="请输入手机号">
            </div>
            <div class="err">
              <input type="text" placeholder="验证码">
              <span>degA</span>
              <a href="">换一张</a>
            </div>
            <div class="pw">
              <input type="text" placeholder="输入动态密码">
              <button>获取动态密码</button>
            </div>
            <div class="forget">
              <span>√</span>
              <span>记住我</span>
            </div>
            <a href="" class="dl">登录</a>
            <div class="bind">
              用户未绑定手机号？
              <div class="bind-box">
                 <span class="icon"></span>
                 <p>
                   <i></i>
                   未注册的用户，请先注册
                 </p>
                 <p>
                   <i></i>
                   已经注册但仍未绑定手机号的用户，请拨打
                   <a href="">400-666-1166</a>
                   联系客服绑定手机。
                 </p>
              </div>
            </div>
         </div>
       </div>
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
    admins(){
        this.$router.push({
          name:'admin',
        })
      },
  },
  mounted(){

  }
}
</script>
<style lang="scss" scope>
#enter{
  width: 100%;
  height: 636px;
  background: #e8eff6;
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
     background: #fff;
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
         // background: #ab4;
         display: flex;
         justify-content: center;
         flex-flow: column;
         align-items: center;
         .user{
            width: 285px;
            height: 12px;
            padding:0 0 12px 0;
          }
          .nami-l{
            width: 285px;
            height: 277px;
            // background: #a4e;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
              div{
                 width: 100%;
                 height: 35px;
                 // background: #d4a;
                 // margin: 0;
              }
              .inpbox{
                display: flex;
                justify-content: space-between;
                // background: #fff;
                position: relative;
                // align-items: center;
                input{
                  width: 100%;
                  height: 100%;
                  border:1px solid gray;
                  border-radius: 5px;
                }
                i{
                  width: 30px;
                  height: 100%;
                  position: absolute;
                  right: 0;
                }
                .i1{
                  background: url(../assets/login.png) -108px -271px no-repeat;
                }
                .i2{
                  background: url(../assets/login.png) -132px -268px no-repeat;
                }
              }
              .err{
                display: flex;
                justify-content: space-between;
                input{
                  border:1px solid gray;
                  border-radius: 5px;
                }
                span{
                  width: 65px;
                  height: 35px;
                  // background: #75c;
                  line-height: 35px;
                  font-size: 25px;
                }
                a{
                  text-decoration: none;
                  color:#49f;
                  font-size: 12px;
                  text-align: center;
                  line-height: 35px;
                }
              }
            .forget{
                height: 12px;
                display: flex;
                flex-flow: row;
                span:nth-of-type(1){
                  width: 10px;
                  height: 10px;
                  border:1px solid #ccc;
                  display: block;
                  background: blue;
                  color:#fff;
                  font-size: 12px;
                  text-align: center;
                }
                span:nth-of-type(2){
                  font-size: 12px;
                  margin: -2px 0 0 5px ;
                  color:#999;
                }
              }
              .dl{
                height: 35px;
                text-decoration: none;
                background: orange;
                text-align: center;
                line-height: 35px;
                color:#fff;
                font-size: 20px;
              }
              .dl:hover{
                opacity: 0.7;
              }
          }
          .nami{
             width: 285px;
             height: 277px;
             background: #a87;
             display: flex;
             flex-flow: column;
             justify-content: space-between;
             display: none;
              div{
                 width: 100%;
                 height: 35px;
                 // background: #d4a;
              }
              .inpbox{
                // background: #d5e;
                display: flex;
                justify-content: space-between;
                 select{
                  border:1px solid gray;
                  border-radius: 5px;
                 }
                 input{
                  border-radius: 5px;
                  border:1px solid gray;
                 }
              }
              .err{
                display: flex;
                justify-content: space-between;
                input{
                  border:1px solid gray;
                  border-radius: 5px;
                }
                span{
                  width: 65px;
                  height: 35px;
                  // background: #75c;
                  line-height: 35px;
                  font-size: 25px;
                }
                a{
                  text-decoration: none;
                  color:#49f;
                  font-size: 12px;
                  text-align: center;
                  line-height: 35px;
                }
              }
              .pw{
                display: flex;
                justify-content: space-between;
                input{
                  border:1px solid gray;
                  border-radius: 5px;
                }
                button{
                  width: 110px;
                  background: #37D;
                  border:none;
                  border-radius: 5px;
                  color:#fff;
                }
              }
              .forget{
                height: 12px;
                display: flex;
                flex-flow: row;
                span:nth-of-type(1){
                  width: 10px;
                  height: 10px;
                  border:1px solid #ccc;
                  display: block;
                  background: blue;
                  color:#fff;
                  font-size: 12px;
                  text-align: center;
                }
                span:nth-of-type(2){
                  font-size: 12px;
                  margin: -2px 0 0 5px ;
                  color:#999;
                }
              }
              .dl{
                height: 35px;
                text-decoration: none;
                background: orange;
                text-align: center;
                line-height: 35px;
                color:#fff;
                font-size: 20px;
              }
              .dl:hover{
                opacity: 0.7;
              }
              .bind{
                font-size: 14px;
                position: relative;
                 .bind-box{
                   width: 258px;
                   height: 102px;
                   border:1px solid gray;
                   background: #fff;
                   position: absolute;
                   top: 36px;
                   display: flex;
                   flex-flow: column;
                   display: none;
                     span{
                       background: url(/static/img/icon.b5ea94e.png) -213px -763px no-repeat;
                       width: 16px;
                       height: 16px;
                       display: block;
                       position: absolute;
                       top: -8px;
                       left:25px;
                     }
                     p{
                      display: flex;
                      // justify-content: space-space;
                      align-items: center;
                      flex-flow: row wrap;
                      width:100%;
                      font-size: 12px;
                      // margin: 0;
                       i{
                        width: 3px;
                        height: 3px;
                        background: #ccddee;
                        margin:  0 5px 0 5px;
                       }
                     }
                     p:nth-of-type(1){
                      height: 20px;
                      // background: #e75;
                     }
                     p:nth-of-type(2){
                      height: 40px;
                      // background: #7cd;
                      a{
                        text-decoration: none;
                        text-indent: 13px;
                      }
                     }
                 }
              }
              .bind:hover .bind-box{
                display: block;
              }
          }
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