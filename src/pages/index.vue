<template>
  <div>
    <Header>关于这个东西</Header>

    <main>
      <h2>纯属娱乐</h2>
      <p>福利数据来自</p>
      <a href="https://github.com/beauty-enjoy/dbmeinv-firebase-api">👙 豆瓣美女</a>
      <p>基于 Google Firebase 数据库, 可能存在网络问题</p>
      <p>特别感谢!</p>
      <br>
      <br>
      <router-link to="fuli">👙 点我去福利</router-link>
      <p>仅显示 欧派 部分</p>
      <br>
      <p>完整版请前往</p>
      <a href="https://beauty.now.sh/">https://beauty.now.sh/</a>
      <p>[所有, 欧派, 美腿, 颜值, 其他, 翘臀, 丝袜]</p>
    </main>

    <footer>
      Build with
      <a href="https://github.com/dvanjs/dvan">dvan</a>
      |
      Source from
      <a href="https://github.com/dvanjs/beauty">beauty</a>
      |
      <a href="https://github.com/evillt">@evillt</a>
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
a {
  text-decoration none
  color #58a
}

main, footer {
  text-align center
}

main {
  color #777
}

footer {
  width 100%
  border-top 1px solid #ccc
  position fixed
  bottom 0
  padding 10px 0
}
</style>
