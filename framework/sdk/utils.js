/**
 * 调用安卓的一些接口
 */
import helper from '@/framework/helper';

export default {
	/**
	 * 日志输出 
	 * Android端无法使用console.log进行输出
	 */
	logOuti(str, TAG = "myApp") {
		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			let Log = plus.android.importClass("android.util.Log");
			Log.i(TAG, str.toString());

		} else if (helper.isIOS()) {
			let Log = plus.ios.importClass("LuaCallOC");
			Log.logOut(str);
		}
		// #endif

		// #ifdef H5
		// console.log(str);
		// #endif
	},

	/**
	 * 获取渠道ID
	 */
	getAppId() {
		let appId = helper.gVue.gRequest.ipConfig.getHtmlAppId();

		return appId;

		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			appId = helper.getAppId(activity);

		} else if (helper.isIOS()) {
			let ios = plus.ios.importClass("LuaCallOC");
			appId = ios.getAppID();
		}
		// #endif

		// #ifdef H5
		appId = helper.gVue.gRequest.ipConfig.getHtmlAppId();
		// #endif

	},

	/**
	 * 获取渠道ID
	 */
	getPlatform() {
		let platform = helper.gVue.gRequest.ipConfig.getAPPDesktopName();

		return platform;

	},


	/**
	 * 获取版本号
	 */
	getVersion() {
		let Version = helper.gVue.gRequest.ipConfig.getClientVersion();

		return Version;

	},

	/**
	 * 获取服务器ID
	 */
	getServerID() {
		let serverid = "";

		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			serverid = helper.getServerID(activity);

		} else if (helper.isIOS()) {
			let ios = plus.ios.importClass("LuaCallOC");
			serverid = ios.getServerID();
		}
		// #endif

		return serverid;
	},

	/**
	 * 获取渠道名称
	 */
	getChannelInfo() {
		let ChannelInfo = "web";

		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			ChannelInfo = helper.getChannelInfo(activity);

		} else if (helper.isIOS()) {
			let ios = plus.ios.importClass("LuaCallOC");
			ChannelInfo = ios.getChannelInfo();
		}
		// #endif

		return ChannelInfo;
	},

	/**
	 * 浏览器打开网页
	 */
	openBrowser(url) {
		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			ChannelInfo = helper.openBrowser(activity, url);

		} else if (helper.isIOS()) {
			let ios = plus.ios.importClass("LuaCallOC");
			serverid = ios.openBrowser(url);
		}
		// #endif

		// #ifdef H5
		if (/(iPhone|iPad|iPod|iOS|Mac)/i.test(navigator.userAgent)) {
			let winOpen = window.open("", "_blank"); //首先打开一个新页面
			setTimeout(function() {
				winOpen.location = url; //改变页面的location
			}, 200);

		} else {
			window.open(url);
		};
		// #endif
	},

	isIosBorwer() {
		// #ifdef H5
		if (/(iPhone|iPad|iPod|iOS|Mac)/i.test(navigator.userAgent)) {
			return true;
		} else {
			return false;
		};
		// #endif
		return false;
	},

	getWinOpen() {
		// #ifdef H5
		let winOpen = window.open("", "_blank"); //首先打开一个新页面

		return winOpen;
		// #endif
	},

	setWinOpenUrl(winOpen, url) {
		// #ifdef H5
		winOpen.location = url;

		// #endif
	},

	/**
	 * 复制文字到系统剪贴板
	 * @param {Object} content 要复制的文字
	 */
	copyToSystemClipboard(content) {
		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var Context = plus.android.importClass("android.content.Context");
			var main = plus.android.runtimeMainActivity();
			var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
			plus.android.invoke(clip, "setText", content);
			return true;

		} else if (helper.isIOS()) {
			var UIPasteboard = plus.ios.importClass("UIPasteboard");
			var generalPasteboard = UIPasteboard.generalPasteboard();
			generalPasteboard.setValueforPasteboardType(content, "public.utf8-plain-text");
			return true;
		}
		// #endif

		// #ifdef H5
		let textarea = document.createElement("textarea")
		textarea.value = content
		textarea.readOnly = "readOnly"
		document.body.appendChild(textarea)
		textarea.select() // 选择对象
		textarea.setSelectionRange(0, content.length) // 核心
		let result = document.execCommand("copy") // 执行浏览器复制命令
		textarea.remove()
		return true;
		// #endif

		return false;
	},


	/**
	 * 从系统剪贴板读取内容
	 */
	getFromSystemClipboard() {
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				var Context = plus.android.importClass("android.content.Context");
				var main = plus.android.runtimeMainActivity();
				var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
				return plus.android.invoke(clip, "getText");

			case 'ios':
				var UIPasteboard = plus.ios.importClass("UIPasteboard");
				var generalPasteboard = UIPasteboard.generalPasteboard();
				return generalPasteboard.valueForPasteboardType("public.utf8-plain-text");

			default:
				// console.log('仅发布到APP才能复制到系统剪贴板');
				break;
		}
		return '';
	},

	/**
	 * 禁止系统截屏
	 */
	disableScreenCapture() {
		try {
			// #ifdef APP-PLUS
			if (helper.isAndroid()) {
				var activity = plus.android.runtimeMainActivity();
				let helper = plus.android.importClass("org.app.sdk.helper");
				helper.disScreenCapture(activity);

			} else if (helper.isIOS()) {

			}
			// #endif

		} catch (e) {

		}
	},

	/**
	 * 请求读取联系人权限
	 */
	getAllContacts(callback) {
		try {
			// #ifdef APP-PLUS
			if (helper.isAndroid()) {
				// 变量接口
				var hevent = plus.android.implements("org.app.sdk.ContactsInterfact", {
					onGetContactsSuccess: function(list) {
						if (callback) {
							callback(list);
						}
					},
				});

				var activity = plus.android.runtimeMainActivity();
				let ContactsUtils = plus.android.importClass("org.app.sdk.ContactsUtils");
				ContactsUtils.addPermissByPermissionList(activity, 'android.permission.READ_CONTACTS', 1, hevent);

			} else if (helper.isIOS()) {

			}
			// #endif

		} catch (e) {

		}
	},

	/**
	 * 读取相册图片
	 */
	openPhotoUI(callback) {
		try {
			// #ifdef APP-PLUS
			if (helper.isAndroid()) {
				// 变量接口
				var hevent = plus.android.implements("org.app.sdk.OpenPhotoInterfact", {
					onGetPhotoSuccess: function(strBase64) {
						if (callback) {
							callback(strBase64);
						}
					},
				});

				var activity = plus.android.runtimeMainActivity();
				let OpenPhotoUtils = plus.android.importClass("org.app.sdk.OpenPhoto");
				OpenPhotoUtils.OpenPhotoUI(activity, hevent);

			} else if (helper.isIOS()) {

			}
			// #endif

		} catch (e) {

		}
	},
	/**
	 * 获取设备唯一ID
	 */
	getDeviceID() {
		let deviceId = "";

		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			deviceId = helper.getDeviceID(activity);

		} else if (helper.isIOS()) {

		}
		// #endif

		return deviceId;
	},

	firebase_send(event, name) {
		try {
			// #ifdef APP-PLUS
			if (helper.isAndroid()) {
				var activity = plus.android.runtimeMainActivity();
				let helper = plus.android.importClass("org.app.sdk.helper");
				helper.firebaseLogEvent(activity, name, event);

				helper.facebookLogEvent(activity, name, event);

				var token = {
					"openRegPages": "7fpytt",
					"打开充值页面": "owoak8",
					"打开提现页面": "bz1lo6",
					"开始提现": "5jw0g9",
					"openGame": "et0zlh",
					"url充值 充值记录页面充值": "i7bo1m",
					"开始充值": "t693cw",
					"clickRegister": "unh69j",
					"regOK": "tepn20",
					"enterHome": "r3pqnw",
				};
				helper.adjustEvent(token[event], event, name);

			} else if (helper.isIOS()) {

			}
			// #endif

			// #ifdef H5
			if (window.firebase != null && window.firebase.logEvent != null && window.firebase.analytics != null) {
				window.firebase.logEvent(window.firebase.analytics, event);
			}
			if (FB != null) {
				FB.AppEvents.logEvent(event);
			}
			// #endif

		} catch (e) {

		}
	},

	/**
	 * 在线客服
	 */
	startFullScreenLiveChat(username) {
		try {
			// #ifdef APP-PLUS
			if (helper.isAndroid()) {
				var activity = plus.android.runtimeMainActivity();
				let helper = plus.android.importClass("org.app.sdk.helper");
				helper.startFullScreenLiveChat(activity, username);

			} else if (helper.isIOS()) {

			}
			// #endif

		} catch (e) {

		}
	},

	// 获取firebase的realtime数据库
	getFirestoreDatabase(path, callback) {
		try {
			// #ifdef APP-PLUS
			if (helper.isAndroid()) {
				var hevent = plus.android.implements("org.app.sdk.FirestoreInterfact", {
					onGetDatabase: function(json) {

						if (callback) {
							callback(json);
						}
					},
				});

				var activity = plus.android.runtimeMainActivity();
				let helper = plus.android.importClass("org.app.sdk.helper");
				helper.getFirestoreDatabase(activity, path, hevent);

			} else if (helper.isIOS()) {

			}
			// #endif

		} catch (e) {

		}
	},

	/*

						// 登入
						this.gAndroidUtils.login_facebook((res) => {
							console.log("login");
							console.log(res)
						});
						// 登出
						this.gAndroidUtils.logout_facebook((res) => {
							console.log("logout");
							console.log(res);
						});
						// 登入状态检查
						this.gAndroidUtils.loginStatus_facebook((res) => {
							console.log("loginStatus_facebook");
							console.log(res);
						});
	*/
	// facebook login
	login_facebook(cb_fb_login) {
		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var hevent = plus.android.implements("org.app.sdk.loginCallbackInterfact", {
				onCallback: function(str) {
					if (cb_fb_login) {
						cb_fb_login(str);
					}
				},
			});

			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			helper.loginFacebook(activity, hevent);

		} else if (helper.isIOS()) {

		}
		// #endif

		// #ifdef H5
		FB.login(function(response) {
			if (null != cb_fb_login) {
				cb_fb_login(response);
			}
		});
		// #endif
	},

	// facebook logout
	logout_facebook(cb_fb_logout) {
		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var hevent = plus.android.implements("org.app.sdk.loginCallbackInterfact", {
				onCallback: function(str) {
					if (cb_fb_logout) {
						cb_fb_logout(str);
					}
				},
			});

			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			helper.logoutFacebook(activity, hevent);

		} else if (helper.isIOS()) {

		}
		// #endif

		// #ifdef H5
		// FB.logout();
		let response = {
			status: 'connected',
		};
		FB.getLoginStatus(function(response) {
			FB.logout(function(response) {
				if (null != cb_fb_logout) {
					cb_fb_logout(response);
				}
			});
		});
		// #endif
	},

	// facebook 登录状态
	loginStatus_facebook(statusChangeCallback) {
		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			// helper.getFirestoreDatabase(activity, path, hevent);

		} else if (helper.isIOS()) {

		}
		// #endif

		// #ifdef H5
		let response = {
			status: 'connected',
		};
		FB.getLoginStatus(function(response) {
			if (null != statusChangeCallback) {
				statusChangeCallback(response);
			}
		});
		// #endif
	},


	//////////////////////////////////////////////////////////////////////////////////////////
	/*
		this.gAndroidUtils.login_google((res) => {
			console.log(res);
		});
		this.gAndroidUtils.logout_google(() => {
			console.log("logout");
		});
	*/
	login_google(cb_google_login) {
		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var hevent = plus.android.implements("org.app.sdk.loginCallbackInterfact", {
				onCallback: function(str) {
					if (cb_google_login) {
						cb_google_login(str);
					}
				},
			});

			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			helper.loginGoogle(activity, hevent);

		} else if (helper.isIOS()) {

		}
		// #endif

		// #ifdef H5
		const provider = new window.firebase.GoogleAuthProvider();
		window.firebase.signInWithPopup(window.firebase.auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = window.firebase.GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				if (null != cb_google_login) {
					cb_google_login({
						credential,
						user
					})
				}
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = window.firebase.GoogleAuthProvider.credentialFromError(error);
				if (null != cb_google_login) {
					cb_google_login(null);
				}
			});

		// #endif
	},

	logout_google(cb_google_logout) {
		// #ifdef APP-PLUS
		if (helper.isAndroid()) {
			var hevent = plus.android.implements("org.app.sdk.loginCallbackInterfact", {
				onCallback: function(str) {
					if (cb_google_logout) {
						cb_google_logout(str);
					}
				},
			});

			var activity = plus.android.runtimeMainActivity();
			let helper = plus.android.importClass("org.app.sdk.helper");
			helper.logoutGoogle(activity, hevent);

		} else if (helper.isIOS()) {

		}
		// #endif

		// #ifdef H5
		window.firebase.signOut(window.firebase.auth).then(() => {
			// Sign-out successful.
			if (cb_google_logout != null) {
				cb_google_logout();
			}
		}).catch((error) => {
			// An error happened.
		});
		// #endif
	},
}
