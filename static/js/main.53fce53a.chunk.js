(this.webpackJsonpmoviesapp=this.webpackJsonpmoviesapp||[]).push([[0],{34:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(15),i=c.n(n),o=(c(34),c(28)),a=c(44),r=c(23),l=c(29),j=c(24),d=c(45),b=c(12),h="MOVIES";var m=c(3),u="https://api.themoviedb.org/3/search/movie?api_key=".concat("9226d2cbb7ed48fe3f3e70d3c7574602"),v=Object(b.b)(null,{movies:function(e){return{type:h,items:e}}})((function(e){var t=Object(s.useState)(""),c=Object(o.a)(t,2),n=c[0],i=c[1];return Object(m.jsx)("div",{children:Object(m.jsx)(a.a,{inline:!0,className:"col-md-12 col-md-offset-4",children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(l.a,{children:"Search "})," ",Object(m.jsx)(j.a,{type:"text",placeholder:"Search any movie",onChange:function(e){return i(e.target.value)}})," ",Object(m.jsx)(d.a,{bsstyle:"success",onClick:function(){return function(){console.log("Search button clicked",n);var t="".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(n);fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.movies(t.results)}))}()},children:"Submit"})]})})})})),O=Object(b.b)(null,null)((function(e){return Object(m.jsx)("div",{className:"col-sm-12 col-sm-3",children:Object(m.jsxs)("div",{className:"thumbnail",children:[Object(m.jsx)("a",{href:"https://www.themoviedb.org/movie/"+e.movie.id,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:"https://image.tmdb.org/t/p/w342"+e.movie.poster_path,alt:e.movie.title+" Image"})}),Object(m.jsxs)("div",{className:"caption",children:[Object(m.jsx)("h3",{children:e.movie.title}),Object(m.jsx)("p",{children:e.movie.overview}),Object(m.jsxs)("p",{children:["Release Date - ",e.movie.release_date]}),Object(m.jsxs)("p",{children:["Ratings -"," ",Object(m.jsxs)("span",{className:"badge badge-default",children:[Object(m.jsx)("span",{className:"glyphicon glyphicon-star","aria-hidden":"true"})," ",e.movie.vote_average]})]})]})]})})}));var p=Object(b.b)((function(e){return console.log(e),{movies:e.movies}}),null)((function(e){return console.log(e),Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{}),e.movies.map((function(e){return Object(m.jsx)(O,{movie:e,showButton:!0},e.id)}))]})})),x=c(25),f=c(6),g=function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row text-center",children:Object(m.jsxs)("div",{className:"jumbotron",children:[Object(m.jsx)("h1",{children:"Movies App"}),Object(m.jsx)("p",{children:"Who doesn't Love movies?"})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(x.a,{children:Object(m.jsx)(f.c,{children:Object(m.jsx)(f.a,{exact:!0,path:"/ds_test",component:p})})})})]})},w=c(17),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return console.log("Movies are: ",t.items),t.items;default:return e}},N=c(27),S=Object(w.b)({movies:y}),_=Object(w.c)(S,Object(w.a)(N.a));i.a.render(Object(m.jsx)(b.a,{store:_,children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.53fce53a.chunk.js.map