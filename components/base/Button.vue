<template>
  <button :class="baseStyles">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    colorStyle: {
      type: String,
      default: 'bg-gray-300'
    }
  },
  data () {
    return {
      baseStyles: 'p-2 m-2 rounded ' + this.colorStyle
    }
  }
}
</script>

<style scoped>

</style>
