<template>
    <div>
        detail
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },

    created()
    {
        // 当前匹配的路由
        // (3)到达详情页面中，前端获取id
         console.log('create',this.$route.params.id)
        // (4)前端利用获取到的id发请求给后端接口，返回真实数据，实现页面显示的差异化


    }
   
}
</script>