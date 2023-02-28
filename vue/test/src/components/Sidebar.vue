<template>
    <div>
        <ul>
            <li v-for="actor in actorlist" :key="actor.name">
                {{actor.name}}
                {{actor.role}}
                <img :src="actor.avatarAddress">
            </li>
        </ul>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    data(){
        return {
            actorlist:[]
        }
    },
    mounted(){
    // axios.get("/maizuo.json").then(res=>{
      //  this.actorlist=res.data.data.film.actors
    // })
    fetch("/maizuo.json")
    .then(res=>res.json())
    .then(res=>{
        this.actorlist=res.data.film.actors
    })

    }
}
</script>

<style lang="scss" scoped>
    ul{
        li{
            background-color: red;
        }
    }

    
    img{
        width:100px;
        height:140px;
    }

</style>