<template>
  <h1 class="md:text-left text-center text-3xl font-bold">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'lorem ipsum'
    }
  }
}
</script>
