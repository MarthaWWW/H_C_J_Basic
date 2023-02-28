<template>
    <div>
        <button @click="handleClick">left</button>
        {{myname}}
        <button v-show="myright">right</button>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        myname:{
            type:String,
            default:''
        },

        myright:{
            type:Boolean,
            default:true
        }
    },

    methods:{
        handleClick(){
            this.$emit('event')
        }
    
    }
}
</script>

<style lang="scss" scoped>

</style>