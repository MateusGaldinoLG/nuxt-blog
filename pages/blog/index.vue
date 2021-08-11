<template>
  <div>
    <ListBody :articles="articles" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('posts', params.page)
      .only(['title', 'description', 'slug', 'author', 'updatedAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  }
}
</script>
