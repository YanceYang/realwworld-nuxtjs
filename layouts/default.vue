<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link
          :to="{
            name: 'home',
          }"
          class="nav-link"
        >
          conduit
        </nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link
              :to="{
                name: 'home',
              }"
              exact
              class="nav-link"
            >
              Home
            </nuxt-link>
          </li>
          <!-- 已登录状态 -->
          <template v-if="user">
            <li class="nav-item">
              <!-- Add "active" class when you're on that page" -->

              <nuxt-link
                :to="{
                  name: 'editor',
                }"
                exact
                class="nav-link"
              >
                <i class="ion-compose"></i>&nbsp;New Article
              </nuxt-link>
            </li>
            <!-- <li class="nav-item">
              <nuxt-link
                :to="{
                  name: 'settings',
                }"
                exact
                class="nav-link"
                ><i class="ion-compose"></i>&nbsp;Settings
              </nuxt-link>
            </li> -->
            <!-- :to="{
                  name: 'profile',
                  params: { username: user.username },
                }" -->
            <li class="nav-item">
              <span
                :to="{
                  name: 'profile',
                  params: { username: user.username },
                }"
                class="nav-link"
              >
                <img :src="user.image" alt="用户头像" v-if="user.image" />
                {{ user.username }}
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link" style="cursor:pointer" @click="logout">
                logout
              </span>
            </li>
          </template>
          <!-- 登出状态 -->
          <template v-else>
            <li class="nav-item">
              <nuxt-link
                :to="{
                  name: 'login',
                }"
                class="nav-link"
                ><i class="ion-compose"></i>&nbsp;Sign in</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                :to="{
                  name: 'register',
                }"
                class="nav-link"
                ><i class="ion-compose"></i>&nbsp;Sign up
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- 主体内容 -->
    <nuxt />
    <!-- footer -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined
import { mapState } from 'vuex'
export default {
  name: 'default',
  computed: mapState(['user']),
  //统一设置页面title
  head() {
    return {
      title: this.$route.name + '-NuxtJS',
      /* meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description',
          },
        ], */
    }
  },
  methods: {
    logout() {
      Cookie.remove('user')
      this.$store.commit('setUser', undefined)
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
