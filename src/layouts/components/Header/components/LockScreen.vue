<template>
<img src="@/assets/images/suotou.svg" @click="handleLockScreen"  style="width:25px"/>
  <!-- <el-icon @click="handleLockScreen" class="fullScreen">
    <component :is="'Lock'"></component>
  </el-icon> -->
</template>
<script setup>
import { onMounted } from 'vue'
import { MessageBox } from "@/components/MessageBox";
import { LockScreen } from "@/components/LockScreen";
//  锁屏
const handleLockScreen = () => {
  MessageBox.prompt({
    confirmBtnText: "锁屏",
    title: "请输入锁屏密码",
  })
    .then((value) => {
      if (!value)
        return ElMessage({
          message: "请输入",
          type: "warning",
        });
      localStorage.setItem("lockScreen", value);
      LockScreen();
    })
    .catch((_) => {
      console.log("取消");
    });
};

onMounted(() =>{
  let lock = localStorage.getItem('lockScreen') || ''
    if(lock){
      LockScreen()
    }
})
</script>
<style scoped>
.fullScreen{
  cursor: pointer;
}
</style>