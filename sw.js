"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"OY"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"8091a375d563bb0062f475a28c9ccc19",url:"./404.html"},{revision:"19780e2a02b0380bdab9a90ed4b7f08f",url:"./about/index.html"},{revision:"b3b0c3ab6974a20d34804392cbbc9e79",url:"./archives/2020/07/index.html"},{revision:"eee5a71ab083043aeac400f3fdf14888",url:"./archives/2020/07/page/2/index.html"},{revision:"50ef42cb9c66d669db01e6c8f0747d46",url:"./archives/2020/07/page/3/index.html"},{revision:"b0cc34186224cb30ca16abd985a0822f",url:"./archives/2020/07/page/4/index.html"},{revision:"2d3a481fedcce19701cc358d3684134e",url:"./archives/2020/08/index.html"},{revision:"b0859c38cad05a39ab311c6f57dede1d",url:"./archives/2020/09/index.html"},{revision:"cb1c7b10f934c87c81e10dd9cfca5fdf",url:"./archives/2020/10/index.html"},{revision:"222e91cb3b75ca0abfad34508add5a65",url:"./archives/2020/10/page/2/index.html"},{revision:"d957b19fdfd1aaadb2e434a618c8d101",url:"./archives/2020/11/index.html"},{revision:"c115926ff8c847d94473c3c608fcb85a",url:"./archives/2020/12/index.html"},{revision:"0809906e2ebf63d5aace7bd3c9cf28bb",url:"./archives/2020/index.html"},{revision:"d7856a15895bd70ce2cff6eb025e7dc4",url:"./archives/2020/page/2/index.html"},{revision:"e3bc172a5d73f6bc82132735e723f047",url:"./archives/2020/page/3/index.html"},{revision:"0b2b164413f5236d280034a7f8ac59e0",url:"./archives/2020/page/4/index.html"},{revision:"d19c6326c7db346c40920a405826f17d",url:"./archives/2020/page/5/index.html"},{revision:"c0198513905bf539f8e8ced9c4c1b96c",url:"./archives/2020/page/6/index.html"},{revision:"8a784c6489579a3d153d0577f3577d7b",url:"./archives/2020/page/7/index.html"},{revision:"527562fff099c11e4dd934be81bfbca9",url:"./archives/2021/01/index.html"},{revision:"dedf345bcd2c03b98a10a1647866c35b",url:"./archives/2021/index.html"},{revision:"6147b0efb38751624c98352e09363b37",url:"./archives/index.html"},{revision:"8a882549271cb7d88c5ec67a67af13d9",url:"./archives/page/2/index.html"},{revision:"82c9e35ab48f2c8b54a74d66fe80ce7c",url:"./archives/page/3/index.html"},{revision:"371bcaf36a7b9a79502d042282ef6552",url:"./archives/page/4/index.html"},{revision:"4f2bbe41912694e7beef047ff015e668",url:"./archives/page/5/index.html"},{revision:"be25909217b3121418ee367b49226c25",url:"./archives/page/6/index.html"},{revision:"2e7656b46a5abbe36897ca88ac17a129",url:"./archives/page/7/index.html"},{revision:"0d2da1cc19399666845b8b0100f1e0c8",url:"./archives/page/8/index.html"},{revision:"f08fe6a3357290181731955b07e392bf",url:"./bangumis/index.html"},{revision:"1d2c91dd35b742c6cef0a43ffa9efa64",url:"./bb/index.html"},{revision:"56ee26dca1d3954e0a40437b90182b39",url:"./calendar.json"},{revision:"198418b5120eab3e7103cbf6cc87c3a5",url:"./categories/ASP/index.html"},{revision:"db804b98469c7c8b60a4132c0d05c6f5",url:"./categories/CentOS/index.html"},{revision:"7e0789101f9de38132f4ab3b3ad6e98a",url:"./categories/GitHub/index.html"},{revision:"78d1b04eb87466ee3286414cfeb7fe49",url:"./categories/Git工具/index.html"},{revision:"46a349ed4aa094f8231a1d2b384f1453",url:"./categories/index.html"},{revision:"5ecabff05a8128fcbb2446ff12413e6d",url:"./categories/Java/index.html"},{revision:"f2a7e1219579f31804cb983c636eab45",url:"./categories/JavaEE框架/index.html"},{revision:"ac7fa8282511b86d9625bb4be4b0f017",url:"./categories/JavaEE框架/page/2/index.html"},{revision:"8cd8241f9a335bbd1a3075e6ea4502ee",url:"./categories/JavaEE框架/page/3/index.html"},{revision:"526de31d411efa1c227fb8c8eecd5dc7",url:"./categories/JavaEE框架/page/4/index.html"},{revision:"34ee4b043896b8df1e5028a354e5d651",url:"./categories/JavaScript/index.html"},{revision:"e23c4d8f488684c21897fa591c7d4c97",url:"./categories/java基础/index.html"},{revision:"e76830f1e6568c8b1bc7f51de4cec22a",url:"./categories/Java算法/index.html"},{revision:"cea3cb09949a8a2fe2e2565a9b834f65",url:"./categories/Java设计模式/index.html"},{revision:"489185a8bb2fa05d89646c053222c849",url:"./categories/JDBC/index.html"},{revision:"557d0530fb0b753d1ff079721312319a",url:"./categories/Linux/index.html"},{revision:"03d6a70ca2bf45a9bece8a382ab9f7f3",url:"./categories/Linux语言/index.html"},{revision:"26f661b0621dc38ad11793274122e9b9",url:"./categories/MySQL/index.html"},{revision:"62a42be9c7d62157b301bb2dc2782c81",url:"./categories/Redis/index.html"},{revision:"813c6b056fc1dd359e03d02a87c2b70c",url:"./categories/Web前端/index.html"},{revision:"7b4351324571e910c8a3cffcb9e16bad",url:"./categories/工具/index.html"},{revision:"b6cc0c7e094e860a7364cb49772df32b",url:"./categories/数据库/index.html"},{revision:"37adb818024baec1e44e331810bcd0e0",url:"./categories/项目实战/index.html"},{revision:"b8e255236f92b772bebaa1d86c06e0d2",url:"./css/aplayer.css"},{revision:"e1fbeb84b889055ca44f8cfbe96111b7",url:"./css/APlayer.min.css"},{revision:"d72e65a73937fd5f98a5a1f879cb6aa1",url:"./css/index.css"},{revision:"d0df1c126b9556b83ce4462e198f1f87",url:"./css/load.css"},{revision:"3189ef54717a729e24a77fabfdba0c92",url:"./css/Mac.css"},{revision:"efbfbf64aa1b384cd309bb57908261ba",url:"./css/note.css"},{revision:"8b2432eb7e8a253a236d9ee9013cdff9",url:"./css/oy.css"},{revision:"e01897dab4a813af2892aed3436372e2",url:"./css/plugins.min.css"},{revision:"44a26565576427619a863328e54daaa9",url:"./css/tage.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"fec9a160fd4bb62e341dbe2eb87b2080",url:"./Gallery/index.html"},{revision:"1c7d41591174875dec31cc6655915b0f",url:"./Gallery/marvel/index.html"},{revision:"aba612fac556a21148a1cfd42250c7e1",url:"./Gallery/ohmygirl/index.html"},{revision:"1068189804a44b31c23e48a6e7395948",url:"./Gallery/wallpaper/index.html"},{revision:"8de07ef79f90797020cdc10f9f96bc43",url:"./index.html"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./js/APlayer.min.js"},{revision:"edc0ec6b454f9dcbf2b1e967f5d4b771",url:"./js/languages.js"},{revision:"42ca4776b0f95e0447ea36baa1b83bc4",url:"./js/load.js"},{revision:"8a668fa2705f6c6d88e66aa7c6e1133d",url:"./js/main.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./js/Meting.min.js"},{revision:"f9a174a19b8c7a9b50a7bf663fc846af",url:"./js/oy.js"},{revision:"fc3aa51b6e9d9ffd27f4d6958c70eee8",url:"./js/search/algolia.js"},{revision:"3b7ba121fe8008ba41c0566a1a257945",url:"./js/search/local-search.js"},{revision:"42c99754804dd9c3bfa2b62451c843b7",url:"./js/tw_cn.js"},{revision:"0fc7cec179399e20e287a037d85f575d",url:"./js/utils.js"},{revision:"cf264d8f733281950bdb458ab0eb34fa",url:"./js/weather.js"},{revision:"507456cd9452d2a27fc1016fac6d8c4b",url:"./js/xkTool.js"},{revision:"cba2a4ff44e5e90029fe831b6b6ce734",url:"./link/index.html"},{revision:"e293461649a72beebb1e5cbbea391186",url:"./logs/index.html"},{revision:"b9bd9ff39d0349969e02860ce49aa33d",url:"./main/index.html"},{revision:"20f1dbc8485d604375179afe642ac660",url:"./manifest.json"},{revision:"115fdf7fc020b6d274e848164fdef1f6",url:"./messageboard/index.html"},{revision:"662372789ef81458eb2649aa6c27ceb6",url:"./movies/index.html"},{revision:"2f9ac65ecefa7015e82f48e800c035f5",url:"./music/index.html"},{revision:"836d1f063413db196b4496431396187a",url:"./nav/index.html"},{revision:"836ecd69d190ec969ef7c52cc2917481",url:"./page/2/index.html"},{revision:"ad6d76f9262cd0b4f42ab14d4ca7b1b0",url:"./page/3/index.html"},{revision:"f22b588c4e7541a8ee856a0a51ee3e6f",url:"./page/4/index.html"},{revision:"6dd8542a5a5116df5e14712e2ea3e18e",url:"./page/5/index.html"},{revision:"793505497a710d95ac68c06d30a01f56",url:"./page/6/index.html"},{revision:"ebc15e60ce7e921fd04b8386961ad20a",url:"./page/7/index.html"},{revision:"22099afde1989fdde9460707aa93bee6",url:"./post/1005838445.html"},{revision:"2ca0e21f3c6b50c9fac136b0fefb9663",url:"./post/1104683778.html"},{revision:"afdbf63ff047866490271b6bd5b6be49",url:"./post/1175849155.html"},{revision:"5da8928f23191606a3089d0623fc3d20",url:"./post/13005592.html"},{revision:"a13782c796abec86ad8228f9b8e36e91",url:"./post/1330258666.html"},{revision:"56b199e07e2a4135fc1fc16d92e43a48",url:"./post/1339733598.html"},{revision:"ecd7fb98dc31bb1f274c87d8e2f24160",url:"./post/1393401608.html"},{revision:"155a336ecf0e7e8039f19ef721f324e8",url:"./post/1519064184.html"},{revision:"d8261361435b38ffd03eac5454abc07c",url:"./post/1520998390.html"},{revision:"85608356c4dcc16b4ef89aba0eaf409e",url:"./post/1550900565.html"},{revision:"be79b57d47a7e2e28fd7953ff6021651",url:"./post/1566646582.html"},{revision:"76cf0f34c772ac83020f4d073494509e",url:"./post/1574967654.html"},{revision:"584061852f075cf70a401251b0bb85eb",url:"./post/1634411798.html"},{revision:"503282de3763bd1735f4b49765c2f6dd",url:"./post/1677637013.html"},{revision:"81bbd794a1860da9ba183cff0e86c089",url:"./post/1738458658.html"},{revision:"78d91606612efd0eef8f4c1277feeb6c",url:"./post/1762820479.html"},{revision:"4e072eed94011201062bf4a7df79881a",url:"./post/1872245415.html"},{revision:"69edfa508ddaf4a8205be2c733ae30de",url:"./post/1905208898.html"},{revision:"051d6b66c5e7eae7a0ee9f56249b8887",url:"./post/1c9cc24c.html"},{revision:"0ba7a3ca09be7ebaad346d5bac65f77d",url:"./post/2068565369.html"},{revision:"895532ad604368e4d4a39c8f285ba636",url:"./post/2068909584.html"},{revision:"0c94da58dfd739f08712defb263a4e19",url:"./post/2086819267.html"},{revision:"98b8511b3861a14a4b876e233d12ca42",url:"./post/2120368839.html"},{revision:"50e76ac32b9f5eb65461b80ec62c653c",url:"./post/2130149512.html"},{revision:"88977f03b1c92315415910142f905adc",url:"./post/2164673978.html"},{revision:"a7949c14f2adf074e49fc2abdd382f1d",url:"./post/2187905911.html"},{revision:"6ac1449926e0bedc4e3bea5d5644dc3a",url:"./post/2243339053.html"},{revision:"7616f279007528ca1be80999c1b2f32f",url:"./post/272460835.html"},{revision:"cc39f562756f38b378d093db1bb97e68",url:"./post/2761314235.html"},{revision:"369c1282beff9be39f527ac6b084d2b8",url:"./post/2781775372.html"},{revision:"bf8fd9d2a54ae9b3b08c3a8b5995ef89",url:"./post/2817363972.html"},{revision:"423ec2fe019625015a9ff73cfc7cb396",url:"./post/2909614374.html"},{revision:"47143f94c84a9982b441663a417afd94",url:"./post/2922948377.html"},{revision:"08b560cccea8aa62866fae354fef0ddc",url:"./post/2968822672.html"},{revision:"108bfe8e3056c3e9cc5b84dd8e16b6d4",url:"./post/315616543.html"},{revision:"ed530793dbee5f67989fbe6befd46370",url:"./post/325844318.html"},{revision:"6b473f1234e77540ffcb95b2390c13f5",url:"./post/328351179.html"},{revision:"166fa93d40f28d6309f7dd0f4b0d9420",url:"./post/3305917059.html"},{revision:"85736aa47da0ece6ee05f4813d0e1280",url:"./post/3528046541.html"},{revision:"51b0d851c4d4410f1dc55906ff58d90f",url:"./post/3554798849.html"},{revision:"99bff144a995a0c8b5f39d1f9385640c",url:"./post/3556927238.html"},{revision:"bd7c6874d1e19e91fe54e21ac228a3ec",url:"./post/3661501281.html"},{revision:"16bcdc8a1cdb17992a1473ee7bb0bf37",url:"./post/368886813.html"},{revision:"d2e5b53d38952aa05785d36846f7482d",url:"./post/3830795892.html"},{revision:"81cb46247466b6f11ee9796701d0147c",url:"./post/3862476156.html"},{revision:"f056df85fa4d8068e2185b095a76b820",url:"./post/3895825257.html"},{revision:"241e2456f0fdba6f532516015d6e8d59",url:"./post/3956353174.html"},{revision:"e82e4a5eb49486fc573de815463be2c2",url:"./post/3979597380.html"},{revision:"10c06dfdb1183bea103f98740043312d",url:"./post/3991296734.html"},{revision:"3272c8b3d1a9b448a9620105c35fccd8",url:"./post/3994269159.html"},{revision:"be49851edbd2d4ecc995c09fb43d3beb",url:"./post/4004677012.html"},{revision:"5446945bda3064e72e029d00a6e33378",url:"./post/4019007238.html"},{revision:"cad34b9a1a75c142acd2f74552d44e72",url:"./post/4146242720.html"},{revision:"79819eb0d072df42be0a4eeec2c83cc8",url:"./post/4226784210.html"},{revision:"5c3130182a262dc3f791f09659823fd5",url:"./post/427140827.html"},{revision:"ee50e1d2f27a717f6b2d1c8936a2e10c",url:"./post/4f314612.html"},{revision:"70916e2647e04903b63c154351445d9b",url:"./post/518000799.html"},{revision:"7561aff97621359c4f9ca9f4e50c492a",url:"./post/658751968.html"},{revision:"2649317bd921addcfe754a8c73f9488f",url:"./post/6b30c31b.html"},{revision:"cea2b07f058488956d9c66ce04d0d15d",url:"./post/726828229.html"},{revision:"6cbe75cd9b02bfe1a52faeb81503c919",url:"./post/771027640.html"},{revision:"193cfd2ea0409778bff086a1caaa6b04",url:"./post/80f09d1c.html"},{revision:"0be3d6e89fdef68789e64d320b97576b",url:"./post/816104377.html"},{revision:"9d7b2649f683d376da55370bd26e033c",url:"./post/850137752.html"},{revision:"8c4f067db57761cd46fc79cdd988af40",url:"./post/864013447.html"},{revision:"648afd73da8d76b4c58f6b8103deee9a",url:"./post/865268903.html"},{revision:"b2f255857911a8baf30fe7ed46945e22",url:"./post/872766944.html"},{revision:"4a9fecf257074d7bf1e7705419b11833",url:"./post/949df4a0.html"},{revision:"dd27dd6af6548a05baa40e2667e56095",url:"./post/a8da4fb0.html"},{revision:"d108bac87e29ed3119d6f664cd7eb561",url:"./post/b41f8f0d.html"},{revision:"f271fe33088aa5b21b0a815ae7364ab6",url:"./post/dfb9e877.html"},{revision:"fe01ad2fd5385f6bcb872398e37b4137",url:"./speak/index.html"},{revision:"9ae42db639bcb4d03ac75c5d63c34b00",url:"./speak/shuoshuo.css"},{revision:"fcb03986f086f715087a6a5709d58c0c",url:"./tags/ASP/index.html"},{revision:"f89e425f6f1db3a27b90e95ce069db59",url:"./tags/CentOS-7/index.html"},{revision:"5b89f553d416dad614291610755a97ea",url:"./tags/Docker/index.html"},{revision:"06e2eb0c3764d570a5d250a0c62202f5",url:"./tags/GitHub/index.html"},{revision:"94356bd8b48826c416bb4e084898b1bf",url:"./tags/index.html"},{revision:"2ae597b5e485d16d95a989de8436b6c1",url:"./tags/java/index.html"},{revision:"9b9cae7ed72644f363309e54103f22bc",url:"./tags/java/page/2/index.html"},{revision:"94e4a998c0a60b8489dc41e073fe0855",url:"./tags/java/page/3/index.html"},{revision:"030b2fc20869c104a91d140b32a28df8",url:"./tags/java/page/4/index.html"},{revision:"58d58cc6e198b0e09f4cd923bb7b9081",url:"./tags/java/page/5/index.html"},{revision:"5386f54507e868f7178bcaf57ca820cd",url:"./tags/javaScript基础/index.html"},{revision:"31d4cf8c3433a911f4f07a8c92a96130",url:"./tags/JavaScript高级/index.html"},{revision:"ed556a140840182b999b26176e5d09fb",url:"./tags/Java基础/index.html"},{revision:"6142e742f1617927d2b953df3e0b3d01",url:"./tags/Java算法/index.html"},{revision:"4b853e559f783ab765e50f51129e9472",url:"./tags/Java设计模式/index.html"},{revision:"1183312f4e5344a35621127c3f9446d2",url:"./tags/java项目/index.html"},{revision:"97bb9667d79651b7e2d68d8a5a69d0c2",url:"./tags/JDBC数据连接池/index.html"},{revision:"b109abbed475b0b10d788726b17edaf1",url:"./tags/jQuery/index.html"},{revision:"6d8dedb588646ad64860aa1497859180",url:"./tags/layui/index.html"},{revision:"e6602375dfb2486355375868a474573a",url:"./tags/Maven/index.html"},{revision:"98bcd449197631d708801f14ed1126fb",url:"./tags/Mybatis/index.html"},{revision:"86264b0f477f4a3206d0f8965e7cbe0a",url:"./tags/MySQL/index.html"},{revision:"0e226d30750292b27fdb4b8495d2fb35",url:"./tags/Redis/index.html"},{revision:"ffc27e0a9d06692ad05412328a3e8312",url:"./tags/Spring/index.html"},{revision:"59daef51dc2e6c9a288777378bc1246e",url:"./tags/SpringBoot/index.html"},{revision:"3323ba157a1d2b24f07c32af272b0ee6",url:"./tags/SpringBoot/page/2/index.html"},{revision:"b58bb222b91a80f87e6319d676d7fe7f",url:"./tags/SpringCloud/index.html"},{revision:"f5f8ed21a8264e07503402d8a2fc8b65",url:"./tags/SpringCloud/page/2/index.html"},{revision:"77c9ef05bd76e8b9ba278979116920e9",url:"./tags/SpringMVC/index.html"},{revision:"f9e2da183c65879d3a14090caee1d5aa",url:"./tags/Vue/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();