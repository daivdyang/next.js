# JavaScript 常用功能

# 參考
1. [2022-11-01][參考連結: 一起理解 HTML 當中的 form-data](https://blog.kalan.dev/2021-03-13-html-form-data/)
2. [2022-10-01][參考連結: 一次性弄懂Unicode和UTF-8](https://juejin.cn/post/7163232181463023629)
3. [2022-11-21][參考連結: 深入 ServiceWorker，消息推送，后台同步，一网打尽](https://juejin.cn/post/7168107934046486541)
4. [2022-11-21][參考連結: 讲清楚 React 的重新渲染](https://juejin.cn/post/7168257213738254344)
5. [2022-11-10][參考連結: 回溯算法](https://zhuanlan.zhihu.com/p/495574746)
6. [2022-11-21][參考連結: Postman请求时自动完成md5计算](https://junjie2018.github.io/notes/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/postman/postman%E8%AF%B7%E6%B1%82%E6%97%B6%E8%87%AA%E5%8A%A8%E5%AE%8C%E6%88%90md5%E8%AE%A1%E7%AE%97/)
7. [2022-12-09][參考連結: Webpack 的 Chunk，想怎么分就怎么分](https://juejin.cn/post/7174766100503068730)
8. [2022-12-09][參考連結: React 的调度系统 Scheduler](https://juejin.cn/post/7174243744831668254)
9. [2022-12-09][參考連結: Web Component入门](https://juejin.cn/post/7174289059521495071)
10. [2022-12-09][參考連結: 前端埋点的自动化管理 | 酱酱的下午茶第128期](https://juejin.cn/post/7174947237221367845)
11. [2022-12-09][參考連結: 基于axios封装的方法工厂](https://juejin.cn/post/7174735610362953788)
12. [2022-12-20][參考連結: Vue3 入门指南与实战案例](https://vue3.chengpeiquan.com/component.html)


## 常用功能

[參考連結](https://segmentfault.com/a/1190000021937948?fbclid=IwAR3OtfoaOdyxjxiX8uxZIxLdV7bwmdxfB-XXlK_ij-f7h1vh4hLqW4a7k-U)

### 为元素添加on方法
```javascript=
Element.prototype.on = Element.prototype.addEventListener;

NodeList.prototype.on = function (event, fn) {、
    []['forEach'].call(this, function (el) {
        el.on(event, fn);
    });
    return this;
};
```

### 为元素添加trigger方法
```javascript=
Element.prototype.trigger = function(type, data) {
  var event = document.createEvent("HTMLEvents");
  event.initEvent(type, true, true);
  event.data = data || {};
  event.eventName = type;
  event.target = this;
  this.dispatchEvent(event);
  return this;
};

NodeList.prototype.trigger = function(event) {
  []["forEach"].call(this, function(el) {
    el["trigger"](event);
  });
  return this;
};
```

### HTML标签转义
```javascript=
// HTML 标签转义
// @param {Array.<DOMString>} templateData 字符串类型的tokens
// @param {...} ..vals 表达式占位符的运算结果tokens
//
function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);
    // Escape special characters in the substitution.
    s += arg
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}
// 调用
var html = SaferHTML`<p>这是关于字符串模板的介绍</p>`;
```

### 跨浏览器绑定事件
```javascript=
function addEventSamp(obj, evt, fn) {
  if (!oTarget) {
    return;
  }
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  } else {
    oTarget["on" + sEvtType] = fn;
  }
}
```
### 提取页面代码中所有网址
```javascript=
var aa = document.documentElement.outerHTML
  .match(
    /(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/gi
  )
  .join("\r\n")
  .replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/gim, "");
alert(aa);
```

### 动态加载脚本文件
```javascript=
function appendscript(src, text, reload, charset) {
  var id = hash(src + text);
  if (!reload && in_array(id, evalscripts)) return;
  if (reload && $(id)) {
    $(id).parentNode.removeChild($(id));
  }

  evalscripts.push(id);
  var scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.id = id;
  scriptNode.charset = charset
    ? charset
    : BROWSER.firefox
    ? document.characterSet
    : document.charset;
  try {
    if (src) {
      scriptNode.src = src;
      scriptNode.onloadDone = false;
      scriptNode.onload = function() {
        scriptNode.onloadDone = true;
        JSLOADED[src] = 1;
      };
      scriptNode.onreadystatechange = function() {
        if (
          (scriptNode.readyState == "loaded" ||
            scriptNode.readyState == "complete") &&
          !scriptNode.onloadDone
        ) {
          scriptNode.onloadDone = true;
          JSLOADED[src] = 1;
        }
      };
    } else if (text) {
      scriptNode.text = text;
    }
    document.getElementsByTagName("head")[0].appendChild(scriptNode);
  } catch (e) {}
}
```

### 返回顶部的通用方法
```javascript=
function backTop(btnId) {
  var btn = document.getElementById(btnId);
  var d = document.documentElement;
  var b = document.body;
  window.onscroll = set;
  btn.style.display = "none";
  btn.onclick = function() {
    btn.style.display = "none";
    window.onscroll = null;
    this.timer = setInterval(function() {
      d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
      b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
      if (d.scrollTop + b.scrollTop == 0)
        clearInterval(btn.timer, (window.onscroll = set));
    }, 10);
  };
  function set() {
    btn.style.display = d.scrollTop + b.scrollTop > 100 ? "block" : "none";
  }
}
backTop("goTop");
```

### 滚动到顶部
```javascript=
// 使用document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部的距离，从顶部
// 滚动一小部分距离。使用window.requestAnimationFrame()来滚动。
// @example
// scrollToTop();
function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
```


### 实现base64解码
```javascript=
function base64_decode(data) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1,
    o2,
    o3,
    h1,
    h2,
    h3,
    h4,
    bits,
    i = 0,
    ac = 0,
    dec = "",
    tmp_arr = [];
  if (!data) {
    return data;
  }
  data += "";
  do {
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));
    bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;
    o1 = (bits >> 16) & 0xff;
    o2 = (bits >> 8) & 0xff;
    o3 = bits & 0xff;
    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);
  dec = tmp_arr.join("");
  dec = utf8_decode(dec);
  return dec;
}
```

### 确认是否是键盘有效输入值
```javascript=
function checkKey(iKey) {
  if (iKey == 32 || iKey == 229) {
    return true;
  } /*空格和异常*/
  if (iKey > 47 && iKey < 58) {
    return true;
  } /*数字*/
  if (iKey > 64 && iKey < 91) {
    return true;
  } /*字母*/
  if (iKey > 95 && iKey < 108) {
    return true;
  } /*数字键盘1*/
  if (iKey > 108 && iKey < 112) {
    return true;
  } /*数字键盘2*/
  if (iKey > 185 && iKey < 193) {
    return true;
  } /*符号1*/
  if (iKey > 218 && iKey < 223) {
    return true;
  } /*符号2*/
  return false;
}
```

### 全型半型轉換
```javascript=
//iCase: 0全到半，1半到全，其他不转化
function chgCase(sStr, iCase) {
  if (
    typeof sStr != "string" ||
    sStr.length <= 0 ||
    !(iCase === 0 || iCase == 1)
  ) {
    return sStr;
  }
  var i,
    oRs = [],
    iCode;
  if (iCase) {
    /*半->全*/
    for (i = 0; i < sStr.length; i += 1) {
      iCode = sStr.charCodeAt(i);
      if (iCode == 32) {
        iCode = 12288;
      } else if (iCode < 127) {
        iCode += 65248;
      }
      oRs.push(String.fromCharCode(iCode));
    }
  } else {
    /*全->半*/
    for (i = 0; i < sStr.length; i += 1) {
      iCode = sStr.charCodeAt(i);
      if (iCode == 12288) {
        iCode = 32;
      } else if (iCode > 65280 && iCode < 65375) {
        iCode -= 65248;
      }
      oRs.push(String.fromCharCode(iCode));
    }
  }
  return oRs.join("");
}
```

### 版本对比
```javascript=
function compareVersion(v1, v2) {
  v1 = v1.split(".");
  v2 = v2.split(".");

  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push("0");
  }

  while (v2.length < len) {
    v2.push("0");
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}
```

### 压缩CSS样式代码
```javascript=
function compressCss(s) {
  //压缩代码
  s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
  s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
  s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
  s = s.replace(/;\s*;/g, ";"); //清除连续分号
  s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
  return s == null ? "" : s[1];
}
```

### 获取当前路径
```javascript=
var currentPageUrl = "";
if (typeof this.href === "undefined") {
  currentPageUrl = document.location.toString().toLowerCase();
} else {
  currentPageUrl = this.href.toString().toLowerCase();
}
```

### 字符串长度截取
```javascript=
function cutstr(str, len) {
    var temp,
        icount = 0,
        patrn = /[^\x00-\xff]/，
        strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len - 1) {
            temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                   icount = icount + 1
            } else {
                icount = icount + 2
            }
            strre += temp
            } else {
            break;
        }
    }
    return strre + "..."
}
```

### 时间日期格式转换
```javascript=
Date.prototype.format = function(formatStr) {
  var str = formatStr;
  var Week = ["日", "一", "二", "三", "四", "五", "六"];
  str = str.replace(/yyyy|YYYY/, this.getFullYear());
  str = str.replace(
    /yy|YY/,
    this.getYear() % 100 > 9
      ? (this.getYear() % 100).toString()
      : "0" + (this.getYear() % 100)
  );
  str = str.replace(
    /MM/,
    this.getMonth() + 1 > 9
      ? (this.getMonth() + 1).toString()
      : "0" + (this.getMonth() + 1)
  );
  str = str.replace(/M/g, this.getMonth() + 1);
  str = str.replace(/w|W/g, Week[this.getDay()]);
  str = str.replace(
    /dd|DD/,
    this.getDate() > 9 ? this.getDate().toString() : "0" + this.getDate()
  );
  str = str.replace(/d|D/g, this.getDate());
  str = str.replace(
    /hh|HH/,
    this.getHours() > 9 ? this.getHours().toString() : "0" + this.getHours()
  );
  str = str.replace(/h|H/g, this.getHours());
  str = str.replace(
    /mm/,
    this.getMinutes() > 9
      ? this.getMinutes().toString()
      : "0" + this.getMinutes()
  );
  str = str.replace(/m/g, this.getMinutes());
  str = str.replace(
    /ss|SS/,
    this.getSeconds() > 9
      ? this.getSeconds().toString()
      : "0" + this.getSeconds()
  );
  str = str.replace(/s|S/g, this.getSeconds());
  return str;
};

// 或
Date.prototype.format = function(format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    S: this.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  }
  return format;
};
alert(new Date().format("yyyy-MM-dd hh:mm:ss"));
```

### 跨浏览器删除事件
```javascript=
function delEvt(obj, evt, fn) {
  if (!obj) {
    return;
  }
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (oTarget.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  } else {
    obj["on" + evt] = fn;
  }
}
```

### 判断是否以某个字符串结束
```javascript=
String.prototype.endWith = function(s) {
  var d = this.length - s.length;
  return d >= 0 && this.lastIndexOf(s) == d;
};
```

### 返回脚本内容
```javascript=
function evalscript(s) {
  if (s.indexOf("<script") == -1) return s;
  var p = /<script[^\>]*?>([^\x00]*?)<\/script>/gi;
  var arr = [];
  while ((arr = p.exec(s))) {
    var p1 = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/i;
    var arr1 = [];
    arr1 = p1.exec(arr[0]);
    if (arr1) {
      appendscript(arr1[1], "", arr1[2], arr1[3]);
    } else {
      p1 = /<script(.*?)>([^\x00]+?)<\/script>/i;
      arr1 = p1.exec(arr[0]);
      appendscript("", arr1[2], arr1[1].indexOf("reload=") != -1);
    }
  }
  return s;
}
```


### 格式化CSS样式代码
```javascript=
function formatCss(s) {
  //格式化代码
  s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
  s = s.replace(/;\s*;/g, ";"); //清除连续分号
  s = s.replace(/\,[\s\.\#\d]*{/g, "{");
  s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
  s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
  s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
  return s;
}
```

### 获取cookie值
```javascript=
function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null;
}
```

### 获得URL中GET参数值
```javascript=
// 用法：如果地址是 test.htm?t1=1&t2=2&t3=3, 那么能取得：GET["t1"], GET["t2"], GET["t3"]
function getGet() {
  querystr = window.location.href.split("?");
  if (querystr[1]) {
    GETs = querystr[1].split("&");
    GET = [];
    for (i = 0; i < GETs.length; i++) {
      tmp_arr = GETs.split("=");
      key = tmp_arr[0];
      GET[key] = tmp_arr[1];
    }
  }
  return querystr[1];
}
```


### 获取移动设备初始化大小
```javascript=
function getInitZoom() {
  if (!this._initZoom) {
    var screenWidth = Math.min(screen.height, screen.width);
    if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
      screenWidth = screenWidth / window.devicePixelRatio;
    }
    this._initZoom = screenWidth / document.body.offsetWidth;
  }
  return this._initZoom;
}
```

### 获取页面高度
```javascript=
function getPageHeight() {
  var g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
```

### 获取页面scrollLeft
```javascript=
function getPageScrollLeft() {
  var a = document;
  return a.documentElement.scrollLeft || a.body.scrollLeft;
}
```


### 获取页面可视高度
```javascript=
function getPageViewHeight() {
  var d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientHeight;
}
```


### 获取页面可视宽度
```javascript=
function getPageViewWidth() {
  var d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientWidth;
}
```


### 获取页面宽度
```java=
function getPageWidth() {
  var g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}
```


### 获取移动设备屏幕宽度
```java=
function getScreenWidth() {
  var smallerSide = Math.min(screen.width, screen.height);
  var fixViewPortsExperiment =
    rendererModel.runningExperiments.FixViewport ||
    rendererModel.runningExperiments.fixviewport;
  var fixViewPortsExperimentRunning =
    fixViewPortsExperiment && fixViewPortsExperiment.toLowerCase() === "new";
  if (fixViewPortsExperiment) {
    if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
      smallerSide = smallerSide / window.devicePixelRatio;
    }
  }
  return smallerSide;
}
```

### 获取网页被卷去的位置
```javascript=
function getScrollXY() {
  return document.body.scrollTop
    ? {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
      }
    : {
        x: document.documentElement.scrollLeft,
        y: document.documentElement.scrollTop
      };
}
```

### 获取URL上的参数
```javascript=
// 获取URL中的某参数值,不区分大小写
// 获取URL中的某参数值,不区分大小写,
// 默认是取'hash'里的参数，
// 如果传其他参数支持取‘search’中的参数
// @param {String} name 参数名称
export function getUrlParam(name, type = "hash") {
  let newName = name,
    reg = new RegExp("(^|&)" + newName + "=([^&]*)(&|$)", "i"),
    paramHash = window.location.hash.split("?")[1] || "",
    paramSearch = window.location.search.split("?")[1] || "",
    param;

  type === "hash" ? (param = paramHash) : (param = paramSearch);

  let result = param.match(reg);

  if (result != null) {
    return result[2].split("/")[0];
  }
  return null;
}
```

### 检验URL链接是否有效
```javascript=
function getUrlState(URL) {
  var xmlhttp = new ActiveXObject("microsoft.xmlhttp");
  xmlhttp.Open("GET", URL, false);
  try {
    xmlhttp.Send();
  } catch (e) {
  } finally {
    var result = xmlhttp.responseText;
    if (result) {
      if (xmlhttp.Status == 200) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
```


### 获取窗体可见范围的宽与高
```javascript=
function getViewSize() {
  var de = document.documentElement;
  var db = document.body;
  var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
  var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
  return Array(viewW, viewH);
}
```

### 获取移动设备最大化大小
```javascript=
function getZoom() {
  var screenWidth =
    Math.abs(window.orientation) === 90
      ? Math.max(screen.height, screen.width)
      : Math.min(screen.height, screen.width);
  if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
    screenWidth = screenWidth / window.devicePixelRatio;
  }
  var FixViewPortsExperiment =
    rendererModel.runningExperiments.FixViewport ||
    rendererModel.runningExperiments.fixviewport;
  var FixViewPortsExperimentRunning =
    FixViewPortsExperiment &&
    (FixViewPortsExperiment === "New" || FixViewPortsExperiment === "new");
  if (FixViewPortsExperimentRunning) {
    return screenWidth / window.innerWidth;
  } else {
    return screenWidth / document.body.offsetWidth;
  }
}
判断是否安卓移动设备访问
function isAndroidMobileDevice() {
  return /android/i.test(navigator.userAgent.toLowerCase());
}
```


### 判断是否苹果移动设备访问
```javascript=
function isAppleMobileDevice() {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}
```


### 判断是否为数字类型
```javascript=
function isDigit(value) {
  var patrn = /^[0-9]*$/;
  if (patrn.exec(value) == null || value == "") {
    return false;
  } else {
    return true;
  }
}
```

### 判断是否移动设备
```javascript=
function isMobile() {
  if (typeof this._isMobile === "boolean") {
    return this._isMobile;
  }
  var screenWidth = this.getScreenWidth();
  var fixViewPortsExperiment =
    rendererModel.runningExperiments.FixViewport ||
    rendererModel.runningExperiments.fixviewport;
  var fixViewPortsExperimentRunning =
    fixViewPortsExperiment && fixViewPortsExperiment.toLowerCase() === "new";
  if (!fixViewPortsExperiment) {
    if (!this.isAppleMobileDevice()) {
      screenWidth = screenWidth / window.devicePixelRatio;
    }
  }
  var isMobileScreenSize = screenWidth < 600;
  var isMobileUserAgent = false;
  this._isMobile = isMobileScreenSize && this.isTouchScreen();
  return this._isMobile;
}
```


### 加载样式文件
```javascript=
function loadStyle(url) {
  try {
    document.createStyleSheet(url);
  } catch (e) {
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(cssLink);
  }
}
```


### 替换地址栏
```javascript=
function locationReplace(url) {
  if (history.replaceState) {
    history.replaceState(null, document.title, url);
    history.go(0);
  } else {
    location.replace(url);
  }
}
```


### 打开一个窗体通用方法
```javascript=
function openWindow(url, windowName, width, height) {
  var x = parseInt(screen.width / 2.0) - width / 2.0;
  var y = parseInt(screen.height / 2.0) - height / 2.0;
  var isMSIE = navigator.appName == "Microsoft Internet Explorer";
  if (isMSIE) {
    var p = "resizable=1,location=no,scrollbars=no,width=";
    p = p + width;
    p = p + ",height=";
    p = p + height;
    p = p + ",left=";
    p = p + x;
    p = p + ",top=";
    p = p + y;
    retval = window.open(url, windowName, p);
  } else {
    var win = window.open(
      url,
      "ZyiisPopup",
      "top=" +
        y +
        ",left=" +
        x +
        ",scrollbars=" +
        scrollbars +
        ",dialog=yes,modal=yes,width=" +
        width +
        ",height=" +
        height +
        ",resizable=no"
    );
    eval("try { win.resizeTo(width, height); } catch(e) { }");
    win.focus();
  }
}
```


### 设置cookie值
```javascript=
function setCookie(name, value, Hours) {
  var d = new Date();
  var offset = 8;
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = utc + 3600000 * offset;
  var exp = new Date(nd);
  exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
  document.cookie =
    name +
    "=" +
    escape(value) +
    ";path=/;expires=" +
    exp.toGMTString() +
    ";domain=360doc.com;";
}
```

### 随机数时间戳
```javascript=
function uniqueId() {
  var a = Math.random,
    b = parseInt;
  return (
    Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a())
  );
}
```


### 实现utf8解码
```javascript=
function utf8_decode(str_data) {
  var tmp_arr = [],
    i = 0,
    ac = 0,
    c1 = 0,
    c2 = 0,
    c3 = 0;
  str_data += "";
  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i);
    if (c1 < 128) {
      tmp_arr[ac++] = String.fromCharCode(c1);
      i++;
    } else if (c1 > 191 && c1 < 224) {
      c2 = str_data.charCodeAt(i + 1);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode(
        ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      );
      i += 3;
    }
  }
  return tmp_arr.join("");
}
```