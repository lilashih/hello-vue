var e=Object.assign;import{l as t,f as a,a as o,b as r,c as s,d as c,e as n,g as i,h as l,i as u,j as d,k as m,m as p,n as f,o as v,p as b,F as y,r as h,q as k,s as g,t as C,u as q,v as x,w as S,x as _,y as w,z as T,A as I,B as z,C as M,D as R,E as V,G as O,H as L,I as E,J as F,K as B,T as N,L as K,M as P,N as Y,O as j,P as U,Q as G,R as H,S as D,U as W,V as A}from"./vendor.2db8382a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,s)=>{const c=new URL(e,o);if(self[t].moduleMap[c])return a(self[t].moduleMap[c]);const n=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){s(new Error(`Failed to import: ${e}`)),r(i)},onload(){a(self[t].moduleMap[c]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/hello-world/assets/");t.add(a,o,r,s,c,n,i,l,u,d,m,p,f,v,b);const J={components:{}};J.render=function(e,t,a,o,r,s){const c=h("router-view");return k(),g(c)};const Q={props:{title:{type:String,default:""}},watch:{title:{handler(){document.title=this.title},immediate:!0}}};Q.render=function(e,t,a,o,r,s){return k(),g("div")};const X={props:{index:{type:Number,required:!0},matched:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},icon:{type:String,required:!0},iconSize:{type:String,default:"3x"},backgroundColor:{type:String,default:""},color:{type:String,default:""}},emits:["click-card"],setup:(e,t)=>({flippedStyle:x((()=>e.visible?"flipped":"")),clickCard:()=>{t.emit("click-card",{icon:e.icon,index:e.index})}})},Z=w("data-v-5e36bbee");C("data-v-5e36bbee");const ee={key:0,class:"face front"},te={key:0,class:"absolute bottom-0 left-0"};q();const ae=Z(((e,t,a,o,r,s)=>{const c=h("Fa");return k(),g("div",{class:["card",o.flippedStyle],onClick:t[1]||(t[1]=(...e)=>o.clickCard&&o.clickCard(...e))},[a.visible?(k(),g("div",{key:1,class:"face back",style:{color:a.color,backgroundColor:a.backgroundColor}},[S(c,{icon:a.icon,size:a.iconSize,flip:"horizontal"},null,8,["icon","size"]),a.matched?(k(),g("div",te,[S(c,{icon:"check-circle",size:"lg",flip:"horizontal"})])):_("",!0)],4)):(k(),g("div",ee))],2)}));X.render=ae,X.__scopeId="data-v-5e36bbee";const oe={components:{Item:X},setup(){const e=T({index:1,icon:"anchor",backgroundColor:"#fecaca",color:"#069bcc",iconSize:"2x",matched:!1,visible:!1});return{item:e,mouseOver:()=>{e.visible=!0},mouseLeave:()=>{e.visible=!1}}},methods:{clickItem(){this.$router.push({name:"card"})}}},re=w("data-v-5875059c")(((e,t,a,o,r,s)=>{const c=h("Item");return k(),g(c,{class:"item-box",index:o.item.index,matched:o.item.matched,visible:o.item.visible,icon:o.item.icon,"icon-size":o.item.iconSize,"background-color":o.item.backgroundColor,color:o.item.color,onMouseover:o.mouseOver,onMouseleave:o.mouseLeave,onClickCard:s.clickItem},null,8,["index","matched","visible","icon","icon-size","background-color","color","onMouseover","onMouseleave","onClickCard"])}));oe.render=re,oe.__scopeId="data-v-5875059c";const se={props:{value:{type:Number,required:!0},index:{type:Number,required:!0},size:{type:Number,default:100},icon:{type:[String,Array],default:""},iconSize:{type:String,default:"3x"},iconColor:{type:String,default:"black"}},emits:["click-square"],setup(e,t){const a=I(`square-${e.index}`),o=x((()=>""!==e.icon)),r=T({width:`${e.size}px`,height:`${e.size}px`});return{className:a.value,styleObject:r,hasIcon:o,clickSquare:()=>{t.emit("click-square",{index:e.value})}}}},ce=w("data-v-5acdd176")(((e,t,a,o,r,s)=>{const c=h("Fa");return k(),g("div",{class:["square",o.className],style:o.styleObject,onClick:t[1]||(t[1]=e=>o.clickSquare())},[o.hasIcon?(k(),g(c,{key:0,icon:a.icon,size:a.iconSize,style:{color:a.iconColor}},null,8,["icon","size","style"])):_("",!0)],6)}));se.render=ce,se.__scopeId="data-v-5acdd176";const ne={components:{Item:se},setup(){const e=["item-box","animate__animated"],t=I([]),a=T(["","times","",["far","circle"],"","","","",""]),o=()=>{t.value=e.concat(["animate__jello","animate__slower","animate__infinite","infinite"])};return o(),{items:a,classes:t,mouseOver:()=>{t.value=e.concat(["animate__rotateIn"])},mouseLeave:o}},methods:{clickItem(){this.$router.push({name:"tic-tac-toe"})}}},ie=w("data-v-e1b1eb70")(((e,t,a,o,r,s)=>{const c=h("Item");return k(),g("div",{class:o.classes,onMouseover:t[1]||(t[1]=(...e)=>o.mouseOver&&o.mouseOver(...e)),onMouseleave:t[2]||(t[2]=(...e)=>o.mouseLeave&&o.mouseLeave(...e))},[(k(!0),g(z,null,M(o.items,((e,t)=>(k(),g(c,{key:t,index:t,value:t,icon:e,size:50,"icon-size":"2x","icon-color":"white",onClickSquare:s.clickItem},null,8,["index","value","icon","onClickSquare"])))),128))],34)}));ne.render=ie,ne.__scopeId="data-v-e1b1eb70";const le={props:{index:{type:Number,required:!0},beforeKey:{type:Number,default:null},beforeValue:{type:Number,default:null},afterValue:{type:Number,required:!0},byComputer:{type:Boolean,default:!1}},emits:["swip-square"],setup(e,t){const a=R();return{style:x((()=>a.getters["game2048/style"](e.afterValue))),classes:x((()=>e.afterValue>0&&e.byComputer?"move-by-computer":"")),showText:e=>e>0?e:"",swipSquare:e=>{t.emit("swip-square",{which:e})}}}},ue=w("data-v-ccb40606")(((e,t,a,o,r,s)=>{const c=V("touch");return O((k(),g("div",{class:["square ",o.classes],style:o.style},[S("p",null,L(o.showText(a.afterValue)),1)],6)),[[c,o.swipSquare,"swipe"]])}));le.render=ue,le.__scopeId="data-v-ccb40606";const de={components:{Item:le},setup(){const e=["item-box","animate__animated"],t=I([]),a=T({index:1,beforeKey:0,beforeValue:2,afterValue:2048,byComputer:!0}),o=()=>{t.value=e.concat(["animate__swing","animate__infinite","infinite"])};return o(),{classes:t,item:a,mouseOver:()=>{t.value=e.concat(["animate__rubberBand"])},mouseLeave:o}},methods:{clickSquare(){this.$router.push({name:"2048"})}}},me=w("data-v-df40047e")(((e,t,a,o,r,s)=>{const c=h("Item");return k(),g("div",{class:o.classes,onMouseover:t[1]||(t[1]=(...e)=>o.mouseOver&&o.mouseOver(...e)),onMouseleave:t[2]||(t[2]=(...e)=>o.mouseLeave&&o.mouseLeave(...e))},[S(c,{key:o.item.index,class:"item",index:o.item.index,"before-key":o.item.beforeKey,"before-value":o.item.beforeValue,"after-value":o.item.afterValue,"by-computer":o.item.byComputer,onClick:s.clickSquare},null,8,["index","before-key","before-value","after-value","by-computer","onClick"])],34)}));de.render=me,de.__scopeId="data-v-df40047e";const pe={setup(){const e=["item-box","animate__animated"],t=I([]),a=()=>{t.value=e.concat(["animate__swing","animate__infinite","infinite"])};return a(),{classes:t,mouseOver:()=>{t.value=e.concat(["animate__heartBeat"])},mouseLeave:a}},methods:{clickItem(){this.$router.push({name:"youtube"})}}},fe=w("data-v-be57fc10")(((e,t,a,o,r,s)=>{const c=h("Fa");return k(),g("div",{class:o.classes,onClick:t[1]||(t[1]=(...e)=>s.clickItem&&s.clickItem(...e)),onMouseover:t[2]||(t[2]=(...e)=>o.mouseOver&&o.mouseOver(...e)),onMouseleave:t[3]||(t[3]=(...e)=>o.mouseLeave&&o.mouseLeave(...e))},[S(c,{icon:["fab","youtube"],size:"3x"})],34)}));pe.render=fe,pe.__scopeId="data-v-be57fc10";const ve={components:{Title:Q,Card:oe,TicTacToe:ne,Game2048:de,Youtube:pe},mounted(){$("body").attr("class","body-home")}},be={class:"container"};ve.render=function(e,t,a,o,r,s){const c=h("Title"),n=h("Card"),i=h("TicTacToe"),l=h("Game2048"),u=h("Youtube");return k(),g(z,null,[S(c,{title:"Home"}),S("div",be,[S(n),S(i),S(l),S(u)])],64)};const ye={components:{Title:Q},props:{title:{type:String,default:""}},emits:["restart"]},he=w("data-v-08cef6d6");C("data-v-08cef6d6");const ke={class:"text-center my-2 sm:my-4 text-3xl"},ge={class:"flex justify-center m-auto px-2 my-2"},Ce={class:"text-right w-11/12"},qe={href:"https://github.com/lilashih/hello-world",target:"_blank"};q();const xe=he(((e,t,a,o,r,s)=>{const c=h("Title"),n=h("Fa"),i=h("router-link");return k(),g(z,null,[S(c,{title:a.title},null,8,["title"]),S("div",ke,[E(e.$slots,"title")]),S("div",ge,[S("div",{class:"text-left w-1/12",onClick:t[1]||(t[1]=t=>e.$emit("restart"))},[S(n,{class:"head-icon",icon:"sync-alt",size:"lg"})]),S("div",Ce,[S(i,{class:"mr-1",to:{name:"home"}},{default:he((()=>[S(n,{class:"head-icon",icon:"home",size:"lg"})])),_:1}),S("a",qe,[S(n,{class:"head-icon",icon:["fab","github"],size:"lg"})])])])],64)}));function Se(t=["#bb0000","#ffffff"]){const a=Date.now()+5e3,o={startVelocity:30,spread:360,ticks:60,zIndex:0,particleCount:2,angle:60,origin:{x:0},colors:t};function r(e,t){return Math.random()*(t-e)+e}!function t(){setInterval((()=>{const s=a-Date.now();if(s<=0)return clearInterval(t);const c=s/5e3*50;F(e(e({},o),{particleCount:c,origin:{x:r(.1,.3),y:Math.random()-.2}})),F(e(e({},o),{particleCount:c,origin:{x:r(.7,.9),y:Math.random()-.2}}))}),250)}()}ye.render=xe,ye.__scopeId="data-v-08cef6d6";const _e={components:{Card:X},setup(){const e=R(),t=x((()=>e.state.card.cards)),a=x((()=>e.getters["card/matchedCount"]));return B(a,(e=>{e===t.value.length&&Se()})),{cards:t,matchedCount:a,clickCard:t=>{e.dispatch("card/clickCard",t)}}}},we=w("data-v-b111a480");C("data-v-b111a480");const Te={class:"cards"};q();const Ie=we(((e,t,a,o,r,s)=>{const c=h("Card");return k(),g("div",Te,[S(N,{name:"shuffle"},{default:we((()=>[(k(!0),g(z,null,M(o.cards,((e,t)=>(k(),g(c,{key:`${e.icon}_${e.v}`,index:t,matched:e.matched,visible:e.visible,icon:e.icon,"background-color":e.backgroundColor,color:e.color,onClickCard:o.clickCard},null,8,["index","matched","visible","icon","background-color","color","onClickCard"])))),128))])),_:1})])}));_e.render=Ie,_e.__scopeId="data-v-b111a480";const ze={components:{Board:_e}};ze.render=function(e,t,a,o,r,s){const c=h("Board");return k(),g(c)};const Me={components:{Header:ye,Game:ze},setup(){const e=R(),t=()=>{e.dispatch("card/restart")};return t(),{restart:t}},mounted(){$("body").attr("class","body-card")}},Re=w("data-v-1eda0f14");C("data-v-1eda0f14");const Ve={class:"container"},Oe=S("div",{class:"font-black"}," Flip Game ",-1);q();const Le=Re(((e,t,a,o,r,s)=>{const c=h("Header"),n=h("Game");return k(),g("div",Ve,[S(c,{title:"Flip Game",onRestart:o.restart},{title:Re((()=>[Oe])),_:1},8,["onRestart"]),S(n)])}));Me.render=Le,Me.__scopeId="data-v-1eda0f14";const Ee={props:{value:{type:String,required:!0},icon:{type:[String,Array],required:!0}}},Fe=w("data-v-e4a4045e");C("data-v-e4a4045e");const $e={class:"player"};q();const Be=Fe(((e,t,a,o,r,s)=>{const c=h("Fa");return k(),g("div",$e,[S(c,{icon:a.icon,size:"2x"},null,8,["icon"])])}));Ee.render=Be,Ee.__scopeId="data-v-e4a4045e";const Ne={components:{Player:Ee},setup(){const e=R();return{players:e.state.ticTacToe.players,chooseRole:t=>{e.dispatch("ticTacToe/chooseRole",{index:t})}}}},Ke={class:"flex justify-center items-center text-center mt-6"};Ne.render=function(e,t,a,o,r,s){const c=h("Player");return k(),g("div",Ke,[(k(!0),g(z,null,M(o.players,((e,t)=>(k(),g(c,{key:t,value:e.value,icon:e.icon,onClick:e=>o.chooseRole(t)},null,8,["value","icon","onClick"])))),128))])};const Pe={components:{Square:se},setup(){const e=R(),t=x((()=>e.getters["ticTacToe/hasWinner"])),a=x((()=>e.getters["ticTacToe/winner"])),o=x((()=>e.getters["ticTacToe/tie"]));return B(t,(e=>{e&&"me"===a.value.role&&Se()})),{squares:e.state.ticTacToe.squares,hasWinner:t,tie:o,clickSquare:a=>{t.value||e.dispatch("ticTacToe/clickSquareByMe",a)}}}},Ye=w("data-v-78bfa426")(((e,t,a,o,r,s)=>{const c=h("Square");return k(),g("div",{class:["board",o.hasWinner||o.tie?"opacity-20":""]},[(k(!0),g(z,null,M(o.squares,((e,t)=>(k(),g(c,{key:t,index:t,value:t,icon:e,onClickSquare:o.clickSquare},null,8,["index","value","icon","onClickSquare"])))),128))],2)}));Pe.render=Ye,Pe.__scopeId="data-v-78bfa426";const je={components:{ChoosePlayer:Ne,Board:Pe},setup(){const e=R();return{me:x((()=>e.getters["ticTacToe/me"])),hasRole:x((()=>e.getters["ticTacToe/hasRole"])),winner:x((()=>e.getters["ticTacToe/winner"])),hasWinner:x((()=>e.getters["ticTacToe/hasWinner"])),tie:x((()=>e.getters["ticTacToe/tie"]))}}},Ue=w("data-v-944f557e");C("data-v-944f557e");const Ge={key:0,class:"over"},He={key:0},De={key:1},We={key:2},Ae={key:1},Je={class:"text-center"},Qe={class:"me"},Xe=K(" You are: ");q();const Ze=Ue(((e,t,a,o,r,s)=>{const c=h("Fa"),n=h("Board"),i=h("ChoosePlayer");return k(),g(z,null,[o.hasWinner||o.tie?(k(),g("div",Ge,[o.tie?(k(),g("span",He,"It is a tie !")):"me"===o.winner.role?(k(),g("span",De,"You win !")):(k(),g("span",We,"You lose !"))])):_("",!0),o.hasRole?(k(),g("div",Ae,[S("div",Je,[S("span",Qe,[Xe,S(c,{icon:o.me.icon},null,8,["icon"])])]),S(n)])):(k(),g(i,{key:2}))],64)}));je.render=Ze,je.__scopeId="data-v-944f557e";const et={components:{Header:ye,Game:je},setup(){const e=R(),t=()=>{e.dispatch("ticTacToe/restart")};return t(),{restart:t}},mounted(){$("body").attr("class","body-tic-tac-toe")}},tt=w("data-v-c69c64cc");C("data-v-c69c64cc");const at={class:"container"},ot=S("div",{class:"font-black"}," Tic Tac Toe ",-1);q();const rt=tt(((e,t,a,o,r,s)=>{const c=h("Header"),n=h("Game");return k(),g("div",at,[S(c,{title:"Tic-Tac-Toe",onRestart:o.restart},{title:tt((()=>[ot])),_:1},8,["onRestart"]),S(n)])}));et.render=rt,et.__scopeId="data-v-c69c64cc";const st={created(){const e=this;this.handler=function(t){e.$emit("keyup",t)},window.addEventListener("keyup",this.handler)},beforeUnmount(){window.removeEventListener("keyup",this.handler)}},ct={class:"hidden"};st.render=function(e,t,a,o,r,s){return k(),g("div",ct)};const nt={components:{Square:le,KeyboardEvent:st},setup(){const e=R(),t=x((()=>e.state.game2048.squareFeatures));return{squareFeatures:t,keyupEvent:t=>{switch(t.which){case 37:case"left":e.dispatch("game2048/moveLeft");break;case 38:case"top":e.dispatch("game2048/moveUp");break;case 39:case"right":e.dispatch("game2048/moveRight");break;case 40:case"bottom":e.dispatch("game2048/moveDown")}}}}},it=w("data-v-7e78a752");C("data-v-7e78a752");const lt={class:"board"};q();const ut=it(((e,t,a,o,r,s)=>{const c=h("KeyboardEvent"),n=h("Square");return k(),g(z,null,[S(c,{onKeyup:o.keyupEvent},null,8,["onKeyup"]),S("div",lt,[(k(!0),g(z,null,M(o.squareFeatures,((e,t)=>(k(),g(n,{key:t,index:t,"before-key":e.beforeKey,"before-value":e.beforeValue,"after-value":e.afterValue,"by-computer":e.byComputer,onSwipSquare:o.keyupEvent},null,8,["index","before-key","before-value","after-value","by-computer","onSwipSquare"])))),128))])],64)}));nt.render=ut,nt.__scopeId="data-v-7e78a752";const dt={components:{Board:nt},setup(){const e=R(),t=x((()=>e.getters["game2048/score"])),a=x((()=>e.getters["game2048/win"]));return B(a,(e=>{e&&Se()})),{score:t}}},mt=w("data-v-5028c23a");C("data-v-5028c23a");const pt={class:"score"};q();const ft=mt(((e,t,a,o,r,s)=>{const c=h("Board");return k(),g(z,null,[S("div",pt," SCORE | "+L(o.score),1),S(c)],64)}));dt.render=ft,dt.__scopeId="data-v-5028c23a";const vt={components:{Header:ye,Game:dt},setup(){const e=R(),t=()=>{e.dispatch("game2048/restart")};return t(),{restart:t}},mounted(){$("body").attr("class","body-2048")}},bt=w("data-v-79a1b1de");C("data-v-79a1b1de");const yt={class:"container"},ht=S("div",{class:"font-black"}," 2048 ",-1);q();const kt=bt(((e,t,a,o,r,s)=>{const c=h("Header"),n=h("Game");return k(),g("div",yt,[S(c,{title:"2048",onRestart:o.restart},{title:bt((()=>[ht])),_:1},8,["onRestart"]),S(n)])}));vt.render=kt,vt.__scopeId="data-v-79a1b1de";const gt={components:{YoutubeVue3:P.YoutubeVue3,Header:ye},setup(){const e=I(""),t=I("nROvY9uiYYk"),a=I(null);return{url:e,videoId:t,youtube:a,playVideo:()=>{if(e.value.startsWith("https://www.youtube.com/")){const a=new URL(e.value).searchParams.get("v");Y.isEmpty(a)||(t.value=a)}},restart:()=>{a.value.player.stopVideo(),a.value.player.playVideo()}}},mounted(){$("body").attr("class","body-youtube")}},Ct=w("data-v-cd611a88");C("data-v-cd611a88");const qt={class:"container"},xt=S("div",{class:"font-black"}," Repeating the Youtube Video ",-1),St={class:"reload"};q();const _t=Ct(((e,t,a,o,r,s)=>{const c=h("Header"),n=h("YoutubeVue3");return k(),g("div",qt,[S(c,{title:"Youtube",onRestart:o.restart},{title:Ct((()=>[xt])),_:1},8,["onRestart"]),S(n,{ref:"youtube",videoid:o.videoId,loop:1,width:1200,height:600},null,8,["videoid"]),S("div",St,[O(S("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.url=e),class:"url",rows:"3",placeholder:"the youtube's url..."},null,512),[[j,o.url]]),S("button",{class:"play",onClick:t[2]||(t[2]=e=>o.playVideo())}," Play ")])])}));gt.render=_t,gt.__scopeId="data-v-cd611a88";const wt=[{path:"/",component:ve,name:"home"},{path:"/card",component:Me,name:"card"},{path:"/tic-tac-toe",component:et,name:"tic-tac-toe"},{path:"/2048",component:vt,name:"2048"},{path:"/youtube",component:gt,name:"youtube"}],Tt=U({base:"/hello-world/",history:G(),routes:wt}),It={faces:[{icon:"candy-cane",backgroundColor:"#cadcee",color:"#dc2626"},{icon:"bomb",backgroundColor:"#cccbcd",color:"#000000"},{icon:"cat",backgroundColor:"#ef4444",color:"#f3f4f6"},{icon:"anchor",backgroundColor:"#fecaca",color:"#069bcc"},{icon:"crown",backgroundColor:"#866fa4",color:"#eeff72"},{icon:"grin-tongue-wink",backgroundColor:"#60739d",color:"#ffd700"},{icon:"fish",backgroundColor:"#528cd1",color:"#fbdcbb"},{icon:"guitar",backgroundColor:"#d5e4ce",color:"#9c6721"}],cards:[],openedCards:[]};function*zt(e,t){for(let a=0;a<e.length;a+=t)yield e.slice(a,a+t)}function Mt(e,t){return e.map(((e,a)=>e===t?a:void 0)).filter((e=>void 0!==e))}const Rt={players:[{icon:["far","circle"],class:"text-blue-500",value:"o",role:""},{icon:"times",class:"text-red-400",value:"x",role:""}],rules:[],squares:[]},Vt={restart({commit:e}){e("initSquare"),e("initPlayerRole")},chooseRole({commit:e},{index:t}){e("updatePlayerRole",{index:t,role:"me"}),e("updatePlayerRole",{index:Math.abs(t-1),role:"computer"})},clickSquareByMe({getters:e,dispatch:t},{index:a}){Y.isEmpty(Rt.squares[a])&&(t("clickSquare",{index:a,icon:e.me.icon,replace:e.me.role}),Y.isEmpty(e.winner)&&t("clickSquareByComputer"))},clickSquareByComputer({getters:e,dispatch:t}){const a=[];for(let s=0;s<Rt.rules.length;s+=1)if(a[s]=Rt.rules[s].every((e=>Y.isString(e)))?-3:0,0===a[s]){for(let t=0;t<Rt.rules[s].length;t+=1)Rt.rules[s][t]===e.me.role&&(a[s]-=1),Rt.rules[s][t]===e.computer.role&&(a[s]+=1);a[s]=-2===a[s]?4:a[s],a[s]=2===a[s]?5:a[s]}const o=Mt(a,Math.max(...a)),r=[];o.forEach((e=>{const t=Rt.rules[e].find((e=>Y.isNumber(e)));r.push(t)}));t("clickSquare",{index:Y.shuffle(r)[0],icon:e.computer.icon,replace:e.computer.role})},clickSquare({commit:e},{index:t,icon:a,replace:o}){e("clickSquare",{index:t,icon:a}),e("updateRule",{index:t,replace:o})}};const Ot={colors:[{backgroundColor:"#e6ddd4",color:"#72695f"},{backgroundColor:"#e6ddd4",color:"#72695f"},{backgroundColor:"#eaab75",color:"#ffffff"},{backgroundColor:"#ed9060",color:"#ffffff"},{backgroundColor:"#ee785c",color:"#ffffff"},{backgroundColor:"#f15f4b",color:"#ffffff"},{backgroundColor:"#ead365",color:"#ffffff"},{backgroundColor:"#ebc25c",color:"#ffffff"},{backgroundColor:"#e0bb30",color:"#ffffff"},{backgroundColor:"#e7bf3d",color:"#ffffff"},{backgroundColor:"#e5bc2a",color:"#ffffff"}],baseNumber:2,squareSize:4,win:2048,squares:[],squareFeatures:[]},Lt={restart({commit:e,dispatch:t}){e("initSquare"),t("moveByComputer"),t("moveByComputer")},moveByComputer({commit:e}){const t=Mt(Ot.squares,0),a=Y.shuffle(t)[0];e("updateSquare",{key:a,value:Ot.baseNumber}),e("updateSquareFeatures",{key:a,afterValue:Ot.baseNumber,byComputer:!0})},moveSquare({commit:e},{rows:t,getKey:a}){t.forEach(((t,o)=>{const r=t.filter((e=>0!==e)),s=t.map(((e,t)=>0!==e?t:void 0)).filter((e=>void 0!==e));let c=null,n=null;for(let i=0;i<Ot.squareSize;i+=1){const l=a(Ot.squareSize,o,i);let u=i>=r.length?0:r[i];u>0&&u===r[i+1]&&(u*=Ot.baseNumber,r.splice(i+1,1),n=s.splice(0,1),c=a(Ot.squareSize,o,c)),e("updateSquare",{key:l,value:u}),e("updateSquareFeatures",{key:l,beforeKey:c,beforeValue:Y.isEmpty(n)?null:t[n],afterValue:u})}}))},moveLeft({dispatch:e}){const t=[...zt(Ot.squares,Ot.squareSize)],a=Y.cloneDeep(Ot.squares);e("moveSquare",{rows:t,getKey:(e,t,a)=>e*t+a}),e("moveIfComputerCanMove",{oldSquare:a})},moveRight({dispatch:e}){let t=[...zt(Ot.squares,Ot.squareSize)];t=t.map((e=>e.reverse()));const a=Y.cloneDeep(Ot.squares);e("moveSquare",{rows:t,getKey:(e,t,a)=>e*t+(e-a-1)}),e("moveIfComputerCanMove",{oldSquare:a})},moveDown({dispatch:e}){const t=[];for(let o=0;o<Ot.squareSize;o+=1)t[o]=Ot.squares.filter(((e,t)=>t%Ot.squareSize===o)).reverse();const a=Y.cloneDeep(Ot.squares);e("moveSquare",{rows:t,getKey:(e,t,a)=>e*(e-1-a)+t}),e("moveIfComputerCanMove",{oldSquare:a})},moveUp({dispatch:e}){const t=[];for(let o=0;o<Ot.squareSize;o+=1)t[o]=Ot.squares.filter(((e,t)=>t%Ot.squareSize===o));const a=Y.cloneDeep(Ot.squares);e("moveSquare",{rows:t,getKey:(e,t,a)=>e*a+t}),e("moveIfComputerCanMove",{oldSquare:a})},moveIfComputerCanMove({dispatch:e},{oldSquare:t}){JSON.stringify(t)!==JSON.stringify(Ot.squares)&&setTimeout((()=>{e("moveByComputer")}),100)}};var Et=H({modules:{card:{namespaced:!0,state:It,getters:{matchedCount:e=>e.cards.filter((e=>!0===e.matched)).length},actions:{restart({commit:e}){e("initOpenedCards"),e("initCards")},clickCard({commit:e,dispatch:t},a){!1===It.cards[a.index].matched&&(e("clickCard",a),t("checkOpenCardIsMatched"))},checkOpenCardIsMatched({commit:e}){if(2===It.openedCards.length){const t=It.openedCards[0],a=It.openedCards[1];t.index===a.index?e("updateVisible",{index:t.index,visible:!1}):t.icon===a.icon?(e("updateMatched",{index:t.index,matched:!0}),e("updateMatched",{index:a.index,matched:!0})):setTimeout((()=>{e("updateVisible",{index:t.index,visible:!1}),e("updateVisible",{index:a.index,visible:!1})}),1e3),e("initOpenedCards")}}},mutations:{clickCard(e,t){e.cards[t.index].visible=!0,e.openedCards.push(t)},initCards(t){t.cards=[],t.faces.forEach((a=>{t.cards.push(e(e({},a),{v:1,visible:!1,matched:!1})),t.cards.push(e(e({},a),{v:2,visible:!1,matched:!1}))})),t.cards=Y.shuffle(t.cards)},initOpenedCards(e){e.openedCards.length=0},updateVisible(e,{index:t,visible:a}){e.cards[t].visible=a},updateMatched(e,{index:t,matched:a}){e.cards[t].matched=a}}},ticTacToe:{namespaced:!0,state:Rt,getters:{me:e=>e.players.find((e=>"me"===e.role)),computer:e=>e.players.find((e=>"computer"===e.role)),hasRole:(e,t)=>!Y.isEmpty(t.me),winner:(e,t)=>{for(let a=0;a<e.rules.length;a+=1){if(e.rules[a].every((t=>t===e.rules[a][0])))return t[e.rules[a][0]]}return{}},hasWinner:(e,t)=>!Y.isEmpty(t.winner),tie:e=>!Y.isEmpty(e.squares)&&!e.squares.includes("")},actions:Vt,mutations:{updatePlayerRole(e,{index:t,role:a}){e.players[t].role=a},initPlayerRole(e){e.players[0].role="",e.players[1].role=""},initSquare(e,{size:t=3}={}){e.squares=new Array(t*t).fill(""),e.rules=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]},clickSquare(e,{index:t,icon:a}){e.squares[t]=a},updateRule(e,{index:t,replace:a}){for(let o=0;o<e.rules.length;o+=1)for(let r=0;r<e.rules[o].length;r+=1)e.rules[o][r]=e.rules[o][r]===t?a:e.rules[o][r]}}},game2048:{namespaced:!0,state:Ot,getters:{score:e=>Math.max(...e.squares),style:e=>t=>{if(0===t)return{};const a=Math.log(t)/Math.log(e.baseNumber)-1;return e.colors[a]},win:(e,t)=>t.score===e.win,lose:(e,t)=>void 0===e.squares.find((e=>0===e))&&!t.win},actions:Lt,mutations:{initSquare(e,{baseNumber:t=2,size:a=4,win:o=2048}={}){e.baseNumber=t,e.squareSize=a,e.win=o,e.squareFeatures=[],e.squares=new Array(e.squareSize*e.squareSize).fill(0),e.squares.forEach((()=>{e.squareFeatures.push({byComputer:!1,beforeValue:0,afterValue:0,direction:""})}))},updateSquare(e,{key:t,value:a}){e.squares[t]=a},updateSquareFeatures(e,{key:t,afterValue:a,beforeValue:o=0,beforeKey:r=0,byComputer:s=!1,direction:c=""}){e.squareFeatures[t]={byComputer:s,beforeKey:r,beforeValue:o,afterValue:a,direction:c}}}}},plugins:[]});window.$=D,W(J).component("Fa",y).use(Et).use(Tt).use(A).mount("#app");
