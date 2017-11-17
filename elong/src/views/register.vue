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
       </div>
       <ul class="clx">
        <li>
          <p><span>*</span>卡类型：</p>
          <select name="">
            <option value="">银行卡类</option>
            <option value="">酒店合作类</option>
            <option value="">无线通讯类</option>
            <option value="">购物消费类</option>
            <option value="">航空类</option>
            <option value="">其他</option>
            <option value="">所有联名卡[按首字拼音排序]</option>
          </select>
        </li>
        <li>
          <p><span>*</span>卡名称：</p>
          <select name=""></select>
        </li>
        <li class="last">
          <p>卡号：</p>
          <input class="w150" type="text">
        </li>
      </ul>
       <div class="fillmge">
         <ul>
           <li>
             <p><span>*</span>手机：</p>
                <select name="">
                  <option value="">中国大陆+86</option>
                  <option value="">中国香港+852</option>
                  <option value="">中国澳门+853</option>
                  <option value="">中国台湾+886</option>
                </select>
             <input type="text">
           </li>
           <li class="err">
              <p><span>*</span>输入验证码：</p>
              <input type="text">
              <span class="sp">degA</span>
              <a href="">看不清，换一张</a>
           </li>
           <li>
             <p><span>*</span>短信验证码：</p>
             <input type="text">
             <button>获取短信验证码</button>
           </li>
           <li class="las">
             <p><span>*</span>邮箱：</p>
             <input type="text">
           </li>
           <li class="las">
             <p><span>*</span>密码：</p>
             <input type="text">
           </li>
           <li class="las">
             <p><span>*</span>再次输入密码：</p>
             <input type="text">
           </li>
           <li class="lasts">
             <span>
               <input type="checkbox" name="">
               同意接受艺龙发送的促销信息。
             </span>
           </li>
         </ul>
         <div class="ml135">填写出行习惯</div>
         <div class="ml155">
           <input type="checkbox">同意艺龙旅行网服务条款<a href="">查看条款</a>
         </div>
         <div class="ml165">立即注册</div>
       </div>
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
  background: #e8eff6;
    .heade{
       width: 1000px;
       height: 100px;
       // background: #f5c;
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
     height: 765px;
     background:#fff;
     margin: 10px auto;
     // border:1px solid #999;
     padding:30px 30px 0 30px;
      h1{
        width: 940px;
        height: 42px;
        // background:#a4e128;
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
          a:hover{
            color:orange;
          }
      }
      .card{
        width: 600px;
        height: 17px;
        // padding: 0 0 10px 0;
        margin: 10px 0 0 120px;
        font-size: 14px;
        // background: #d34c5b;
      }
      .clx{
        width: 600px;
        height: 150px;
        // background: #a57;
        list-style: none;
        display: flex;
        justify-content: space-around;
        flex-flow: column;
        border-bottom:1px dashed gray;
         li{
           display: flex;
           flex-flow: row;
           align-items: center;
           // background: #e57;
           height: 30px;
            p{
              // text-align: center;
              line-height: 30px;
              font-size:15px;
               span{
                 color:red;
               }
            }
            select{
              width: 250px;
              height: 30px;
              border:1px solid gray;
            }
            input{
              width: 250px;
              height: 25px;
              border:1px solid gray;
            }
         }
         .last{
           p{
            text-indent: 23px;
           }
         }
      }
      .fillmge{
        width: 940px;
        height: 353px;
        // background: #d12e42;
         ul{
           width: 940px;
           height: 353px;
           // background: #e4a6c4;
           list-style: none;
           display: flex;
           justify-content: space-between;
           flex-flow: column;
            li{
              width: 50%;
              height: 30px;
              // background: #a2e;
              display: flex;
              flex-flow: row;
              align-items: center;
              justify-content: flex-start;
              p{
                font-size: 15px;
                 span{
                   color:red;
                 }
              }
              select{
                width: 112px;
                height: 30px;
              }
              input{
                height: 25px;
                width: 130px;
                margin: 0 0 0 5px;
              }
              button{
                width: 120px;
                height: 30px;
                background: blue;
                color:#fff;
                border:none;
                border-radius: 8px;
                margin: 0 0 0 10px;
              }
            }
            .err{
                display: flex;
                justify-content: flex-srart;
                text-indent: 14px;
                .sp{
                  width: 65px;
                  height: 35px;
                  // background: #75c;
                  line-height: 35px;
                  font-size: 25px;
                  margin: 0 5px 0 5px;
                }
                a{
                  text-decoration: none;
                  color:#49f;
                  font-size: 12px;
                  text-align: center;
                  line-height: 35px;
                }
              }
              .las{
                text-indent: 59px;
                input{
                   width: 250px;
                }
              }
              .las:nth-of-type(3){
                text-indent: 5px;
              }
              .lasts{
                display: flex;
                align-items: centr;
                height: 16px;
                text-indent: 110px;
                span{
                   font-size:14px;
                  input{
                   width: 20px;
                   height: 16px;
                   border:none;
                   online: none;
                 }
                }
              }
            li:nth-of-type(1){
              text-indent: 65px;
            }
            li:nth-of-type(3){
              text-indent: 14px;
            }
            li:nth-of-type(6){
              text-indent: 0px;
            }
         }
         .ml135{
            width:106px;
            height:32px;
            background:#f8f8f8;
            border:1px solid gray;
            line-height:32px;
            text-align:center;
            cursor:pointer;
            font-size:13px;
            margin:10px 0 0 160px;
          }
          .ml155{
            font-size:12px;
            margin:15px 0 0 160px;
            a{
              text-decoration:none;
              margin:0 0 0 5px;
            }
            a:hover{
              color:red;
            }
          }
          .ml165{
            width:106px;
            height:32px;
            background:#ff8900;
            line-height:32px;
            text-align:center;
            cursor:pointer;
            font-size:15px;
            color:#fff;
            margin:15px 0 30px 160px;
          }
          .ml165:hover{
            background:#ff6000;
          }
         
      }
   }
}
</style>