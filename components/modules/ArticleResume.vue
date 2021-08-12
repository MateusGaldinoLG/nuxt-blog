<template>
  <NuxtLink :to="`/blog/${article.slug}`">
    <div>
      <h2 class="text-3xl hover:underline">
        {{ article.title }}
      </h2>
      <p>by {{ article.author.name }}</p>
      <p>{{ article.description }}</p>
      <p>Last Edited at: {{ formatDate(article.updatedAt) }}</p>
      <div class="flex justify-end">
        <Button :text="'READ MORE'" :color-style="'bg-blue-300 text-gray-900 hidden md:block'" />
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
