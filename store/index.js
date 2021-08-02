const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    // user: null,
    user: {
      id: 198930,
      email: '1289061325@qq.com',
      createdAt: '2021-08-01T12:45:32.005Z',
      updatedAt: '2021-08-01T12:45:32.011Z',
      username: 'Yance',
      bio: null,
      image: null,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTk4OTMwLCJ1c2VybmFtZSI6IllhbmNlIiwiZXhwIjoxNjMzMDU3OTY3fQ.Js33FKETzSeIfrMZb-LBuBfmrXi7CABCZiFXu3LHcXU',
    },
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }

    // commit('setUser', user)
  },
}
