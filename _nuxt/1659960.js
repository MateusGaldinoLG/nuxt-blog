(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,5,7,13,14],{265:function(t,e,l){"use strict";l.r(e);var r={props:{text:{type:String,required:!0},colorStyle:{type:String,default:"bg-gray-300"}},data:function(){return{baseStyles:"p-2 m-2 rounded "+this.colorStyle}}},n=l(43),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:t.baseStyles},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"03a02588",null);e.default=component.exports;installComponents(component,{Button:l(265).default})},266:function(t,e,l){"use strict";l.r(e);var r={methods:{openSidebar:function(){document.querySelector(".sidebar").classList.toggle("-translate-x-full")}}},n=l(43),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"bg-gray-800 text-gray-100 flex justify-between md:hidden"},[l("nuxt-link",{staticClass:"block p-4 text-white font-bold",attrs:{to:"#"}},[t._v("\n      Nuxt Blog\n    ")]),t._v(" "),l("button",{staticClass:"mobile-menu-button p-4 focus:outline-none focus:bg-gray-700",on:{click:t.openSidebar}},[l("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])],1),t._v(" "),l("div",{staticClass:"sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 md:h-full transition duration-200 ease-in-out md:z-0 z-10"},[l("nuxt-link",{staticClass:"text-white flex items-center space-x-2 px-4",attrs:{to:"/"}},[l("svg",{staticClass:"h-8 w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}})]),t._v(" "),l("span",{staticClass:"text-2xl font-extrabold"},[t._v("Nuxt Blog")])]),t._v(" "),l("nav",[l("nuxt-link",{staticClass:"block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center space-x-2 px-4",attrs:{to:"/"}},[l("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})]),t._v(" "),l("span",[t._v("Home")])]),t._v(" "),l("nuxt-link",{staticClass:"block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center space-x-2 px-4",attrs:{to:"/blog"}},[l("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clip-rule":"evenodd"}})]),t._v(" "),l("span",[t._v("Posts")])]),t._v(" "),l("nuxt-link",{staticClass:"block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center space-x-2 px-4",attrs:{to:"/projects"}},[l("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),t._v(" "),l("span",[t._v("Projects")])]),t._v(" "),l("nuxt-link",{staticClass:"block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center space-x-2 px-4",attrs:{to:"/about"}},[l("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"}})]),t._v(" "),l("span",[t._v("About")])])],1)],1)])}),[],!1,null,"07a07a50",null);e.default=component.exports;installComponents(component,{Button:l(265).default})},267:function(t,e,l){"use strict";l.r(e);var r={props:{title:{type:String,required:!0,default:"lorem ipsum"}}},n=l(43),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"md:text-left text-center text-3xl font-bold"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,l){"use strict";l.r(e);var r={props:{article:{type:Object,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},n=l(43),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("NuxtLink",{attrs:{to:"/blog/"+t.article.slug}},[l("div",[l("h2",{staticClass:"text-3xl hover:underline"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),l("p",[t._v("by "+t._s(t.article.author.name))]),t._v(" "),l("p",[t._v(t._s(t.article.description))]),t._v(" "),l("p",[t._v("Last Edited at: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),l("div",{staticClass:"flex justify-end"},[l("Button",{attrs:{text:"READ MORE","color-style":"bg-blue-300 text-gray-900 hidden md:block"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:l(265).default})},277:function(t,e,l){"use strict";l.r(e);var r={props:{articles:{type:Array,required:!0}}},n=l(43),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",{staticClass:"relative min-h-screen md:flex"},[l("SideMenu"),t._v(" "),l("section",{staticClass:"flex-1 p-10"},[l("Title",{attrs:{title:"Blog posts"}}),t._v(" "),l("ul",t._l(t.articles,(function(article){return l("li",{key:article.slug,staticClass:"my-3 p-3 bg-blue-900 text-white rounded md:w-1/2"},[l("ArticleResume",{attrs:{article:article}})],1)})),0)],1)],1)}),[],!1,null,"16ed2758",null);e.default=component.exports;installComponents(component,{SideMenu:l(266).default,Title:l(267).default,ArticleResume:l(274).default})},294:function(t,e,l){"use strict";l.r(e);var r=l(6),n=(l(44),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,r=t.params,e.next=3,l("posts",r.page).only(["title","description","slug","author","updatedAt"]).sortBy("createdAt","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()}}),o=l(43),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("ListBody",{attrs:{articles:t.articles}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListBody:l(277).default})}}]);