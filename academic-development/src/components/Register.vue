<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
     <v-toolbar flat dense class="cyan" dark>
    <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
    <input
      type="email"
      v-model="email"
      name="email"
      placeholder="email"/>
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="password"/>
  <div class="error" v-html="error" />
  <br>
  <v-btn
  class="cyan"
  @click="register">
  register now!
  </v-btn>
    </div>
      </div>
  </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error : null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async register () {
      try{
        const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      } catch (error) {
        this.error = error.response.data.error
      }
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
.error {
  color : red;
}
</style>
