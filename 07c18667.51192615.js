(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),l=p(n),u=a,m=l["".concat(s,".").concat(u)]||l[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var b=2;b<i;b++)s[b]=n[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/boards-s3-create-storage-fcca92b7566c21ce98eb2f9944d70c24.png"},151:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/boards-s3-storage-pin-6515594667b2e9cb848911fde5714f45.png"},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(104)),s={id:"s3",title:"Using S3 Boards",sidebar_label:"S3"},c={unversionedId:"boards/s3",id:"boards/s3",isDocsHomePage:!1,title:"Using S3 Boards",description:"Registering",source:"@site/docs/boards/s3.md",slug:"/boards/s3",permalink:"/pins/docs/boards/s3",editUrl:"https://github.com/mlverse/pins/edit/master/website/docs/boards/s3.md",version:"current",sidebar_label:"S3",sidebar:"docs",previous:{title:"Using RStudio Connect Boards",permalink:"/pins/docs/boards/rsconnect"},next:{title:"Using Website Boards",permalink:"/pins/docs/boards/website"}},o=[{value:"Registering",id:"registering",children:[]},{value:"Pinning",id:"pinning",children:[]},{value:"Discovering",id:"discovering",children:[]}],b={rightToc:o};function p(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"registering"},"Registering"),Object(i.b)("p",null,"In order to use Amazon S3 Storage as a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/"}),"board"),", you need an Amazon S3 bucket and a user key enabled for programmatic access container created with enough permissions to access the S3 bucket. You can sign-up and create those from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/"}),"amazonaws.com"),". Please notice that after crating a bucket, it can take several minutes for this bucket to be usable."),Object(i.b)("p",null,Object(i.b)("img",{src:n(150).default})),Object(i.b)("p",null,"You can then use the S3 Storage bucket, key, and secret to authenticate:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'board_register_s3(bucket = "pinsbucket",\n                  key = "AAAAAAAAAAAAAAAAAAAA",\n                  secret = "ABCABCABCABCABCABCABCABCABCABCABCABCABCA==")\n')),Object(i.b)("p",null,"Notice that ",Object(i.b)("inlineCode",{parentName:"p"},"board_register_s3()")," is just an alias with named parameters to ",Object(i.b)("inlineCode",{parentName:"p"},"board_register()"),"; the previous code is equivalent to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'board_register("s3", bucket = "pinsbucket",\n                     key = "AAAAAAAAAAAAAAAAAAAA",\n                     secret = "ABCABCABCABCABCABCABCABCABCABCABCABCABCA==")\n')),Object(i.b)("p",null,"Once the board is registered, you can pin and search using ",Object(i.b)("inlineCode",{parentName:"p"},"pin()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pin_get()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pin_find()"),"."),Object(i.b)("h2",{id:"pinning"},"Pinning"),Object(i.b)("p",null,"Like in other boards, you can create pins for ",Object(i.b)("inlineCode",{parentName:"p"},"iris")," and ",Object(i.b)("inlineCode",{parentName:"p"},"mtcars")," by setting ",Object(i.b)("inlineCode",{parentName:"p"},"board")," to Amazon S3 Bucket's name,"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'pin(iris, description = "The iris data set", board = "s3")\npin(mtcars, description = "The motor trend cars data set", board = "s3")\n')),Object(i.b)("p",null,"After a pin is created, the pin also becomes available in the Amazon S3 Bucket; by default, they are created as private datasets."),Object(i.b)("p",null,Object(i.b)("img",{src:n(151).default})),Object(i.b)("p",null,"You can also retrieve pins back from this repo using the now familiar ",Object(i.b)("inlineCode",{parentName:"p"},"pin_get()")," function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'pin_get("iris", board = "s3")\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# A tibble: 150 x 5\n   Sepal.Length Sepal.Width Petal.Length Petal.Width Species\n          <dbl>       <dbl>        <dbl>       <dbl> <fct>\n 1          5.1         3.5          1.4         0.2 setosa\n 2          4.9         3            1.4         0.2 setosa\n 3          4.7         3.2          1.3         0.2 setosa\n 4          4.6         3.1          1.5         0.2 setosa\n 5          5           3.6          1.4         0.2 setosa\n 6          5.4         3.9          1.7         0.4 setosa\n 7          4.6         3.4          1.4         0.3 setosa\n 8          5           3.4          1.5         0.2 setosa\n 9          4.4         2.9          1.4         0.2 setosa\n10          4.9         3.1          1.5         0.1 setosa\n# \u2026 with 140 more rows\n")),Object(i.b)("p",null,"Notice you can also retrieve an arbitrary file using the path to the file or its URL as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'pin_get("https://pinsbucket.region.amazonaws.com/iris/data.csv", board = "s3")\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'pin_get("iris/data.csv", board = "s3")\n')),Object(i.b)("h2",{id:"discovering"},"Discovering"),Object(i.b)("p",null,"You can then search pins in your S3 board using ",Object(i.b)("inlineCode",{parentName:"p"},"pin_find()"),", which by default search all boards but you can also explicitly request to use this particular board:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'pin_find("data", board = "s3")\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# A tibble: 2 x 4\n  name   description                   type  board\n  <chr>  <chr>                         <chr> <chr>\n1 iris   The iris data set             table s3\n2 mtcars The motor trend cars data set table s3\n")),Object(i.b)("p",null,"Notice that the given 'data' search keyword is searched in the name and description fields for the pins available in this repo."))}p.isMDXComponent=!0}}]);