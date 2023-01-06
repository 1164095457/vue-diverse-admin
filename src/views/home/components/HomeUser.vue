<template>
    <div class="user">
        <div class="greet">
            <img class="icon" src="@/assets/images/sun.png" alt="">
            下午好~ 打工人
        </div>
        <img 
        class="image"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14216793838%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663220582&t=16bb878645d4db0f55c89b68f608463d" alt="">
        <div class="info">
            <div class="name">修勾</div>
            <div class="introduce">大家好，我是练习时长两年半的修勾</div>
            <el-tag>前端韭菜</el-tag>
            <div style="margin-top:36px;">
                <el-button type="primary">前往个人中心</el-button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .user{
        background: #fff;
        text-align: center;
        padding: 16px;
        height: 341px;
        .greet{
            text-align: left;
            display: flex;
            align-items: center;
            .icon{
                width: 28px;
		        height: 28px;
        		animation: iconLoading infinite 3s linear;
            }
            @keyframes iconLoading {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
            }
        }
        .image{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-top: 36px;
        }
        .info{
            .name{
                font-weight: bold;
                margin-top:8px;
            }
            .introduce{
                font-size: 13px;
                color: #92959B;
                margin:8px 0;
            }
            
        }
    }
</style>