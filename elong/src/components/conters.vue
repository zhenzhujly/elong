<template>
  <div id="conters"> 
   <div class="banner_n">
        <swiper :options="swiperOption" ref="mySwiper" class="tabPlay">
   <!-- slides -->
         <swiper-slide class="slideBox">
            <img src="../assets/top-1.jpg">
        </swiper-slide>
         <!-- <swiper-slide class="slideBox">
            <img src="../assets/top-2.jpg">
        </swiper-slide> -->
         <swiper-slide class="slideBox">
            <img src="../assets/top-3.jpg">
        </swiper-slide>
         <swiper-slide class="slideBox">
            <img src="../assets/top-4.jpg">
        </swiper-slide>
         <swiper-slide class="slideBox">
            <img src="../assets/top-5.jpg">
        </swiper-slide>
         <swiper-slide class="slideBox">
            <img src="../assets/top-6.jpg">
        </swiper-slide>
         <!-- Optional controls -->
         <!-- <div class="swiper-pagination dot"  slot="pagination"></div>
         <div class="swiper-button-prev dot" slot="button-prev"></div>
         <div class="swiper-button-next dot" slot="button-next"></div>
         <div class="swiper-scrollbar dot"   slot="scrollbar"></div> -->
       </swiper>
       <div class="cade">
         <ul class="left">
           <li class="one lis">
             <i class="i1"></i>
             <span>酒店</span>
           </li>
           <li class="lis">
             <i class="i2"></i>
             <span>机票</span>
           </li>
           <li class="lis">
             <i class="i3"></i>
             <span>火车票</span>
           </li>
           <li class="lis">
             <i class="i4"></i>
             <span>手机版</span>
           </li>
         </ul>
         <div class="rights rig1">
           <div class="hotel">
             <div class="clear">
               <span>
                 <b>国内酒店</b>
                 <i></i>
               </span>
               <span>
                 <b>国际酒店</b>
               </span>
             </div>
             <div class="wrap">
               <dl>
                 <dt>目的地</dt>
                 <dd>
                   <input type="text" value="黄山市">
                 </dd>
               </dl>
               <dl class="err">
                 <dt>入住</dt>
                 <dd>
                   <label>
                     <input type="text" value="2017-11-22">
                     <i></i>
                   </label>
                 </dd>
                 <dt>退房</dt>
                 <dd>
                   <label>
                     <input type="text" value="2017-11-23">
                     <i></i>
                   </label>
                 </dd>
               </dl>
               <dl>
                 <dt>关键词</dt>
                 <dd>
                   <input type="text" placeholder="如位置\酒店\品牌">
                 </dd>
               </dl>
               <div class="sub">
                 <span>
                   <i class="si1"></i>
                   搜索
                 </span>
                 <span>
                   <i class="si2"></i>
                   地图搜索
                 </span>
               </div>
             </div>
           </div>
         </div>
         <div class="rights rig2">
           <div class="hotel">
             <div class="clear">
               <span>
                 <b>国内机票</b>
                 <i></i>
               </span>
               <span>
                 <b>国际机票</b>
               </span>
             </div>
             <div class="wrap">
               <dl>
                 <dt>航程类型</dt>
                 <dd>
                   <label>
                     <input type="radio">
                     <span>单程</span>
                   </label>
                   <label>
                     <input type="radio">
                     <span>往返</span>
                   </label>
                 </dd>
               </dl>
               <dl class="tick">
                <dt>往返城市</dt>
                 <dd>
                   <input type="text" value="北京">
                 </dd>
                 <dt>
                   <span class="wf"></span>
                 </dt>
                 <dd>
                   <input type="text" value="上海">
                 </dd>
               </dl>
               <dl class="err">
                 <dt>去程</dt>
                 <dd>
                   <label>
                     <input type="text" value="2017-11-22">
                     <span>明天</span>
                     <i></i>
                   </label>
                 </dd>
                 <dt>返程</dt>
                 <dd>
                   <label>
                     <input type="text" placeholder="yyy-mm-dd">
                     <i></i>
                   </label>
                 </dd>
               </dl>
               <div class="sub">
                 <span>
                   <i class="si1"></i>
                   搜索
                 </span>
               </div>
             </div>
           </div>
         </div>
         <div class="rights rig2 rig3">
           <div class="hotel">
             <div class="wrap">
               <dl class="tick">
                <dt>往返城市</dt>
                 <dd>
                   <input type="text" value="北京">
                 </dd>
                 <dt>
                   <span class="wf"></span>
                 </dt>
                 <dd>
                   <input type="text" value="上海">
                 </dd>
               </dl>
               <dl class="err">
                 <dt>出发日期</dt>
                 <dd>
                   <label>
                     <input type="text" value="2017-11-22">
                     <span>明天</span>
                     <i></i>
                   </label>
                 </dd>
                 <span class="spn">
                   <i></i>
                   只看动车/高铁
                 </span>
               </dl>
               <div class="sub">
                 <span>
                   <i class="si1"></i>
                   搜索
                 </span>
               </div>
             </div>
           </div>
         </div>
         <div class="rights rig4">
           <div class="hotel">
           </div>
         </div>
       </div>
    </div>
    <div class="fix">
      <div class="fix-d">
        <i></i>
        <a href="">登录</a>
        <span>展示你的个性化内容</span>
      </div>
    </div>
    <div class="fold">
      <ul>
        <li>
          <p>
            <span>园林酒店</span>
          </p>
          <div class="im1"></div>
        </li>
        <li>
          <p>
            <span>情侣酒店</span>
          </p>
          <div class="im2"></div>
        </li>
        <li>
          <p>
            <span>设计师酒店</span>
          </p>
          <div class="im3"></div>
        </li>
        <li>
          <p>
            <span>青年旅社</span>
          </p>
          <div class="im4"></div>
        </li>
        <li>
          <p>
            <span>特色客栈</span>
          </p>
          <div class="im5"></div>
        </li>
        <li>
          <p>
            <span>海盗酒店</span>
          </p>
          <div class="im6"></div>
        </li>
        <li>
          <p>
            <span>海外温泉</span>
          </p>
          <div class="im7"></div>
        </li>
      </ul>
    </div>
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
            <span>登高踏青</span>
            <span>小憩温泉</span>
            <span>天然氧吧</span>
            <span>草原撒欢</span>
            <span>小镇时光</span>
            <span>美食之城</span>
          </div>
          <div class="rig">更多>></div>
        </h3>
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
      <div class="in ter">
        <h3>
          <a href="">
            <i></i>
            海外
          </a>
          <div class="span">
            <span>文艺清新</span>
            <span>面朝大海</span>
            <span>别样建筑</span>
            <span>浪漫主义</span>
            <span>魅力都市</span>
          </div>
          <div class="rig">更多>></div>
        </h3>
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
    </div>
    <div class="discount">
      <div class="top">
         <h2>
           <a href="">超值特价票</a>
         </h2>
      </div>
      <div class="tick air">
         <h3>
            <a href="">
              <i></i>
              机票
            </a>
            <div class="span">
              <span>北京出发</span>
              <span>上海出发</span>
              <span>广州出发</span>
              <span>杭州出发</span>
              <span>深圳出发</span>
              <span>成都出发</span>
            </div>
            <div class="rig">更多>></div>
        </h3>
          <ul>
            <li>
              <a href="">
                <span class="tops">
                  <b>北京</b>
                  <i></i>
                  <b>大连</b>
                </span>
                <span class="bot">
                  <b>12月07日</b>
                  <small>1.6折</small>
                  <b>￥140</b>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="tops">
                  <b>北京</b>
                  <i></i>
                  <b>烟台</b>
                </span>
                <span class="bot">
                  <b>11月25日</b>
                  <small>2折</small>
                  <b>￥140</b>
                </span>
              </a>
            </li>
            <li class="li-pro">
              <a href="">
                <span class="tops">
                  <b>北京</b>
                  <i></i>
                  <b>鄂尔多斯</b>
                </span>
                <span class="bot">
                  <b>11月21日</b>
                  <small>2折</small>
                  <b>￥160</b>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="tops">
                  <b>北京</b>
                  <i></i>
                  <b>银川</b>
                </span>
                <span class="bot">
                  <b>11月19日</b>
                  <small>1.5折</small>
                  <b>￥180</b>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="tops">
                  <b>北京</b>
                  <i></i>
                  <b>太原</b>
                </span>
                <span class="bot">
                  <b>11月18日</b>
                  <small>1.8折</small>
                  <b>￥200</b>
                </span>
              </a>
            </li>
            <li class="li-pro">
              <a href="">
                <span class="tops">
                  <b>北京</b>
                  <i></i>
                  <b>呼和浩特</b>
                </span>
                <span class="bot">
                  <b>11月19日</b>
                  <small>2.7折</small>
                  <b>￥200</b>
                </span>
              </a>
            </li>
          </ul>
      </div>
      <div class="tick way">
        <h3>
            <a href="">
              <i></i>
              火车票
            </a>
            <div class="span">
              <span>北京出发</span>
              <span>上海出发</span>
              <span>广州出发</span>
              <span>深圳出发</span>
              <span>天津出发</span>
              <span>厦门出发</span>
            </div>
            <div class="rig">更多>></div>
        </h3>
          <ul>
            <li>
              <a href="">
                <span class="tops">
                  <b>北京</b>
                  <i></i>
                  <b>上海</b>
                </span>
                <span class="bot">
                  <b>11月18日</b>
                  <b>￥156.5</b>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="tops">
                  <b>北京西</b>
                  <i></i>
                  <b>太原</b>
                </span>
                <span class="bot">
                  <b>11月18日</b>
                  <b>￥72.0</b>
                </span>
              </a>
            </li>
            <li class="li-pro">
              <a href="">
                <span class="tops">
                  <b>北京西</b>
                  <i></i>
                  <b>西安</b>
                </span>
                <span class="bot">
                  <b>11月21日</b>
                  <b>￥148.5</b>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="tops">
                  <b>北京西</b>
                  <i></i>
                  <b>合肥</b>
                </span>
                <span class="bot">
                  <b>11月19日</b>
                  <b>￥138.5</b>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="tops">
                  <b>北京</b>
                  <i></i>
                  <b>杭州</b>
                </span>
                <span class="bot">
                  <b>11月18日</b>
                  <b>￥189.5</b>
                </span>
              </a>
            </li>
            <li class="li-pro">
              <a href="">
                <span class="tops">
                  <b>北京西</b>
                  <i></i>
                  <b>郑州</b>
                </span>
                <span class="bot">
                  <b>11月19日</b>
                  <b>￥93.0</b>
                </span>
              </a>
            </li>
          </ul>
      </div>
    </div>
    <div class="raiders">
      <div class="top">
         <h2>
           <a href="">旅游指南</a>
         </h2>
      </div>
      <div class="pic">
        <div class="left">
          <ul>
            <li class="one">
              <span></span>
              <a href="">小朋友超爱的三亚酒店</a>
            </li>
            <li>
              <span></span>
              <a href="">7条航线带你“邮”世界</a>
            </li>
            <li>
              <span></span>
              <a href="">盘点国内52处世界遗产</a>
            </li>
            <li>
              <span></span>
              <a href="">青岛七星酒店住一晚</a>
            </li>
            <div class="right_div"></div>
          </ul>  
        </div>
        <div class="right">
          <div>
            <a href=""><img src="../assets/1.jpg"></a>
            <p><a href="">探秘海岛，赵薇在象岛开的中餐厅</a></p>
          </div>
          <div>
            <a href=""><img src="../assets/2.jpg"></a>
            <p><a href="">毛里求斯 海誓山盟</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="top">
         <div class="top-d">
           <div>
             <i></i>
             <span>全球75万家酒店</span>
           </div>
           <div>
             <i></i>
             <span>订酒店返现金高达20%</span>
           </div>
           <div>
             <i></i>
             <span>国际酒店8折起</span>
           </div>
           <div>
             <i></i>
             <span>7×24小时服务</span>
           </div>
         </div>
      </div>
      <div class="bot">
        <div class="lef"></div>
        <div class="inp">
          <span>亲，留下您的邮箱，会有惊喜呦~</span>
          <input type="text" value="请输入您的E-mail">
          <input type="button" value="立即订阅">
        </div>
        <div class="rig"><a href="">艺龙服务协议</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper,swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'conters',
  components:{
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
            notNextTick:true,
            direction :'horizontal', 
            autoplay:1500, 
            effect:"fade",
            grabCursor :true,
            setWrapperSize :true,
            pagination: '.swiper-pagination',    
            paginationClickable :true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            mousewheelControl : true,
            observeParents:true,
      }
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
     var lis=document.getElementsByClassName('lis');
     var rights=document.getElementsByClassName('rights');
     console.log(rights)
     var index=0;
      for(let i=0;i<lis.length;i++){
          lis[i].index=i;
          lis[i].onclick=function(){
              for(let j=0;j<lis.length;j++){
                  rights[j].style.display='none';
                  lis[j].style.color='#555';
                  lis[j].style.background='#f3f3f3';
                  lis[j].style.border='1px solid #e1e1e1';
                  lis[j].style.borderLeft='none';
              }
              rights[this.index].style.display='block';
              lis[this.index].style.border='none';
              lis[this.index].style.color="#37D";
              lis[this.index].style.background="#fff";
          }
          
      }
  },
  computed:{
     swiper() {
       return this.$refs.mySwiper.swiper
     }
  }
}
</script>
<style lang="scss" scope>
#conters{
  width: 100%;
  height: 2190px;
  // background: pink;
   .banner_n{
     width: 1349px;
     height: 380px;
     background: #a2e4d8;
     overflow: hidden;
     margin: 0 0 0 -42px;
     position: relative;
      .tabPlay{
        width: 1349px;
        height: 100%;
         .slideBox{
            width: 1226px;
            height: 460px;
            display: block;
            float: left;
             img{
               width: 1349px;
               height: 100%;
               // background-size:cover;
             }
          }
      }
      .cade{
        width: 600px;
        height: 300px;
        background: #fff;
        position: absolute;
        top: 50px;
        left:50px;
        display: flex;
        justify-content: space-between;
         .left{
           width: 100px;
           height: 100%;
           // background: #E066FF;
           margin: 0;
           padding: 0;
           list-style: none;
           display: flex;
           flex-flow: column;
           align-content: flex-start;
             li{
               width: 98px;
               height: 59px;
               background: #f3f3f3;
               border:1px solid #e1e1e1;
               border-left:none;
               border-bottom:none;
               display: flex;
               justify-content: center;
               align-items: center;
               font-size: 14px;
               color:#555;
                i{
                  background: url(../assets/index.png) no-repeat;
                  width: 15px;
                  height: 15px;
                  display: block;
                }
                .i1{
                  background-position: -557px -345px;
                }
                .i2{
                  background-position: -582px -367px;
                }
                .i3{
                  background-position: -584px -386px;
                }
                .i4{
                  background-position: -581px -317px;
                  height: 18px;
                }
             }
             li:nth-of-type(1){
               color:#37D;
               background:#fff;
               border:none;
               // border-left:1px solid transparent;
             }
         }
         .rights{
           width: 500px;
           height: 100%;
           background: #fff;
           display: flex;
           justify-content: center;
           display: none;
            .hotel{
              width: 440px;
              height: 257px;
              padding: 0 0 0 20px;
              // background:#a85;
               .clear{
                width: 440px;
                height: 32px;
                // background:#B23AEE;
                border-bottom: 2px solid #aaa;
                display: flex;
                flex-flow: row;
                margin: 10px 0 0 0;
                  span{
                    width: 90px;
                    height: 32px;
                    // background:#EEA2AD;
                    display: block;
                    border-bottom: 2px solid #37D;
                    text-align: center;
                    line-height: 30px;
                    font-size: 14px;
                    color:#37D;
                      i{
                        width: 7px;
                        height: 4px;
                        background:url(../assets/index.png) -475px 0 no-repeat;
                        display: block;
                        margin: -2px auto 0 auto;
                      }
                  }
                  span:last-of-type{
                    border:none;
                    color:#000;
                  }
              }
               .wrap{
                width: 440px;
                height: 136px;
                // background:#AEEEEE;
                margin: 15px 0 0 0;
                  dl{
                    width: 100%;
                    height: 32px;
                    // background: #EE4000;
                    display: flex;
                    flex-flow: row;
                      dt{
                        width: 70px;
                        height: 32px;
                        // background: blue;
                        margin: 0;
                        text-align: center;
                        line-height: 32px;
                        color:#555;
                        font-size: 14px;
                      }
                      dd{
                        width: 370px;
                        height: 32px;
                        background: #fff;
                        margin: 0;
                        border:1px solid #ddd;
                        border-radius: 4px;
                         input{
                           width: 90%;
                           height: 90%;
                           border:none;
                           border-radius: 4px;
                           margin: 0 0 0 10px;
                           outline: none;
                         }
                      }
                  }
                  .err{
                    dd{
                      width: 160px;
                      height: 32px;
                       label{
                        width: 152px;
                        height: 32px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                         input{
                           width: 90%;
                           height: 90%;
                         }
                         i{
                          width: 20px;
                          height: 16px;
                          background: url(../assets/icon.png) -480px -763px no-repeat;
                          display: block;
                          margin: 0 5px 0 0;
                         }
                       }
                    }
                  }
                  .sub{
                    width: 270px;
                    height: 32px;
                    // background: orange;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-around;
                     span{
                       display: block;
                       height: 32px;
                       // background: #d7e;
                       display: flex;
                       flex-flow: row;
                       align-items: center;
                       justify-content: center;
                        i{
                          width: 18px;
                          height: 18px;
                          background: url(../assets/icon.png) no-repeat;
                          display: block;
                        }
                        .si1{
                          background-position: -432px -763px;
                        }
                        .si2{
                          background-position: -455px -764px;
                        }
                     }
                     span:nth-of-type(1){
                      background: #f55;
                      color:#fff;
                      width: 159px;
                      border-radius: 5px;
                       i{
                        margin: 0 5px 0 0;
                       }
                     }
                     span:nth-of-type(2){
                       border-radius: 5px;
                       border:1px solid gray;
                       height: 30px;
                     }
                  }
              }
            }
         }
         .rig1{
           display: block;
         }
         .rig2{
           .hotel{
             .wrap{
               dl:nth-of-type(1){
                dd{
                  width: 142px;
                  height: 30px;
                  display: flex;
                  flex-flow: row;
                  border:none;
                    label{
                      width: 70px;
                      height: 30px;
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                       input{
                         width: 13px;
                         height: 13px;
                         border:none;
                       }
                    }
                }
               }
               .tick{
                dt:nth-of-type(1){
                  width: 145px;
                  height: 30px;
                }
                dt:nth-of-type(2){
                  width: 80px;
                  height: 30px;
                  .wf{
                      background: url(../assets/icon.png) -260px -750px no-repeat;
                      width: 30px;
                      height: 25px;
                      display: block;
                   }
                dd{
                  width: 160px;
                  height: 30px;
                }
               }
             }
               .err{
                dd{
                  label:nth-of-type(1){
                    span{
                      width: 38px;
                      height: 32px;
                      font-size: 12px;
                      display: block;
                      line-height: 32px;
                    }
                    i{
                      width: 27px;
                    }
                  }
                }
               }
               .sub{
                width: 315px;
                justify-content: flex-start;
              }
             }
           }
         }
         .rig3{
           .hotel{
            margin: 20px auto;
             .wrap{
               .tick{
                display: flex;
                justify-content: flex-start;
                 dt:nth-of-type(1){
                   width: 70px;
                 }
                 dd:nth-of-type(1){
                   border:1px solid #ddd;
                 }
                 dt:nth-of-type(2){
                   width: 40px;
                 }
                 dd:nth-of-type(2){
                   border:1px solid #ddd;
                 }
               }
               .err{
                 width: 85%;
                 .spn{
                   width: 100px;
                   height: 32px;
                   font-size: 13px;
                   display: flex;
                   flex-flow: row;
                   align-items: center;
                   margin: 0 0 0 20px;
                   i{
                     width: 12px;
                     height: 12px;
                     background: url(../assets/index.png) -536px -32px no-repeat;
                     display:block;
                     margin: 0 5px 0 0;
                   }
                 }
                 
               }
             }
           }
         }
         .rig4{
           .hotel{
            width: 455px;
            height: 300px;
            background: url(../assets/bg.png) no-repeat center bottom;
           }
         }
      }
   }
   .fix{
     width: 1200px;
     height: 32px;
     // background: #a524c3;
     margin: 10px auto;
      .fix-d{
        width: 215px;
        height: 32px;
        // background: #d8a;
        border-radius: 20px;
        border:1px solid #999;
        line-height: 32px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        font-size: 14px;
          i{
            background: url(../assets/index.png) -583px -13px no-repeat;
            width: 15px;
            height: 15px;
            display: block;
            margin: 0 5px 0 0;
          }
          a{
            text-decoration: none;
            color:#37D;
            font-size:14px;
          }
          a:hover{
            color:red;
          }
      }
   }
   .fold{
     width: 1200px;
     height: 260px;
     background: #d49b3e;
     margin: 15px auto;
       ul{
         width: 100%;
         list-style: none;
         display: flex;
         flex-flow: row;
         margin: 0;
         padding: 0;
           li{
            width: 172px;
            height: 260px;
            background: #e4a;
            transition:0.3s ease width;
             p{
               width:100%;
               height:260px;
               background:rgba(0,0,0,0.3);
               float:left;
               margin: 0;
               span{
                display:block;
                width:30px;
                color:#fff;
                font-size:30px;
                margin:0 auto;
              }
             }
             div{
              width: 100%;
              height: 100%;
             }
             .im1{
               background: url(../assets/fold1.jpg) center no-repeat;
             }
             .im2{
               background: url(../assets/fold2.jpg) center no-repeat;
             }
             .im3{
               background: url(../assets/fold3.jpg) center no-repeat;
             }
             .im4{
               background: url(../assets/fold4.jpg) center no-repeat;
             }
             .im5{
               background: url(../assets/fold5.jpg) center no-repeat;
             }
             .im6{
               background: url(../assets/fold6.jpg) center no-repeat;
             }
             .im7{
               background: url(../assets/fold7.jpg) center no-repeat;
             }
           }
           li:hover{
            width: 500px;
             p{
              display: none;
             }
           }
       }
   }
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
                 font:14px/22px Microsoft yahei;
                 color:#555;
                 display: block;
                 margin: 0 0 0 10px;
                 text-align: center;
                 cursor: pointer;
                }
                span:nth-of-type(1){
                  border-radius: 20px;
                  background: #f55;
                  color:#fff;
                }
                span:nth-of-type(1):hover{
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
          ul{
            width: 100%;
            height: 202px;
            // background: #d45c2c;
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
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
                         width: 75px;
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
       }
       .ter{
         h3{
          a{
            i{
            background:url(../assets/index.png) -574px -130px no-repeat;
            }
          }
         }
         ul{
          li:nth-of-type(1){
              .img{
                background: url(../assets/ld.jpg);
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
       }
   }
   .discount{
    width: 1200px;
    height: 372px;
    background: #fff;
    margin: 0 auto;
      .top{
         width: 100%;
         height: 46px;
         // background: #ae1;
         border-bottom: 2px solid #49f;
           a{
             font:24px/46px Microsoft yahei;
             color: #49f;
             text-decoration: none;
           }
        }
        .tick{
          width: 100%;
          height: 150px;
          // background: #fff;
          margin: 5px 0 0 0;
            h3{
              width: 100%;
              height: 48px;
              // background: #be1;
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
                     background:url(../assets/index.png) -574px -188px no-repeat;
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
                 align-items: center;
                  span{
                    width: 76px;
                   height: 24px;
                   // background: #ab7;
                   border:1px solid transparent;
                   font:14px/22px Microsoft yahei;
                   color:#555;
                   display: block;
                   margin: 0 0 0 10px;
                   text-align: center;
                   cursor: pointer;
                  }
                  span:nth-of-type(1){
                    border-radius: 20px;
                    background: #49f;
                    color:#fff;
                  }
                  span:nth-of-type(1):hover{
                    color:#fff;
                  }
                  span:hover{
                     border-radius: 20px;
                     border:1px solid #49f;
                     color:#49f;
                  }
               }
               .rig{
                   font:14px/22px Microsoft yahei;
               }
               .rig:hover{
                 color:#f55;
               }
            }
            ul{
              width: 100%;
              height: 102px;
              // background: #5761a8;
              margin: 0;
              padding: 0;
              list-style: none;
              display: flex;
              flex-flow: row;
              justify-content: space-between;
               li{
                 width: 198px;
                 height: 100px;
                 background: #f4f9ff;
                 border:1px solid #d8e8fe;
                   a{
                     width: 198px;
                     height: 99px;
                     // background: #a5c4e2;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     flex-flow: column;
                     text-decoration: none;
                       span{
                         width: 148px;
                         height: 30px;
                        // background:red;
                        display: flex;
                        flex-flow: row;
                        justify-content: space-between;
                       }
                       .tops{
                         b{
                          font:14px/30px Microsoft yahei;
                          color:#000;
                         }
                         i{
                           background: url(../assets/index.png) -574px -162px no-repeat;
                           width: 30px;
                           height: 25px;
                           display: block;
                         }
                       }
                       .bot{
                         width:178px;
                         margin: 0 0 0 20px;
                         font:12px/30px Microsoft yahei;
                         b{
                          width: 60px;
                          height: 30px;
                          color:#000;
                          font-weight: normal;
                         }
                         b:nth-of-type(2){
                           color:#fc6622;
                         }
                         small{
                           width: 36px;
                           height: 20px;
                           background: green;
                           border-radius: 10px;
                           line-height: 20px;
                           margin: auto;
                           color:#fff;
                           text-align: center;
                         }
                       }
                   }
               }
               li:hover{
                 border:1px solid #49f;
                 a{
                   border-bottom:1px solid #49f;
                 }
               }
            }
        }
        .way{
          h3{
             a{
               i{
                 background: url(../assets/index.png) -574px -220px no-repeat;
               }
             }
          }
          ul{
            li{
              a{
                .tops{
                  i{
                    background:url(../assets/index.png) -527px -162px no-repeat;
                  }
                }
              }
            }
          }
        }
   }
   .raiders{
     width: 1200px;
     height: 290px;
     margin: 10px auto;
     background: #fff;
       .top{
         width: 100%;
         height: 46px;
         // background: #ae1;
         border-bottom: 2px solid #7c1;
           a{
             font:24px/46px Microsoft yahei;
             color: #7c1;
             text-decoration: none;
           }
       }
       .pic{
         width: 100%;
         height: 232px;
         // background: #d71;
         display: flex;
         justify-content: space-between;
         align-items: flex-end;
           .left{
             width: 620px;
             height: 220px;
             // background: #a73;
             display: flex;
             flex-flow:row nowrap;
             justify-content: space-between;
              ul{
                width:580px;
                height: 220px;
                // background: #abc;
                position: relative;
                margin: 0;
                padding: 0;
                list-style: none;
                  li{
                    width: 220px;
                    height: 54px;
                    background: #fff;
                    border-bottom:1px solid #ccc;
                    position: relative;
                    display: flex;
                    align-items: center;
                     a{
                      text-decoration: none;
                      color:#000;
                      font-size: 14px;
                     }
                     span{
                      width: 12px;
                      height: 19px;
                      background: url(../assets/index.png) -547px 0 no-repeat;
                      position: absolute;
                      right: 10px;
                      top: 15px;
                      display: none;
                      z-index: 3;
                     }
                  }
                  li:nth-of-type(1){
                    background: #89ca00;
                    a{
                      color:#fff;
                    }
                    span{
                      display: block;
                    }
                  }
                  li:hover{
                    background: #89ca00;
                    a{
                      color:#fff;
                    }
                    span{
                      display: block;
                    }
                  }
                  li:hover + .one{
                    background: #fff;
                    a{
                      color:#000;
                    }
                  }
                  li:nth-of-type(2):hover~.right_div{
                      background:url(../assets/4.jpg);
                  }
                  li:nth-of-type(3):hover~.right_div{
                      background:url(../assets/5.jpg);
                  }
                  li:nth-of-type(4):hover~.right_div{
                      background:url(../assets/6.jpg);
                  }
                  .right_div{
                    width:380px;
                    height:220px;
                    position: absolute;
                    top:0;
                    right:0;
                    background: url(../assets/3.jpg);
                  }
              }
           }
           .right{
             width: 600px;
             height: 222px;
             // background: #227;
             display: flex;
             justify-content: space-between;
               div{
                 width: 290px;
                 height: 222px;
                 // background: #ab4;
                 display: flex;
                 flex-flow: column;
                 a{
                  margin: 0;
                  width: 290px;
                  height: 180px;
                   img{
                     width: 290px;
                    height: 180px;
                   }
                 }
                p{
                  width: 290px;
                  height: 41px;
                  background: #f7f7f7;
                  margin: 0;
                  border-bottom:1px solid #ccc;
                   a{
                     height: 40px;
                     text-decoration: none;
                     color:#37e;
                     font:14px/40px Microsoft yahei;
                   }
                 }
                 p:hover{
                  border-bottom:2px solid #7c1;
                  a{
                    color:#f55;
                  }
                 }
               }
           }
       }
   }
   .service{
     width: 1200px;
     height: 181px;
     background: #f7f7f7;
     margin: 0 auto;
     display: flex;
     flex-flow: column;
      .top{
        width: 100%;
        height: 101px;
        // background: #d53;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
          .top-d{
            width: 1160px;
            height: 60px;
            // background: #ec4;
            display: flex;
            justify-content: space-between;
              div{
                // background: #d4e7a5;
                width: 290px;
                height: 60px;
                margin: 0 0 0 3px;
                display: flex;
                flex-flow: row;
                align-items: center;
                 i{
                   width: 60px;
                   height: 60px;
                   background: url(../assets/index.png) -91px -4px no-repeat;
                   display: block;
                   margin: 0 10px 0 0px;
                 }
              }
              div:nth-of-type(2) i{
               background: url(../assets/index.png) -159px -4px no-repeat;
             }
             div:nth-of-type(3) i{
               background: url(../assets/index.png) -228px -4px no-repeat;
             }
             div:nth-of-type(4) i{
               background: url(../assets/index.png) -295px -6px no-repeat;
             }
          }
      }
      .bot{
        width: 100%;
        height: 80px;
        // background: #e5a234;
        display: flex;
        justify-content: space-between;
        align-items: center;
         .lef{
           width: 110px;
           height: 80px;
           background: url(../assets/index.png) -400px -25px no-repeat;
         }
         .inp{
           width: 600px;
           height: 30px;
           // background: #de3;
            span{
              color:#666;
              font-size: 16px;
            }
            input:nth-of-type(1){
              width: 208px;
              height: 24px;
            }
            input:nth-of-type(2){
              background: #3377dd;
              width: 80px;
              height: 30px;
              color:#fff;
              border:none;
              margin: 0 0 0 -5px;
            }
         }
         .rig{
           width:94px;
           height: 80px;
           // background: #e5a;
            a{
              text-decoration: none;
              color:#37e;
              font-size:14px;
              line-height: 80px;
            }
            a:hover{
              color:#f55;
            }
         }
      }
      .bot:hover .lef{
        transition: position 0.5s;
        background-position: -380px -25px;
      }
   }
}
</style>