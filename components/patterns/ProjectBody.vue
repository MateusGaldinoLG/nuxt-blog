<template>
  <main class="relative min-h-screen md:flex">
    <SideMenu />
    <section class="flex-1 p-10">
      <Title :title="'My projects'" />
      <div>
        <ProjectCard :title="'Main Projects'" />
      </div>
      <div>
        <ProjectCard :title="'Side Projects'" />
      </div>
    </section>
  </main>
</template>

<script>
export default {

}
</script>
