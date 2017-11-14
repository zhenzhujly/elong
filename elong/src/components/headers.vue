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
            <p class="pull-down">
              <a href="">简体版</a>
              <a href="">繁体版</a>
            </p>
          </div>
        </div>
        <span>
          <i></i>
          <a href="">
            小程序
            <br>
            体验更轻盈
          </a>
          <div class="only-xcx">
          	<i></i>
          </div>
        </span>
        <span>
          <i></i>
          <a href="">
            手机版
            <br>
            专享五折起
          </a>
          <div class="only-sj"></div>
        </span>
        <span>
          <i></i>
          <div href="">
            <a href="">7x24客服电话</a>
            <br>
            <a href="">4009-333-333</a>
            <i class="logo-x"></i>
          </div>
          <div class="only-phone">
          	<i></i>
          	<ul>
          		<li>
          			<p>国内：4009-333-333</p>
          		</li>
          		<li>
          			<p>香港：852-8131-8883</p>
          			<p class="item">852-8131-8983</p>
          		</li>
          		<li>
          			<p>海外：86-10-6432-9999</p>
          		</li>
          	</ul>
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
            <li class="banner">
              <a href="">国际酒店</a>
              <span class="banner1"></span>
            </li>
            <li class="banner">
              <a href="">机票</a>
              <span class="banner2"></span>
            </li>
            <li>
              <a href="">火车票</a>
            </li>
            <li class="banner">
              <a href="">汽车票</a>
              <span class="banner3"></span>
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
             <div class="box-log">
             	<div class="top">
             		<a href="">登录</a>
             	</div>
             	<div class="bot">
             		<ul>
             			<li>
             				<b class="li-b1"></b>
             				<a href="">酒店订单</a>
             			</li>
             			<li>
             				<b class="li-b2"></b>
             				<a href="">机票订单</a>
             			</li>
             			<li>
             				<b class="li-b3"></b>
             				<a href="">火车票订单</a>
             			</li>
             			<li>
             				<b class="li-b4"></b>
             				<a href="">现金账户</a>
             			</li>
             			<li>
             				<b class="li-b5"></b>
             				<a href="">汽车票订单</a>
             			</li>
             			<li>
             				<b class="li-b6"></b>
             				<a href="">酒店收藏</a>
             			</li>
             			<li>
             				<b class="li-b7"></b>
             				<a href="">我的点评</a>
             			</li>
             			<li>
             				<b class="li-b8"></b>
             				<a href="">个人设置</a>
             			</li>
             		</ul>
             	</div>
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
  height: 102px;
  background: #fff;
   .top{
    width: 1200px;
    height: 62px;
    // background: orange;
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
        // background: #a12;
        display: flex;
        justify-content: space-between;
         .menu{
            width: 350px;
            height: 21px;
            // background: #ab7;
            color:gray;
            font-size: 14px;
              a{
                text-decoration: none;
                color:gray;
              }
              a:hover{
              	color:red;
              }
              b{
                font-weight: 400;
              }
              .pull{
                width: 64px;
                height: 75px;
                margin: -21px 0 0 215px;
                display: flex;
                flex-flow: column nowrap;
                border:1px solid transparent;
                padding: 3px 0 0 3px;
                  a:hover{
                  	color:red;
                  }
                  .logo-x{
                    background: url(../assets/icon.png) -357px -773px no-repeat;
                    width:11px;
                    height: 8px;
                    display: block;
                    margin: -10px 0 0 48px;
                  }
                  .pull-down{
                     width: 57px;
                     height: 50px;
                     margin: 10px 0 0 3px;
                     display: none;
                      a{
                        border-top:1px dashed #999;
                        display: flex;
                        width: 60px;
                        height: 25px;
                        text-align: center;
                      }
                  }
              } 
              .pull:hover{
              	border:1px solid #999;
              	background: #fff;
              	  .pull-down{
	              	display: block;
	              }
              }
         }
         span{
            width:150px;
            height: 42px;
            // background: #e27;
            display: flex;
            flex-flow: row wrap;
            position: relative;
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
           .only-xcx{
           	 width: 230px;
           	 height: 102px;
           	 display: none;
           	 border:1px solid #999;
           	 position: absolute;
           	 top: 50px;
           	 background: url(../assets/icon.png) -398px -180px no-repeat;
           	   i{
           	   	 background: url(../assets/icon.png) -213px -763px no-repeat;
           	   	 width: 16px;
           	   	 height: 10px;
           	   	 display: block;
           	   	 position: absolute;
           	   	 top: -9px;
           	   	 left:30px;
           	   }
           }
           
         }
         span:nth-of-type(1):hover .only-xcx{
           	 display: block;
         }
         span:nth-of-type(2){
           i{
            background: url(../assets/icon1.gif) no-repeat;
           }
           a{
            color:#ff6a6a;
           }
           .only-sj{
           	 width: 216px;
           	 height: 95px;
           	 display: none;
           	 border:1px solid #999;
           	 position: absolute;
           	 background: url(../assets/icon.png) -465px -53px no-repeat;
           	 top: 45px;
           }
         }
         span:nth-of-type(2):hover .only-sj{
           	 display: block;
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
           .only-phone{
           	width: 182px;
           	height: 114px;
           	border:1px solid #999;
           	background: #fff;
           	position: absolute;
           	top: 50px;
           	display: none;
           	  i{
           	  	background: url(../assets/icon.png) -216px -759px no-repeat;
           	  	width: 9px;
           	  	height: 18px;
           	  	position: absolute;
           	  	top: 4px;
           	  	left:-55px;
           	  }
           	  ul{
           	  	width:160px;
           	  	height: 104px;
           	  	// background: #f23;
           	  	margin: 0;
           	  	padding: 0;
           	  	display: flex;
           	  	flex-flow: column;
           	  	padding: 5px 0 0 15px;
           	  	  li{
           	  	  	list-style: none;
           	  	  	margin: 3px 0 0 0;
           	  	  	border-bottom:1px dashed #c5c5c5;
           	  	  	padding: 3px 0 6px 0;
           	  	  	  p{
           	  	  	  	margin: 0;
           	  	  	  	padding: 0;
           	  	  	  	font-size: 13px;
           	  	  	  	color:#c5c5c5;
           	  	  	  }
           	  	  	  .item{
           	  	  	  	text-indent: 39px;
           	  	  	  }
           	  	  }
           	  	  li:last-of-type{
           	  	  	border-bottom: none;
           	  	  }
           	  }
           }
         }
         span:nth-of-type(3):hover .only-phone{
           	 display: block;
           	 z-index: 3;
         }
      }
   }
   .nav_box{
     width: 100%;
     height: 40px;
     background: #2064c8;
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
            // background: #ab5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-end;
              li{
                // background: #abf428;
                list-style: none;
                height: 40px;
                border-right:1px solid #3774ce;
                padding:0 10px 0 10px;
                  a{
                    text-decoration: none;
                    line-height: 40px;
                    color:#fff;
                    font-size:15px;
                  }
              }
              li:hover{
                background:#37D;
              }
              li:nth-of-type(1){
                background: #003679;
              }
              .banner{
                position: relative;
                  span{
                    position: absolute;
                  }
                  .banner1{
                    background: url(../assets/icon.png) no-repeat;
                    background-position: -509px 0;
                    width:28px;
                    height: 20px;
                    top: -10px;
                    right:0;
                 }
                 .banner2{
                    background: url(../assets/icon.png) no-repeat;
                    background-position: -589px 0;
                    width:41px;
                    height: 20px;
                    top: -10px;
                    right:-25px;
                 }
                 .banner3{
                    background: url(../assets/icon.png) no-repeat;
                    background-position: -540px 0;
                    width:39px;
                    height: 20px;
                    top: -10px;
                    right:-5px;
                 }
              }
          }
          .right{
            width: 120px;
            height: 40px;
            background: #003679;
            display: flex;
            justify-content: center;
            align-items: center;
            color:#fff;
            position: relative;
              div{
                width: 80px;
                height: 20px;
                // background: #df4;
                text-align: center;
                   a{
                     color:#fff;
                     text-decoration: none;
                     font-size:14px;
                   }
              }
              .box-log{
              	 width: 210px;
              	 height: 281px;
              	 background: #fff;
              	 border:1px solid #999;
              	 position: absolute;
              	 top: 40px;
              	 right:0px;
              	 display: none;
              	   .top{
              	   	 width: 180px;
              	   	 height: 34px;
              	   	 // background: #b27;
              	   	 margin: 10px auto;
              	   	 	a{
              	   	 		background: #f80;
              	   	 		width: 180px;
              	   	 		height: 34px;
              	   	 		border-radius: 6px;
              	   	 		text-align: center;
              	   	 		font:18px/34px Microsoft YaHei;
              	   	 	}
              	   }
              	   .bot{
              	   	 width: 210px;
              	   	 height: 230px;
              	   	 // background: #f2f;
              	   	   ul{
              	   	   	 width: 100%;
              	   	   	 height: 100%;
              	   	   	 list-style: none;
              	   	   	 display: flex;
              	   	   	 flex-flow: row wrap;
              	   	   	 margin: 5px auto;
              	   	   	 padding: 0;
              	   	   	   li{
              	   	   	   	 width: 63px;
              	   	   	   	 height: 65px;
              	   	   	   	 // background: #d1b;
              	   	   	   	 margin: 0 0 0 5px;
              	   	   	   	   a{
              	   	   	   	   	 font-size: 12px;
              	   	   	   	   	 color:#c5c5c5;
              	   	   	   	   }
              	   	   	   	   b{
              	   	   	   	   	 width: 49px;
              	   	   	   	   	 height: 45px;
              	   	   	   	   	 display: block;
              	   	   	   	   	 margin: 2px 0 0 7px;
              	   	   	   	   	 background: url(../assets/icon.png) no-repeat;
              	   	   	   	   }
              	   	   	   	   .li-b1{
              	   	   	   	   		background-position: -152px -676px;
              	   	   	   	   }
              	   	   	   	   .li-b2{
              	   	   	   	   		background-position: -213px -676px;
              	   	   	   	   }
              	   	   	   	   .li-b3{
              	   	   	   	   		background-position: -150px -622px;
              	   	   	   	   }
              	   	   	   	   .li-b4{
              	   	   	   	   		background-position: -213px -618px;
              	   	   	   	   }
              	   	   	   	   .li-b5{
              	   	   	   	   		background-position: -277px -620px;
              	   	   	   	   }
              	   	   	   	   .li-b6{
              	   	   	   	   		background-position: -151px -565px;
              	   	   	   	   }
              	   	   	   	   .li-b7{
              	   	   	   	   		background-position: -279px -565px;
              	   	   	   	   }
              	   	   	   	   .li-b8{
              	   	   	   	   		background-position: -279px -674px;
              	   	   	   	   }
              	   	   	   }
              	   	   	   li:hover{
              	   	   	   	  a{
              	   	   	   	  	color:#37e;
              	   	   	   	  }
              	   	   	   	  .li-b1{
              	   	   	   	   		background-position: 8px -676px;
              	   	   	   	   }
              	   	   	   	   .li-b2{
              	   	   	   	   		background-position: -45px -676px;
              	   	   	   	   }
              	   	   	   	   .li-b3{
              	   	   	   	   		background-position: 10px -622px;
              	   	   	   	   }
              	   	   	   	   .li-b4{
              	   	   	   	   		background-position: -46px -618px;
              	   	   	   	   }
              	   	   	   	   .li-b5{
              	   	   	   	   		background-position: -100px -620px;
              	   	   	   	   }
              	   	   	   	   .li-b6{
              	   	   	   	   		background-position: 7px -565px;
              	   	   	   	   }
              	   	   	   	   .li-b7{
              	   	   	   	   		background-position: -99px -565px;
              	   	   	   	   }
              	   	   	   	   .li-b8{
              	   	   	   	   		background-position: -99px -674px;
              	   	   	   	   }
              	   	   	   }
              	   	   }
              	   }
              }
          }
          .right:hover{
          	.box-log{
          		display: block;
          	}
          }
      }
   }
}
</style>