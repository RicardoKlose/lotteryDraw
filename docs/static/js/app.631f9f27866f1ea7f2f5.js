webpackJsonp([1],{NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("7+uW"),s=(a("m4jX"),{render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("span",{staticClass:"brand-title"},[t._v("彩票机选器")]),t._v(" "),a("div",{class:{"navbar-burger":!0,burger:!0,"is-active":t.expandMenu},on:{click:t.toggleExpand}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])]),t._v(" "),a("div",{class:{"navbar-menu":!0,"is-active":t.expandMenu}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/Double"}},[a("span",[t._v("双色球")])]),t._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/Mega"}},[a("span",[t._v("大乐透")])])],1)])]),t._v(" "),a("router-view",{staticClass:"main-app"})],1)},staticRenderFns:[]}),l=a("VU/8")({name:"App",data:function(){return{expandMenu:!1}},methods:{toggleExpand:function(){this.expandMenu=!this.expandMenu}}},s,!1,null,null,null).exports,r=a("/ocq");function i(t,n){for(var a=n,e=new Array(t).fill(0).map(function(t,n){return n+1}),s=[];a>0;){var l=Math.floor(Math.random()*e.length);s.push(e.splice(l,1)[0]),a-=1}return s.sort(function(t,n){return t-n})}var c={name:"Double",data:function(){return{resultArr:[]}},methods:{generateDouble:function(){this.clear();for(var t=0;t<5;t+=1)this.resultArr.push({normalArr:i(33,6),specialArr:i(16,1)})},clear:function(){this.resultArr.splice(0)}},mounted:function(){this.generateDouble()}},o={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",[a("div",{staticClass:"columns buttons-container"},[a("div",{staticClass:"column line-first"},[a("button",{staticClass:"button",on:{click:t.generateDouble}},[t._v("机选5注")])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"column line-last"},[a("button",{staticClass:"button",on:{click:t.clear}},[t._v("清空")])])]),t._v(" "),t._l(t.resultArr,function(n,e){return a("div",{key:e,staticClass:"columns balls-container"},[t._l(n.normalArr,function(n,e){return a("div",{key:e,staticClass:"column ball"},[a("div",{staticClass:"ball-content normal-ball"},[t._v(t._s(n))])])}),t._v(" "),t._l(n.specialArr,function(n,e){return a("div",{key:e,staticClass:"column ball"},[a("div",{staticClass:"ball-content special-ball"},[t._v(t._s(n))])])})],2)})],2)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"column line-middle"},[n("span",{staticClass:"app-title"},[this._v("福彩双色球")])])}]},u=a("VU/8")(c,o,!1,null,null,null).exports,v={name:"Mega",data:function(){return{resultArr:[]}},methods:{generateMega:function(){this.clear();for(var t=0;t<5;t+=1)this.resultArr.push({normalArr:i(35,5),specialArr:i(12,2)})},clear:function(){this.resultArr.splice(0)}},mounted:function(){this.generateMega()}},p={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",[a("div",{staticClass:"columns buttons-container"},[a("div",{staticClass:"column line-first"},[a("button",{staticClass:"button",on:{click:t.generateMega}},[t._v("机选5注")])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"column line-last"},[a("button",{staticClass:"button",on:{click:t.clear}},[t._v("清空")])])]),t._v(" "),t._l(t.resultArr,function(n,e){return a("div",{key:e,staticClass:"columns balls-container"},[t._l(n.normalArr,function(n,e){return a("div",{key:e,staticClass:"column ball"},[a("div",{staticClass:"ball-content normal-ball"},[t._v(t._s(n))])])}),t._v(" "),t._l(n.specialArr,function(n,e){return a("div",{key:e,staticClass:"column ball"},[a("div",{staticClass:"ball-content special-ball"},[t._v(t._s(n))])])})],2)})],2)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"column line-middle"},[n("span",{staticClass:"app-title"},[this._v("超级大乐透")])])}]},d=a("VU/8")(v,p,!1,null,null,null).exports;e.a.use(r.a);var m=new r.a({routes:[{path:"/Double",name:"Double",component:u},{path:"/Mega",name:"Mega",component:d},{path:"*",redirect:"/Double"}],linkActiveClass:"is-active"});e.a.config.productionTip=!1,new e.a({el:"#app",router:m,components:{App:l},template:"<App/>"})},m4jX:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.631f9f27866f1ea7f2f5.js.map