<template>
<div>
    <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="16">
            <WangEditor v-model="htmlValue" />
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
            <div class="rictext-box">
                <div class="rictext-box-item" v-html="htmlValue"></div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script setup name="wangEditor">
import { ref,computed } from 'vue';
import WangEditor from '@/components/WangEditor/index.vue'
const htmlValue = ref('')
</script>
<style lang="scss" scoped>
:deep(p){
    margin: 0;
}
.rictext-box{
    position: relative;
    width: 430px;
    height: 900px;
    background-image: url('@/assets/images/iphone.png');
    background-size: 100% 100%;
    transform:scale(.7);
    margin: 0 auto;
    margin-top: -130px;
    .rictext-box-item{
        position: absolute;
        box-sizing: border-box;
        top: 109px;
        left: 27px;
        width: 375px;
        height: 678px;
        overflow-y: auto;
        background: #fff;
        overflow-x: hidden;
        padding: 16px;
    }
}
</style>
