<template>
  <div id="huangshan"> 
    <header>
      <headers></headers>
    </header>
    <section>
      <div class="Box">
         <div class="mt">
           <h2>黄山酒店预订</h2>
           <div class="link">
             <a href="#">首页</a>
             <span>></span>
             <a href="#">酒店</a>
             <span>></span>
             <a href="#">黄山酒店</a>
             <span>></span>
             <h1>黄山酒店</h1>
           </div>
         </div>
         <div class="search">
           <div>
             <label>
               <span>目的地</span>
               <input type="input" value="黄山市">
             </label>
           </div>
           <div>
             <label>
               <span>入住</span>
               <input type="input" value="2017-11-20">
               <i class="i1"></i>
             </label>
             <label>
               <span>离店</span>
               <input type="input" value="2017-11-21">
               <span class="total">(共一晚)</span>
               <i class="i2"></i>
             </label>
           </div>
           <div>
             <label>
               <span>关键字</span>
               <input type="input" value="如位置\酒店名\品牌">
             </label>
           </div>
           <div>
             <i></i>
             搜索
           </div>
         </div>
         <div class="filter">
           <div>
             <div class="left">
               <span class="place"></span>
               位置
             </div>
             <div class="right">
               <div class="option">
                 <div class="unli">不限</div>
                 <ul>
                   <li>
                     行政区
                     <i></i>
                   </li>
                   <li class="on">
                     商圈
                     <i></i>
                   </li>
                   <li>
                     机场/车站
                     <i></i>
                   </li>
                   <li>
                     医院
                     <i></i>
                   </li>
                   <li>
                     大学
                     <i></i>
                   </li>
                   <li>
                     市内景点
                     <i></i>
                   </li>
                   <li>
                     市外景点
                     <i></i>
                   </li>
                 </ul>
                 <div class="posi">
                   <ul class="list">
                     <li>
                       <i></i>
                       <span>黄山山顶</span>
                     </li>
                     <li>
                       <i></i>
                       <span>黄山市区(屯溪)</span>
                     </li>
                     <li>
                       <i></i>
                       <span>汤口地区</span>
                     </li>
                     <li>
                       <i></i>
                       <span>太平湖</span>
                     </li>
                     <li>
                       <i></i>
                       <span>黄山南大门</span>
                     </li>
                     <li>
                       <i></i>
                       <span>黄山区(太平)</span>
                     </li>
                     <li>
                       <i></i>
                       <span>山下</span>
                     </li>
                     <li>
                       <i></i>
                       <span>歙县</span>
                     </li>
                     <li class="last">
                       <i></i>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           <div class="item">
             <div class="left">
               <span class="item1"></span>
               房价
             </div>
             <div class="right">
               <div class="option">
                 <div class="unli">不限</div>
                   <ul class="list">
                     <li>
                       <i></i>
                       <span>150元以下</span>
                     </li>
                     <li>
                       <i></i>
                       <span>150-300元</span>
                     </li>
                     <li>
                       <i></i>
                       <span>301-405元</span>
                     </li>
                     <li>
                       <i></i>
                       <span>415-600元</span>
                     </li>
                     <li>
                       <i></i>
                       <span>600元以上</span>
                     </li>
                   </ul>
                 <div class="custom">
                   <span>自定义</span>
                   <input type="text">
                   <span>——</span>
                   <input type="text">
                   <span>确定</span>
                 </div>
               </div>
             </div>
           </div>
           <div class="item">
             <div class="left">
               <span class="item2"></span>
               星级
             </div>
             <div class="right">
               <div class="option">
                 <div class="unli">不限</div>
                   <ul class="list li2">
                     <li>
                       <i></i>
                       <span>经济/客栈</span>
                     </li>
                     <li>
                       <i></i>
                       <span>三星/舒适</span>
                     </li>
                     <li>
                       <i></i>
                       <span>四星/高档</span>
                     </li>
                     <li>
                       <i></i>
                       <span>五星/豪华</span>
                     </li>
                     <li>
                       <i></i>
                       <span>公寓</span>
                     </li>
                   </ul>
               </div>
             </div>
           </div>
           <div class="item">
             <div class="left">
               <span class="item3"></span>
               品牌
             </div>
             <div class="right">
               <div class="option option3">
                 <div class="unli">不限</div>
                   <ul class="list li2 li3">
                     <li>
                       <i></i>
                       <span>7天</span>
                     </li>
                     <li>
                       <i></i>
                       <span>汉庭</span>
                     </li>
                     <li>
                       <i></i>
                       <span>如家</span>
                     </li>
                     <li>
                       <i></i>
                       <span>莫泰</span>
                     </li>
                     <li>
                       <i></i>
                       <span>布丁</span>
                     </li>
                     <li>
                       <i></i>
                       <span>速8</span>
                     </li>
                     <li>
                       <i></i>
                       <span>尚客优</span>
                     </li>
                   </ul>
                   <div class="cb">舒适/高档/豪华品牌</div>
                   <div class="h1"></div>
               </div>
             </div>
           </div>
           <div class="item">
             <div class="left">
               <span class="item4"></span>
               主题
             </div>
             <div class="right">
               <div class="option option3 option4">
                 <div class="unli">不限</div>
                   <ul class="list li2 li4">
                     <li>
                       <i></i>
                       <span>商家之旅</span>
                     </li>
                     <li>
                       <i></i>
                       <span>聚会做饭</span>
                     </li>
                     <li>
                       <i></i>
                       <span>农家乐</span>
                     </li>
                     <li>
                       <i></i>
                       <span>休闲情调</span>
                     </li>
                     <li>
                       <i></i>
                       <span>四合院</span>
                     </li>
                     <li>
                       <i></i>
                       <span>青年旅社</span>
                     </li>
                     <li>
                       <i></i>
                       <span>度假休闲</span>
                     </li>
                     <li>
                       <i></i>
                       <span>看病就医</span>
                     </li>
                   </ul>
                   <div class="h1"></div>
               </div>
             </div>
           </div>
           <div class="btn">展开服务设施&房型人数</div>
         </div>
         <div class="cont">
           <span>1515</span>
           家酒店满足条件
         </div>
         <div class="hlist">
           <div class="hlist_left">
             <div class="sort">
               <ul class="sort-li">
                 <li>推荐</li>
                 <li class="err">
                    口碑
                    <i></i>
                 </li>
                 <li>
                    距离
                    <i></i>
                 </li>
                 <li class="err">
                    价格
                    <i></i>
                 </li>
               </ul>
               <div class="sort-div"></div>
             </div>
           </div>
         </div>
      </div>
    </section>
    <footer>
        <foots></foots> 
    </footer>
  </div>
