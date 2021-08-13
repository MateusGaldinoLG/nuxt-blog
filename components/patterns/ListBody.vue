<template>
  <main class="relative min-h-screen md:flex">
    <SideMenu />
    <section class="flex-1 p-10">
      <Title :title="'Blog posts'" />
      <ul>
        <li v-for="article of articles" :key="article.slug" class="my-3 p-3 bg-blue-900 text-white rounded md:w-1/2">
          <ArticleResume :article="article" />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
