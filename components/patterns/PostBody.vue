<template>
  <main class="relative min-h-screen md:flex">
    <SideMenu />
    <section class="flex-1 p-10">
      <ArticleCard :article="article" />
    </section>
  </main>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
