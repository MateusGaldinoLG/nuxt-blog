<template>
  <main class="relative min-h-screen md:flex">
    <SideMenu />
    <div class="flex-1 p-10">
      <h1 class="md:text-left text-center text-3xl font-bold">
        About this blog
      </h1>
      <h2 class="text-2xl font-semibold">
        Sobre mim
      </h2>

      <p class="my-3">
        Um pouco sobre minha vida e minha área dentro da programação
      </p>
      <hr>
      <p>
        Meu nome é Mateus Galdino, sou de Recife, Pernambuco, e estudo programação. Meu foco atual é o estudo das diversas áreas da programação, desde o back-end até o front-end.
      </p>
      <p>
        O começo dos meus estudos foi com a linguagem <span class="font-bold">Java</span>, onde eu aprendi desde o mais básico até os diferentes paradigmas de programação, como Orientação a Objetos e Paradigma Funcional. Depois, aprendi Javascript e as linguagens feitas para a web, como HTML5 e CSS3
      </p>

      <h2 class="text-xl my-3 font-semibold">
        Meu primeiro projeto
      </h2>
      <p>Incrivelmente, meu primeiro projeto de programação maior não foi em Java, mas sim em Javascript, o <span class="font-bold hover:underline hover:font-medium"><a href="https://github.com/MateusGaldinoLG/Dungeonbot">DungeonBot</a></span>, utilizando o back-end do JavaScript com Node.js e a biblioteca Discord.js, para conexão com o Discord</p>

      <h2 class="text-xl my-3 font-semibold">
        Áreas de estudo atuais
      </h2>
      <p>Minhas áreas de estudo atuais são: </p>
      <ul class="list-disc list-inside">
        <li><span class="font-bold">Spring boot</span>: framework de Java, utilizando PostgresQL</li>
        <li><span class="font-bold">Vuejs</span>: framework web de JavaScript, utilizando nuxtjs e tailwindcss</li>
        <li><span class="font-bold">Typescript e Express</span>: back-end com typescript utilizando o framework Express e PostgresQL</li>
      </ul>
      <p>Todo meu estudo nessas áreas está, atualmente, em processo de desenvolvimento, com projetos pequenos criados na área.</p>
      <p>Alguns desses projetos são o <span class="font-bold">Aphorisme</span> social criada em fullstack com typescript e express no backend e Nuxt no frontend, e <span class="font-bold">esse blog</span>, feito utilizando nuxt content e tailwindcss</p>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
