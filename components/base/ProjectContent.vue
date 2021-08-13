<template>
  <div>
    <h3 class="text-xl font-semibold">
      {{ project.name }}
    </h3>
    <p>{{ project.description }}</p>
    <p>Version: {{ project.version }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  mounted () {
    window.console.log(this.project)
  }
}
</script>
