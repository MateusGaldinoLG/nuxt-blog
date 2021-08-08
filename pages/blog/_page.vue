<template>
  <div>
    <PostBody :article="article" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('posts', params.page).fetch()

    return { article }
  }
}
</script>

<style scoped>

</style>
