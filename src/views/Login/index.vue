<template>
  <div>
    <h1>我是登陆页</h1>
    <button @click='hanlderLogin'>点击我2S之后登陆</button>
  </div>
</template>
<script>
export default {
  methods: {
    hanlderLogin() {
      setTimeout(() => {
        let userInfo= {
          name: '张三',
          age: 18
        }
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
        let redirect=this.$route.query.redirect || '/center'
        this.$router.replace(redirect)
      },2000)
    }
  }
}
</script>

