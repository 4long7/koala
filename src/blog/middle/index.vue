<template>
  <div class="grid">
    <div class="item" v-for="(data,index) in HomeData" :key="data.id">
      <router-link :to="{name:'article',params:{id: data.id}}" class="content">
        <h3>{{ index+1 }} {{ data.title }}</h3>
        <div>
          <img :src="'../static/image/'+data.image">
        </div>
        <div class="desc">
          <p>{{ data.content }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Middle',
  data () {
    return {
      HomeData: [],
      middle: 'middle'
    }
  },
  mounted () {
    axios
      .get(`${process.env.BASE_API}/app`)
      .then((res) => {
        this.HomeData = res.data
      }).then(() => {
        function resizeGrid () {
          const imgHeight = document.querySelectorAll('img')
          const item = document.querySelectorAll('.item')
          const image = [{ width: '3227', height: '2160' }, { width: '400', height: '289' }, { width: '3456', height: '2160' }, { width: '3456', height: '2160' }, { width: '3245', height: '2160' }, { width: '3240', height: '2160' }, { width: '3456', height: '2160' }, { width: '240', height: '400' }, { width: '3456', height: '2160' }, { width: '3227', height: '2160' }, { width: '3456', height: '2160' }]
          for (let x = 0; x < item.length; x++) {
            let imgHeights = (image[x].height / (image[x].width / item[0].offsetWidth)) >> 0
            imgHeight[x].style.height = `${imgHeights}px`
            // const rowSpan = Math.ceil((item[x].querySelector('.content').getBoundingClientRect().height + rowGap) / (rowGap + rowHeight))
            const rowSpan = Math.ceil((item[x].querySelector('.content').getBoundingClientRect().height + 20) / 20)
            item[x].style.gridRowEnd = 'span' + ' ' + rowSpan
          }
        }
        resizeGrid()
        window.addEventListener('resize', resizeGrid)
      })
  }
}
</script>
<style lang="scss" scope>
@import 'middle.scss';
</style>
