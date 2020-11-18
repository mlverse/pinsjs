(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(g,i(i({ref:t},s),{},{components:n})):a.a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/boards-gcloud-create-storage-752a482e30580675f66cd0f9c498d62b.png"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/boards-gcloud-storage-pin-0e11fe9f5efee68a48b6b57c28a17b82.png"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(104)),c={id:"google-cloud",title:"Using Google Cloud Boards",sidebar_label:"Google Cloud"},i={unversionedId:"boards/google-cloud",id:"boards/google-cloud",isDocsHomePage:!1,title:"Using Google Cloud Boards",description:"Registering",source:"@site/docs/boards/google-cloud.md",slug:"/boards/google-cloud",permalink:"/docs/boards/google-cloud",editUrl:"https://github.com/mlverse/pins/edit/master/website/docs/boards/google-cloud.md",version:"current",sidebar_label:"Google Cloud",sidebar:"docs",previous:{title:"Using GitHub Boards",permalink:"/docs/boards/github"},next:{title:"Using Kaggle Boards",permalink:"/docs/boards/kaggle"}},l=[{value:"Registering",id:"registering",children:[]},{value:"Pinning",id:"pinning",children:[]},{value:"Discovering",id:"discovering",children:[]}],s={rightToc:l};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"registering"},"Registering"),Object(o.b)("p",null,"In order to use Google Cloud Storage as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/"}),"board"),", you need a Google Cloud Storage account, a Google Storage bucket, and an access token or the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/"}),"Gogole Cloud SDK")," properly installed and configured. You can sign-up and create those from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com"}),"console.cloud.google.com"),":"),Object(o.b)("p",null,Object(o.b)("img",{src:n(160).default})),Object(o.b)("p",null,"You can then use the Google Cloud Storage bucket and implicitly the Google Cloud SDK (or an explicit token) to authenticate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-r"}),'board_register_gcloud(bucket = "pinscontainer")\n')),Object(o.b)("p",null,"It is recommend to install the Google Cloud SDK to avoid managing access tokens; however, you can also retrieve an Access Token from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/oauthplayground"}),"developers.google.com/oauthplayground"),'. This approach requires you to authorize the "Google Storage API v1" scope.'),Object(o.b)("p",null,"Notice that ",Object(o.b)("inlineCode",{parentName:"p"},"board_register_gcloud()")," is just an alias with named parameters to ",Object(o.b)("inlineCode",{parentName:"p"},"board_register()"),"; the previous code is equivalent to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-r"}),'board_register("gcloud", bucket = "pinscontainer")\n')),Object(o.b)("p",null,"Once the board is registered, you can pin and search using ",Object(o.b)("inlineCode",{parentName:"p"},"pin()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"pin_get()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"pin_find()"),"."),Object(o.b)("h2",{id:"pinning"},"Pinning"),Object(o.b)("p",null,"Like in other boards, you can create pins for ",Object(o.b)("inlineCode",{parentName:"p"},"iris")," and ",Object(o.b)("inlineCode",{parentName:"p"},"mtcars")," by setting ",Object(o.b)("inlineCode",{parentName:"p"},"board")," to Google Cloud Storage bucket name,"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-r"}),'pin(iris, description = "The iris data set", board = "gcloud")\npin(mtcars, description = "The motor trend cars data set", board = "gcloud")\n')),Object(o.b)("p",null,"After a pin is created, the pin also becomes available in the Google Cloud Storage; by default, they are created as private datasets."),Object(o.b)("p",null,Object(o.b)("img",{src:n(161).default})),Object(o.b)("p",null,"You can also retrieve pins back from this repo using the now familiar ",Object(o.b)("inlineCode",{parentName:"p"},"pin_get()")," function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-r"}),'pin_get("iris", board = "gcloud")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"# A tibble: 150 x 5\n   Sepal.Length Sepal.Width Petal.Length Petal.Width Species\n          <dbl>       <dbl>        <dbl>       <dbl> <fct>\n 1          5.1         3.5          1.4         0.2 setosa\n 2          4.9         3            1.4         0.2 setosa\n 3          4.7         3.2          1.3         0.2 setosa\n 4          4.6         3.1          1.5         0.2 setosa\n 5          5           3.6          1.4         0.2 setosa\n 6          5.4         3.9          1.7         0.4 setosa\n 7          4.6         3.4          1.4         0.3 setosa\n 8          5           3.4          1.5         0.2 setosa\n 9          4.4         2.9          1.4         0.2 setosa\n10          4.9         3.1          1.5         0.1 setosa\n# \u2026 with 140 more rows\n")),Object(o.b)("p",null,"Notice you can also retrieve an arbitrary file using the path to the file or its full URL as well:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-r"}),'pin_get("https://storage.googleapis.com/pinscontainer/iris/data.csv", board = "gcloud")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-r"}),'pin_get("iris/data.csv", board = "gcloud")\n')),Object(o.b)("h2",{id:"discovering"},"Discovering"),Object(o.b)("p",null,"You can then search pins in your Google Cloud board using ",Object(o.b)("inlineCode",{parentName:"p"},"pin_find()"),", which by default search all boards but you can also explicitly request to use this particular board:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-r"}),'pin_find("data", board = "gcloud")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"# A tibble: 2 x 4\n  name   description                   type  board\n  <chr>  <chr>                         <chr> <chr>\n1 iris   The iris data set             table gcloud\n2 mtcars The motor trend cars data set table gcloud\n")),Object(o.b)("p",null,"Notice that the given 'data' search keyword is searched in the name and description fields for the pins available in this repo."))}b.isMDXComponent=!0}}]);