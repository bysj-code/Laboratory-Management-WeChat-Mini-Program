(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yudingshiyanshi-add-or-update"],{"01c0":function(i,e,t){var r=t("9763");"string"===typeof r&&(r=[[i.i,r,""]]),r.locals&&(i.exports=r.locals);var a=t("4f06").default;a("30aaa4f4",r,!0,{sourceMap:!1,shadowMode:!1})},3416:function(i,e,t){"use strict";var r=t("01c0"),a=t.n(r);a.a},"6eaf":function(i,e,t){"use strict";var r=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("96cf");var a=r(t("3b8d")),n=r(t("e2b1")),o={data:function(){return{ruleForm:{shiyanshihao:"",shiyanshimingcheng:"",shiyanshitupian:"",shiyanshiweizhi:"",shiyanshizhuangtai:"",zhanghao:"",xingming:"",shouji:""},shiyanshihaoOptions:[],shiyanshihaoIndex:0,user:{},ro:{shiyanshihao:!1,shiyanshimingcheng:!1,shiyanshitupian:!1,shiyanshiweizhi:!1,shiyanshizhuangtai:!1,zhanghao:!1,xingming:!1,shouji:!1,clicknum:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var i=(0,a.default)(regeneratorRuntime.mark((function i(e){var t,r,a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t=uni.getStorageSync("nowTable"),i.next=3,this.$api.session(t);case 3:return r=i.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.shouji=this.user.shouji,i.next=10,this.$api.option("shiyanshixinxi","shiyanshihao",{});case 10:if(r=i.sent,this.shiyanshihaoOptions=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){i.next=20;break}return this.ruleForm.id=e.id,i.next=18,this.$api.info("yudingshiyanshi",this.ruleForm.id);case 18:r=i.sent,this.ruleForm=r.data;case 20:if(!e.cross){i.next=63;break}a=uni.getStorageSync("crossObj"),i.t0=regeneratorRuntime.keys(a);case 23:if((i.t1=i.t0()).done){i.next=63;break}if(n=i.t1.value,"shiyanshihao"!=n){i.next=29;break}return this.ruleForm.shiyanshihao=a[n],this.ro.shiyanshihao=!0,i.abrupt("continue",23);case 29:if("shiyanshimingcheng"!=n){i.next=33;break}return this.ruleForm.shiyanshimingcheng=a[n],this.ro.shiyanshimingcheng=!0,i.abrupt("continue",23);case 33:if("shiyanshitupian"!=n){i.next=37;break}return this.ruleForm.shiyanshitupian=a[n],this.ro.shiyanshitupian=!0,i.abrupt("continue",23);case 37:if("shiyanshiweizhi"!=n){i.next=41;break}return this.ruleForm.shiyanshiweizhi=a[n],this.ro.shiyanshiweizhi=!0,i.abrupt("continue",23);case 41:if("shiyanshizhuangtai"!=n){i.next=45;break}return this.ruleForm.shiyanshizhuangtai=a[n],this.ro.shiyanshizhuangtai=!0,i.abrupt("continue",23);case 45:if("zhanghao"!=n){i.next=49;break}return this.ruleForm.zhanghao=a[n],this.ro.zhanghao=!0,i.abrupt("continue",23);case 49:if("xingming"!=n){i.next=53;break}return this.ruleForm.xingming=a[n],this.ro.xingming=!0,i.abrupt("continue",23);case 53:if("shouji"!=n){i.next=57;break}return this.ruleForm.shouji=a[n],this.ro.shouji=!0,i.abrupt("continue",23);case 57:if("clicknum"!=n){i.next=61;break}return this.ruleForm.clicknum=a[n],this.ro.clicknum=!0,i.abrupt("continue",23);case 61:i.next=23;break;case 63:this.styleChange();case 64:case"end":return i.stop()}}),i,this)})));function e(e){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shiyanshihaoChange:function(){var i=(0,a.default)(regeneratorRuntime.mark((function i(e){var t;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.shiyanshihaoIndex=e.target.value,this.ruleForm.shiyanshihao=this.shiyanshihaoOptions[this.shiyanshihaoIndex],i.next=4,this.$api.follow("shiyanshixinxi","shiyanshihao",{columnValue:this.ruleForm.shiyanshihao});case 4:t=i.sent,t.data.shiyanshimingcheng&&(this.ruleForm.shiyanshimingcheng=t.data.shiyanshimingcheng),t.data.shiyanshiweizhi&&(this.ruleForm.shiyanshiweizhi=t.data.shiyanshiweizhi),t.data.shiyanshizhuangtai&&(this.ruleForm.shiyanshizhuangtai=t.data.shiyanshizhuangtai);case 8:case"end":return i.stop()}}),i,this)})));function e(e){return i.apply(this,arguments)}return e}(),shiyanshitupianTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.shiyanshitupian=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.shiyanshihao){i.next=3;break}return this.$utils.msg("实验室号不能为空"),i.abrupt("return");case 3:if(this.ruleForm.shiyanshimingcheng){i.next=6;break}return this.$utils.msg("实验室名称不能为空"),i.abrupt("return");case 6:if(this.ruleForm.shiyanshizhuangtai){i.next=9;break}return this.$utils.msg("实验室状态不能为空"),i.abrupt("return");case 9:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){i.next=12;break}return this.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 12:if(!this.ruleForm.id){i.next=17;break}return i.next=15,this.$api.update("yudingshiyanshi",this.ruleForm);case 15:i.next=19;break;case 17:return i.next=19,this.$api.add("yudingshiyanshi",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return"start"===i?t-=60:"end"===i&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(i){this.$refs[i].show()}}};e.default=o},9763:function(i,e,t){var r=t("24fb");e=r(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-7438a0e2]{padding:%?20?%}.content[data-v-7438a0e2]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-7438a0e2]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-7438a0e2]{width:%?180?%}.avator[data-v-7438a0e2]{width:%?150?%;height:%?60?%}.right-input[data-v-7438a0e2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-7438a0e2]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-7438a0e2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-7438a0e2]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-7438a0e2]{border:0}.cu-form-group uni-input[data-v-7438a0e2]{padding:0 %?30?%}.uni-input[data-v-7438a0e2]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-7438a0e2]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-7438a0e2]::after{line-height:%?88?%}.select .uni-input[data-v-7438a0e2]{line-height:%?88?%}.input .right-input[data-v-7438a0e2]{line-height:%?88?%}',""]),i.exports=e},bcee:function(i,e,t){"use strict";t.r(e);var r=t("6eaf"),a=t.n(r);for(var n in r)"default"!==n&&function(i){t.d(e,i,(function(){return r[i]}))}(n);e["default"]=a.a},d16e:function(i,e,t){"use strict";t.r(e);var r=t("d412"),a=t("bcee");for(var n in a)"default"!==n&&function(i){t.d(e,i,(function(){return a[i]}))}(n);t("3416");var o,s=t("f0c5"),h=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"7438a0e2",null,!1,r["a"],o);e["default"]=h.exports},d412:function(i,e,t){"use strict";var r,a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[i._v("实验室号")]),t("v-uni-picker",{attrs:{value:i.shiyanshihaoIndex,range:i.shiyanshihaoOptions},on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.shiyanshihaoChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[i._v(i._s(i.shiyanshihaoOptions[i.shiyanshihaoIndex]))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[i._v("实验室名称")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.shiyanshimingcheng,placeholder:"实验室名称"},model:{value:i.ruleForm.shiyanshimingcheng,callback:function(e){i.$set(i.ruleForm,"shiyanshimingcheng",e)},expression:"ruleForm.shiyanshimingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==i.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.shiyanshitupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[i._v("实验室图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[i.ruleForm.shiyanshitupian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:i.ruleForm.shiyanshitupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[i._v("实验室位置")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.shiyanshiweizhi,placeholder:"实验室位置"},model:{value:i.ruleForm.shiyanshiweizhi,callback:function(e){i.$set(i.ruleForm,"shiyanshiweizhi",e)},expression:"ruleForm.shiyanshiweizhi"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[i._v("实验室状态")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.shiyanshizhuangtai,placeholder:"实验室状态"},model:{value:i.ruleForm.shiyanshizhuangtai,callback:function(e){i.$set(i.ruleForm,"shiyanshizhuangtai",e)},expression:"ruleForm.shiyanshizhuangtai"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[i._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.zhanghao,placeholder:"账号"},model:{value:i.ruleForm.zhanghao,callback:function(e){i.$set(i.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[i._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.xingming,placeholder:"姓名"},model:{value:i.ruleForm.xingming,callback:function(e){i.$set(i.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(240, 239, 239, 1)",margin:"0",borderWidth:"0 0 2rpx 0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(147, 193, 7, 1)",textAlign:"left"}},[i._v("手机")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",borderColor:"rgba(215, 215, 215, 1)",borderRadius:"0px",color:"rgba(255, 144, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:i.ro.shouji,placeholder:"手机"},model:{value:i.ruleForm.shouji,callback:function(e){i.$set(i.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(147, 193, 7, 1)",borderColor:"rgba(147, 193, 7, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onSubmitTap.apply(void 0,arguments)}}},[i._v("提交")])],1)],1)],1)},n=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return r}))}}]);