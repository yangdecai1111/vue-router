<template>
  <div>
    <h1>我是详情页</h1>
    <p>{{inf}}</p>
    <router-link to='/Infomation/2'>去香蕉</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inf: {}
    }
  },
  created () {
    this.getInfGoods()
  },
  methods: {
    getInfGoods(id=this.$route.params.id) {
      fetch(`http://localhost:3000/goods/${id}`).then(response => response.json()).then(res => {
        this.inf=res
      })
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('进入当前组件')
    next()
  },
  beforeRouteUpdate(to, from, next){
    console.log('当组件更新时')
    let newId=to.params.id
    this.getInfGoods(newId)
    next()
  },
  beforeRouteLeave(to, from, next){
    console.log('当离开组件时')
    next()
  }
}
</script>

