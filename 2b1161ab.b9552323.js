(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rstudio-connect-board-3f514fef5295af018b1584285cfa42f6.png"},154:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rstudio-explore-pins-4c7524b2c2e4807af80cae804aad909b.png"},155:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rstudio-discover-pins-f11a776f2e9cfa1e64a2e66efdadc0bf.png"},156:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rstudio-share-resources-0bd35772142316ac3b01d11fa8bdb966.png"},157:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rstudio-reuse-pin-ggplot2-86258d67d8783821e34008c794b2f354.png"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(104)),i={slug:"pins-0-2-0",title:"pins: Pin, Discover and Share Resources",description:"The new pins package allows you to pin, discover and share remote resources, locally or in remote storage using services like GitHub, Kaggle or RStudio Connect.",author:"Javier Luraschi",author_title:"Software Engineer @ RStudio",author_url:"https://github.com/javierluraschi",author_image_url:"https://avatars0.githubusercontent.com/u/3478847?s=460&v=4",tags:["release","announcement"]},s={permalink:"/pins/blog/pins-0-2-0",editUrl:"https://github.com/mlverse/pins/edit/master/website/blog/blog/2019-09-09-pins-0-2-0.md",source:"@site/blog/2019-09-09-pins-0-2-0.md",description:"The new pins package allows you to pin, discover and share remote resources, locally or in remote storage using services like GitHub, Kaggle or RStudio Connect.",date:"2019-09-09T00:00:00.000Z",tags:[{label:"release",permalink:"/pins/blog/tags/release"},{label:"announcement",permalink:"/pins/blog/tags/announcement"}],title:"pins: Pin, Discover and Share Resources",readingTime:5.695,truncated:!0,prevItem:{title:"pins 0.3: Azure, GCloud and S3",permalink:"/pins/blog/pins-0-3-0"}},c=[{value:"Pins",id:"pins",children:[]},{value:"RStudio",id:"rstudio",children:[]}],l={rightToc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The new pins package allows you to pin, discover and share remote resources, locally or in remote storage using services like GitHub, Kaggle or RStudio Connect."),Object(o.b)("p",null,"Today we are excited to announce the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rstudio/pins"}),"pins")," package is available on CRAN! ",Object(o.b)("inlineCode",{parentName:"p"},"pins")," allows you to ",Object(o.b)("strong",{parentName:"p"},"pin"),", ",Object(o.b)("strong",{parentName:"p"},"discover")," and ",Object(o.b)("strong",{parentName:"p"},"share")," remote ",Object(o.b)("strong",{parentName:"p"},"resources"),", locally or in remote storage."),Object(o.b)("p",null,"If you find yourself using ",Object(o.b)("inlineCode",{parentName:"p"},"download.file()")," or asking others to download files before running your R code, use ",Object(o.b)("inlineCode",{parentName:"p"},"pin()")," to achieve fast, simple and reliable reproducible research over remote resources."),Object(o.b)("h2",{id:"pins"},"Pins"),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"pins")," package to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Pin")," remote resources locally to work offline and cache results with ease, ",Object(o.b)("inlineCode",{parentName:"li"},"pin()")," stores resources in boards which you can then retrieve with ",Object(o.b)("inlineCode",{parentName:"li"},"pin_get()"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Discover")," new resources across different boards using ",Object(o.b)("inlineCode",{parentName:"li"},"pin_find()"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Share")," resources on GitHub, Kaggle or RStudio Connect by registering new boards with ",Object(o.b)("inlineCode",{parentName:"li"},"board_register()"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Resources")," can be anything from CSV, JSON, or image files to arbitrary R objects.")),Object(o.b)("p",null,"You can install ",Object(o.b)("inlineCode",{parentName:"p"},"pins")," from CRAN with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'install.packages("pins")\n')),Object(o.b)("p",null,"You can ",Object(o.b)("strong",{parentName:"p"},"pin")," remote files with ",Object(o.b)("inlineCode",{parentName:"p"},"pin(url)"),". ",Object(o.b)("inlineCode",{parentName:"p"},"pin(url)")," downloads and caches the remote ",Object(o.b)("inlineCode",{parentName:"p"},"url"),", returning the path to the locally cached file. This gives you the ability to work offline (or continue working even if the remote resource disappears) with minimal changes to your existing code. When called again in the future, ",Object(o.b)("inlineCode",{parentName:"p"},"pin()")," will automatically check for changes, and only re-download the file if needed."),Object(o.b)("p",null,"For instance, the following example makes use of a remote CSV file, which you can download and cache with ",Object(o.b)("inlineCode",{parentName:"p"},"pin()")," before it's loaded with ",Object(o.b)("inlineCode",{parentName:"p"},"read_csv()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'library(tidyverse)\nlibrary(pins)\n\nurl <- "https://raw.githubusercontent.com/facebook/prophet/master/examples/example_retail_sales.csv"\nretail_sales <- read_csv(pin(url))\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"# A tibble: 293 x 2\n   ds              y\n   <date>      <dbl>\n 1 1992-01-01 146376\n 2 1992-02-01 147079\n 3 1992-03-01 159336\n 4 1992-04-01 163669\n 5 1992-05-01 170068\n 6 1992-06-01 168663\n 7 1992-07-01 169890\n 8 1992-08-01 170364\n 9 1992-09-01 164617\n10 1992-10-01 173655\n# \u2026 with 283 more rows\n")),Object(o.b)("p",null,"This makes reading subsequent remotes files orders of magnitude faster, files are only downloaded when the remote resource changes."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"pins")," package allows you to ",Object(o.b)("strong",{parentName:"p"},"discover")," remote resources using ",Object(o.b)("inlineCode",{parentName:"p"},"pin_find()"),', currently, it can search resources in CRAN packages, Kaggle and RStudio Connect. For instance, we can search resources mentioning "seattle" in CRAN packages as follows:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'pin_find("seattle", board = "packages")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"# A tibble: 6 x 4\n  name                description                                        type  board\n  <chr>               <chr>                                              <chr> <chr>\n1 hpiR/ex_sales       Subset of Seattle Home Sales from hpiR package.    table packa\u2026\n2 hpiR/seattle_sales  Seattle Home Sales from hpiR package.              table packa\u2026\n3 latticeExtra/Seata\u2026 Daily Rainfall and Temperature at the Seattle-Tac\u2026 table packa\u2026\n4 microsynth/seattle\u2026 Data for a crime intervention in Seattle, Washing\u2026 table packa\u2026\n5 vegawidget/data_se\u2026 Example dataset: Seattle daily weather from vegaw\u2026 table packa\u2026\n6 vegawidget/data_se\u2026 Example dataset: Seattle hourly temperatures from\u2026 table packa\u2026\n")),Object(o.b)("p",null,"Notice that all pins are referenced as ",Object(o.b)("inlineCode",{parentName:"p"},"<owner>/<name>")," and even if the ",Object(o.b)("inlineCode",{parentName:"p"},"<owner>")," is not provided, each board will assign an appropriate one. While you can ignore ",Object(o.b)("inlineCode",{parentName:"p"},"<owner>")," and reference pins by ",Object(o.b)("inlineCode",{parentName:"p"},"<name>"),", this can fail in some boards if different owners assign the same name to a pin."),Object(o.b)("p",null,"You can then retrieve a pin as a local path through ",Object(o.b)("inlineCode",{parentName:"p"},"pin_get()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'pin_get("hpiR/seattle_sales")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"# A tibble: 43,313 x 16\n   pinx  sale_id sale_price sale_date  use_type  area lot_sf  wfnt bldg_grade tot_sf\n   <chr> <chr>        <int> <date>     <chr>    <int>  <int> <dbl>      <int>  <int>\n 1 ..00\u2026 2013..\u2026     289000 2013-02-06 sfr         79   9295     0          7   2560\n 2 ..00\u2026 2013..\u2026     356000 2013-07-11 sfr         18   6000     0          6   1540\n 3 ..00\u2026 2010..\u2026     333500 2010-12-29 sfr         79   7200     0          8   2380\n 4 ..00\u2026 2016..\u2026     577200 2016-03-17 sfr         79   7200     0          8   2380\n 5 ..00\u2026 2012..\u2026     237000 2012-05-02 sfr         79   5662     0          7   1370\n 6 ..00\u2026 2014..\u2026     347500 2014-03-11 sfr         79   5830     0          7    880\n 7 ..00\u2026 2012..\u2026     429000 2012-09-20 sfr         18  12700     0          7   1640\n 8 ..00\u2026 2015..\u2026     653295 2015-07-21 sfr         79   7000     0          7   1990\n 9 ..00\u2026 2014..\u2026     427650 2014-02-19 townhou\u2026    79   3072     0          7   1980\n10 ..00\u2026 2015..\u2026     488737 2015-03-19 townhou\u2026    79   3072     0          7   1980\n# \u2026 with 43,303 more rows, and 6 more variables: beds <int>, baths <dbl>,\n#   age <int>, eff_age <int>, longitude <dbl>, latitude <dbl>\n")),Object(o.b)("p",null,"Finally, you can also ",Object(o.b)("strong",{parentName:"p"},"share")," resources with other R sessions and other users by publishing to a local folder, Kaggle, GitHub and RStudio Connect."),Object(o.b)("p",null,"To publish resources in Kaggle, you would first need to register the Kaggle board by creating a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kaggle.com/me/account"}),"Kaggle API Token"),", and then publishing to Kaggle by storing a pin in the 'kaggle' board:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'board_register_kaggle(token = "<path-to-kaggle.json>")\n\npin_get("hpiR/seattle_sales") %>%\n  pin(name = "seattle_sales", board = "kaggle")\n')),Object(o.b)("p",null,"There are other boards you can use or even create custom boards as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://rstudio.github.io/pins/articles/boards-understanding.html"}),"Understanding Boards")," article; in addition, ",Object(o.b)("inlineCode",{parentName:"p"},"pins")," can also be used with RStudio products which we will describe next."),Object(o.b)("h2",{id:"rstudio"},"RStudio"),Object(o.b)("p",null,"You can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rstudio.com/products/rstudio/"}),"RStudio")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rstudio.com/products/connect/"}),"RStudio Connect")," to discover and share content within your organization with ease."),Object(o.b)("p",null,"To enable new boards, like Kaggle and RStudio Connect, you can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.rstudio.com/2017/08/16/rstudio-preview-connections/"}),"RStudio's Data Connections")," to create a new 'pins' connection, which provides you access to many boards:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(153).default})),Object(o.b)("p",null,"Once connected, you can use the connections pane to track the pins you own and preview them with ease. Notice that one connection is created for each board."),Object(o.b)("p",null,Object(o.b)("img",{src:n(154).default})),Object(o.b)("p",null,"To ",Object(o.b)("strong",{parentName:"p"},"discover"),' remote resources, simply expand the "Addins" menu and select "Find Pin" from the dropdown. This addin allows you to search for pins across all boards, or scope your search to particular ones as well:'),Object(o.b)("p",null,Object(o.b)("img",{src:n(155).default})),Object(o.b)("p",null,"You can then ",Object(o.b)("strong",{parentName:"p"},"share")," local resources using the RStudio Connect board. Lets use ",Object(o.b)("inlineCode",{parentName:"p"},"dplyr")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"hpiR_seattle_sales")," pin to analyze this further and then pin our results in RStudio Connect."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),'board_register_rsconnect()\n\npin_get("hpiR/seattle_sales") %>%\n  group_by(baths = ceiling(baths)) %>%\n  summarise(sale = floor(mean(sale_price))) %>%\n  pin("sales-by-baths", board = "rsconnect")\n')),Object(o.b)("p",null,"After a pin is published, you can then browse to the pin's content from the RStudio Connect web interface."),Object(o.b)("p",null,Object(o.b)("img",{src:n(156).default})),Object(o.b)("p",null,"You can now set the appropriate permissions in RStudio Connect, and voila! From now on, those with access can make use of this remote pin locally!"),Object(o.b)("p",null,"For instance, a colleague can reuse the ",Object(o.b)("inlineCode",{parentName:"p"},"sales-by-baths")," pin by retrieving it from RStudio Connect and visualize its contents using ",Object(o.b)("inlineCode",{parentName:"p"},"ggplot2"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-r"}),"library(pins)\nboard_register_rsconnect()\n\npin_get(\"sales-by-baths\") %>%\n  ggplot(aes(x = baths, y = sale)) +\n    geom_point() + geom_smooth(method = 'lm', formula = y ~ exp(x))\n")),Object(o.b)("p",null,Object(o.b)("img",{src:n(157).default}),"{height=280px}"),Object(o.b)("p",null,"Pins can also be automated using scheduled R Markdown. This makes it much easier to create Shiny applications that rely on scheduled data updates or to share prepared resources across multiple pieces of content. You no longer have to fuss with file paths on RStudio Connect, mysterious resource URLs, or redeploying application code just to update a dataset!"),Object(o.b)("p",null,"Experimental support for ",Object(o.b)("inlineCode",{parentName:"p"},"pins")," will be introduced in an upcoming release, stay tuned for RStudio Connect 1.7.8!"),Object(o.b)("p",null,"Please also make sure to ",Object(o.b)("del",{parentName:"p"},"pin")," visit, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://rstudio.github.io/pins"}),"rstudio.github.io/pins"),", where you can find detailed documentation and additional resources. Thanks!"))}p.isMDXComponent=!0}}]);