(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{358:function(t,e,c){"use strict";c.r(e);var n=c(89),r=function(){return Object(n.a)({url:"/educms/bannerfront/getAllBanner",method:"get"})},l=function(){return Object(n.a)({url:"/eduservice/indexfront/index",method:"get"})},o={data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},bannerList:[],eduList:[],teacherList:[]}},created:function(){this.getBannerList(),this.getHotCourseTeacher()},methods:{getHotCourseTeacher:function(){var t=this;l().then((function(e){t.eduList=e.data.data.eduList,t.teacherList=e.data.data.teacherList}))},getBannerList:function(){var t=this;r().then((function(e){t.bannerList=e.data.data.list}))}}},v=c(20),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[c("div",{staticClass:"swiper-wrapper"},t._l(t.bannerList,(function(t){return c("div",{key:t.id,staticClass:"swiper-slide",staticStyle:{background:"#040B1B"}},[c("a",{attrs:{target:"_blank",href:t.linkUrl}},[c("img",{attrs:{src:t.imageUrl,alt:t.title}})])])})),0),t._v(" "),c("div",{staticClass:"swiper-pagination swiper-pagination-white"}),t._v(" "),c("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),c("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})]),t._v(" "),c("div",{attrs:{id:"aCoursesList"}},[c("div",[c("section",{staticClass:"container"},[t._m(0),t._v(" "),c("div",[c("article",{staticClass:"comm-course-list"},[c("ul",{staticClass:"of",attrs:{id:"bna"}},t._l(t.eduList,(function(e){return c("li",{key:e.id},[c("div",{staticClass:"cc-l-wrap"},[c("section",{staticClass:"course-img"},[c("img",{staticClass:"img-responsive",attrs:{src:e.cover,alt:e.title}}),t._v(" "),t._m(1,!0)]),t._v(" "),c("h3",{staticClass:"hLh30 txtOf mt10"},[c("a",{staticClass:"course-title fsize18 c-333",attrs:{href:"#",title:e.title}},[t._v(t._s(e.title))])]),t._v(" "),c("section",{staticClass:"mt10 hLh20 of"},[0===Number(e.price)?c("span",{staticClass:"fr jgTag bg-green"},[c("i",{staticClass:"c-fff fsize12 f-fA"},[t._v("免费")])]):t._e(),t._v(" "),c("span",{staticClass:"fl jgAttr c-ccc f-fA"},[c("i",{staticClass:"c-999 f-fA"},[t._v(t._s(e.buyCount)+" 人学习")]),t._v("\n                      |\n                      "),c("i",{staticClass:"c-999 f-fA"},[t._v(t._s(e.viewCount)+" 评论")])])])])])})),0),t._v(" "),c("div",{staticClass:"clear"})]),t._v(" "),t._m(2)])])]),t._v(" "),c("div",[c("section",{staticClass:"container"},[t._m(3),t._v(" "),c("div",[c("article",{staticClass:"i-teacher-list"},[c("ul",{staticClass:"of"},t._l(t.teacherList,(function(e){return c("li",{key:e.id},[c("section",{staticClass:"i-teach-wrap"},[c("div",{staticClass:"i-teach-pic"},[c("a",{attrs:{href:"/teacher/"+e.id,title:e.name}},[c("img",{attrs:{alt:e.name,src:e.avatar}})])]),t._v(" "),c("div",{staticClass:"mt10 hLh30 txtOf tac"},[c("a",{staticClass:"fsize18 c-666",attrs:{href:"/teacher/"+e.id,title:e.name}},[t._v(t._s(e.name))])]),t._v(" "),c("div",{staticClass:"hLh30 txtOf tac"},[c("span",{staticClass:"fsize14 c-999"},[t._v(t._s(e.career))])]),t._v(" "),c("div",{staticClass:"mt15 i-q-txt"},[c("p",{staticClass:"c-999 f-fA"},[t._v(t._s(e.intro))])])])])})),0),t._v(" "),c("div",{staticClass:"clear"})]),t._v(" "),t._m(4)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"comm-title"},[e("h2",{staticClass:"tac"},[e("span",{staticClass:"c-333"},[this._v("热门课程")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cc-mask"},[e("a",{staticClass:"comm-btn c-btn-1",attrs:{href:"#",title:"开始学习"}},[this._v("开始学习")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"tac pt20"},[e("a",{staticClass:"comm-btn c-btn-2",attrs:{href:"#",title:"全部课程"}},[this._v("全部课程")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"comm-title"},[e("h2",{staticClass:"tac"},[e("span",{staticClass:"c-333"},[this._v("名师大咖")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"tac pt20"},[e("a",{staticClass:"comm-btn c-btn-2",attrs:{href:"#",title:"全部讲师"}},[this._v("全部讲师")])])}],!1,null,null,null);e.default=component.exports}}]);