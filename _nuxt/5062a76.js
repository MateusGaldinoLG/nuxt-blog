(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,5,10],{265:function(t,e,o){"use strict";o.r(e);var n={props:{text:{type:String,required:!0},colorStyle:{type:String,default:"bg-gray-300"}},data:function(){return{baseStyles:"p-2 m-2 rounded "+this.colorStyle}}},l=o(43),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:t.baseStyles},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"03a02588",null);e.default=component.exports;installComponents(component,{Button:o(265).default})},266:function(t,e,o){"use strict";o.r(e);var n={methods:{openSidebar:function(){document.querySelector(".sidebar").classList.toggle("-translate-x-full")}}},l=o(43),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"bg-gray-800 text-gray-100 flex justify-between md:hidden"},[o("nuxt-link",{staticClass:"block p-4 text-white font-bold",attrs:{to:"#"}},[t._v("\n      Nuxt Blog\n    ")]),t._v(" "),o("button",{staticClass:"mobile-menu-button p-4 focus:outline-none focus:bg-gray-700",on:{click:t.openSidebar}},[o("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])],1),t._v(" "),o("div",{staticClass:"sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 md:h-full transition duration-200 ease-in-out md:z-0 z-10"},[o("nuxt-link",{staticClass:"text-white flex items-center space-x-2 px-4",attrs:{to:"/"}},[o("svg",{staticClass:"h-8 w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}})]),t._v(" "),o("span",{staticClass:"text-2xl font-extrabold"},[t._v("Nuxt Blog")])]),t._v(" "),o("nav",[o("nuxt-link",{staticClass:"block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center space-x-2 px-4",attrs:{to:"/"}},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})]),t._v(" "),o("span",[t._v("Home")])]),t._v(" "),o("nuxt-link",{staticClass:"block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center space-x-2 px-4",attrs:{to:"/blog"}},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clip-rule":"evenodd"}})]),t._v(" "),o("span",[t._v("Posts")])]),t._v(" "),o("nuxt-link",{staticClass:"block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center space-x-2 px-4",attrs:{to:"/about"}},[o("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"}})]),t._v(" "),o("span",[t._v("About")])])],1)],1)])}),[],!1,null,"015d1d12",null);e.default=component.exports;installComponents(component,{Button:o(265).default})},273:function(t,e,o){"use strict";o.r(e);var n={},l=o(43),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"relative min-h-screen md:flex"},[o("SideMenu"),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex-1 p-10"},[o("h1",{staticClass:"md:text-left text-center text-3xl font-bold"},[t._v("\n      About this blog\n    ")]),t._v(" "),o("h2",{staticClass:"text-2xl font-semibold"},[t._v("\n      Sobre mim\n    ")]),t._v(" "),o("p",{staticClass:"my-3"},[t._v("\n      Um pouco sobre minha vida e minha área dentro da programação\n    ")]),t._v(" "),o("hr"),t._v(" "),o("p",[t._v("\n      Meu nome é Mateus Galdino, sou de Recife, Pernambuco, e estudo programação. Meu foco atual é o estudo das diversas áreas da programação, desde o back-end até o front-end.\n    ")]),t._v(" "),o("p",[t._v("\n      O começo dos meus estudos foi com a linguagem "),o("span",{staticClass:"font-bold"},[t._v("Java")]),t._v(", onde eu aprendi desde o mais básico até os diferentes paradigmas de programação, como Orientação a Objetos e Paradigma Funcional. Depois, aprendi Javascript e as linguagens feitas para a web, como HTML5 e CSS3\n    ")]),t._v(" "),o("h2",{staticClass:"text-xl my-3 font-semibold"},[t._v("\n      Meu primeiro projeto\n    ")]),t._v(" "),o("p",[t._v("Incrivelmente, meu primeiro projeto de programação maior não foi em Java, mas sim em Javascript, o "),o("span",{staticClass:"font-bold hover:underline hover:font-medium"},[o("a",{attrs:{href:"https://github.com/MateusGaldinoLG/Dungeonbot"}},[t._v("DungeonBot")])]),t._v(", utilizando o back-end do JavaScript com Node.js e a biblioteca Discord.js, para conexão com o Discord")]),t._v(" "),o("h2",{staticClass:"text-xl my-3 font-semibold"},[t._v("\n      Áreas de estudo atuais\n    ")]),t._v(" "),o("p",[t._v("Minhas áreas de estudo atuais são: ")]),t._v(" "),o("ul",{staticClass:"list-disc list-inside"},[o("li",[o("span",{staticClass:"font-bold"},[t._v("Spring boot")]),t._v(": framework de Java, utilizando PostgresQL")]),t._v(" "),o("li",[o("span",{staticClass:"font-bold"},[t._v("Vuejs")]),t._v(": framework web de JavaScript, utilizando nuxtjs e tailwindcss")]),t._v(" "),o("li",[o("span",{staticClass:"font-bold"},[t._v("Typescript e Express")]),t._v(": back-end com typescript utilizando o framework Express e PostgresQL")])]),t._v(" "),o("p",[t._v("Todo meu estudo nessas áreas está, atualmente, em processo de desenvolvimento, com projetos pequenos criados na área.")]),t._v(" "),o("p",[t._v("Alguns desses projetos são o "),o("span",{staticClass:"font-bold"},[t._v("Aphorisme")]),t._v(" social criada em fullstack com typescript e express no backend e Nuxt no frontend, e "),o("span",{staticClass:"font-bold"},[t._v("esse blog")]),t._v(", feito utilizando nuxt content e tailwindcss")])])}],!1,null,"bdbf44b0",null);e.default=component.exports;installComponents(component,{SideMenu:o(266).default})},289:function(t,e,o){"use strict";o.r(e);var n={},l=o(43),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("AboutBody")}),[],!1,null,"5084ebd0",null);e.default=component.exports;installComponents(component,{AboutBody:o(273).default})}}]);