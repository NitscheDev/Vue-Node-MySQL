<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: 600;
    color: #2f2f2f;
    text-decoration: none;
    padding: 11px 25px;
    background: #f0f0f0;
    font-size: 14px;
    text-transform: uppercase;
    margin: 0 5px;
    border-radius: 50px;

    &.router-link-exact-active {
      background: #42b983;
      color: #ffffff;
    }
  }
}
</style>
