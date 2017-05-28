<template lang="pug">
.post
  .bc-grey.mb-3(v-for='item in shared.state.entries.items')
    .page.pv-3
      .layout
        .layout__item.one-whole
          .post__item
            h3.mb-1 {{item.fields.title}}
            p.mb-2 {{item.fields.content}}
            img.one-third(
              :src='item.fields.image.fields.file.url' 
              :alt='item.fields.image.fields.description'
            )
</template>

<script>
import store from '@/store/store'

export default {
  data () {
    return {
      shared: store
    }
  },
  created () {
    store.getPosts()
  }
}
</script>

<style>

</style>
