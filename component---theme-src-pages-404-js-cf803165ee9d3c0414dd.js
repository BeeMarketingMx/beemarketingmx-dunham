(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(t,e,a){"use strict";a.r(e);var n=a(18),r=(a(0),a(194)),i=a(192);e.default=function(){return Object(n.b)(r.a,null,Object(n.b)(i.a,{title:"404: Not found"}),Object(n.b)("h1",null,"NOT FOUND"),Object(n.b)("p",null,"You just hit a route that doesn't exist... the sadness."))}},187:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(18),r=a(0),i=a.n(r),o=a(12),s=a.n(o),c=a(64),l=a.n(c);a.d(e,"a",function(){return l.a});a(188);var u=i.a.createContext({});function b(t){var e=t.staticQueryData,a=t.data,r=t.query,o=t.render,s=a?a.data:e[r]&&e[r].data;return Object(n.b)(i.a.Fragment,null,s&&o(s),!s&&Object(n.b)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,r=t.render,i=t.children;return Object(n.b)(u.Consumer,null,function(t){return Object(n.b)(b,{data:e,query:a,render:r||i,staticQueryData:t})})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},188:function(t,e,a){var n;t.exports=(n=a(191))&&n.default||n},190:function(t){t.exports={data:{site:{siteMetadata:{title:"Julia Doe"}}}}},191:function(t,e,a){"use strict";a.r(e);a(19);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),s=a(90),c=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},192:function(t,e,a){"use strict";var n=a(18),r=a(193),i=(a(0),a(12)),o=a.n(i),s=a(195),c=a.n(s);function l(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,s=t.title,l=r.data.site,u=e||l.siteMetadata.description;return Object(n.b)(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},193:function(t){t.exports={data:{site:{siteMetadata:{title:"Julia Doe",description:"A minimal blog theme built with Gatsbyjs. The needed Gatsby files are included.",author:"@niklasmtj"}}}}},194:function(t,e,a){"use strict";var n=a(189),r=a(18),i=a(190),o=a(0),s=a.n(o),c=a(12),l=a.n(c),u=a(187),b=Object(n.a)("div",{target:"e1pfgg2j0"})({name:"k1grrt",styles:"max-width:860px;padding:1rem 1.0875rem;font-size:1.2rem;"}),d=Object(n.a)(u.a,{target:"e1pfgg2j1"})({name:"1wj6arw",styles:'color:black;margin-left:15px;text-decoration:none;display:inline-block;position:relative;::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:rgba(0,0,0,0.8);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}'}),p=Object(n.a)("a",{target:"e1pfgg2j2"})({name:"1wj6arw",styles:'color:black;margin-left:15px;text-decoration:none;display:inline-block;position:relative;::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:rgba(0,0,0,0.8);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}'}),g=Object(n.a)(d,{target:"e1pfgg2j3"})({name:"qbubgm",styles:"margin-left:0;"}),m=Object(n.a)("header",{target:"e1pfgg2j4"})({name:"1pyi7sa",styles:"background:transparent;display:flex;align-content:center;justify-content:center;"}),f=function(t){var e=t.siteTitle;return Object(r.b)(m,null,Object(r.b)(b,null,Object(r.b)("p",null,Object(r.b)(g,{to:"/"},e),Object(r.b)(d,{to:"/blog"},"Blog"),Object(r.b)(p,{href:"https://github.com/niklasmtj/gatsby-theme-julia/tree/master/theme"},"GitHub"))))};f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var j=f,y=(a(182),Object(n.a)("div",{target:"eui2ml0"})({name:"1813l62",styles:"margin:0 auto;max-width:860px;padding:0 1.0875rem 1rem;padding-top:0;"})),h=Object(n.a)("a",{target:"eui2ml1"})({name:"o5uqvq",styles:"margin-left:5px;"}),O=Object(n.a)("footer",{target:"eui2ml2"})({name:"1l4w6pd",styles:"display:flex;justify-content:center;"}),w=function(t){var e=t.children;return Object(r.b)(u.b,{query:"755544856",render:function(t){return Object(r.b)(s.a.Fragment,null,Object(r.b)(j,{siteTitle:t.site.siteMetadata.title}),Object(r.b)(y,null,Object(r.b)("main",null,e),Object(r.b)(O,null,"© ",(new Date).getFullYear(),", Built with"," ",Object(r.b)(h,{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})};w.propTypes={children:l.a.node.isRequired};e.a=w}}]);
//# sourceMappingURL=component---theme-src-pages-404-js-cf803165ee9d3c0414dd.js.map