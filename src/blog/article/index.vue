<template>
  <div class="article" v-html="data" v-hljss></div>
</template>
<script>
import axios from 'axios'
import hljs from 'highlight.js'

export default {
  name: 'Article',
  data () {
    return {
      data: ''
    }
  },
  directives: {
    hljss: {
      componentUpdated: function (el) {
        let blocks = el.querySelectorAll('pre code')
        blocks.forEach((block) => {
          hljs.highlightBlock(block)
        })
      }
    }
  },
  mounted () {
    axios
      .get(`${process.env.BASE_API}/article/${this.$route.params.id}`)
      .then((res) => {
        this.data = res.data
      })
  }
}
</script>
<style lang="scss" scoped>
@import 'markdown';
</style>
<style >
@import 'highlight.js/styles/github.css';
</style>
