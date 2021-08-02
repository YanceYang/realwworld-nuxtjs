<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign {{ isLogin ? 'in' : 'up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register"
              >Need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(errs, key) in errors">
              <li v-for="(err, index) in errs" :key="index">
                {{ key }} {{ err }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="user.username"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="user.email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="user.password"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sign {{ isLogin ? 'in' : 'up' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import { login, register } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  middleware: 'authenticated',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
      errors: {},
      isSubmitting: false, //禁止重复提交表单
    }
  },
  computed: {
    // 标识，true为登录页，false为注册页
    isLogin() {
      return this.$route.name === 'login'
    },
  },
  methods: {
    ...mapMutations(['setUser']),
    async onSubmit() {
      let _self = this
      _self.isSubmitting = true
      try {
        // 登录/注册
        const { data } = _self.isLogin
          ? await login({ user: _self.user })
          : await register({ user: _self.user })
        // 保存用户数据
        _self.setUser(data.user)
        // 用户数据持久化，保存到cookie中，使得服务端与浏览器端都能拿到，主要目的是用于服务端渲染
        Cookie.set('user', data.user)
        // 登录/注册成功，跳转至首页
        _self.$router.push('/')
      } catch (err) {
        this.errors = err.response.data.errors
      } finally {
        _self.isSubmitting = false
      }
    },
  },
}
</script>

<style></style>
