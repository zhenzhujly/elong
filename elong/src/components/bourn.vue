<template>
  <div id="bourn"> 
    <!-- <div>目的地</div> -->
    <div class="termini">
      <div class="top">
         <h2>
           <a href="">目的地指数</a>
           <span>覆盖全球75万家酒店，你想住的，我们都有</span>
         </h2>
      </div>
      <div class="in">
        <h3>
          <a href="">
            <i></i>
            国内
          </a>
          <div class="span">
            <span class="sa spa-1">登高踏青</span>
            <span class="sa">小憩温泉</span>
            <span class="sa">天然氧吧</span>
            <span class="sa">草原撒欢</span>
            <span class="sa">小镇时光</span>
            <span class="sa">美食之城</span>
          </div>
          <div class="rig">更多>></div>
        </h3>
        <div class="ula">
          <ul>
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">黄山</div>
              </a>
              <div class="scale">
                <p>春意撩人 登高踏青赏春色</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">峨眉山</div>
              </a>
              <div class="scale">
                <p>阳春三月 闻着茶香去峨眉</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">五台山</div>
              </a>
              <div class="scale">
                <p>迎春 祈福 登五台</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">庐山</div>
              </a>
              <div class="scale">
                <p>亲近自然 春游庐山</p>
              </div>
            </li>
         </ul>
        </div>
        <div class="ula">
          <ul class="ul2">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">江苏天目湖</div>
              </a>
              <div class="scale">
                <p>古树错落 帝王温泉</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">威海天沐威海温泉</div>
              </a>
              <div class="scale">
                <p>森林温泉 草本养生</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">广东中山温泉</div>
              </a>
              <div class="scale">
                <p>毗邻港澳 商务养生</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">辽宁大连安波温泉</div>
              </a>
              <div class="scale">
                <p>延年益寿 名誉中外</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="ula">
          <ul class="ul3">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">拉萨</div>
              </a>
              <div class="scale">
                <p>高原古城 圣山天湖 沁人心脾</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">大理</div>
              </a>
              <div class="scale">
                <p>文献名邦 彩云之南 空谷幽兰</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">舟山</div>
              </a>
              <div class="scale">
                <p>东海翡翠 舟山群岛 气候宜人</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">厦门</div>
              </a>
              <div class="scale">
                <p>天风海涛 鼓浪岛屿 鸟语芬芳</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="ula">
          <ul class="ul4">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">锡林郭勒</div>
              </a>
              <div class="scale">
                <p>草原 牧民 小马驹</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">坝上</div>
              </a>
              <div class="scale">
                <p>帝都最近的草原</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">若尔盖</div>
              </a>
              <div class="scale">
                <p>高原上的绿洲</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">祁连山</div>
              </a>
              <div class="scale">
                <p>风景如画 醉美祁连山</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="ula">
          <ul class="ul5">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">西塘</div>
              </a>
              <div class="scale">
                <p>烟雨长廊 景色好似宣纸画</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">和顺</div>
              </a>
              <div class="scale">
                <p>古风犹存 如诗如画</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">乌镇</div>
              </a>
              <div class="scale">
                <p>推窗见水 小桥人家</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">平遥</div>
              </a>
              <div class="scale">
                <p>晋商遗风 古城探幽</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="ula">
          <ul class="ul6">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">香港</div>
              </a>
              <div class="scale">
                <p>只有想不到，没有找不到</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">成都</div>
              </a>
              <div class="scale">
                <p>不只有火锅，吃是头等事</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">扬州</div>
              </a>
              <div class="scale">
                <p>吴侬软语 淮味养人</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">长沙</div>
              </a>
              <div class="scale">
                <p>美食怕不辣，湘味最十足</p>
              </div>
            </li>
          </ul>
        </div>    
          
      </div>
      <div class="in ter">
        <h3>
          <a href="">
            <i></i>
            海外
          </a>
          <div class="span">
            <span class="spa-1 sa">文艺清新</span>
            <span class="sa">面朝大海</span>
            <span class="sa">别样建筑</span>
            <span class="sa">浪漫主义</span>
            <span class="sa">魅力都市</span>
          </div>
          <div class="rig">更多>></div>
        </h3>
        <div class="ula">
          <ul>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">伦敦</div>
              </a>
              <div class="scale">
                <p>风情英伦，帝国余韵</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">清迈</div>
              </a>
              <div class="scale">
                <p>泰北玫瑰，慢行古城</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">济州岛</div>
              </a>
              <div class="scale">
                <p>最传统的浪漫，最神秘的自然</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">罗马</div>
              </a>
              <div class="scale">
                <p>永恒之城，魅力无限</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="ula">
          <ul class="ul2">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">普吉岛</div>
              </a>
              <div class="scale">
                <p>海岛胜地，天人合一</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">马尔代夫</div>
              </a>
              <div class="scale">
                <p>一岛一世界</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">沙巴</div>
              </a>
              <div class="scale">
                <p>纯净之极的原生态梦幻岛屿</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">夏威夷</div>
              </a>
              <div class="scale">
                <p>凝聚着东方妩媚与西方性感</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="ula">
          <ul class="ul3">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">巴塞罗那</div>
              </a>
              <div class="scale">
                <p>天使之城，艺术之都</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">米兰</div>
              </a>
              <div class="scale">
                <p>在时尚与古典间穿梭</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">莫斯科</div>
              </a>
              <div class="scale">
                <p>畅饮伏特加的英雄之城</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">伊斯坦布尔</div>
              </a>
              <div class="scale">
                <p>古老与现代辉映，东方与西方交融</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="ula">
          <ul class="ul4">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">马尔代夫</div>
              </a>
              <div class="scale">
                <p>一岛一世界</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">圣托里尼</div>
              </a>
              <div class="scale">
                <p>蓝白色的人间伊甸园</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">巴黎</div>
              </a>
              <div class="scale">
                <p>浪漫如斯，热情如是</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">普罗旺斯</div>
              </a>
              <div class="scale">
                <p>薰衣草之乡</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="ula">
          <ul class="ul5">
            <li >
              <a href="javascript:;" @click='huangshan'>
                <div class="img"></div>
                <div class="name">新加坡</div>
              </a>
              <div class="scale">
                <p>乐享狮城，多彩四季</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">阿姆斯特丹</div>
              </a>
              <div class="scale">
                <p>郁金香绽放的水都</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">洛杉矶</div>
              </a>
              <div class="scale">
                <p>好莱坞的风情</p>
              </div>
            </li>
            <li>
              <a href="">
                <div class="img"></div>
                <div class="name">吉隆坡</div>
              </a>
              <div class="scale">
                <p>双子塔上，气度非凡</p>
              </div>
            </li>
          </ul>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bourn',
  data () {
    return {
    
    }
  },
  methods:{
    huangshan(){
        this.$router.push({
          name:'huangshan',
        })
      },
  },
  mounted(){
     var sps=document.getElementsByClassName('sa');
     var uls=document.getElementsByClassName("ula");
     var index=0;
     //console.log(uls);
     uls[0].style.display="block";
     uls[6].style.display="block";
      // for(let i=0;i<sps.length;i++){
      //     sps[i].index=i;
      //     sps[i].onclick=function(){
      //         for(let j=0;j<sps.length;j++){
      //             uls[j].style.display='none';
      //             sps[j].className="sa";
      //         }
      //         uls[this.index].style.display='block';
      //         sps[this.index].className="spa-1";
      //     }  
      // }

      for(let i=0;i<sps.length;i++){
        sps[i].index=i;
        sps[i].onclick=function(){
          if(i>5){
            for(let j=0;j<uls.length;j++){
              if(j>5){
                uls[j].style.display="none";
                sps[j].className="sa";
              }    
             }
              uls[this.index].style.display="block";
              sps[this.index].className="spa-1 sa"; 
          }else{
            for(let j=0;j<uls.length;j++){
              if(j<=5){
                uls[j].style.display="none";
                sps[j].className="sa";
              }   
             }
              uls[this.index].style.display="block";
              sps[this.index].className="spa-1 sa";
              console.log(this.index);
          }
        }
      }
  }
}
</script>
<style lang="scss" scope>
  .termini{
     width: 1200px;
     height: 566px;
     background: #fff;
     margin: 20px auto;
       .top{
         width: 100%;
         height: 46px;
         // background: #fff;
         border-bottom: 2px solid #f55;
           a{
             font:24px/46px Microsoft yahei;
             color: #f55;
             text-decoration: none;
           }
           span{
             font:14px/46px Microsoft yahei;
             color:#999;
           }
       }
       .in{
         width: 100%;
         height: 250px;
         // background:#a7c5d3;
         margin: 5px auto;
          h3{
            width: 100%;
            height: 48px;
            // background: #ad1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 0;
             a{
               text-decoration: none;
               width: 85px;
               height: 26px;
               display: flex;
               flex-flow: row;
               font:18px/26px Microsoft yahei;
                 i{
                   background:url(../assets/index.png) -574px -100px no-repeat;
                   width: 25px;
                   height: 26px;
                   margin: 0 5px 0 0;
                 }
             }
             .span{
               width: 1065px;
               height: 35px;
               // background: #e4a;
               display: flex;
               // justify-content: center;
               align-items: center;
                span{
                 width: 76px;
                 height: 24px;
                 // background: #ab7;
                 border:1px solid transparent;
                 display: block;
                 margin: 0 0 0 10px;
                 text-align: center;
                 cursor: pointer;
                 font:14px/22px Microsoft yahei;
                 color:#555;
                }
                .spa-1{
                  border-radius: 20px;
                  background: #f55;
                  color:#fff;
                }
                .spa-1:hover{
                  color:#fff;
                }
                span:hover{
                   border-radius: 20px;
                   border:1px solid #f55;
                   color:#f55;
                }
             }
             .rig{
                 font:14px/22px Microsoft yahei;
             }
             .rig:hover{
               color:#f55;
             }
          }
          .ula{
            width: 100%;
            height: 202px;
            display: none;
              ul{
                width: 100%;
                height: 202px;
                // background: #d45c2c;
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: space-between;
                // display: block;
                  li{
                     width: 293px;
                     height: 202px;
                     // background: #d45;
                     display: flex;
                     flex-flow: column;
                      a{
                         width: 293px;
                         height: 160px;
                         background: #a6e8b4;
                         position: relative;
                          .img{
                            width: 100%;
                            height: 160px;
                            background: url(../assets/hs.jpg);
                            background-position: 0 -20px;
                          }
                          .name{
                             position: absolute;
                             width: 210px;
                             height: 30px;
                             font:24px/30px Microsoft yahei;
                             color:#fff;
                             bottom:10px;
                             left:10px;
                          }
                      }
                      .scale{
                        width: 100%;
                        height: 39px;
                        background: #ccc;
                        padding: 1px 0 0 0;
                        border-bottom: 1px solid #999;
                        z-index: 3;
                          p{
                            font-size:14px;
                            color:#555;
                            line-height: 39px;
                            margin: 0 0 0 10px;
                          }
                      }
                  }
                  li:nth-of-type(2){
                    .img{
                      background: url(../assets/ems.jpg);
                    }
                  }
                  li:nth-of-type(3){
                    .img{
                      background: url(../assets/wts.jpg);
                    }
                  }
                  li:nth-of-type(4){
                    .img{
                      background: url(../assets/ls.jpg);
                    }
                  }
                  li:hover{
                      a{
                        .img{
                          transition: 1s ease position;
                          background-position: 0 -25px;
                        }
                      }
                      .scale{
                        border-bottom: 2px solid #f55;
                      }
                  }
              }
              .ul2{
                li{
                  a{
                    .img{
                      background: url(../assets/tmh.jpg);
                    }
                  }
                }
                li:nth-of-type(2){
                  .img{
                    background: url(../assets/tmwh.jpg);
                  }
                }
                li:nth-of-type(3){
                  .img{
                    background: url(../assets/zs.jpg);
                  }
                }
                li:nth-of-type(4){
                  .img{
                    background: url(../assets/ab.jpg);
                  }
                }
                li:hover{
                  a{
                    .img{
                      transition: 1s ease position;
                      background-position: 0 -25px;
                    }
                  }
                }
              }
              .ul3{
                li{
                  a{
                    .img{
                      background: url(../assets/lasa.jpg);
                    }
                  }
                }
                li:nth-of-type(2){
                  .img{
                    background: url(../assets/dl.jpg);
                  }
                }
                li:nth-of-type(3){
                  .img{
                    background: url(../assets/zhous.jpg);
                  }
                }
                li:nth-of-type(4){
                  .img{
                    background: url(../assets/xm.jpg);
                  }
                }
                li:hover{
                  a{
                    .img{
                      transition: 1s ease position;
                      background-position: 0 -25px;
                    }
                  }
                }
              }
              .ul4{
                li{
                  a{
                    .img{
                      background: url(../assets/xlgl.jpg);
                    }
                  }
                }
                li:nth-of-type(2){
                  .img{
                    background: url(../assets/bs.jpg);
                  }
                }
                li:nth-of-type(3){
                  .img{
                    background: url(../assets/reg.jpg);
                  }
                }
                li:nth-of-type(4){
                  .img{
                    background: url(../assets/qls.jpg);
                  }
                }
                li:hover{
                  a{
                    .img{
                      transition: 1s ease position;
                      background-position: 0 -25px;
                    }
                  }
                }
              }
              .ul5{
                li{
                  a{
                    .img{
                      background: url(../assets/xt.jpg);
                    }
                  }
                }
                li:nth-of-type(2){
                  .img{
                    background: url(../assets/hes.jpg);
                  }
                }
                li:nth-of-type(3){
                  .img{
                    background: url(../assets/wz.jpg);
                  }
                }
                li:nth-of-type(4){
                  .img{
                    background: url(../assets/py.jpg);
                  }
                }
                li:hover{
                  a{
                    .img{
                      transition: 1s ease position;
                      background-position: 0 -25px;
                    }
                  }
                }
              }
              .ul6{
                li{
                  a{
                    .img{
                      background: url(../assets/xg.jpg);
                    }
                  }
                }
                li:nth-of-type(2){
                  .img{
                    background: url(../assets/cd.jpg);
                  }
                }
                li:nth-of-type(3){
                  .img{
                    background: url(../assets/yz.jpg);
                  }
                }
                li:nth-of-type(4){
                  .img{
                    background: url(../assets/cs.jpg);
                  }
                }
                li:hover{
                  a{
                    .img{
                      transition: 1s ease position;
                      background-position: 0 -25px;
                    }
                  }
                }
              }
          }

       }
       .ter{
         h3{
          a{
            i{
            background:url(../assets/index.png) -574px -130px no-repeat;
            }
          }
         }
      .ula{
        width: 100%;
        height: 202px;
        display: none;
         ul{
          li{ 
            a{
              .img{
                background: url(../assets/ld.jpg);
              }
            }  
           }
           li:nth-of-type(2){
              .img{
                background: url(../assets/qm.jpg);
              }
           }
           li:nth-of-type(3){
              .img{
                background: url(../assets/jzd.jpg);
              }
           }
           li:nth-of-type(4){
              .img{
                background: url(../assets/lm.jpg);
              }
           }
         }
         .ul2{
            li{
              a{
                .img{
                  background: url(../assets/pjd.jpg);
                }
              }
            }
            li:nth-of-type(2){
              .img{
                background: url(../assets/medf.jpg);
              }
            }
            li:nth-of-type(3){
              .img{
                background: url(../assets/sb.jpg);
              }
            }
            li:nth-of-type(4){
              .img{
                background: url(../assets/xwy.jpg);
              }
            }
            li:hover{
              a{
                .img{
                  transition: 1s ease position;
                  background-position: 0 -25px;
                }
              }
            }
          }
         .ul3{
            li{
              a{
                .img{
                  background: url(../assets/bsln.jpg);
                }
              }
            }
            li:nth-of-type(2){
              .img{
                background: url(../assets/ml.jpg);
              }
            }
            li:nth-of-type(3){
              .img{
                background: url(../assets/msk.jpg);
              }
            }
            li:nth-of-type(4){
              .img{
                background: url(../assets/ystbe.jpg);
              }
            }
            li:hover{
              a{
                .img{
                  transition: 1s ease position;
                  background-position: 0 -25px;
                }
              }
            }
         }
         .ul4{
            li{
              a{
                .img{
                  background: url(../assets/medf1.jpg);
                }
              }
            }
            li:nth-of-type(2){
              .img{
                background: url(../assets/stln.jpg);
              }
            }
            li:nth-of-type(3){
              .img{
                background: url(../assets/bl.jpg);
              }
            }
            li:nth-of-type(4){
              .img{
                background: url(../assets/plws.jpg);
              }
            }
            li:hover{
              a{
                .img{
                  transition: 1s ease position;
                  background-position: 0 -25px;
                }
              }
            }
         }
         .ul5{
            li{
              a{
                .img{
                  background: url(../assets/xjp.jpg);
                }
              }
            }
            li:nth-of-type(2){
              .img{
                background: url(../assets/amstd.jpg);
              }
            }
            li:nth-of-type(3){
              .img{
                background: url(../assets/lsj.jpg);
              }
            }
            li:nth-of-type(4){
              .img{
                background: url(../assets/jlp.jpg);
              }
            }
            li:hover{
              a{
                .img{
                  transition: 1s ease position;
                  background-position: 0 -25px;
                }
              }
            }
         }
       }
     }
   }
</style>