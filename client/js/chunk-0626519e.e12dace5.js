(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0626519e"],{"0e51":function(t,e,s){"use strict";s("6bc5")},1908:function(t,e,s){"use strict";s("3391")},1976:function(t,e,s){"use strict";s("f594")},3391:function(t,e,s){},"5c6a":function(t,e,s){},"6a00":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topics-page"},[s("q-layout",{attrs:{view:"lHh Lpr lff",container:""}},[s("q-header",{staticClass:"bg-black mobile-only"},[s("q-toolbar",[s("q-toolbar-title",[s("logo-card",{attrs:{mobile:!0}})],1),s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawer=!t.drawer}}})],1)],1),s("q-drawer",{attrs:{"show-if-above":"",width:257,breakpoint:1023},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("div",{staticClass:"drawer-layout"},[s("logo-card"),s("div",{staticClass:"aside-actions"},[s("div",{staticClass:"aside-filter-options"},t._l(t.options,(function(e,a){return s("div",{key:a,staticClass:"filter-options-item",on:{click:function(s){t.currentFilter=e.value}}},[s("span",{staticClass:"body-3",class:{"selected-effect":t.currentFilter===e.value},attrs:{id:"filter-item"}},[t._v(" "+t._s(e.label)+" ")])])})),0),s("div",{staticClass:"aside-filter-search",attrs:{role:"search"}},[s("q-input",{attrs:{label:"Procurar",square:"",dense:"",color:"black"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"bolder text-black",attrs:{name:"search",size:"xs"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("div",{staticClass:"aside-filter-btn"},[t.$store.getters["getAuth"]?t._e():s("base-button",{staticClass:"btn-signup",attrs:{theme:"primary"},on:{click:function(e){return t.$router.push({name:"SignIn"})}}},[s("span",{staticClass:"caption bolder text-white"},[t._v("Participar")])]),t.$store.getters["getAuth"]?s("base-button",{staticClass:"row no-wrap al-items-center",attrs:{theme:"primary"},on:{click:function(e){return t.$router.push("/profile/topics/add")}}},[s("span",{staticClass:"body-2 bolder text-white"},[t._v(" + ")]),s("span",{staticClass:"caption bolder text-white"},[t._v(" adicionar um novo debate ")])]):t._e()],1)])],1)]),s("q-page-container",[s("q-page",{staticStyle:{"max-width":"1100px"},attrs:{padding:""}},[s("topics-list")],1)],1)],1)],1)},i=[],o=s("5530"),c=s("5935"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topics-list"},[0==t.topics.length?a("div",{staticClass:"null-state column"},[a("img",{attrs:{src:s("f474")}}),t._m(0),a("span",{staticClass:"body-2 bolder"},[t._v("você pode ser o primeiro")])]):a("div",{staticClass:"content"},[a("masonry",{staticClass:"grid",attrs:{cols:{default:3,1200:3,1130:2,600:1},gutter:{default:"16px",1200:"4px",1130:"8px",600:"4px"}}},t._l(t.topics,(function(t,e){return a("topic-item",{key:e,ref:"users",refInFor:!0,attrs:{topic:t}})})),1)],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"body-2 bolder"},[s("strong",[t._v("Ops!")]),t._v(" ainda não possuimos diálogos abertos.")])}],l=s("2f62"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"my-card",style:{"background-color":t.$store.getters["categories/getCategoryById"](t.topic.categoryId).color},attrs:{square:""},on:{click:function(e){return t.emitThisTopic()}}},[s("q-card-section",{staticClass:"card"},[s("div",{staticClass:"title",attrs:{title:t.topic.title}},[t._v(" "+t._s(t.mask(t.topic.title,30))+" ")]),s("div",{staticClass:"bolder mg-top8 text-white"},[t._v(" "+t._s(t.$store.getters["categories/getCategoryById"](t.topic.categoryId).label)+" ")]),s("div",{staticClass:"row al-items-center text-white caption"},[s("span",[t._v(" "+t._s(t.topic.user.firstName)+" "+t._s(t.topic.user.lastName)+" ")]),s("span",{staticClass:"mg-left16"},[t._v(" "+t._s(t.formatDate(t.topic.createdAt))+" ")])])]),s("q-card-section",{staticClass:"card-description"},[s("article",{directives:[{name:"sanitize",rawName:"v-sanitize.strip",value:t.mask(t.topic.content,120),expression:"mask(topic.content, 120)",modifiers:{strip:!0}}],staticClass:"text-white"})]),s("q-card-section",{staticClass:"card card-bottom"},[s("div",{staticClass:"thumbs"},[s("q-icon",{attrs:{name:"fa fa-thumbs-up"}}),s("span",{staticClass:"votesPercent"},[t._v(" "+t._s(t.supportsPercentage(!0))+"% ")]),s("q-icon",{attrs:{name:"fa fa-thumbs-down"}}),s("span",{staticClass:"votesPercent"},[t._v(" "+t._s(t.supportsPercentage(!1))+"% ")])],1),s("div",{staticClass:"supports-comments caption"},[s("span",{staticClass:"supports"},[t._v(" "+t._s(t.topic.positiveSupports+t.topic.negativeSupports)+" "+t._s(" "+(t.topic.positiveSupports+t.topic.negativeSupports===1?"Apoio":"Apoios"))+" ")]),t._v(" | "),s("span",{staticClass:"comments"},[t._v(" "+t._s(t.topic.numberOfReplies)+" "+t._s(" "+(1===t.topic.numberOfReplies?"Comentário":"Comentários"))+" ")])])])],1)},u=[],d=s("1da1"),m=(s("96cf"),{name:"TopicItem",props:{topic:{type:Object,default:function(){return{}}}},computed:Object(o["a"])({},Object(l["d"])({formatDate:"formatDate"})),methods:Object(o["a"])(Object(o["a"])({},Object(l["c"])("topics",["localLoadCurrentTopic","localLoadCurrentTopicReplyes"])),{},{emitThisTopic:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push({name:"TopicPage",params:{topicId:this.topic.id}});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),supportsPercentage:function(t){var e=parseInt(this.topic.positiveSupports,10),s=parseInt(this.topic.negativeSupports,10),a=parseInt(e+s,10);return!0===t?a?parseInt(e/a*100,10):0:a?parseInt(s/a*100,10):0},mask:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return t.length>e?t.substring(0,e)+"...":t}})}),f=m,b=(s("1976"),s("2877")),v=s("fe09"),h=Object(b["a"])(f,p,u,!1,null,"10d49056",null),g=h.exports;h.options.components=Object.assign(Object.create(h.options.components||null),h.options.components||{},{QCard:v["d"],QCardSection:v["f"],QIcon:v["v"]});var C={components:{TopicItem:g},props:{filter:{type:String,default:function(){return"mostRecents"}}},data:function(){return{loading:!1,topicsLoaded:[],filterOption:[],currentFilter:"mostRecents",lastFilter:"mostRecents",streamCount:0}},computed:Object(o["a"])({},Object(l["d"])({topics:"topics/loadTopicsFiltered"})),mounted:function(){this.$store.dispatch("topics/loadTopics")}},_=C,y=(s("1908"),Object(b["a"])(_,r,n,!1,null,"0ac118ab",null)),w=y.exports,k=s("82ea"),x=Object(c["a"])({getterType:"topics/getField",mutationType:"topics/updateField"}),O=x.mapFields,T={name:"TopicsPage",components:{TopicsList:w,BaseButton:k["a"]},data:function(){return{drawer:!1,newEvent:"",filterTypeSelected:"mostRecent",options:[{label:"Mais ativos",value:"mostActive",color:"black"},{label:"Mais comentados",value:"mostAnswed",color:"black"},{label:"Novos",value:"mostRecent",color:"black"}]}},computed:Object(o["a"])(Object(o["a"])({},O(["search","currentFilter"])),{},{allTopics:function(){var t=this.$store.getters.eventsFiltered;return t}}),methods:{signUp:function(){this.$router.push({name:"SignUp"})},filterThis:function(t){this.filterTypeSelected=t}}},j=T,q=(s("db91"),Object(b["a"])(j,a,i,!1,null,"70a70dca",null));e["default"]=q.exports;q.options.components=Object.assign(Object.create(q.options.components||null),q.options.components||{},{QLayout:v["C"],QHeader:v["u"],QToolbar:v["S"],QToolbarTitle:v["T"],QBtn:v["c"],QDrawer:v["n"],QInput:v["y"],QIcon:v["v"],QPageContainer:v["G"],QPage:v["F"]})},"6bc5":function(t,e,s){},"82ea":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.to?s("router-link",{staticClass:"base-button",class:[t.theme,{disabled:t.disabled}],attrs:{to:t.to}},[t._t("default")],2):s("button",{staticClass:"base-button",class:[t.theme,{disabled:t.disabled}],on:{click:t.emitClick}},[t._t("default")],2)},i=[],o={props:{to:{type:Object,default:null},theme:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},emits:["click"],methods:{emitClick:function(){this.$emit("click")}}},c=o,r=(s("0e51"),s("2877")),n=Object(r["a"])(c,a,i,!1,null,"89747364",null);e["a"]=n.exports},db91:function(t,e,s){"use strict";s("5c6a")},f474:function(t,e,s){t.exports=s.p+"img/pixeltrue-idea.199bfd20.png"},f594:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0626519e.e12dace5.js.map