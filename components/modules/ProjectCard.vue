<template>
  <section>
    <h2 class="text-2xl font-bold mb-2">
      {{ title }}
    </h2>
    <div v-for="project in getProjects" :key="project.id">
      <ProjectContent :project="project" />
    </div>
  </section>
</template>

<script>
import { MainProjects, SideProjects } from '@/assets/data/projects'
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    getProjects () {
      if (this.title === 'Main Projects') { return MainProjects } else if (this.title === 'Side Projects') { return SideProjects } else { return null }
    }
  }
}
</script>
