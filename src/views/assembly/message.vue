<template>
    <div>
        <el-button type="success" size="small" @click="handleSuccess()">成功</el-button>
    <el-button type="warning" size="small" @click="handleWarning()">警告</el-button>
    <el-button type="danger" size="small" @click="handleError()">失败</el-button>
    <el-button type="primary" size="small" @click="handleMessageBox1()">普通的</el-button>
    <el-button type="primary" size="small" @click="handleMessageBox2()">带取消按钮文字</el-button>
    <el-button type="primary" size="small" @click="handleMessageBox3()">带文本框</el-button>
    </div>
</template>

<script setup name="message">
import Message from '@/components/Message'
import {MessageBox} from '@/components/MessageBox'
const handleSuccess = () =>{
    Message.success({
        // duration:100000,
        message:'成功'
    })
}
const handleWarning = () =>{
    Message.warning({
        message:'警告'
    })
}
const handleError = () =>{
    Message.error({
        message:'失败'
    })
}
const handleMessageBox1 = () =>{
    MessageBox({
        confirmBtnText:'确定',
        title:'MessageBox',
        content:'this is content'
    }).then(() =>{
        console.log('确定');
    }).catch(() =>{
        console.log('取消');
    })
}
const handleMessageBox2 = () =>{
    MessageBox.confirm({
        confirmBtnText:'确定',
        cancelBtnText:'取消',
        title:'MessageBox',
        content:'this is content'
    }).then((value) =>{
        console.log('确定',value);
    }).catch(() =>{
        console.log('取消');
    })
}
const handleMessageBox3 = () =>{
    MessageBox.prompt({
        confirmBtnText:'确定',
        title:'MessageBox',
        content:'this is content'
    }).then((value) =>{
        console.log('确定',value);
    }).catch(() =>{
        console.log('取消');
    })
}
</script>