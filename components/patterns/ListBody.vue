<template>
  <main class="relative min-h-screen md:flex">
    <SideMenu />
    <section class="flex-1 p-10">
      <h1 class="text-4xl">
        Blog posts
      </h1>
      <ul>
        <li v-for="article of articles" :key="article.slug" class="my-3">
          <NuxtLink :to="`/blog/${article.slug}`">
            <div>
              <h2 class="text-3xl hover:underline">
                {{ article.title }}
              </h2>
              <p>by {{ article.author.name }}</p>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
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
