(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shebeiyuyue-add-or-update"],{1689:function(e,t,r){"use strict";var i,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[e._v("设备编号")]),r("v-uni-picker",{attrs:{value:e.shebeibianhaoIndex,range:e.shebeibianhaoOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.shebeibianhaoChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.shebeibianhaoOptions[e.shebeibianhaoIndex]))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[e._v("设备名称")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.shebeimingcheng,placeholder:"设备名称"},model:{value:e.ruleForm.shebeimingcheng,callback:function(t){e.$set(e.ruleForm,"shebeimingcheng",t)},expression:"ruleForm.shebeimingcheng"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tupianTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[e._v("图片")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupian?r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.tupian,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[e._v("用途")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.yongtu,placeholder:"用途"},model:{value:e.ruleForm.yongtu,callback:function(t){e.$set(e.ruleForm,"yongtu",t)},expression:"ruleForm.yongtu"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[e._v("账号")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(t){e.$set(e.ruleForm,"zhanghao",t)},expression:"ruleForm.zhanghao"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[e._v("密码")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.mima,placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[e._v("姓名")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(t){e.$set(e.ruleForm,"xingming",t)},expression:"ruleForm.xingming"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(147, 193, 7, 1)",borderColor:"rgba(147, 193, 7, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}))},"204d":function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-31e1bee2]{padding:%?20?%}.content[data-v-31e1bee2]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-31e1bee2]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-31e1bee2]{width:%?180?%}.avator[data-v-31e1bee2]{width:%?150?%;height:%?60?%}.right-input[data-v-31e1bee2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-31e1bee2]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-31e1bee2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-31e1bee2]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-31e1bee2]{border:0}.cu-form-group uni-input[data-v-31e1bee2]{padding:0 %?30?%}.uni-input[data-v-31e1bee2]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-31e1bee2]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-31e1bee2]::after{line-height:%?88?%}.select .uni-input[data-v-31e1bee2]{line-height:%?88?%}.input .right-input[data-v-31e1bee2]{line-height:%?88?%}',""]),e.exports=t},"21c7":function(e,t,r){"use strict";r.r(t);var i=r("d36f"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},"7bea":function(e,t,r){var i=r("204d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("57b24b7f",i,!0,{sourceMap:!1,shadowMode:!1})},"992a":function(e,t,r){"use strict";var i=r("7bea"),n=r.n(i);n.a},d36f:function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("ac6a"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o={data:function(){return{ruleForm:{shebeibianhao:"",shebeimingcheng:"",tupian:"",yongtu:"",zhanghao:"",mima:"",xingming:""},shebeibianhaoOptions:[],shebeibianhaoIndex:0,user:{},ro:{shebeibianhao:!1,shebeimingcheng:!1,tupian:!1,yongtu:!1,zhanghao:!1,mima:!1,xingming:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:return i=e.sent,this.user=i.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.mima=this.user.mima,this.ruleForm.xingming=this.user.xingming,e.next=10,this.$api.option("shebeixinxi","shebeibianhao",{});case 10:if(i=e.sent,this.shebeibianhaoOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=20;break}return this.ruleForm.id=t.id,e.next=18,this.$api.info("shebeiyuyue",this.ruleForm.id);case 18:i=e.sent,this.ruleForm=i.data;case 20:if(!t.cross){e.next=55;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 23:if((e.t1=e.t0()).done){e.next=55;break}if(a=e.t1.value,"shebeibianhao"!=a){e.next=29;break}return this.ruleForm.shebeibianhao=n[a],this.ro.shebeibianhao=!0,e.abrupt("continue",23);case 29:if("shebeimingcheng"!=a){e.next=33;break}return this.ruleForm.shebeimingcheng=n[a],this.ro.shebeimingcheng=!0,e.abrupt("continue",23);case 33:if("tupian"!=a){e.next=37;break}return this.ruleForm.tupian=n[a],this.ro.tupian=!0,e.abrupt("continue",23);case 37:if("yongtu"!=a){e.next=41;break}return this.ruleForm.yongtu=n[a],this.ro.yongtu=!0,e.abrupt("continue",23);case 41:if("zhanghao"!=a){e.next=45;break}return this.ruleForm.zhanghao=n[a],this.ro.zhanghao=!0,e.abrupt("continue",23);case 45:if("mima"!=a){e.next=49;break}return this.ruleForm.mima=n[a],this.ro.mima=!0,e.abrupt("continue",23);case 49:if("xingming"!=a){e.next=53;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",23);case 53:e.next=23;break;case 55:this.styleChange();case 56:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shebeibianhaoChange:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.shebeibianhaoIndex=t.target.value,this.ruleForm.shebeibianhao=this.shebeibianhaoOptions[this.shebeibianhaoIndex],e.next=4,this.$api.follow("shebeixinxi","shebeibianhao",{columnValue:this.ruleForm.shebeibianhao});case 4:r=e.sent,r.data.shebeimingcheng&&(this.ruleForm.shebeimingcheng=r.data.shebeimingcheng),r.data.yongtu&&(this.ruleForm.yongtu=r.data.yongtu);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("shebeiyuyue",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("shebeiyuyue",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o},e72b:function(e,t,r){"use strict";r.r(t);var i=r("1689"),n=r("21c7");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("992a");var o,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"31e1bee2",null,!1,i["a"],o);t["default"]=u.exports}}]);