</template>

<script>
import headers from '../components/headers'
import foots from '../components/foots'
export default {
  name: 'huangshan',
  components:{
    headers,
    foots
  },
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
  .Box{
    width: 1200px;
    height: 3922px;
    background: #a6e;
    margin: 10px auto;
      .mt{
        width: 100%;
        height: 25px;
        // background: #de5;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 13px 0;
        h2{
          width: 144px;
          height: 25px;
          // background: #d76;
          font-size: 24px;
          font-weight: normal;
        }
        .link{
          width: 240px;
          height: 25px;
          // background: #d5a;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color:#555;
          font-size: 14px;
          margin: 15px 0 0 10px;
           a{
             text-decoration: none;
             color:#555;
           }
           span{
            width: 15px;
            height: 15px;
            font-size: 14px;
            margin: 0 0 0 5px;
           }
           h1{
            font-size: 14px;
            color:#555;
            cursor: pointer;
           }
           a:hover{
             color:#37e;
           }
        }
      }
      .search{
        width: 100%;
        height: 54px;
        background: #eff4fa;
        border-top: 2px solid #b5cbe6;
        display: flex;
        justify-content: space-around;
        align-items: center;
          div{
            height: 34px;
            // background: #fff;
             label{
              border:1px solid #8db9ef;
              height: 32px;
              display: block;
              color:#999;
              font-size: 16px;
              position: relative;
                input{
                  color:#555;
                  height: 29px;
                  width: 70%;
                  font-size: 17px;
                  border:none;
                }
                i{
                  width: 18px;
                  height: 17px;
                  background: url(../assets/icon-1.png) no-repeat;
                  display: block;
                  position: absolute;
                  top: 8px;
                  right: 5px;
                }
             }
          }
          div:nth-of-type(1){
            width: 260px;
          }
          div:nth-of-type(2){
            width: 498px;
            // background: #fff;
            display: flex;
             label:nth-of-type(2){
              .total{
                font-size: 13px;
              }
              input{
                width: 55%;
              }
             }
              .i1{
                background-position: 0 -77px;
              }
              .i2{
                background-position: -34px -77px;
              }
          }
          div:nth-of-type(3){
            width: 260px;
            // background: #fff;
          }
          div:nth-of-type(4){
            width: 140px;
            background: #F55;
            color:#fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
              i{
                background: url(../assets/icon-1.png) -71px -78px no-repeat;
                width: 18px;
                height: 17px;
                display: block;
                margin: 0 8px 0 0;
              }
          }
          div:nth-of-type(4):hover{
            background: #EE4000;
          }
      }
      .filter{
        width: 1198px;
        height: 227px;
        background: #fff;
        margin: 3px auto;
        border:1px solid #EEE;
         div{
           width: 100%;
           height: 36px;
           background: #eff4fa;
           margin: 3px 0 0 0;
           display: flex;
           flex-flow: row;
           justify-content: center;
             div{
              margin: 0;
              padding: 0;
             }
             .left{
               width: 96px;
               height: 36px;
               // background: #e7f;
                span{
                  width: 18px;
                  height: 18px;
                  background: url(../assets/icon-1.png);
                  margin: 0 5px 0 0px;
                }
                .place{
                  background-position: -98px -3px;
                }
             }
             .right{
               width: 1102px;
               height: 67px;
               background: #fff;
                .option{
                  width: 1062px;
                  height: 67px;
                  background: #fff;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  flex-flow: wrap;
                  border-bottom:1px dashed #eee;
                   .unli{
                     width: 42px;
                     height: 22px;
                     background: #e3f0ff;
                     border-radius: 10px;
                     font-size: 14px;
                     line-height: 22px;
                   }
                   ul{
                    width: 620px;
                    height: 25px;
                    // background: #f4a;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    justify-content: space-around;
                    padding: 4px 0 0 0;
                      li{
                        // background: orange;
                        height: 25px;
                        // width: 60px;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                         i{
                           width: 8px;
                           height: 4px;
                           background: url(../assets/icon-1.png) -462px -50px no-repeat;
                           display: block;
                         }
                      }
                      .on{
                        height: 30px;
                        border-top:2px solid #39F;
                        margin: -6px 0 0 0;
                        background:   #EAEAEA;
                      }
                      li:hover{
                        border-top:2px solid #39F;
                        color:#39F;
                        margin: -6px 0 0 0;
                        height: 30px;
                      }
                   }
                   .posi{
                    width: 1062px;
                    height: 30px;
                     .list{
                       width: 100%;
                       background:  #EAEAEA;
                       display: flex;
                       justify-content: space-between;
                         li{
                           // background: #c8f;
                           height: 20px;
                           width: 110px;
                            i{
                              width: 16px;
                              height: 16px;
                              background: url(../assets/icon-1.png) no-repeat -475px -79px;
                            }
                            span{
                              width: 96px;
                              height: 20px;
                              // background: #ea1;
                            }
                         }
                         li:last-of-type{
                          width: 20px;
                           i{
                            background-position: -104px -77px;
                            width: 20px;
                            height: 20px;
                           }
                         }
                         li:hover{
                          border:none;
                          margin: 0;
                         }
                     }
                   }
                }
             }
         }
         div:nth-of-type(1){
           height: 67px;
         }
         .item{
          .left{
            width: 96px;
            height: 36px;
            // background: #d76;
            display: flex;
            justify-content: centr;
            align-items: center;
             .item1{
               background-position: -119px -4px;
             }
             .item2{
              background-position: -141px -4px;
             }
             .item3{
              background-position: -164px -3px;
             }
             .item4{
              background-position: -186px -3px;
             }
          }
          .right{
            width: 1102px;
            height: 36px;
            // background: #abc;
            display: flex;
            justify-content: center;
            .option{
              width: 1062px;
              display: flex;
              height: 36px;
              justify-content: stretch;
              border-bottom:1px dashed #eee;
              flex-flow: row;
               .list{
                 width: 580px;
                 height: 25px;
                 // background: #d73;
                 display: flex;
                 justify-content: space-around;
                  li{
                    // width: 100px;
                    height: 20px;
                    // background: #eaf;
                     i{
                       background: url(../assets/icon-1.png)  no-repeat;
                       background-position: -475px -79px;
                       width: 16px;
                       height: 16px;
                     }
                  }
                  
                  li:hover{
                    border:none;
                    margin: 0;
                  }
               }
               .li2{
                 width: 520px;
                  li{
                    i{
                      background-position: -347px -78px;
                    }
                  }
                }
                .li3{
                  width: 855px;
                  li{
                    span{
                      width: 70px;
                    }
                  }
                }
                .li4{
                  width: 980px;
                  li{
                    span{
                      width: 70px;
                    }
                  }
                }
                .cb{
                  width: 116px;
                  height: 20px;
                  border:1px solid #999;
                  background:#eee;
                  font-size: 12px;
                  line-height: 20px;
                }
                .h1{
                  width: 20px;
                  height: 20px;
                  background:url(../assets/icon-1.png) -104px -77px no-repeat;
                }
               .custom{
                 width: 245px;
                 height: 21px;
                 // background: #eab;
                 display: flex;
                 justify-content: space-around;
                 font-size: 14px;
                   input{
                     width: 50px;
                     height: 14px;
                   }
                   span:nth-of-type(1){
                    font-size: 14px;
                   }
                   span:last-of-type{
                    width: 50px;
                    height: 20px;
                    background: #ddd;
                    text-align: center;
                   }
                   span:last-of-type:hover{
                    background: #4169E1;
                   }
               }
            }
            .option3{
              justify-content: space-between;
            }
            .option4{
              border-bottom: none;
            }
          }
         }
         .btn{
          width: 167px;
          height: 45px;
          background:#ebf5ff;
          color:#37D;
          margin: -27px auto 0 auto;
          z-index: 1;
          border-radius: 30px;
          line-height: 75px;
          font-size: 12px;
          border:1px solid #d4e3f2;
         }
         .btn:hover{
           background: #37D;
           color:#fff;
         }
      }
      .cont{
        width: 1200px;
        height: 27px;
        // background: #adcd48;
        margin: 20px auto 0 0;
        font-size: 14px;
        padding: 0 0 10px 0;
         span{
          color:#F55;
          font-size: 24px;
         }
      }
      .hlist{
        width: 1200px;
          .hlist_left{
            width: 830px;
            height: 3495px;
            background: #e8d;
             .sort{
              width: 828px;
              height: 41px;
              background: #8F8F8F;
              border:1px solid #CDE;
              border-top:2px solid #b5cbe6;
              display: flex;
              flex-flow: row;
              justify-content: space-between;
                .sort-li{
                  width: 284px;
                  height: 40px;
                  background: #a83;
                  margin: 0;
                  padding: 0;
                  list-style: none;
                  display: flex;
                  // flex-flow: row;
                  justify-content: flex-flex;
                   li{
                    width: 70px;
                    height: 40px;
                    background: #d7e;
                    margin: 0 3px 0 0px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                     i{
                       background: url(../assets/icon-1.png) no-repeat;
                       width: 7px;
                       height: 9px;
                       margin: 0 0 0 5px;
                     }
                   }
                   li:nth-of-type(1){
                    height: 38px;
                    border-top:2px solid #49f;
                    background: #49F;
                    color:#fff;
                    text-align: center;
                    line-height: 38px;
                   }
                   li:nth-of-type(2){
                    i{
                      background-position: -224px -123px;
                    }
                   }
                   li:nth-of-type(3){
                    color:#EAEAEA;
                    i{
                      background-position: -257px -123px;
                    }
                   }
                   li:nth-of-type(4){
                    i{
                      background-position: -257px -123px;
                    }
                   }
                   .err:hover{
                    background: #BFEFFF;
                   }
                }
                .sort-div{
                  width: 371px;
                  height: 40px;
                  background: #fde;
                }
             }
          }
      }
  }
</style>