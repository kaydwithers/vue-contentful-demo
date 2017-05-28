<template lang="pug">
.blog
  .page
    .layout
      .layout__item.one-whole
        h2.mb-2 Blog

  post
</template>

<script>
import Post from '@/components/organisms/Post'

export default {
  name: 'blog',
  components: {
    Post
  }
}
</script>

<style>

</style>
