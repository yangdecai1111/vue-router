<template>
  <div>
    <h1>我是个人中心页</h1>
    <router-link :to="{path: '/Card', query: {date: '今天'} }">卖座卡页面</router-link>
    <hr />
    <router-link to='/Money'>余额页面</router-link>
  </div>
</template>
