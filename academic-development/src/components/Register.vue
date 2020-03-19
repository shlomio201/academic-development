<template>
  <div>
    <input type="email" v-model="email" name="email"/>
    <input type="password" v-model="password" name="password"/>

  <button @click="register">register now!</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  watch: {
    email  (value) {
      console.log('email has changed')
    }
  },
  mounted () {
    console.log('a' + 1 + 1)
  }
}
</script>

<style scoped>

</style>
