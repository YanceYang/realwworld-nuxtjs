import { request } from '@/plugins/request'
// 发表文章
export const publishArticle = (data) => {
  return request({
    method: 'POST',
    url: '/api/articles',
    data,
  })
}
