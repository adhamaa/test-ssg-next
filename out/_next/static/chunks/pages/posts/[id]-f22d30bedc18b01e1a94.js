_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"0xlP":function(e,t,n){e.exports={link:"posts_link__XdX4H",card:"posts_card__1qBkN",btn:"posts_btn__2PRMr"}},"98H0":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("nOHt"),c=n("YFqc"),s=n.n(c),u=n("0xlP"),f=n.n(u),i=o.a.createElement,l=!0;t.default=function(e){var t=e.post,n=Object(a.useRouter)().locale;return i(o.a.Fragment,null,i("div",{className:f.a.card},i("h2",{style:{textTransform:"capitalize"}},t.title),i("hr",null),i("p",null,t.body),i("br",null),i(s.a,{className:f.a.btn,href:"/posts",locale:n},"BACK")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),s=n("elyg"),u=n("nOHt"),f=new Map,i=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(i?a=new i((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function d(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],f=o[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",_=c.default.useMemo((function(){var t=(0,s.resolveHref)(v,e.href);return{href:t,as:e.as?(0,s.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),w=_.href,y=_.as;c.default.useEffect((function(){if(t&&i&&a&&a.tagName&&(0,s.isLocalURL)(w)&&!l[w+"%"+y])return p(a,(function(){d(h,w,y)}))}),[t,a,w,y,h]);var g=e.children,b=e.replace,E=e.shallow,m=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var N=c.Children.only(g),k={ref:function(e){e&&f(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,w,y,b,E,m)}};return t&&(k.onMouseEnter=function(e){(0,s.isLocalURL)(w)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),d(h,w,y,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(k.href=(0,s.addBasePath)(y)),c.default.cloneElement(N,k)};t.default=h},g3ZY:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n("98H0")}])}},[["g3ZY",0,1,2]]]);