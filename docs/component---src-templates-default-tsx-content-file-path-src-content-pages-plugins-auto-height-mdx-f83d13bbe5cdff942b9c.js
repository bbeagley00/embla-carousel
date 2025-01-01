"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[589,2900],{926:function(e,t,n){n.r(t),n.d(t,{Head:function(){return _},default:function(){return S}});var a=n(1184),l=n(4041),r=n(1658),c=n(8783),o=n(7259),s=n(9318);function i(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",hr:"hr",h2:"h2",a:"a",span:"span",pre:"pre",code:"code"},(0,a.RP)(),e.components),{RepositoryLink:n,Admonition:i}=t;return i||u("Admonition",!0),n||u("RepositoryLink",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Auto Height"),"\n",l.createElement(n,{to:"https://github.com/davidjerleke/embla-carousel/tree/master/packages/embla-carousel-auto-height"},l.createElement(t.p,null,"View plugin on GitHub")),"\n",l.createElement(t.p,null,"This plugin is used to extend Embla Carousel with ",l.createElement(t.strong,null,"auto height")," functionality. It changes the height of the carousel container to fit the height of the highest slide in view."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"example",style:{position:"relative"}},l.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Example"),"\n",l.createElement(s.d),"\n",l.createElement(t.h2,{id:"installation",style:{position:"relative"}},l.createElement(t.a,{href:"#installation","aria-label":"installation permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Installation"),"\n",l.createElement(t.p,null,"First you need to install the ",l.createElement(t.strong,null,"npm package")," and save it to your dependencies:"),"\n",l.createElement(r.t,{groupId:o.sk.GROUP_ID},l.createElement(c.O,{tab:o.sk.TABS.CDN},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<script src="https://unpkg.com/embla-carousel-auto-height/embla-carousel-auto-height.umd.js"><\/script>\n'))),l.createElement(c.O,{tab:o.sk.TABS.NPM},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-auto-height --save\n"))),l.createElement(c.O,{tab:o.sk.TABS.YARN},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-auto-height\n")))),"\n",l.createElement(i,{type:"note"},l.createElement(t.p,null,"You can make use of CSS transitions to ",l.createElement(t.strong,null,"transition height")," changes. But beware: Transitioning height triggers reflow and may cause a performance hit."),l.createElement("br"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".embla__container {\n  transition: height 0.2s;\n}\n"))),"\n",l.createElement(i,{type:"warning"},l.createElement(t.p,null,"If you've been following along with any of the guides in the ",l.createElement(t.a,{href:"/get-started/"},"get started")," section, you want to make sure that each ",l.createElement(t.strong,null,"slide height")," is ",l.createElement(t.strong,null,"determined")," by the ",l.createElement(t.strong,null,"content")," it holds. Add the following to your CSS to achieve this:"),l.createElement("br"),l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css___highlight={3}"},".embla__container {\n  display: flex;\n  align-items: flex-start; /* Add this */\n}\n"))))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)};function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=n(352),h=n(824),p=n(408),g=n(6169),E=n(8324),b=n(2272),f=n(3908),v=n(3594),y=n(5413);const _=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:r}=(0,p.Q)(),{title:c="",description:o,date:s}=t.mdx.frontmatter,i=(0,l.useMemo)((()=>new Date(`${s} UTC`).toISOString()),[s]);return l.createElement(d.G,{title:c,description:o,url:`${a}${n.slug}`},l.createElement("script",{type:"application/ld+json"},`\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "${(0,v.b)(a)}",\n        "description": "${o}",\n        "url": "${a}${n.slug}",\n        "headline": "${c}",\n        "image": "${a}/share-image.png",\n        "datePublished": "${i}",\n        "dateModified": "${i}",\n        "author": {\n          "@type": "Person",\n          "name": "${r}"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "${r}",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "${a}${h.A}"\n          }\n        }\n      }\n    `))},k=e=>{const{pageContext:t,children:n}=e,{next:a,previous:r,filePath:c,id:o}=t;return l.createElement(l.Fragment,null,l.createElement(b.Q,{id:o}),l.createElement("article",{id:f.e},l.createElement(y.A,null,n)),l.createElement(g.R,{pageUrl:c}),l.createElement(E.o,{previous:r,next:a}))};function S(e){return l.createElement(k,e,l.createElement(m,e))}},9318:function(e,t,n){n.d(t,{d:function(){return y}});var a=n(4041),l=n(3057),r=n(651),c=n(2900),o=n(1563),s=n(7736),i=n(8312),m=n(9264),u=n(1021),d=n(5931);const h="embla-carousel-auto-height",p=(0,i.F)(5),g={},E=(0,s.Gb)(),b={id:h,slides:p,options:g,styles:E},f=(0,u.v)(b,"AutoHeight"),v=l.default.div.withConfig({displayName:"AutoHeight__Wrapper",componentId:"sc-rvonn5-0"})(["",";&.","{",";}"],o.sx,h,E),y=()=>{const[e,t]=(0,r.Wx)(d.T);return a.createElement(a.Fragment,null,a.createElement(m.E,{sandboxes:f}),a.createElement(v,{className:h,ref:e},t?a.createElement(c.default,{slides:p,options:g}):null))}},2900:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(4041),l=n(7154);function r(e){let t;void 0===e&&(e={});let n=[];const a=["select","slideFocus"];function l(){const{slideRegistry:e}=t.internalEngine(),a=e[t.selectedScrollSnap()];return a?a.map((e=>n[e])).reduce(((e,t)=>Math.max(e,t)),0):null}function r(){null!==l()&&(t.containerNode().style.height=`${l()}px`)}return{name:"autoHeight",options:e,init:function(e){t=e;const{options:{axis:l},slideRects:c}=t.internalEngine();"y"!==l&&(n=c.map((e=>e.height)),a.forEach((e=>t.on(e,r))),r())},destroy:function(){a.forEach((e=>t.off(e,r)));const e=t.containerNode();e.style.height="",e.getAttribute("style")||e.removeAttribute("style")}}}r.globalOptions=void 0;var c=n(7105),o=n(642);var s=e=>{const{slides:t,options:n}=e,[s,i]=(0,l.A)(n,[r()]),{selectedIndex:m,scrollSnaps:u,onDotButtonClick:d}=(0,o.R)(i),{prevBtnDisabled:h,nextBtnDisabled:p,onPrevButtonClick:g,onNextButtonClick:E}=(0,c.Hd)(i);return a.createElement("div",{className:"embla"},a.createElement("div",{className:"embla__viewport",ref:s},a.createElement("div",{className:"embla__container"},t.map((e=>a.createElement("div",{className:"embla__slide",key:e},a.createElement("div",{className:"embla__slide__number"},a.createElement("span",null,e+1))))))),a.createElement("div",{className:"embla__controls"},a.createElement("div",{className:"embla__buttons"},a.createElement(c.U1,{onClick:g,disabled:h}),a.createElement(c.WE,{onClick:E,disabled:p})),a.createElement("div",{className:"embla__dots"},u.map(((e,t)=>a.createElement(o.c,{key:t,onClick:()=>d(t),className:"embla__dot".concat(t===m?" embla__dot--selected":"")}))))))}},642:function(e,t,n){n.d(t,{R:function(){return l},c:function(){return r}});var a=n(4041);const l=(e,t)=>{const{0:n,1:l}=(0,a.useState)(0),{0:r,1:c}=(0,a.useState)([]),o=(0,a.useCallback)((n=>{e&&(e.scrollTo(n),t&&t(e))}),[e,t]),s=(0,a.useCallback)((e=>{c(e.scrollSnapList())}),[]),i=(0,a.useCallback)((e=>{l(e.selectedScrollSnap())}),[]);return(0,a.useEffect)((()=>{e&&(s(e),i(e),e.on("reInit",s).on("reInit",i).on("select",i))}),[e,s,i]),{selectedIndex:n,scrollSnaps:r,onDotButtonClick:o}},r=e=>{const{children:t,...n}=e;return a.createElement("button",Object.assign({type:"button"},n),t)}},8783:function(e,t,n){n.d(t,{O:function(){return l}});var a=n(4041);const l=e=>a.createElement(a.Fragment,e)}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-src-content-pages-plugins-auto-height-mdx-f83d13bbe5cdff942b9c.js.map