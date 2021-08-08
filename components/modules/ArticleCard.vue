<template>
  <article>
    <header>
      <h1 class="text-4xl font-bold">
        {{ article.title }}
      </h1>
      <p>{{ article.description }}</p>
      <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
    </header>
    <br>
    <nav>
      <h2 class="text-3xl font-semibold">
        Contents
      </h2>
      <ContentTable :article-toc="article.toc" />
    </nav>
    <br>
    <nuxt-content :document="article" />
    <pre>{{ article }}</pre>
  </article>
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

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
/* .nuxt-content li {
  list-style: circle;
} */
</style>
