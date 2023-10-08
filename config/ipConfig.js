/**
 * IP 地址配置
 * */
import utils from '@/framework/sdk/utils.js'

const CONFIG = {
	getIp () {
		let baseUrl = ""

		// #ifdef APP-PLUS
		let arrServerIP = {
			'serverDebug1': 'https://unique-api.uniquemetau.com',
			'serverDebug2': 'https://unique-api.uniquemetau.com',
			'serverRel1': 'https://idnbetapi.idnbet8.com/', // 正式服1
			// 'serverRel1': 'https://jfbapi-beta.jiefubet.com/', // 正式服1
			// 'serverRel1': 'https://me6ymw3xq3ic.ngrok.xiaomiqiu123.top', // 正式服1
		}
		let serverID = utils.getServerID()
		baseUrl = arrServerIP[serverID]
		// #endif




		// #ifdef H5
		// 测试版 内网 服务器
		// baseUrl = 'http://192.168.10.109:8080'; // 后台接口请求地址
		// baseUrl = 'http://192.168.10.17:8080'; // 后台接口请求地址

		// 正式版服务器地址
		// baseUrl = 'https://www.ola-win.com';
		// baseUrl = 'http://192.168.31.169:8001'
		// baseUrl = 'https://www.eitabet.com';
		// baseUrl = 'https://www.slotdasortebet.com';
		// baseUrl = 'http://192.168.1.197:8888';
		// baseUrl = 'http://2rng8j.natappfree.cc';
		// baseUrl = 'https://me6ymw3xq3ic.ngrok.xiaomiqiu123.top';
		// #endif

		// utils.logOuti('server ip:' + baseUrl);
		// baseUrl = 'https://www.brrealbet777.com'
		baseUrl = 'https://www.royale777slots.com'
		
		
		
		return baseUrl
	},

	getDownloadUrl () {
		return "https://img.brrealbet777.com/b/apk/index.html"
	},

	/**
	 * 获取客户端版本号
	 */
	getClientVersion () {
		let baseVersion = "0.0.0"

		// #ifdef APP-PLUS
		// 渠道版本号配置
		let arrVersion = {
			'1000001': '3.0.2',
		}
		let appId = utils.getAppId()
		baseVersion = arrVersion[appId]

		// utils.logOuti('apk version:' + baseVersion);
		// #endif

		return baseVersion
	},

	/**
	 *  获取IOS版本号 和 android版本号区分开来  
	 *  注意:安卓在上面设置
	 */
	getClientIOSVersion () {
		let baseVersion = "0.0.0"

		// #ifdef APP-PLUS
		// IOS 渠道版本号配置
		let arrVersion = {
			'1000001': '3.0.2',
		}
		let appId = utils.getAppId()
		baseVersion = arrVersion[appId]

		// utils.logOuti('apk version:' + baseVersion);
		// #endif

		return baseVersion
	},

	/**
	 * APK下载地址
	 */
	getAPKDownloadUrl () {
		if (/(iPhone|iPad|iPod|iOS|Mac)/i.test(navigator.userAgent)) {
			// ios
			// return 'https://123/Q6IhRYT5';
			return 'https://download.allwin568.com/apk/allwin.apk'

		} else {
			// android
			return 'https://download.allwin568.com/apk/allwin.apk'
		}
	},

	/**
	 * 获取应用程序名字
	 * 不调用底层,因为web没有底层
	 */
	getAPPDesktopName () {
		return "BRBET"
	},

	/**
	 * 获取H5版本的渠道ID
	 */
	getHtmlAppId () {
		// #ifdef H5
		// return "1000001";
		// #endif

		return "1000001"
	},

	/**
	 * 隐私协议地址
	 */
	getPrivacyAgreementURL () {
		return 'https://www.google.com'
	},


}

export default CONFIG
