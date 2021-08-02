<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  v-model="article.title"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="article.description"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="article.body"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                :disabled="isSubmitting"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { publishArticle } from '@/api/article'
export default {
  name: 'editor',
  middleware: 'notAuthenticated',
  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      isSubmitting: false,
    }
  },
  methods: {
    async onSubmit() {
      let _self = this
      _self.isSubmitting = true
      try {
        const { data } = await publishArticle({
          article: _self.article,
        })

        // 跳转至文章详情
        _self.$router.push({
          name: 'article',
          params: {
            slug: data.article.slug,
          },
        })
      } catch (err) {
      } finally {
        _self.isSubmitting = false
      }
    },
  },
}
</script>

<style></style>
