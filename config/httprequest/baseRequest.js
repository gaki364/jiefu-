/**
 * 用户登录 登出
 * 用户相关的请求都放这里
 */

import ipConfig from '../ipConfig.js';
import userdata from '../userdata.js';
import helper from '@/framework/helper.js';
import utils from '@/framework/sdk/utils.js';
import JSEncrypt from '@/framework/jsencrypt/bin/jsencrypt.js';
import base64 from '@/framework/base64/base64.js';
import httputils from '@/framework/request/utils.js';

import {
	http
} from '@/framework/request';
import {
	MD5
} from '@/framework/md5/md5.js';


export default class baseRequest {
	static defaultIp = ipConfig.getIp(); // 服务器IP地址

	static isRunLogin = false; // 是否已经在登录界面
	static showLoginPop = false;


	/**
	 * 消息提示
	 * @param {Object} msg
	 */
	static toast(msg) {
		helper.toast(msg);
	}

	/**
	 * 计算MD5
	 * @param {Object} str
	 */
	static MD5(str) {
		return MD5(str);
	}

	/**
	 * 跳转到首页
	 */
	static gotoMainPage() {
		this.isRunLogin = false;
		// console.log('跳转到主页');
		uni.switchTab({
			url: '/game/idx1',
			
			fail(error) {
				console.log(error)
			}
		});
	}
	
	/**
	 * 跳转到登录页面
	 */
	static gotoLoginPage() {
		if (false == this.isRunLogin) {
			this.isRunLogin = true;

			// console.log('跳转到登入');
			userdata.logout();
			uni.reLaunch({
				url: '/game/idx1',
				
				fail(error) {
					console.log(error)
				}
			});
		}
		
		
	}
	
	static gotoLoginPage2(toRe) {
		let key = "";
		if (toRe) {
			key = "?curPage=1"
		}
		userdata.logout();
		uni.reLaunch({
			url: '/ll' + key,
			
			fail(error) {
				console.log(error)
			}
		});
	}

	/**
	 * 跳转到充值页面
	 */
	static gotoRecharge() {
		uni.navigateTo({
			url: '/sus/money/Recharge',
		});
	}


	static postCount = 0;
	static lodingTimer = null;
	/**
	 * loading显示
	 */
	static loadingShow() {
		this.postCount += 1;
		if (null == this.lodingTimer) {
			uni.showLoading({
				mask: true
			});
		}

		if (this.lodingTimer) {
			clearTimeout(this.lodingTimer);
			this.lodingTimer = null;
		}
		this.startTimer();
	}

	/**
	 * 启动定时器
	 */
	static startTimer() {
		if (this.lodingTimer == null) {
			this.lodingTimer = setTimeout(function() {
				this.postCount = 0;
				this.loadingHide();
			}.bind(this), 5000);
		}
	}

	/**
	 * 取消loading显示
	 */
	static loadingHide() {
		this.postCount -= 1;

		if (this.postCount <= 0) {
			this.postCount = 0;

			if (this.lodingTimer) {
				uni.hideLoading();
				clearTimeout(this.lodingTimer);
				this.lodingTimer = null;
			}
		}
	}

	/**
	 * 开始从服务器请求数据
	 */
	static requestPost(config = {}, fun_success, fun_error) {
		// 是否显示转圈提示
		let isShowLoading = config.noLoading;
		if (isShowLoading == null) {
			isShowLoading = true;
		}
		// #ifdef APP-PLUS
		isShowLoading = isShowLoading && !plus.navigator.hasSplashscreen();
		// #endif
		if (isShowLoading) {
			this.loadingShow();
		}

		// 头
		let header = {
			'Content-Type': 'application/json'

		};

		// 参数
		if (config.isAddToken === false) {

		} else {
			header['token'] = helper.gVue.gUserData.getToken();
			console.log('添加token:');
			console.log(header);
		}

		// 传递的参数
		let timeStamp = helper.getUTC();

		// 参数排序
		let arr = [];
		let configData = config.data || {};
		for (let key in (configData)) {
			arr.push(key);
		}
		arr = arr.sort();
		let newData = {};
		for (let i in arr) {
			let itemKey = arr[i];
			newData[itemKey] = configData[itemKey];
		}

		let reqData = newData;
		let md5str = '1000001' + timeStamp + JSON.stringify(reqData);
		let sign = MD5(md5str);
		let device = utils.getDeviceID();
		let ip = helper.gIpAddress;
		let data = {
			sign,
			device,
			timeStamp,
			reqData,
			ip,
		};
		
		data = httputils.get3DESEncryption(JSON.stringify(data));
		config.baseUrl = helper.gServerIP || config.baseUrl || this.defaultIp;
		config.apiUrl = config.apiUrl || '';

		http.post(
			config.baseUrl + config.apiUrl, header, data
		).then(
			// 成功
			(res) => {

				// res = encryptor.decrypt(res)
				res = JSON.parse(httputils.get3DESDecrypt(res));
				// res = JSON.parse(res);
				
				if (isShowLoading) {
					this.loadingHide();
				}

				if (res.Code == 5005) {
					// 跳转到登录页面
					// console.log('跳转到登录页面,重新登录');
					this.isRunLogin = false;
					uni.stopPullDownRefresh();
					baseRequest.showLoginPop = true;
					baseRequest.gotoLoginPage();

				} else if (res.Code == 50005) {
					this.isRunLogin = false;
					uni.stopPullDownRefresh();
					baseRequest.showLoginPop = true;
					baseRequest.gotoLoginPage();
					
				} else if (fun_success) {
					setTimeout(function() {
						uni.stopPullDownRefresh();
					}, 300);

					fun_success(res);
				}
			},
			// 失败
			(err) => {
				if (isShowLoading) {
					this.loadingHide();
				}

				uni.stopPullDownRefresh();
				if (fun_error) {
					fun_error();
				}
			}
		);
	}
}
