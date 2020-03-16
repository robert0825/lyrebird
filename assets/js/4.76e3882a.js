(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(t,a,s){t.exports=s.p+"assets/img/plugin-android.7d40f4c9.png"},222:function(t,a,s){t.exports=s.p+"assets/img/plugin-android-devicelist.2f1497a1.png"},223:function(t,a,s){t.exports=s.p+"assets/img/plugin-android-screenshot.8aee5288.png"},224:function(t,a,s){t.exports=s.p+"assets/img/plugin-android-deviceinfo.50672928.png"},225:function(t,a,s){t.exports=s.p+"assets/img/plugin-android-appinfo.7c10556a.png"},226:function(t,a,s){t.exports=s.p+"assets/img/plugin-android-startapp.7116e1c2.gif"},227:function(t,a,s){t.exports=s.p+"assets/img/plugin-android-devicelog.e730ece1.png"},228:function(t,a,s){t.exports=s.p+"assets/img/plugin-android-console.cd74223d.png"},229:function(t,a,s){t.exports=s.p+"assets/img/plugin-android-console.250df54d.gif"},248:function(t,a,s){"use strict";s.r(a);var e=s(28),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"android插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android插件"}},[t._v("#")]),t._v(" Android插件")]),t._v(" "),e("p",[t._v("支持Android设备的"),e("RouterLink",{attrs:{to:"/plugins/"}},[t._v("插件")]),t._v("。为Lyrebird提供设备信息、日志、截图、命令执行、崩溃监控、APP信息及拉起应用功能。")],1),t._v(" "),e("p",[e("img",{attrs:{src:s(161),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),e("h3",{attrs:{id:"环境要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[t._v("#")]),t._v(" 环境要求")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("macOS")])]),t._v(" "),e("li",[e("p",[t._v("Python3.6及以上")])]),t._v(" "),e("li",[e("p",[t._v("安装"),e("a",{attrs:{href:"https://developer.android.com/studio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AndroidSDK"),e("OutboundLink")],1),t._v("，并设置SDK环境变量 “ANDROID_HOME”")])]),t._v(" "),e("li",[e("p",[t._v("Lyrebird 1.7.0及以上")])])]),t._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lyrebird-android\n")])])]),e("h3",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("lyrebird\n")])])]),e("h2",{attrs:{id:"功能介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),e("p",[t._v("使用USB线连接手机和电脑，打开设备的调试模式，设备会出现在左侧的设备列表中。")]),t._v(" "),e("p",[t._v("列表展示设备的model和序列号，高亮当前选中的设备。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(222),alt:""}})]),t._v(" "),e("p",[t._v("列表下方展示当前选中设备的屏幕快照。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(223),alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("屏幕快照存储于"),e("code",[t._v("~/.lyrebird/plugins/lyrebird_android/screenshot/")]),t._v("目录中，会在lyrebird启动时清空并删除上述目录")])]),t._v(" "),e("h3",{attrs:{id:"查看设备信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看设备信息"}},[t._v("#")]),t._v(" 查看设备信息")]),t._v(" "),e("p",[t._v("设备接入后，设备信息区中展示如下设备信息：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Device ID")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设备序列号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Model")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设备类型")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Android Version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("系统版本")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(224),alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("可以通过设备信息区顶部的按钮，获取设备屏幕快照和更多设备信息。")])]),t._v(" "),e("h3",{attrs:{id:"查看应用信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看应用信息"}},[t._v("#")]),t._v(" 查看应用信息")]),t._v(" "),e("p",[t._v("应用信息区中可以查看设备中所有的package，选择某个package可以查看应用信息：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("PackageName")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("应用包名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("StartActivity")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("启动Activity")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("App Version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("应用版本")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(225),alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("点击more detail可以获得更多应用信息。")])]),t._v(" "),e("p",[t._v('可指定启动后默认读取的应用。默认读取的应用存储于Lyrebird统一管理的配置文件中，通过设置或修改"plugin.android"的"package"值来更改默认应用。')]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugin.android"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"package"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.sankuai.meituan"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Lyrebird统一管理的配置文件，默认存放在~/.lyrebird/conf.json文件中。")]),t._v(" "),e("h3",{attrs:{id:"拉起或关闭指定应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉起或关闭指定应用"}},[t._v("#")]),t._v(" 拉起或关闭指定应用")]),t._v(" "),e("p",[t._v("应用信息区提供启动应用和关闭应用的功能。")]),t._v(" "),e("p",[t._v("在支持搜索的package下拉列表中选择目标应用，可对该应用执行启动操作和关闭操作。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(226),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"获取系统日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取系统日志"}},[t._v("#")]),t._v(" 获取系统日志")]),t._v(" "),e("p",[t._v("设备日志展示于下方的DeviceLog中。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(227),alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("设备日志文件存储在"),e("code",[t._v("~/.lyrebird/plugins/lyrebird_android/tmp/")]),t._v("目录中，前端展示最新的200行日志。")])]),t._v(" "),e("h3",{attrs:{id:"命令行工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具"}},[t._v("#")]),t._v(" 命令行工具")]),t._v(" "),e("p",[t._v("通过下方的Console，可以执行命令来获取信息和操纵设备。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(228),alt:""}})]),t._v(" "),e("p",[t._v("控制台可以记录历史操作记录，通过键盘的⬆键和⬇键翻动查看。")]),t._v(" "),e("p",[t._v("此外，提供格式化展示命令的窗口，可以将命令切分展示，使之更便于阅读。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(229),alt:""}})]),t._v(" "),e("p",[t._v("Android插件的更多内容，详见"),e("a",{attrs:{href:"https://github.com/Meituan-Dianping/lyrebird-android",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码仓库"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);