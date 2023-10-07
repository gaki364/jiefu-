/**
 * 用户登录 登出
 * 用户相关的请求都放这里
 */
import baseRequest from '@/config/httprequest/baseRequest.js';
import MD5 from '@/framework/md5/md5.js';
import userdata from '../userdata.js';
import utils from '@/framework/sdk/utils.js';
import mainManager from '@/config/httprequest/mainManager.js'

export default class userManager {
	// 监听事件
	event = {
		login: 'event_login', // 登录
		logout: 'event_logout', // 登出
		register: 'event_register', // 注册
		sms: 'event_sms', // 发送验证码
		forget: 'event_forget', // 忘记密码
		userInfo: 'event_userInfo', // 首页用户基本信息
		modifyNickName: 'event_modifyNickName', // 修改昵称
	};

	// 维护的用户信息
	userInfoData = {};
	getSmobilesData = null;
	OfficialData = null;
	//是否显示充值 默认显示
	isShowRW = 1;
	isBz = false;
	reCode = "";

	/**
	 * 登入
	 * 服务器返回:
		Body: {Token: "373f2310a13090ee06fd97ad05aa0bdad"}
		Code: 200/其他
		Msg: ""
	 */
	login(captchaId, verifyCode, username, password, callBack) {
		password = baseRequest.MD5(password);
		// password = baseRequest.MD5(password);
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		this.getSmobilesData = null

		baseRequest.requestPost({
			apiUrl: '/v1/api/player/login',
			isAddToken: false,
			data: {
				captchaId,
				verifyCode,
				username,
				password,
				platform,
				appId,
			},

		}, function(r) {
			// 成功
			console.log('login',r)
			if (r.Code === 200) {
				userdata.login({
					token: r.Body.Token,
				});
				this.getSmobiles();
				if (callBack) {
					callBack();
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 登出
	 */
	logout() {
		this.userInfoData = null;
		userdata.logout();
		this.isBz = false;

		baseRequest.requestPost({
			apiUrl: '/v1/api/player/logout',
			data: {},

		}, function(r) {
			if (r.Code === 200) {
				uni.$emit(this.event.logout);
			}
			if (r.Msg && r.Msg.length > 0) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 注册
		{
		  "Code": 501,
		  "Msg": "register error, verification code error",
		  "Body": null
		}
		{
		  "Code": 200,
		  "Msg": "",
		  "Body": {
			"PlayerName": "111",
			"Password": "3049a1f0f1c808cdaa4fbed0e01649b1",
			"PlayerId": 14
		  }
		}
	 */
	register(captchaId, email, areaCode, verifyCode, playerName, verificationCode, passWord, repeatPassword, referralCode, username, name, number, bankCode, callBack) {
		let appId = utils.getAppId();
		let lcAppid = userdata.getLocalAppId();
		if (lcAppid && lcAppid.length > 0) {
			appId = lcAppid;
		}
		passWord = baseRequest.MD5(passWord);
		repeatPassword = baseRequest.MD5(repeatPassword);
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/register',
			isAddToken: false,
			data: {
				captchaId,
				verifyCode,
				playerName,
				passWord,
				repeatPassword,
				referralCode,
				appId,
				areaCode,
				email,
				verificationCode,
				username,
				platform,
				name,
				number,
				bankCode,
			},

		}, function(r) {
			console.log(r)
			// 注册成功
			if (r.Code === 200) {
				userdata.login({
					token: r.Body.Token,
				});
				userdata.removeLocalAppId();
				userdata.removeRfcode();
				if (callBack) {
					callBack();
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 发送短信验证码
	 * @param {Object} playerName
	 */
	sendSMS(areaCode, playerName, cbFun) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/sendOpt',
			isAddToken: false,
			data: {
				areaCode,
				playerName,
				appId,
				platform,
			},

		}, function(r) {
			if (r.Code === 200) {
				if (cbFun) {
					cbFun();
				}
			}
			if (r.Msg && r.Msg.length > 0) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	/**
	 * 发送短信验证码
	 * @param {Object} playerName
	 */
	sendSMS2(cbFun) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/authSendOpt',
			data: {
				
			},

		}, function(r) {
			if (r.Code === 200) {
				if (cbFun) {
					cbFun();
				}
			}
			if (r.Msg && r.Msg.length > 0) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 忘记密码
	 */
	forget(areaCode, playerName, verificationCode, passWord, repeatPassword, email, cbFun) {
		passWord = baseRequest.MD5(passWord);
		repeatPassword = baseRequest.MD5(repeatPassword);
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/forgetPassword',
			isAddToken: false,
			data: {
				playerName,
				verificationCode,
				passWord,
				repeatPassword,
				areaCode,
				email,
				appId,
				platform,
			},

		}, function(r) {
			if (r.Code === 200) {
				if (cbFun) {
					cbFun();
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 验证Token是否有效
	 */
	verificationToken() {
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/tkExp',
			data: {},
			noLoading: false,

		}, function(r) {
			if (r.Code !== 200) {
				if (r.Msg && r.Msg.length > 0) {
					baseRequest.toast(r.Msg);
				}
				userdata.logout();
			}

		}.bind(this));
	}

	/**
	 * 获取首页用户信息
		{
		  "Code": 200,
		  "Msg": "",
		  "Body": {
			"PlayerId": 14,
			"NickName": "111",
			"Avatar": "1",
			"Level": 1,
			"TotalAssets": 0,
			"YesterdayEarn": 0,
			"TodayEarn": 0,
			"CumulativeIncome": 0
		  }
		}
	 */
	userInfo(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/playerMain/mainInfo',
			data: {},

		}, function(r) {
			if (r.Code === 200) {
				this.userInfoData = r.Body;
				this.isBz = r.Body.IsBlogger;
				if (callBack) {
					callBack(r.Body)
				}
				
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 获取客服URL google包 注册界面使用
	 */
	getGp(fun_cb) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/apk/getGp',
			isAddToken: false,
			data: {},

		}, function(r) {
			if (r.Code === 200) {
				if (fun_cb) {
					fun_cb(r.Body);
				}
			}
			if (r.Msg && r.Msg.length > 0) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * google包判断是否进入注册界面
	 */
	getIsLogin(fun_cb) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/apk/getIsLogin',
			isAddToken: false,
			data: {},

		}, function(r) {
			if (r.Code === 200) {
				if (fun_cb) {
					fun_cb(r.Body);
				}
			}
			if (r.Msg && r.Msg.length > 0) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 获取客服
	 */
	getSmobiles(fun_cb) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/apk/smobiles',
			data: {
				appId,
				platform,
			},

		}, function(r) {
			if (r.Code === 200) {
				
				this.getSmobilesData = r.Body;
				if (fun_cb) {
					fun_cb(r.Body);
				}
			}
			if (r.Msg && r.Msg.length > 0) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 获取验证码
	 */
	getCaptcha(fun_cb) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/captcha',
			isAddToken: false,
			data: {},

		}, function(r) {
			if (r.Code === 200) {
				if (fun_cb) {
					fun_cb(r.Body);
				}
			}
			
			if (r.Msg && r.Msg.length > 0) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	/**
	 * 获取首页客户端版本信息 安卓和web
	 */
	getMainVersion(cbFun) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/apk/version',
			data: {
				appId,
				platform,
			},
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (cbFun) {
					cbFun(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	/**
	 * 获取首页客户端版本信息 IOS
	 */
	getMainVersion_IOS1(cbFun) {
		let appId = utils.getAppId();
		baseRequest.requestPost({
			apiUrl: '/v1/api/apk/appleVersion',
			data: {
				appId
			},
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (cbFun) {
					cbFun(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	
	/**
	 * 保存邮箱
	 */
	bindMail(mail, cbFun) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/bindMail',
			data: {
				mail,
			},
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (cbFun) {
					cbFun(r.Body);
				}
			}
			if (r.Msg && r.Msg.length > 0) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	
	/**
	 * 忘记资金密码
	 */
	forgetFundPassword(playerName, verificationCode, passWord, repeatPassword, cbFun) {
		passWord = baseRequest.MD5(passWord);
		repeatPassword = baseRequest.MD5(repeatPassword);
		baseRequest.requestPost({
			apiUrl: '/v1/api/account/forget-fund-password',
			data: {
				playerName,
				passWord,
				repeatPassword,
				verificationCode,
			},
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (cbFun) {
					cbFun(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	
	/**
	 * 
	 */
	getHome(cbFun) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/home',
			data: {
				appId,
				platform,
			},
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				this.getSmobilesData = r.Body.ServicesMobiles;
				mainManager.announcementData = r.Body.Announcements;
				this.OfficialData = r.Body.OfficialServicesMobiles;
				if (cbFun) {
					cbFun(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	
	/**
	 * getOfficial
	 */
	getOfficial(callBack) {
		
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/service/official',
			data: {
				platform,
			},
	
		}, function (r) {
			// 成功
			if (r.Code === 200) {
				this.OfficialData = r.Body;
				if (callBack) {
					callBack(r.Body);
				}
	
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	
	/**
	 * 确认个人消息
	 */
	confirmMessage(playerMessageId) {
		// baseRequest.requestPost({
		// 	apiUrl: '/v1/api/message/confirm',
		// 	data: {
		// 		playerMessageId,
		// 	},
		// }, function(r) {
		// 	// 成功
		// 	if (r.Code === 200) {
		// 		if (cbFun) {
		// 			cbFun(r.Body);
		// 		}
		// 	} else if (r.Msg) {
		// 		baseRequest.toast(r.Msg);
		// 	}
		// }.bind(this));
	}
	
	
	/**
	 * 获取封禁区号
	 */
	getResArea(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/res-area',
			isAddToken: false,
			data: {},
	
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	
	/**
	 * 谷歌是否显示充值
	 */
	getIsShowRW(callBack) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		let version = utils.getVersion();
		baseRequest.requestPost({
			apiUrl: '/v1/api/package/config',
			isAddToken: false,
			data: {
				appId,
				platform,
				version,
			},
	
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	
	/**
	 *updateBalance
	 */
	flushPlayerPoint(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/updateBalance',
			data: {
			},
	
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				this.userInfoData.TotalAssets = r.Body;
				if (callBack) {
					callBack(r.Body);
				}
	
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	/**
	 * getAnnouncementGroup
	 */
	getAnnouncementGroup(cbFun) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/announcement/group',
			data: {
				appId,
				platform,
			},
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (cbFun) {
					cbFun(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	/**
	 * updateNickname
	 */
	updateNickname(username, cbFun) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/updateNickname',
			data: {
				username,
			},
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (cbFun) {
					cbFun(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
		
	/**
	 * announcementAgent
	 */
	announcementAgent(cbFun) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/announcement/agent',
			data: {
				
			},
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (cbFun) {
					cbFun(r.Body);
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
}
