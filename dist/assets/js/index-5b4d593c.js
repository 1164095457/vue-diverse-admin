import{_ as p,m as C,q as v,o as u,e as x,w,s as b,f as a,l as y,t as A,a as h,c as D,x as M,y as S,u as k,z as I,h as m,A as E,B as K}from"./index-e27f3969.js";const V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAixJREFUeF7tmutthDAQhG3KScqAEqK0E66dKCVAGZdyIALFEjoRvK9Zjtj8xY+Zz7trc+cYCn9i4f5DBVAjoHACNQUKD4BaBGsK1BQQEmjb9mUcx29hd9NuGi2iFFgmbJrmc57nr2EYelM3zMG6rutjjG/TNL1LFoQNYGP+9Vfr7SwIi/kQwseiI8Z4l0BgAdgxn9bLHcLWfBIhgUAGcGDeHcKeeSkEMoBlgqOJvdLBWgMLwNkQrM2vtYNZdNfmCCE5Hag5RQC8IaDMiyMgrRZBWD8Mwy23ukfvu65btrmjs4ZqBxJHgAcEtHl1BCAheJg3A0CsCeR08DJvCsAKAsE8GSSl9qhrwOMkmsLobd48AjQ14QzzMADcdDjLPBQAEUI6I6yftH88pjn/OId5DRDUhKNaBTUPjwBGTdiDADfvBoCYDlsILuZdATAgqM72lL1/2wZeA7aTEc4IS/P/CYBoPvFyg+ASAUzzrhDgAITm3SBAARDMUw5C0HSAAaCYT3+ocNpyq3yuPQSAxJCkT84c5b05AI0RTV+K2b02pgAsDFiMwYFhBsBSuOVYORgmABCCEWNCUgApFDl2gqGKAA+B6DnEANDCmB9R4sOSCICnecaPKiIIbABnmEdCYAE40zwKAhlAvSITQij6klQKwaKvye1AKO+i5BaC5GZm7mwuee9+VVYi8ln7kHeBZzWg1VUBaAlevX+NgKuvoFZ/jQAtwav3rxFw9RXU6v8BWPu6UHzNq2gAAAAASUVORK5CYII=";const N={class:"messageBox-btn"},Q={__name:"MessageBox",props:{title:{type:String,default(){return"提示"}},content:{type:String,default(){return"Message Content"}},showCancalBtn:{type:Boolean,default(){return!1}},confirmBtnText:{type:String,default(){return"OK"}},cancelBtnText:{type:String,default(){return""}},field:{type:String,default(){return"confirm"},validator:e=>g.includes(e)}},setup(e,{expose:s}){const o=e,t=C({visible:!1,promptValue:"",type:""}),{visible:i}=v(t),n=c=>{t.visible=c},d=()=>{t.type="confirm",n(!1)},l=()=>{t.type="cancel",n(!1)},f=({field:c})=>{switch(c){case(!c||"confirm"):return m("p",null,o.content);case"prompt":return m("input",{value:t.promptValue,onInput:r=>t.promptValue=r.target.value,class:"message-input"});default:return""}};return s({setVisible:n,state:t}),(c,r)=>(u(),x(I,{name:"messagebox-fade"},{default:w(()=>[b(a("div",{class:"messageBox-box",onClick:l},[a("div",{class:"messageBox-item",onClick:r[0]||(r[0]=y(()=>{},["stop"]))},[a("div",null,A(e.title),1),h(f,{field:e.field,style:{color:"rgba(0, 0, 0, 0.6)"}},null,8,["field"]),a("div",N,[e.cancelBtnText?(u(),D("button",{key:0,class:"btn",style:{"margin-right":"20px"},onClick:l},A(e.cancelBtnText),1)):M("",!0),a("button",{class:"btn",onClick:d},A(e.confirmBtnText),1)]),a("img",{src:V,class:"close-icon",onClick:l})])],512),[[S,k(i)]])]),_:1}))}},T=p(Q,[["__scopeId","data-v-636a3ca8"],["__file","D:/item_file/vue-diverse-admin/src/components/MessageBox/src/MessageBox.vue"]]),g=["confirm","prompt"],B=e=>{const s=E(T,e);return new Promise((o,t)=>{U(s,{resolve:o,reject:t})})};g.forEach(e=>{B[e]=s=>(s.field=e,B(s))});const U=(e,{resolve:s,reject:o})=>{const t=document.createDocumentFragment(),i=e.mount(t);document.body.appendChild(t),i.setVisible(!0),K(i.state,n=>{if(!n.visible){switch(n.type){case"cancel":o();break;case"confirm":s(n.promptValue);break}_(e)}})},_=e=>{e.unmount()};export{B as M};
