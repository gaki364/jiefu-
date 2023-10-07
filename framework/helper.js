//常用方法集合
export default {
	// 全局VUE获取
	gVue: null,
	gServerIP: null,
	gURL: null,
	gHURL: null,

	/**
	 * 安卓返回：android  苹果返回：ios  微信开发者工具：devtools
	 */
	getPlatformName() {
		return uni.getSystemInfoSync().platform;
	},

	/**
	 * 是否是Android端
	 */
	isAndroid() {
		return this.getPlatformName() == 'android';
	},

	/**
	 * 是否是iOS端
	 */
	isIOS() {
		return this.getPlatformName() == 'ios';
	},

	/**
	 * 是否是微信开发工具测试端
	 */
	isWeiXinDevTools() {
		return this.getPlatformName() == 'devtools';
	},
	
	isPc() {
		// #ifdef APP-PLUS
		return false;
		// #endif
		// #ifdef H5
		if (navigator.userAgent.indexOf('Mobile')>-1) {
		    return false;
		} else {
			return true;
		}
		// #endif
	},

	/**
	 * 系统信息
	 */
	getSystemInfo(key = '') {
		let info = uni.getSystemInfoSync()
		if (key) {
			return info[key]
		}
		return info
	},

	/**
	 * toast弹出提示
	 */
	toast(title, duration = 1500, mask = true, icon = 'none') {
		if (Boolean(title) === false) {
			return;
		}

		uni.showToast({
			title,
			duration,
			mask,
			icon
		});
	},

	/**
	 * loading显示
	 */
	loadingShow() {
		uni.showLoading({
			mask: true
		});
		let myVar = setTimeout(function() {
			this.loadingHide(myVar);
		}.bind(this), 5000);
		return myVar
	},

	/**
	 * 取消loading显示
	 */
	loadingHide(myVar) {
		uni.hideLoading();
		if (myVar) {
			clearTimeout(myVar);
		}
	},

	/**
	 * RGB转十六进制显示
	 * @return {string} #RGB
	 */
	rgbaToHex(color) {
		var values = color
			.replace(/rgba?\(/, '')
			.replace(/\)/, '')
			.replace(/[\s+]/g, '')
			.split(',');
		var a = parseFloat(values[3] || 1),
			r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
			g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
			b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
		return "#" +
			("0" + r.toString(16)).slice(-2) +
			("0" + g.toString(16)).slice(-2) +
			("0" + b.toString(16)).slice(-2);
	},


	/**
	 * @description 获取设备ID
	 */
	getDeviceId() {
		// #ifdef APP-PLUS
		return plus.device.uuid;
		// #endif
	},

	/* 
	 * obj 转 params字符串参数  
	 * 例子：{a:1,b:2} => a=1&b=2
	 */
	objParseParam(obj) {
		let paramsStr = "";
		if (obj instanceof Array) return paramsStr;
		if (!(obj instanceof Object)) return paramsStr;
		for (let key in obj) {
			paramsStr += `${key}=${obj[key]}&`;
		}
		return paramsStr.substring(0, paramsStr.length - 1);
	},

	/*
	 * obj 转 路由地址带参数
	 * 例子：{a:1,b:2} => /pages/index/index?a=1&b=2
	 */
	objParseUrlAndParam(path, obj) {
		let url = path || '/';
		let paramsStr = '';

		if (obj instanceof Array)
			return url;
		if (!(obj instanceof Object))
			return url;

		paramsStr = this.objParseParam(obj);
		paramsStr && (url += '?');
		url += paramsStr;
		return url;
	},

	/**
	 * 获取UTC时间
	 */
	getUTC() {
		return Date.now();
	},

	/**
	 * 时间戳转换成时间
	 * @param {Object} str 单位s
	 */
	getTime(str) {
		var n = parseInt(str) * 1000;
		var D = new Date(n);

		var year = D.getFullYear(); //四位数年份

		var month = D.getMonth() + 1; //月份(0-11),0为一月份
		month = month < 10 ? ('0' + month) : month;

		var day = D.getDate(); //月的某一天(1-31)
		day = day < 10 ? ('0' + day) : day;

		var hours = D.getHours(); //小时(0-23)
		hours = hours < 10 ? ('0' + hours) : hours;

		var minutes = D.getMinutes(); //分钟(0-59)
		minutes = minutes < 10 ? ('0' + minutes) : minutes;

		var now_time = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;
		return now_time;
	},
	/**
	 * 时间戳转换成时间
	 * @param {Object} str 单位s
	 */
	getTime2(str) {
		var n = parseInt(str) * 1000;
		var D = new Date(n);

		var year = D.getFullYear(); //四位数年份

		var month = D.getMonth() + 1; //月份(0-11),0为一月份
		month = month < 10 ? ('0' + month) : month;

		var day = D.getDate(); //月的某一天(1-31)
		day = day < 10 ? ('0' + day) : day;

		var now_time = year + '.' + month + '.' + day;
		return now_time;
	},
	
	// 今日时间戳
	getTodayTimestamp() {
		let arr = [];
		let startTimestamp = Date.parse(new Date(new Date().setHours(0, 0, 0)));
		let endTimestamp = Date.parse(new Date(new Date().setHours(23, 59, 59)));
		arr[0] = startTimestamp / 1000;
		arr[1] = endTimestamp / 1000;
		return arr;
	},
	
	// 昨天时间戳
	getYesterdayTimestamp() {
		let arr = [];
		let startTimestamp = this.getTodayTimestamp()[0] - (24 * 60 * 60);
		let endTimestamp = this.getTodayTimestamp()[1] - (24 * 60 * 60);
		arr[0] = startTimestamp;
		arr[1] = endTimestamp;
		return arr;
	},
	
	// 本周时间戳
	getThisWeekTimestamp() {
		let arr = [];
		let startTimestamp = Date.parse(new Date(new Date().setHours(0, 0, 0) - (new Date().getDay() - 1) *24 * 60 * 60 *1000));
		let endTimestamp = Date.parse(new Date(new Date().setHours(23, 59, 59) + (7 - new Date().getDay()) *24 * 60 * 60 *1000));
		arr[0] = startTimestamp / 1000;
		arr[1] = endTimestamp / 1000;
		return arr;
	},
	
	// 上周时间戳
	getLastWeekTimestamp() {
		let arr = [];
		let startTimestamp = Date.parse(new Date(new Date().setHours(0, 0, 0) - (new Date().getDay() + 6) *24 * 60 * 60 *1000));
		let endTimestamp = Date.parse(new Date(new Date().setHours(23, 59, 59) - (new Date().getDay()) *24 * 60 * 60 *1000));
		arr[0] = startTimestamp / 1000;
		arr[1] = endTimestamp / 1000;
		return arr;
	},


	/*
	 * 过长的字符串剪切后用...代替
	 */
	cutLongStr(str, limtLenght) {
		if (str) {
			if (str.length > limtLenght) {
				str = str.substring(0, limtLenght);
				str = str + '...';
			}
			return str;
		}
	},

	/**
	 * 货币格式化
	 * number：要格式化的数字
	 * decimals：保留几位小数
	 * dec_point：小数点符号
	 * thousands_sep：千分位符号
	 * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
	 */
	formatMoney(number, decimals = 2, dec_point, thousands_sep, roundtag) {
		number = (number + '').replace(/[^0-9+-Ee.]/g, '');
		roundtag = roundtag || "floor"; //"ceil","floor","round"

		var n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? '.' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? ',' : dec_point,
			s = '',
			toFixedFix = function(n, prec) {

				var k = Math.pow(10, prec);

				return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
			};
		s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		var re = /(-?\d+)(\d{3})/;
		while (re.test(s[0])) {
			s[0] = s[0].replace(re, "$1" + sep + "$2");
		}

		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	},

	/**
	 * 深拷贝函数
	 * @param {Object} target 接收目标target参数
	 */
	deepClone(target) {
		// 定义一个变量
		var result;
		// 如果当前需要深拷贝的是一个对象的话
		if (typeof target === 'object') {
			// 如果是一个数组的话
			if (Array.isArray(target)) {
				result = []; // 将result赋值为一个数组，并且执行遍历
				for (let i in target) {
					// 递归克隆数组中的每一项
					result.push(this.deepClone(target[i]))
				}
				// 判断如果当前的值是null的话；直接赋值为null
			} else if (target === null) {
				result = null;
				// 判断如果当前的值是一个RegExp对象的话，直接赋值    
			} else if (target.constructor === RegExp) {
				result = target;
			} else {
				// 否则是普通对象，直接for in循环，递归赋值对象的所有值
				result = {};
				for (let i in target) {
					result[i] = this.deepClone(target[i]);
				}
			}
			// 如果不是对象的话，就是基本数据类型，那么直接赋值
		} else {
			result = target;
		}

		// 返回最终结果
		return result;
	},

	/**
	 * 小数点截取 不四舍五入
	 * @param {Object} num
	 * @param {Object} decimal
	 */
	formatDecimal(num, decimal = 2) {
		if (num == 0) {
			return 0;
		}
		num = num.toString()
		let index = num.indexOf('.')
		if (index !== -1) {
			num = num.substring(0, decimal + index + 1)
		} else {
			num = num.substring(0)
		}
		return parseFloat(num).toFixed(decimal)
	},

	/**
	 * 生成从minNum到maxNum的随机数
	 * @param {Object} minNum
	 * @param {Object} maxNum
	 */
	randomNum(minNum, maxNum) {
		switch (arguments.length) {
			case 1:
				return parseInt(Math.random() * minNum + 1, 10);
				break;

			case 2:
				return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
				//或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
				break;

			default:
				return 0;
				break;
		}
	},

	/**
	 * 比较版本号
	 * @param {Object} versionA 本地版本号
	 * @param {Object} versionB 服务器版本号
	 * @return {int} 0:版本号一致  大于0:客户端比较新  小于0:服务端比较新
	 */
	compareVersion(versionA, versionB) {
		let vA = versionA.split('.');
		let vB = versionB.split('.');

		// console.log(`版本比较 : 本地版本 ${versionA} , 远程版本 ${versionB}`);
		// console.log(`version A ${vA} , version B ${vB}`);

		// 长度相等
		for (let i = 0; i < vA.length && i < vB.length; ++i) {
			let a = parseInt(vA[i]);
			let b = parseInt(vB[i]);
			if (a === b) {
				continue;
			} else {
				return a - b;
			}
		}

		// B 长度 > A 长度
		if (vB.length > vA.length) {
			return -1;
		}

		// 版本号相等
		// console.log("版本号一致");
		return 0;
	},

	// 播放声音
	playSound(src) {
		if (src) {
			// let innerAudioContext = uni.createInnerAudioContext();
			// innerAudioContext.src = src;
			// innerAudioContext.play();
		}
	},

	// 文本替换
	StrReplace(str, data) {
		String.prototype.format = function() {
			if (arguments.length == 0) return this;
			for (var s = this, i = 0; i < arguments.length; i++)
				s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
			return s;
		};
		if (str && str.length > 0) {
			return str.format(data);
		} else {
			return str
		}
	},

	// 是否是ios web浏览器
	isIosWeb() {
		// #ifdef H5
		if (/(iPhone|iPad|iPod|iOS|Mac)/i.test(navigator.userAgent)) {
			return true;
		}
		// #endif
		return false;
	},

	// 新建窗口 注入js代码执行
	injectionJS(js) {
		var NewObj = window.open("", "_blank");
		NewObj.document.write(js);
	},

	// 返回页面
	back(self) {
		// #ifdef H5
		const pages = getCurrentPages();
		if (pages.length > 1) {
			uni.navigateBack({
				delta: 1
			});
			return;
		}

		//使用vue-router返回上一级
		let a = self.$router.go(-1)
		if (a == undefined) {
			//重新定向跳转页面
			uni.switchTab({
				url: '/game/idx1',
				fail: (res) => {
					console.log(res); //打印错误信息
				}
			});
		}
		return;
		// #endif


		uni.navigateBack({});
		// uni.navigateBack(1);
		return;
	},

	randomString(len) {
		len = len || 32;
		// 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
		var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
		var maxLen = $chars.length;
		var str = '';
		for (var i = 0; i < len; i++) {
			str += $chars.charAt(Math.floor(Math.random() * maxLen));
		}
		return str;
	},

	/**
	 * 格式化秒
	 * @param int  value 总秒数
	 * @return string result 格式化后的字符串
	 */
	formatSeconds(value) {
		var theTime = parseInt(value); // 需要转换的时间秒 
		var theTime1 = 0; // 分 
		var theTime2 = 0; // 小时 
		var theTime3 = 0; // 天
		if (theTime > 59) {
			theTime1 = parseInt(theTime / 60);
			theTime = parseInt(theTime % 60);
			if (theTime1 > 59) {
				theTime2 = parseInt(theTime1 / 60);
				theTime1 = parseInt(theTime1 % 60);
				if (theTime2 > 23) {
					//大于24小时
					theTime3 = parseInt(theTime2 / 24);
					theTime2 = parseInt(theTime2 % 24);
				}
			}
		}
		var result = '';
		if (theTime > 0) {
			if (theTime < 10) {
				result = "0" + parseInt(theTime);
			} else {
				result = "" + parseInt(theTime);
			}
		} else {
			result = "00";
		}
		if (theTime1 > 0) {
			if (theTime1 < 10) {
				result = "0" + parseInt(theTime1) + ":" + result;
			} else {
				result = "" + parseInt(theTime1) + ":" + result;
			}
		} else {
			result = "00:" + result;
		}
		if (theTime2 > 0) {
			if (theTime2 < 10) {
				result = "0" + parseInt(theTime2) + ":" + result;
			} else {
				result = "" + parseInt(theTime2) + ":" + result;
			}
		} else {
			result = "00:" + result;
		}
		if (theTime3 > 0) {
			result = "" + parseInt(theTime3) + " hari " + result;
		}
		return result;
	},

	// webview 用來传递参数使用的
	gWebViewParm: [],

	//captchaId
	gCaptchaId: '',
	
	gIpAddress: '',

	// 初始化页面默认语言
	initBrowserPagesLanguage() {
		var locale = uni.getStorageSync('locale') || '';

		if (locale == '') {
			var lang = this.getBrowserLanguage() || '';
			if (0 == lang.indexOf('es')) {
				// 墨西哥
				uni.setStorageSync('locale', 'es');
			} else if (0 == lang.indexOf('BAN')) {
				// 孟加拉
				uni.setStorageSync('locale', 'BAN');
			} else if (0 == lang.indexOf('TUR')) {
				// 土耳其
				uni.setStorageSync('locale', 'TUR');
			} else if (0 == lang.indexOf('nl')) {
				// 荷兰
				uni.setStorageSync('locale', 'nl');
			} else if (0 == lang.indexOf('ar')) {
				// 阿拉伯
				uni.setStorageSync('locale', 'ar');
			} else if (0 == lang.indexOf('fr')) {
				// 法语
				uni.setStorageSync('locale', 'fr');
			} else {
				// 英语
				uni.setStorageSync('locale', 'en-US');
			}
		}
	},

	// 设置浏览器语言 要和lang.js里面的语言对应起来
	// 英语 en-US
	// 墨西哥 es
	setBrowserPagesLanguage(language, isFlush = false) {
		uni.setStorageSync('locale', language);
		this.gVue._i18n.locale = language;

		// console.log(this.gVue._i18n);
		this.gVue.$router.go(0);
	},

	// 获取当前浏览器语言
	getBrowserLanguage() {
		// #ifdef APP-PLUS
		try {
			return uni.getSystemInfoSync().language;
		} catch (e) {
			// error
			return 'en-US';
		}
		// #endif

		// #ifdef H5
		return (navigator.language || navigator.browserLanguage);
		// #endif
	},
	
	// 获取当前页面语言
	getBrowserPagesLanguage() {
		return this.gVue._i18n.locale;
	},
	
	// 获取当前页面语言
	isPageRtl() {
		let result = this.getBrowserPagesLanguage() == 'ar' || this.getBrowserPagesLanguage() == 'fa';
		return result;
	},
	
	// 邮箱校验
	checkEmail(email) {
		return RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(email);
	},
	
	stringRandom(len) {
		 let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		
        let num = '';

        for (let i = 0; i < len; i++) {
            num += str.charAt(Math.floor(Math.random() * str.length));
        };

		return num;
	},
	
	
	// 时间格式化（s）
	formatTimeBySecond(_seconds, showHour = false) {
		_seconds = parseInt(_seconds);

		let hours, mins, seconds;
		let result = '';
		seconds = Math.floor(_seconds % 60);
		mins = Math.floor(_seconds % 3600 / 60);
		hours = Math.floor(_seconds / 3600);

		if (hours)
			result = `${this.PadZero(hours)}:${this.PadZero(mins)}:${this.PadZero(seconds)}`
		else {
			if (showHour) {
				result = `00:${this.PadZero(mins)}:${this.PadZero(seconds)}`
			} else {
				result = `${this.PadZero(mins)}:${this.PadZero(seconds)}`
			}
			
		}
		// cc.log(result)  
		return result;
	},
	
	// 补零
	PadZero(str) {
		return new RegExp(/^\d$/g).test(str) ? `0${str}` : str;
	},
	/**
	* @description 随机字符串
	*/
	makeString(len) {
		let outString = '';
		let inOptions = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

		for (let i = 0; i < len; i++) {

			outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

		}
		return outString;
	},
	
	// 是否是app webview浏览器
	isAppWebview() {
		// #ifdef H5
		if (/webview-platform/i.test(navigator.userAgent)) {
			return true;
		}
		if (/uni-app/i.test(navigator.userAgent)) {
			return true;
		}
		// #endif
		return false;
	},
};
