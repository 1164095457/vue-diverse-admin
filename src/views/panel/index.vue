<template>
	<el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="6" :lg="6" >
        <PanelCount :list="countList[0]" />
      </el-col>
	  <el-col :xs="24" :sm="24" :md="6" :lg="6" >
        <PanelCount :list="countList[1]" />
      </el-col>
	  <el-col :xs="24" :sm="24" :md="6" :lg="6" >
        <PanelCount :list="countList[2]" />
      </el-col>
	  <el-col :xs="24" :sm="24" :md="6" :lg="6" >
        <PanelCount :list="countList[3]" />
      </el-col>
    </el-row>
</template>

<script setup name="panel">
import PanelCount from './components/PanelCount.vue'

const countList = [
  { 
    name:'浏览量',
    date:'周',
    type:'',
    count:2022,
    icon:new URL('@/assets/images/see.png', import.meta.url).href
   },
   { 
    name:'下载量',
    date:'年',
    type:'success',
    count:21999,
    icon:new URL('@/assets/images/upload.png', import.meta.url).href
   },
   { 
    name:'成交金额',
    date:'日',
    type:'warning',
    count:18000,
    icon:new URL('@/assets/images/money.png', import.meta.url).href
   },
   { 
    name:'数据',
    date:'月',
    type:'danger',
    count:18999,
    icon:new URL('@/assets/images/pie.png', import.meta.url).href
   }
]
</script>

