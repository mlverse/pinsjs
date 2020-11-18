(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},194:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/thumb-7dc9d1e0933f5c722b9461f52f1b9195.jpg"},195:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/digitalocean-spaces-pins-versioned-f4d6fe56991637d5ab0d9df48dc5b695.png"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(104)),o={slug:"pins-0-4-0",title:"pins 0.4: Versioning",description:"A new release of pins is available on CRAN today. This release adds support to time travel across dataset versions, which improves collaboration and protects your code from breaking when remote resources change unexpectedly.",author:"Javier Luraschi",author_title:"Software Engineer @ RStudio",author_url:"https://github.com/javierluraschi",author_image_url:"https://avatars0.githubusercontent.com/u/3478847?s=460&v=4",tags:["release","announcement"],image:"/images/blog/2020-05-29/thumb.jpg"},s={permalink:"/blog/pins-0-4-0",editUrl:"https://github.com/mlverse/pins/edit/master/website/blog/blog/2020-05-29-pins-0-4-0.md",source:"@site/blog/2020-05-29-pins-0-4-0.md",description:"A new release of pins is available on CRAN today. This release adds support to time travel across dataset versions, which improves collaboration and protects your code from breaking when remote resources change unexpectedly.",date:"2020-05-29T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],title:"pins 0.4: Versioning",readingTime:4.415,truncated:!0,nextItem:{title:"pins 0.3: Azure, GCloud and S3",permalink:"/blog/pins-0-3-0"}},c=[],l={rightToc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A new release of pins is available on CRAN today. This release adds support to time travel across dataset versions, which improves collaboration and protects your code from breaking when remote resources change unexpectedly."),Object(i.b)("p",null,Object(i.b)("img",{src:a(194).default})),Object(i.b)("p",null,"A new version of ",Object(i.b)("inlineCode",{parentName:"p"},"pins")," is available on CRAN today, which adds support for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/advanced-versions.html"}),"versioning")," your datasets and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-dospace.html"}),"DigitalOcean Spaces")," boards!"),Object(i.b)("p",null,"As a quick recap, the pins package allows you to cache, discover and share resources. You can use ",Object(i.b)("inlineCode",{parentName:"p"},"pins")," in a wide range of situations, from downloading a dataset from a URL to creating complex automation workflows (learn more at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pins.rstudio.com"}),"pins.rstudio.com"),"). You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"pins")," in combination with TensorFlow and Keras; for instance, use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tensorflow.rstudio.com/tools/cloudml"}),"cloudml")," to train models in cloud GPUs, but rather than manually copying files into the GPU instance, you can store them as pins directly from R."),Object(i.b)("p",null,"To install this new version of ",Object(i.b)("inlineCode",{parentName:"p"},"pins")," from CRAN, simply run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'install.packages("pins")\n')),Object(i.b)("p",null,"You can find a detailed list of improvements in the pins ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rstudio/pins/blob/master/NEWS.md"}),"NEWS")," file."),Object(i.b)("h1",{id:"versioning"},"Versioning"),Object(i.b)("p",null,"To illustrate the new versioning functionality, let's start by downloading and caching a remote dataset with pins. For this example, we will download the weather in London, this happens to be in JSON format and requires ",Object(i.b)("inlineCode",{parentName:"p"},"jsonlite")," to be parsed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'library(pins)\n\nweather_url <- "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"\n\npin(weather_url, "weather") %>%\n  jsonlite::read_json() %>%\n  as.data.frame()\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"  coord.lon coord.lat weather.id weather.main     weather.description weather.icon\n1     -0.13     51.51        300      Drizzle light intensity drizzle          09d\n")),Object(i.b)("p",null,"One advantage of using ",Object(i.b)("inlineCode",{parentName:"p"},"pins")," is that, even if the URL or your internet connection becomes unavailable, the above code will still work."),Object(i.b)("p",null,"But back to ",Object(i.b)("inlineCode",{parentName:"p"},"pins 0.4"),"! The new ",Object(i.b)("inlineCode",{parentName:"p"},"signature")," parameter in ",Object(i.b)("inlineCode",{parentName:"p"},"pin_info()"),' allows you to retrieve the "version" of this dataset:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'pin_info("weather", signature = TRUE)\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"# Source: local<weather> [files]\n# Signature: 624cca260666c6f090b93c37fd76878e3a12a79b\n# Properties:\n#   - path: weather\n")),Object(i.b)("p",null,"You can then validate the remote dataset has not changed by specifying its signature:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'pin(weather_url, "weather", signature = "624cca260666c6f090b93c37fd76878e3a12a79b") %>%\n  jsonlite::read_json()\n')),Object(i.b)("p",null,"If the remote dataset changes, ",Object(i.b)("inlineCode",{parentName:"p"},"pin()")," will fail and you can take the appropriate steps to accept the changes by updating the signature or properly updating your code. The previous example is useful as a way of detecting version changes, but we might also want to retrieve specific versions even when the dataset changes."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pins 0.4")," allows you to display and retrieve versions from services like GitHub, Kaggle and RStudio Connect. Even in boards that don't support versioning natively, you can opt-in by registering a board with ",Object(i.b)("inlineCode",{parentName:"p"},"versions = TRUE"),"."),Object(i.b)("p",null,"To keep this simple, let's focus on GitHub first. We will register a GitHub board and pin a dataset to it. Notice that you can also specify the ",Object(i.b)("inlineCode",{parentName:"p"},"commit")," parameter in GitHub boards as the commit message for this change."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'board_register_github(repo = "javierluraschi/datasets", branch = "datasets")\n\npin(iris, name = "versioned", board = "github", commit = "use iris as the main dataset")\n')),Object(i.b)("p",null,"Now suppose that a colleague comes along and updates this dataset as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'pin(mtcars, name = "versioned", board = "github", commit = "slight preference to mtcars")\n')),Object(i.b)("p",null,"From now on, your code could be broken or, even worse, produce incorrect results!"),Object(i.b)("p",null,"However, since GitHub was designed as a version control system and ",Object(i.b)("inlineCode",{parentName:"p"},"pins 0.4")," adds support for ",Object(i.b)("inlineCode",{parentName:"p"},"pin_versions()"),", we can now explore particular versions of this dataset:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'pin_versions("versioned", board = "github")\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"# A tibble: 2 x 4\n  version created              author         message\n  <chr>   <chr>                <chr>          <chr>\n1 6e6c320 2020-04-02T21:28:07Z javierluraschi slight preference to mtcars\n2 01f8ddf 2020-04-02T21:27:59Z javierluraschi use iris as the main dataset\n")),Object(i.b)("p",null,"You can then retrieve the version you are interested in as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'pin_get("versioned", version = "01f8ddf", board = "github")\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"# A tibble: 150 x 5\n   Sepal.Length Sepal.Width Petal.Length Petal.Width Species\n          <dbl>       <dbl>        <dbl>       <dbl> <fct>\n 1          5.1         3.5          1.4         0.2 setosa\n 2          4.9         3            1.4         0.2 setosa\n 3          4.7         3.2          1.3         0.2 setosa\n 4          4.6         3.1          1.5         0.2 setosa\n 5          5           3.6          1.4         0.2 setosa\n 6          5.4         3.9          1.7         0.4 setosa\n 7          4.6         3.4          1.4         0.3 setosa\n 8          5           3.4          1.5         0.2 setosa\n 9          4.4         2.9          1.4         0.2 setosa\n10          4.9         3.1          1.5         0.1 setosa\n# \u2026 with 140 more rows\n")),Object(i.b)("p",null,"You can follow similar steps for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-rsconnect.html"}),"RStudio Connect")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-kaggle.html"}),"Kaggle")," boards, even for existing pins! Other boards like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-s3.html"}),"Amazon S3"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-gcloud.html"}),"Google Cloud"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-dospace.html"}),"Digital Ocean")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-azure.html"}),"Microsoft Azure")," require you explicitly enable versioning when registering your boards."),Object(i.b)("h1",{id:"digitalocean"},"DigitalOcean"),Object(i.b)("p",null,"To try out the new ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-dospace.html"}),"DigitalOcean Spaces board"),", first you will have to register this board and enable versioning by setting ",Object(i.b)("inlineCode",{parentName:"p"},"versions")," to ",Object(i.b)("inlineCode",{parentName:"p"},"TRUE"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'library(pins)\nboard_register_dospace(space = "pinstest",\n                       key = "AAAAAAAAAAAAAAAAAAAA",\n                       secret = "ABCABCABCABCABCABCABCABCABCABCABCABCABCA==",\n                       datacenter = "sfo2",\n                       versions = TRUE)\n')),Object(i.b)("p",null,"You can then use all the functionality pins provides, including versioning:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'# create pin and replace content in digitalocean\npin(iris, name = "versioned", board = "pinstest")\npin(mtcars, name = "versioned", board = "pinstest")\n\n# retrieve versions from digitalocean\npin_versions(name = "versioned", board = "pinstest")\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"# A tibble: 2 x 1\n  version\n  <chr>\n1 c35da04\n2 d9034cd\n")),Object(i.b)("p",null,"Notice that enabling versions in cloud services requires additional storage space for each version of the dataset being stored:"),Object(i.b)("p",null,Object(i.b)("img",{src:a(195).default})),Object(i.b)("p",null,"To learn more visit the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/advanced-versions.html"}),"Versioning")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://pins.rstudio.com/articles/boards-dospace.html"}),"DigitalOcean")," articles. To catch up with previous releases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://pins.rstudio.com/blog/posts/pins-0-3-0/"}),"pins 0.3"),": Azure, GCloud and S3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://blog.rstudio.com/2019/09/09/pin-discover-and-share-resources/"}),"pins 0.2"),": Pin, Discover and Share Resources")),Object(i.b)("p",null,"Thanks for reading along!"))}p.isMDXComponent=!0}}]);