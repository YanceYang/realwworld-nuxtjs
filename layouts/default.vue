<template>
  <div>
    <!-- header -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link
          :to="{
            name: 'home',
          }"
          class="nav-link active"
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
              class="nav-link active"
            >
              Home
            </nuxt-link>
          </li>
          <!-- 登录状态 -->
          <template v-if="user">
            <li class="nav-item">
              <!-- Add "active" class when you're on that page" -->

              <nuxt-link
                :to="{
                  name: 'editor',
                }"
                class="nav-link active"
              >
                <i class="ion-compose"></i>&nbsp;New Article
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                :to="{
                  name: 'settings',
                }"
                class="nav-link active"
                ><i class="ion-compose"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: { username: user.username },
                }"
                class="nav-link active"
              >
                <img :src="user.image" alt="用户头像" v-if="user.image"/>
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>
          <!-- 登出状态 -->
          <template v-else>
            <li class="nav-item">
              <nuxt-link
                :to="{
                  name: 'login',
                }"
                class="nav-link active"
                ><i class="ion-compose"></i>&nbsp;Sign in</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                :to="{
                  name: 'register',
                }"
                class="nav-link active"
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
}
</script>

<style></style>
