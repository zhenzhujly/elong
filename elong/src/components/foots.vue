<template>
  <div id="foots"> 
    <div class="info">
      <dl>
        <dt>加盟合作</dt>
        <dd><a href="" title="酒店加盟">酒店加盟</a></dd>
        <dd><a href="" title="机票酒店分销联盟">开放平台</a></dd>
        <dd><a href="" title="旅游产品代理合作">代理合作</a></dd>
        <dd><a href="" title="在线广告服务">广告服务</a></dd>
        <dd><a href="" title="艺龙商家中心">商家中心</a></dd>
      </dl>
      <dl>
        <dt>关于艺龙</dt>
        <dd><a href="" title="酒店大全">酒店大全</a></dd>
        <dd><a href="" title="国际酒店">国际酒店</a></dd>
        <dd><a href="" title="校园招聘">校园招聘</a></dd>
        <dd><a href="" title="联系艺龙旅行网">联系我们</a></dd>
      </dl>
      <dl>
        <dt>艺龙APP下载</dt>
        <dd>
          <i class="app"></i>
        </dd>
      </dl>
      <dl>
        <dt>艺龙官方微信</dt>
        <dd>
          <i class="wx"></i>
        </dd>
      </dl>
      <dl>
        <dt>艺龙官方小程序</dt>
        <dd>
          <i class="xcx"></i>
        </dd>
      </dl>
    </div>
    <div class="copy">
       © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved. 
       <a href="">京ICP证010011号</a>
       <a href="">
         <i></i>
          京公网安备11010502026059号
       </a>
       <a href="">经营执照</a>
    </div>
    <div class="safe">
      <a href="" class="icon-1"></a>
      <a href="" class="icon-2"></a>
      <a href="" class="icon-3"></a>
      <a href="" class="icon-4"></a>
      <a href="" class="icon-5"></a>
      <a href="" class="icon-6"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foots',
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
#foots{
  width: 100%;
  height: 240px;
  background: #fff;
  border-top:1px solid #ccc;
}
.info{
  width:1000px;
  height: 148px;
  // background:orange;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
    dl{
      width:19%;
      // background: #af4;
        dt{
          border-left:3px solid #5D96C7;
          height: 18px;
          margin:3px 0 0 15px;
          padding-left:5px;
          font:18px/15px 'Yahei';
        }
        dd{
          padding:3px 0 0 0;
          a{
            text-decoration: none;
            color:#000;
            font-size:11px;
            margin: 0;
          }
          a:hover{
            margin:0 0 0 5px;
            transition:margin 0.5s;
            color:red;
          }
          i{
            width: 100px;
            height: 100px;
            display: block;
            margin: 5px 0 0 -10px;
          }
          .app{
            background: url(../assets/icon.png) -259px -56px no-repeat;
          }
          .wx{
            background: url(../assets/icon.png) -362px -58px no-repeat;
          }
          .xcx{
            background: url(../assets/icon.png) -155px -56px no-repeat;
          }
        }
    }
}
.copy{
  width:100%;
  height: 27px;
  // background:#abcef1;
  font-size:13px;
  line-height: 27px;
  text-align: center;
  margin: 10px 0 0 0;
    a{
      text-decoration: none;
      color:#000;
       i{
        background: url(../assets/icon2.png);
        display: inline-block;
        height: 19px;
        width: 20px;
        margin: 3px 0 0 0;
       }
    }
}
.safe{
  width:100%;
  height: 37px;
  // background:#ab58f1;
  margin: 15px 0 0 0;
  display: flex;
  justify-content: center;
   a{
     background: url(../assets/icon.png);
     display: block;
     height: 37px;
     margin: 0 0 0 10px;
   }
   a:hover{
    margin: -6px 0 0 10px;
    transition: margin 0.5s;
   }
   .icon-1{
    width: 80px;
    background-position: -329px -436px;
   }
   .icon-2{
    width: 60px;
    background-position: -331px -482px;
   }
   .icon-3{
    width: 92px;
    background-position: -473px -436px;
   }
   .icon-4{
    width: 92px;
    background-position: -565px -436px;
   }
   .icon-5{
    width: 92px;
    background-position: -657px -436px;
   }
   .icon-6{
    width: 83px;
    background-position: -393px -477px;
   }
}
</style>