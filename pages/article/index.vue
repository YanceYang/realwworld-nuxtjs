<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <!-- <div class="article-meta">
          <a href=""><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow Eric Simons <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">(29)</span>
          </button>
        </div> -->
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />
      <!--  -->
      <!-- <div class="article-actions">
        <div class="article-meta">
          <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow Eric Simons <span class="counter">(10)</span>
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">(29)</span>
          </button>
        </div>
      </div> -->

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
                v-model="comment"
              ></textarea>
            </div>
            <div class="card-footer">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                class="comment-author-img"
              />
              <div class="btn btn-sm btn-primary" @click="addComment">
                Post Comment
              </div>
            </div>
          </form>

          <!-- 评论列表 -->
          <div class="card" v-for="(comment, index) in comments" :key="index">
            <div class="card-block">
              <p class="card-text">
                {{ comment.body }}
              </p>
            </div>
            <div class="card-footer">
              <img :src="comment.author.image" class="comment-author-img" />
              &nbsp;
              <span href="" clspanss="comment-author">{{
                comment.author.username
              }}</span>
              <span class="date-posted">{{ comment.createdAt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, getComments, addComment } from '@/api/article'
import { markdown } from 'markdown'
export default {
  name: 'articleInfo',
  async asyncData({ params }) {
    const { data } = await getArticle(params.slug)
    const { article } = data
    // 将markdown格式转html字符串
    if (article && article.body) {
      article.body = markdown.toHTML(article.body)
    }
    return {
      article,
    }
  },
  data() {
    return {
      comments: [],
      comment: '',
    }
  },
  mounted() {
    this.getComments()
  },
  methods: {
    async getComments() {
      let _self = this
      const { data } = await getComments(_self.$route.params.slug)
      _self.comments = data.comments
    },
    async addComment() {
      let _self = this
      const { data } = await addComment({
        slug: _self.$route.params.slug,
        body: { comment: { body: _self.comment } },
      })
      _self.getComments()
    },
  },
}
</script>

<style></style>
