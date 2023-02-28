<template>
    <div>
        pc-app
        <el-button @click="handleClick">默认按钮</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            console.log("点击了")
        }
    }
}
</script>