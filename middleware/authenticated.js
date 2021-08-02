// 用户已登录，指定登录后不可访问的页面
export default function({ store, redirect }) {
  if (store.state.user) {
    return redirect('/')
  }
}
