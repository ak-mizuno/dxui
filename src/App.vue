<script>
import TheHeadingNavigator from "./components/TheHeadingNavigator.vue"
import Home from "./views/Home.vue"
import Category from "./views/Category.vue"
import SignUp from "./views/SignUp.vue"
import { saveAccessLog } from "./api/AwsApi"

export default {
  components: {
    TheHeadingNavigator,
    Home,
    Category,
    SignUp
  },
  created() {
    this.$store.dispatch("getAllCars")
    this.$store.dispatch("getAllCategories")
  },
  watch: {
    async "$route" (to, from) {
      const toFullPath = to.fullPath
      const fromFullPath = from.fullPath
      const now = Date.now()
      
      const result = await saveAccessLog({
        to: toFullPath,
        from: fromFullPath,
        date: now
      })
      console.log(result)
    }
  }
}
</script>

<template>
  <TheHeadingNavigator></TheHeadingNavigator>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
