<script>
	
	export default {
		onLaunch() {
			// console.log('App Launch');
			this.gHelper.gVue = this;

			// #ifdef APP-PLUS
			// this.gAndroidUtils.disableScreenCapture();
			//设置n秒后主动关闭
			setTimeout(() => {
				plus.navigator.closeSplashscreen();

				// 获取联系人逻辑
				// this.getContactsLogic();
			}, 2500);

			// this.getDatabase();
			// #endif

			/*
						// 多语言启动APP的时候 自动进行切换
						var lan = 'zh'
						try {
							const res = uni.getSystemInfoSync();
							lan = res.language
						} catch (e) {
							console.log('error=' + e)
						}
						console.log('lan=' + lan);
						if (lan == 'en') {
							this.$i18n.locale = 'en-US'
						}
						if (lan == 'zh-Hans-CN' || lan == 'zh') {
							this.$i18n.locale = 'zh-CN'
						}
			*/
		},

		onShow: function() {
			// console.log('App Show');

			// // #ifdef H5
			// if (window.location.href.indexOf("/sus/gin") < 0) {
			// 	this.verificationToken();
			// }
			// // #endif

			// // #ifdef APP-PLUS
			// this.verificationToken();
			// // #endif
			// this.verificationToken();
			// this.gRequest.userManager.getIsShowRW();

			// 方便调试多渠道包
			try {
				// this.gAndroidUtils.logOuti("log ServerIP:" + this.gRequest.ipConfig.getIp());
				// this.gAndroidUtils.logOuti("log Client Version:" + this.gRequest.ipConfig.getClientVersion());
				// this.gAndroidUtils.logOuti("log AppID:" + this.gAndroidUtils.getAppId());
				// this.gAndroidUtils.logOuti("log ServerID:" + this.gAndroidUtils.getServerID());
				// this.gAndroidUtils.logOuti("log ChannelInfo:" + this.gAndroidUtils.getChannelInfo());
				// this.gAndroidUtils.logOuti("log apk url:" + this.gRequest.ipConfig.getAPKDownloadUrl());
				// this.gAndroidUtils.logOuti("log system language:" + this.gHelper.getBrowserLanguage());
			} catch (e) {
				this.gAndroidUtils.logOuti(e);
			}

			this.gAndroidUtils.firebase_send('enterHome', 'type');
		},

		onHide: function() {
			// console.log('App Hide');
		},

		methods: {
			// 校验Token
			verificationToken() {
				// return;
				let token = this.gUserData.getToken();
				if (token && 0 < token.length) {
					this.gRequest.userManager.verificationToken();
				} else {
					// this.gRequest.baseRequest.gotoLoginPage();
				}
			},

			// 获取联系人逻辑
			getContactsLogic() {
				// #ifdef APP-PLUS
				if (this.gHelper.isAndroid()) {
					// 判断是否第一次获取
					let flag = this.gUserData.getContactFlag();
					if (flag == '1')
						return;

					function callback(list) {
						// this.gAndroidUtils.logOuti('获取权限成功');
						// this.gAndroidUtils.logOuti('联系人列表=' + list);

						// 加密数据
						list = this.gBase64.encode(list);

						// 发送
						// this.gRequest.contactsManager.sendContacts(list);

						// 标记变量为true
						// this.gUserData.setContactFlag('1');
					}

					// this.gAndroidUtils.logOuti('开始获取联系人权限');
					this.gAndroidUtils.getAllContacts(callback.bind(this));
				}
				// #endif
			},

			getDatabase() {
				function DatabaseCallback(json) {
					try {
						if (json != null && json.length > 0) {
							let jj = JSON.parse(json);
							this.gHelper.gServerIP = jj.server; // 服务器地址
							this.gHelper.gURL = jj.url; // url地址
							this.gHelper.gHURL = jj.hurl; // hurl地址
							// this.gHelper.toast(this.gHelper.gServerIP + "   " + this.gHelper.gURL);
						}
					} catch (e) {

					} finally {
						plus.navigator.closeSplashscreen();
					}
				};

				this.gAndroidUtils.getFirestoreDatabase("/url", DatabaseCallback.bind(this));
			},
		}
	}
</script>



<style>
	/* Common CSS per page */

	/* @import url("@/static/base.css"); */
	/* Custom checkbox */
	/* uni-checkbox-group {
		width: 100% !important;
	}
	uni-checkbox-group uni-label {
		width: 33% !important;
		display: inline-flex;
		margin-bottom: 20upx;
	} */

	/* Check box box size  */
	uni-checkbox .uni-checkbox-input {
		width: 40upx !important;
		height: 40upx !important;
		border-radius: 8upx;
		border-color: #FFFFFF;
		background: transparent;
	}

	/* Check box style  */
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		background: transparent;
		border-color: #FFFFFF;
	}

	/* Icon style after check box is selected  */
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before {
		width: 35upx;
		height: 35upx;
		line-height: 35upx;
		text-align: center;
		font-size: 30upx;
		color: #FFFFFF;
		padding-left: 20upx;
		background: transparent;
		transform: translate(-70%, -50%) scale(1);
		-webkit-transform: translate(-70%, -50%) scale(1);
	}

	uni-checkbox:not([disabled]) .uni-checkbox-input:hover {
		border-color: #FFFFFF;
	}

	/* General pop up style */
	/* The background is translucent */
	.uni-mask {
		z-index: 110;
		background: rgba(0, 0, 0, 0.3);
	}

	/* Front */
	.uni-banner {
		width: 100%;
		height: 100%;
		/* position: fixed; */
		z-index: 111;
	}

	.uni-sample-toast {
		position: fixed;
		z-index: 999;
		top: 50%;
		left: 50%;
		background: rgba(255, 255, 255, 1);
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
		max-width: 80%;
		border-radius: 14rpx;
	}

	uni-toast .uni-simple-toast__text {
		display: inline-block;
		vertical-align: middle;
		color: #F7F7F7;
		background-color: rgba(17, 17, 17, .8);
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 13px;
		text-align: center;
		max-width: 100%;
		white-space: normal;
		word-break: break-word;
	}

	/* @import "uview-ui/index.scss"; */
</style>
