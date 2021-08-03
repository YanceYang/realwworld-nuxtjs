import { request } from '@/plugins/request'
// 发表文章
export const publishArticle = (data) => {
  return request({
    method: 'POST',
    url: '/api/articles',
    data,
  })
}

// 获取文章
export const getArticle = (data) => {
  return request({
    method: 'GET',
    url: `/api/articles/${data}`,
  })
}

// 获取文章评论
export const getComments = (data) => {
  return request({
    method: 'GET',
    url: `/api/articles/${data}/comments
    `,
  })
}

// 添加文章评论
export const addComment = (data) => {
  return request({
    method: 'POST',
    url: `/api/articles/${data.slug}/comments`,
    data: data.body,
  })
}
