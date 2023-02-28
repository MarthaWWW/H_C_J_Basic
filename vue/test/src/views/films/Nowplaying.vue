<template>
    <div>
        now-playing
        <ul>
            <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            datalist:["1111","2222","3333"]
        }
    },
    methods:{
        // (2)点击列表绑定事件，进行动态路由跳转
        handleChangePage(id){
            //location.href = '#/detail'
            // this.$router.push('/detail/${id}')
            // console.log(id)
            // 带着id,跳转

            //2- 通过命名路由跳转
            this.$router.push(
                {
                    name:"marthaDetail",
                    params:{
                        id
                    }
                }
            )
            
        }
    }
}
</script>
