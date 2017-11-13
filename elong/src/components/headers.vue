<template>
  <div id="headers"> 
    <div class="top">
      <div class="logo"></div>
      <div class="right">
        <div class="menu">
          <a href="">积分商城</a>
          <b>丨</b>
          <a href="">礼品卡</a>
          <b>丨</b>
          <a href="">在线客服</a>
          <b>丨</b>
          <div class="pull">
            <a href="">English</a>
            <b class="logo-x"></b>
            <div class="pull-down">
              <a href="">简体版</a>
              <a href="">繁体版</a>
            </div>
          </div>
        </div>
        <span>
          <i></i>
          <a href="">
            小程序
            <br>
            体验更轻盈
          </a>
        </span>
        <span>
          <i></i>
          <a href="">
            手机版
            <br>
            专享五折起
          </a>
        </span>
        <span>
          <i></i>
          <div href="">
            <a href="">7x24客服电话</a>
            <br>
            <a href="">4009-333-333</a>
            <i class="logo-x"></i>
          </div>
        </span>
      </div>
    </div>
    <div class="nav_box">
       <div class="nav">
          <ul class="left">
            <li>
              <a href="">首页</a>
            </li>
            <li>
              <a href="">国内酒店</a>
            </li>
            <li>
              <a href="">国际酒店</a>
            </li>
            <li>
              <a href="">机票</a>
            </li>
            <li>
              <a href="">火车票</a>
            </li>
            <li>
              <a href="">汽车票</a>
            </li>
            <li>
              <a href="">旅游指南</a>
            </li>
          </ul>
          <div class="right">
             <div>
               <a href="">登录</a>
               |
               <a href="">注册</a>
             </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers',
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
#headers{
  width: 100%;
  height: 115px;
  background: purple;
   .top{
    width: 1200px;
    height: 62px;
    background: orange;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
      .logo{
        width: 130px;
        height: 48px;
        background: url(../assets/icon.png) -658px 0 no-repeat;
      }
      .right{
        width: 860px;
        height: 42px;
        background: #a12;
        display: flex;
        justify-content: space-between;
         .menu{
            width: 350px;
            height: 21px;
            background: #ab7;
            color:gray;
            font-size: 14px;
              a{
                text-decoration: none;
                color:gray;
              }
              b{
                font-weight: 400;
              }
              .pull{
                width: 64px;
                height: 22px;
                background: #f17;
                margin: -16px 0 0 215px;
                display: flex;
                flex-flow: column nowrap;
                  .logo-x{
                    background: url(../assets/icon.png) -357px -773px no-repeat;
                    width:11px;
                    height: 8px;
                    display: block;
                    margin: -10px 0 0 48px;
                  }
                  .pull-down{
                     width: 64px;
                     height: 80px;
                     border:1px solid #999;
                     display: none;
                      a{
                        border-top:1px dashed #999;
                      }
                  }
              } 
         }
         span{
            width:150px;
            height: 42px;
            background: #e27;
            display: flex;
            flex-flow: row wrap;
             i{
                width: 42px;
                height: 42px;
             }
             a{
              text-decoration: none;
              font-size:14px;
              line-height: 21px;
             }
         }
         span:nth-of-type(1){
           i{
            background: url(../assets/icon.png) -127px -763px no-repeat;
           }
           a{
            color:#09bb07;
           }
         }
         span:nth-of-type(2){
           i{
            background: url(../assets/icon1.gif) no-repeat;
           }
           a{
            color:#ff6a6a;
           }
         }
         span:nth-of-type(3){
          width: 180px;
           i{
            background: url(../assets/icon.png) -42px -762px no-repeat;
           }
           a:nth-of-type(1){
            color:#666;
           }
           a:nth-of-type(2){
            color:#2064c8;
           }
           div{
             i{
                background: url(../assets/icon.png) -357px -773px no-repeat;
                width:11px;
                height: 8px;
                display: block;
                color:#2064c8;
                margin: -13px 0 0 90px;
             }
           }
         }
      }
   }
   .nav_box{
     width: 100%;
     height: 40px;
     background: red;
      .nav{
        width: 1200px;
        height: 40px;
        background: #2064c8;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
          .left{
            width: 483px;
            height: 40px;
            background: #ab5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-end;
              li{
                background: #abf428;
                list-style: none;
                height: 40px;
                border-right:1px solid gray;
                padding:0 10px 0 10px;
                  a{
                    text-decoration: none;
                    line-height: 40px;
                    color:#fff;
                    font-size:15px;
                  }
              }
          }
          .right{
            width: 120px;
            height: 40px;
            background: #999999;
          }
      }
   }
}
</style>