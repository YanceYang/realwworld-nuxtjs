import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

export default ({ store }) => {
  request.interceptors.request.use(
    (config) => {
      const { user } = store.state
      // 判断用户是否存在token
      if (user && user.token) {
        config.headers['Authorization'] = 'Token ' + user.token
      }
      // 返回请求成功的配置
      return config
    },
    function(error) {
      return Promise.reject(error)
    },
  )
}
