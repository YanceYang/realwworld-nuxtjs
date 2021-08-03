/**
 * NuxtJS配置文件
 */
/**
 * @description 加载页面
 * @date 2021-30-01
 * @param {*} resolve 页面解析函数
 * @param {*} dirPath 当前工作的绝对目录
 * @returns {*} 页面加载函数
 */
export default {
  server: {
    host: '0.0.0.0',
    port: '80',
  },
  router: {
    extendRoutes(routes, resolve) {
      // 清除默路由表
      routes.splice(0)
      // 自定义路由
      routes.push(
        ...[
          {
            name: 'home',
            path: '/',
            component: resolve(__dirname, 'pages/home/'),
          },
          {
            name: 'login',
            path: '/login',
            component: resolve(__dirname, 'pages/login/'),
          },
          {
            name: 'register',
            path: '/register',
            component: resolve(__dirname, 'pages/login/'),
          },
          {
            name: 'profile',
            path: '/profile/:username',
            component: resolve(__dirname, 'pages/profile/'),
          },
          {
            name: 'settings',
            path: '/settings',
            component: resolve(__dirname, 'pages/settings/'),
          },
          {
            name: 'editor',
            path: '/editor',
            component: resolve(__dirname, 'pages/article/editor'),
          },
          {
            name: 'article',
            path: '/article/:slug',
            component: resolve(__dirname, 'pages/article/'),
          },
        ],
      )
    },
  },
  // 注册插件
  plugins: ['~/plugins/request.js'],
}
