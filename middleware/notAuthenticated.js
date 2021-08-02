// 用户未登录，指定未登录时不可访问的页面，并跳转至登录页
export default function({ store, redirect }) {
  if (!store.state.user) {
    return redirect('/login')
  }
}
