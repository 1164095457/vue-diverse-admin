import{ak as E,a4 as w,d as y,N as S,p as F,o as i,c as f,e as h,w as c,Y as N,u as l,S as B,x as u,g,a6 as v,M as C,am as P,_ as $,f as t,t as m,ar as A,a as d,k as n,as as I,ao as L,ap as U}from"./index-e27f3969.js";import{E as H}from"./el-button-0fb5ca99.js";/* empty css               */import{E as M}from"./index-835d6692.js";import"./use-form-item-4dc8d425.js";import"./use-form-common-props-fc5c4daa.js";const T=E({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:w}}),V={click:s=>s instanceof MouseEvent},D=["href"],j=y({name:"ElLink"}),z=y({...j,props:T,emits:V,setup(s,{emit:p}){const o=s,a=S("link"),r=F(()=>[a.b(),a.m(o.type),a.is("disabled",o.disabled),a.is("underline",o.underline&&!o.disabled)]);function _(e){o.disabled||p("click",e)}return(e,Z)=>(i(),f("a",{class:g(l(r)),href:e.disabled||!e.href?void 0:e.href,onClick:_},[e.icon?(i(),h(l(B),{key:0},{default:c(()=>[(i(),h(N(e.icon)))]),_:1})):u("v-if",!0),e.$slots.default?(i(),f("span",{key:1,class:g(l(a).e("inner"))},[v(e.$slots,"default")],2)):u("v-if",!0),e.$slots.icon?v(e.$slots,"icon",{key:2}):u("v-if",!0)],10,D))}});var q=C(z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const x=P(q);const b=s=>(L("data-v-2115cb72"),s=s(),U(),s),K={class:"user"},Y={class:"greet"},G=b(()=>t("img",{class:"image",src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14216793838%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663220582&t=16bb878645d4db0f55c89b68f608463d",alt:""},null,-1)),J={class:"info"},O=b(()=>t("div",{class:"name"},"User",-1)),Q={class:"introduce"},R={class:"introduce"},W={style:{"margin-top":"24px"}},k="https://github.com/1164095457/vue-diverse-admin",X={__name:"HomeUser",setup(s){const p=I;return(o,a)=>{const r=x,_=M,e=H;return i(),f("div",K,[t("div",Y,m(l(A)())+"~ 打工人",1),G,t("div",J,[O,t("div",Q,[d(r,{type:"primary"},{default:c(()=>[n(m(l(p)),1)]),_:1}),n(" 由vue3 + vite + element-plus + ts搭建，支持ts、js混用。自定义主题颜色。界面设置配置。支持4种Layouts布局切换。i18n等... ")]),t("div",R,[n(" git地址："),d(r,{href:k,target:"_blank",type:"danger"},{default:c(()=>[n(m(k))]),_:1})]),d(_,null,{default:c(()=>[n("前端韭菜")]),_:1}),t("div",W,[d(e,{type:"primary"},{default:c(()=>[n("前往个人中心")]),_:1})])])])}}},ie=$(X,[["__scopeId","data-v-2115cb72"],["__file","D:/item_file/vue-diverse-admin/src/views/home/components/HomeUser.vue"]]);export{ie as default};
