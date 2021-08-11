<template>
  <div>
    <ul>
      <li v-for="link of articleToc" :key="link.id">
        <NuxtLink :to="`#${link.id}`" :class="{'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3}">
          -> {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articleToc: {
      type: Array,
      required: true
    }
  }
}
</script>
