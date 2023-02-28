<template>
    <footer>
        <ul>
        <!-- active-class:动态切换的class名字 -->
        <!-- tag:将来渲染成节点的种类，tag=li,可以去除外部的li标签 -->
        <router-link to="/films" active-class="marthaactive" tag="li"><i class="iconfont
        icon-add"></i>电影</router-link>
        <router-link to="/cinemas" active-class="marthaactive" tag="li">影院</router-link>
        <router-link to="/center" active-class="marthaactive" tag="li">中心</router-link>
        </ul>
        <!-- 使用iconfont添加图标 -->
        <!-- 添加到静态数据文件夹public/iconfont -->
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        position:fixed;
        bottom: 0px;
        left: 0px;
        width:100%;
        background-color: white;
        ul{
            display:flex;
            li{
                flex:1;
                height:49px;
                line-height: 49px;
                text-align: center;
            }
        }
    }
</style>