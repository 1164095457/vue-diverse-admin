import{_ as s,b as r,D as l,o as i,c as n}from"./index-e27f3969.js";import{e as c,u as f}from"./useEcharts-0e784d63.js";const m={__name:"PancePie",setup(p){const e=r(),o=r([{name:"今天",value:100},{name:"昨天",value:100},{name:"前天",value:200}]);return l(()=>{let t=c.init(e.value),a={grid:{top:0,bottom:0,left:0,right:0},legend:{orient:"vertical",left:"left"},tooltip:{trigger:"item"},color:["#F56C6C","#409EFF","#67C23A"],series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},labelLine:{show:!1},data:o.value}]};f(t,a)}),(t,a)=>(i(),n("div",{ref_key:"echartsRef",ref:e,class:"echarts-content"},null,512))}},_=s(m,[["__file","D:/item_file/vue-diverse-admin/src/views/panel/components/PancePie.vue"]]);export{_ as default};
