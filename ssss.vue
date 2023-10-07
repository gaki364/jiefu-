<template>
	<view class="box">
		<!-- 登录 -->
		<image :src="gAssets.backImg" v-if="currentIndex === 0" mode="widthFix" style="width: 72rpx; height: 72rpx; margin: auto; position: fixed; top: 60rpx; right: 60rpx; z-index: 99;"
		 @click="onbuttonClick_back()"></image>
		<view class="login" v-show="currentIndex === 0">
			<view class="item" id="loginitem">
				<image :src="gAssets.login_logo" mode="widthFix" style="width: 345rpx; margin: auto; margin-top: 10%;"></image>
				<view style="height: 10rpx;"></view>
				<view class="logInputBg" style="margin-top: 10rpx;">
					<!-- 中间的 账号 密码 登录 -->
					<view class="middle_item">
						<view style="height: 30rpx;"></view>
					
						<view class="middle_item_bg">
							<view style="height: 40rpx;"></view>
					
							<!-- 账号 -->
							<view style="color: #FFFFFF; margin-left: 50rpx; font-size: 24rpx; height: 40rpx;">{{this.$t("KEY_LOGIN_PN")}}</view>
							<view class="loginInputBg">
								<image mode="aspectFit" style="width: 41rpx;" class="lefticon" :src="img_phone"></image>
								<view class="AreaCode">{{AreaCode}}</view>
								<input class="login-type-input" :placeholder="register_phone" type="text" v-model="loginParams.mobile" maxlength="11"></input>
							</view>
							<!-- <view class="hengxian"></view> -->
							<view style="height: 30rpx;"></view>
					
							<!-- 密码 -->
							<view style="color: #FFFFFF; margin-left: 50rpx; font-size: 24rpx; height: 40rpx;">{{this.$t("KEY_LOGIN_PW")}}</view>
							<view class="loginInputBg">
								<image mode="aspectFit" style="width: 41rpx;" class="lefticon" :src="img_pw1"></image>
								<input class="login-type-input" :placeholder="login_password" type="password" v-model="loginParams.password"
								 maxlength="30"></input>
								<!-- <input class="login-type-input" :placeholder="login_password" type="password" v-model="loginParams.password"
								 v-if="!loginParams.show" maxlength="30"></input>
								<input class="login-type-input" :placeholder="login_password" type="text" v-model="loginParams.password" v-if="loginParams.show"
								 maxlength="30"></input> -->
								<!-- <image mode="aspectFit" class="righticon" :src="loginParams.show ? img_password:img_passwordShow" @click="onClickButton_See('login')"></image> -->
							</view>
							<!-- <view class="hengxian"></view> -->
							<view style="height: 30rpx;"></view>
					
							<!-- 验证码 -->
							<view style="color: #FFFFFF; margin-left: 50rpx; font-size: 24rpx; height: 40rpx;">{{this.$t("KEY_LOGIN_CODE")}}</view>
							<view class="loginInputBg">
								<!-- <image mode="aspectFit" class="lefticon" :src="img_pw1"></image> -->
								<input class="login-type-input" :placeholder="login_vericode" v-model="loginParams.yzm" maxlength="30"></input>
							</view>
							<!-- <view class="hengxian"></view> -->
							<view style="height: 0rpx;"></view>
					
							<comCaptcha style="background-color: #FFFFFF; width: 40%; margin: auto;" ref='comCaptcha1' v-if="currentIndex===0"></comCaptcha>
					
							<view style="height: 20rpx;"></view>
							<view class="hengzhe" style="">
								<!-- 注册按钮 -->
								<!-- <view class="commonBtnBg" style="width: 45%;" @click="onClickButton_RegisterPage">
									<image :src="gAssets.imgRegister" style="width: 56rpx; position: absolute; top: 16rpx; left: 26rpx;" mode="widthFix"></image>
									<view style="line-height: 83rpx; width: 84%; text-align: center; right: 0rpx; position: absolute;">{{$t("KEY_LOGIN_REGISTER")}}</view>
								</view> -->
					
								<!-- 登录按钮 -->
								<view class="commonBtnBg" style="display: flex; background: linear-gradient(#EEBF45, #FBDE50);" @click="onClickButton_Login">
									<image :src="gAssets.imgLogin" style="width: 41rpx; margin: auto 20rpx auto 100rpx;" mode="widthFix"></image>
									<view style="text-align: center; line-height: 70rpx; margin: auto auto auto 90rpx; color: #4B4C99; font-weight: 600;">{{this.login_button}}</view>
								</view>
							</view>
					
							<view style="height: 80rpx; width: 90%; "></view>
						</view>
					</view>
					<view style="display: flex; width: 100%;">
						<!-- 隐私协议 -->
						<view class="hengzhe" style="margin: auto;">
							<checkbox-group>
								<view>
									<checkbox :checked="PrivacyPolicy?true:false"></checkbox>
								</view>
							</checkbox-group>
							<view class="privacyagreenment" style="margin: auto;" @click="onClickButton_PrivacyAgreement">{{$t('KEY_LOGIN_PRIVACY')}}</view>
						</view>
						<view class="privacyagreenment" style="margin: auto;" @click="onClickButton_RegisterPage">{{$t('KEY_LOGIN_REGISTER')}}</view>
					</view>
				</view>
				
			</view>
			
			<!-- Register Forget password -->
			<!-- <view class="bottom-btn" :style="{'margin-top': dyMarginTopPX,}"> -->
				<!-- <view class="forgetbutton" @click="onClickButton_ForgetPasswordPage">{{$t('KEY_LOGIN_FORGOT')}}</view> -->
				<!-- <view style="height: 10rpx;"></view> -->

				<!-- 隐私协议 -->
				<!-- <view class="hengzhe">
					<checkbox-group class="rememberPrivacy">
						<view>
							<checkbox :checked="PrivacyPolicy?true:false"></checkbox>
						</view>
					</checkbox-group>
					<view class="privacyagreenment" @click="onClickButton_PrivacyAgreement">{{$t('KEY_LOGIN_PRIVACY')}}</view>
				</view> -->

				<!-- 下载APP -->
				<!-- #ifdef H5 -->
				<!-- 				<view class="downloadapp" @click="onButtonClick_DownlaodAPK()">
					<view>{{$t('KEY_LOGIN_DOWNLOAD')}}</view>
					<image :src="gAssets.login_download" mode="widthFix" style="margin-left: 10rpx; width: 280rpx;"></image>
				</view> -->
				<!-- #endif -->
			<!-- </view> -->
			<view style="height: 20rpx;"></view>
			<comBottom></comBottom>
		</view>


		<!-- 注册 -->
		<view class="register" v-show="currentIndex === 1">
			<unititle :titleText="register_title" titleEvent="registerClick" @registerClick="onClickButton_Back"></unititle>

			<view class="item">
				<!-- <view style="height: 20rpx;"></view> -->

				<view class="middle_item_color">
					<view class="middle_item_bg">
						<view style="height: 50rpx;"></view>

						<!-- 手机号 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_PN")}}</view>
						<view class="input-item">
							<view class="AreaCode">{{AreaCode}}</view>
							<input class="login-type-input" style="margin: auto; margin-left: 10rpx;" :placeholder="register_phone" type="number"
							 v-model="registerParams.mobile" maxlength="11"></input>
						</view>
						<view style="height: 30rpx;"></view>
						
						<!-- 用户名 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{'Nome de usuário'}}</view>
						<view class="input-item">
							<input class="login-type-input" style="margin: auto; margin-left: 10rpx;" :placeholder="'Insira o Nome de usuário'" type="text"
							 v-model="registerParams.username" maxlength="99"></input>
						</view>
						<view style="height: 30rpx;"></view>
						<!-- <view class="hengxian"></view> -->

						<!-- 短信验证 -->
						<!-- <view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_CODE")}}</view>
						<view class="input-item">
							<input class="login-type-input" :placeholder="register_sms" type="number" v-model="registerParams.sms" maxlength="4"></input>
							
							<view class="smsButton" v-if="registerParams.CountdownTimer === '0'" @click="onClickButton_Countdown('register')">
								{{register_send}}
							</view>
							<view class="smsDown" v-if="registerParams.CountdownTimer !== '0'"> {{registerParams.CountdownTimer}}s </view>
						</view>
						<view style="height: 30rpx;"></view> -->
						<!-- <view class="hengxian"></view> -->

						<!-- 密码1 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_P1")}}</view>
						<view class="input-item">
							<image mode="aspectFit" class="lefticon" style="width: 40rpx;" :src="img_pw1"></image>
							<input class="login-type-input" :placeholder="register_password" type="password" v-model="registerParams.password"
							 maxlength="30" v-if="!registerParams.show"></input>
							<input class="login-type-input" :placeholder="register_password" type="text" v-model="registerParams.password"
							 maxlength="30" v-if="registerParams.show"></input>
							<!-- <image mode="aspectFit" class="righticon" :src="registerParams.show ? img_password:img_passwordShow" @click="onClickButton_See('register')"></image> -->
						</view>
						<view style="height: 30rpx;"></view>
						<!-- <view class="hengxian"></view> -->

						<!-- 密码2 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_P2")}}</view>
						<view class="input-item">
							<image mode="aspectFit" style="width: 40rpx;" class="lefticon" :src="img_pw2"></image>
							<input class="login-type-input" :placeholder="register_repeat" type="password" v-model="registerParams.password_repeat"
							 maxlength="30" v-if="!registerParams.show"></input>
							<!-- <input class="login-type-input" :placeholder="register_repeat" type="text" v-model="registerParams.password_repeat"
							 maxlength="30" v-if="registerParams.show"></input> -->
						</view>
						<view style="height: 30rpx;"></view>
						<!-- <view class="hengxian"></view> -->

						<!-- 验证码 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">Código de Referencia</view>
						<view class="input-item">
							<!-- <image mode="aspectFit" class="lefticon" :src="img_pw1"></image> -->
							<input v-if="!disabledCode" class="login-type-input" :placeholder="$t('KEY_LOGIN_CODE3')" v-model="registerParams.code"
							 maxlength="30"></input>
							<input v-if="disabledCode" disabled="false" class="login-type-input" :placeholder="$t('KEY_LOGIN_CODE3')"
							 v-model="registerParams.code" maxlength="30"></input>
						</view>
						<!-- <view class="hengxian"></view> -->
						<view style="height: 30rpx;"></view>

						<!-- 验证码 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_CODE")}}</view>
						<view class="input-item">
							
							<input class="login-type-input" :placeholder="login_vericode" v-model="registerParams.sms" maxlength="30"></input>
						</view>
						
						<view style="height: 0rpx;"></view>
						
						<comCaptcha style="background-color: #FFFFFF; width: 40%; margin: auto;" ref='comCaptcha2' v-if="currentIndex===1"></comCaptcha>
						

						<view style="height: 80rpx;"></view>

						<!-- 注册按钮 -->
						<view class="commonBtnBg" style="width: 70%; font-size: 30rpx; font-weight: 600;" @click="onClickButton_Register">{{this.$t('KEY_LOGIN_SUBMIT')}}</view>
						<view style="height: 80rpx;"></view>
					</view>
				</view>

			</view>
			
			<comBottom></comBottom>
		</view>


		<!-- 忘记密码 -->
		<view class="forgetpassword" v-show="currentIndex === 2">
			<unititle :titleText="forget_title" titleEvent="forgetClick" @forgetClick="onClickButton_Back"></unititle>
			<view class="item">
				<view class="middle_item_color">
					<view class="middle_item_bg">
						<view style="height: 30rpx;"></view>

						<!-- 用户名 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_USERNAME")}}</view>
						<view class="input-item">
							<input class="login-type-input" :placeholder="register_username" type="text" v-model="registerParams.username"
							 maxlength="10"></input>
						</view>
						<view style="height: 30rpx;"></view>

						<!-- 手机号 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_PN")}}</view>
						<view class="input-item">
							<!-- <image mode="aspectFit" class="lefticon" style="width: 110rpx;" :src="img_phone"></image> -->
							<!-- <view class="AreaCode">{{AreaCode}}</view> -->
							<input class="login-type-input" :placeholder="forget_phone" type="number" v-model="forgetParams.mobile"
							 maxlength="10"></input>
						</view>
						<view style="height: 30rpx;"></view>
						<!-- <view class="hengxian"></view> -->

						<!-- 短信验证 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_CODE")}}</view>
						<view class="input-item">
							<!-- <image mode="aspectFit" class="lefticon" :src="img_sms"></image> -->
							<input class="login-type-input" :placeholder="forget_sms" type="number" v-model="forgetParams.sms" maxlength="4"></input>
							<view class="smsButton" v-if="forgetParams.CountdownTimer === '0'" @click="onClickButton_Countdown('forget')">
								{{register_send}}
							</view>
							<view class="smsDown" v-if="forgetParams.CountdownTimer !== '0'"> {{forgetParams.CountdownTimer}}s </view>
						</view>
						<view style="height: 30rpx;"></view>
						<!-- <view class="hengxian"></view> -->

						<!-- 密码1 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_P1")}}</view>
						<view class="input-item">
							<image mode="aspectFit" class="lefticon" style="width: 30rpx;" :src="img_pw1"></image>
							<input class="login-type-input" :placeholder="forget_password" type="password" v-model="forgetParams.password"
							 maxlength="30" v-if="!forgetParams.show"></input>
							<input class="login-type-input" :placeholder="forget_password" type="text" v-model="forgetParams.password"
							 maxlength="30" v-if="forgetParams.show"></input>
							<!-- <image mode="aspectFit" class="righticon" :src="forgetParams.show ? img_password:img_passwordShow" @click="onClickButton_See('forget')"></image> -->
						</view>
						<view style="height: 30rpx;"></view>
						<!-- <view class="hengxian"></view> -->

						<!-- 密码2 -->
						<view style="color: #FFFFFF; margin-left: 50rpx; height: 40rpx; font-size: 26rpx;">{{this.$t("KEY_LOGIN_P2")}}</view>
						<view class="input-item">
							<image mode="aspectFit" class="lefticon" style="width: 30rpx;" :src="img_pw2"></image>
							<input class="login-type-input" :placeholder="forget_repeat" type="password" v-model="forgetParams.password_repeat"
							 maxlength="30" v-if="!forgetParams.show"></input>
							<input class="login-type-input" :placeholder="forget_repeat" type="text" v-model="forgetParams.password_repeat"
							 maxlength="30" v-if="forgetParams.show"></input>
						</view>
						<!-- <view class="hengxian"></view> -->
						<view style="height: 110rpx;"></view>

						<!-- 确定按钮 -->
						<view class="btnHuangSe" @click="onClickButton_Forget">{{this.$t('KEY_LOGIN_SUBMIT')}}</view>
						<view style="height: 80rpx;"></view>
					</view>
				</view>


			</view>
		</view>
		
	</view>
</template>

<script>
	import unititle from '@/components/common/uni-title.vue'
	import comCaptcha from '@/components/comCaptcha/comCaptcha.vue';
	export default {

		components: {
			unititle,
			comCaptcha,
		},

		data() {
			return {
				// 动态设置偏移坐标 注册、忘记密码 要底部往上
				dyMarginTopPX: '20rpx',

				currentIndex: 0, // 0登录 1注册 2忘记密码
				downTimeType: '', // 倒计时类型
				disabledCode: false,

				// 登录参数
				loginParams: {
					mobile: '', // 手机号
					password: '', // 密码
					isChecked: true, // 记住密码
					show: false, // 显示密码
				},

				// 注册参数
				registerParams: {
					username: '', // 用户名
					mobile: '', // 手机号
					sms: '', // 手机验证码
					password: '', // 密码
					password_repeat: '', // 密码重复
					code: '', // 推荐码
					show: false, // 显示密码
					CountdownTimer: '0', // 倒计时
				},

				// 忘记密码
				forgetParams: {
					mobile: '', // 手机号
					sms: '', // 手机验证码
					password: '', // 密码
					password_repeat: '', // 密码重复
					show: false, // 显示密码
					CountdownTimer: '0', // 倒计时
				},

				// 隐私协议
				PrivacyPolicy: true,

				// 区号
				AreaCode: "+55",

				// 图片
				img_phone: this.gAssets.login_phone, // 图标 手机
				img_sms: this.gAssets.login_sms, // 图标 验证码
				img_pw1: this.gAssets.login_pw1, // 图标 密码1
				img_pw2: this.gAssets.login_pw2, // 图标 密码2
				img_code: this.gAssets.login_code, // 图标 验证码

				// 语言
				login_phonenumber: this.$t('KEY_LOGIN_U1'),
				login_password: this.$t('KEY_LOGIN_PW1'),
				login_vericode: this.$t('KEY_LOGIN_CODE1'),
				// login_remember: this.$t('KEY_RMBPW'),
				login_button: this.$t('KEY_LOGIN_LOGIN'),
				// login_register: this.$t('KEY_RG'),
				// login_forgetpassword: this.$t('KEY_FGPW'),
				register_title: this.$t('KEY_LOGIN_REGISTER'),
				register_username: this.$t('KEY_LOGIN_U1'),
				register_phone: this.$t('KEY_LOGIN_PN2'),
				register_sms: this.$t('KEY_LOGIN_CODE2'),
				register_password: this.$t('KEY_LOGIN_P3'),
				register_repeat: this.$t('KEY_LOGIN_P4'),
				// register_code: this.$t('KEY_RCODE'),
				// register_button: this.$t('KEY_RG'),
				register_send: this.$t('KEY_OTP'),
				forget_title: this.$t('KEY_LOGIN_FORGOT'),
				forget_phone: this.$t('KEY_LOGIN_PN2'),
				forget_sms: this.$t('KEY_LOGIN_CODE2'),
				forget_password: this.$t('KEY_LOGIN_P3'),
				forget_repeat: this.$t('KEY_LOGIN_P4'),
				// forget_complete: this.$t('KEY_COMPLETE'),
			};
		},

		onLoad: function(option) {
			// console.log('卸载所有监听的事件');
			uni.$off();

			// 推荐码
			let key = option.KEYBB;
			if (key) {
				this.currentIndex = 1;
				this.registerParams.code = key;
				this.disabledCode = true;
			}
			let curPage = option.curPage;
			if (curPage == '1') {
				this.currentIndex = 1;
			}

			uni.$on(this.gRequest.userManager.event.login, this.onEvent_Login.bind(this));
			uni.$on(this.gRequest.userManager.event.register, this.onEvent_Register.bind(this));
			uni.$on(this.gRequest.userManager.event.forget, this.onEvent_Forget.bind(this));
			uni.$on(this.gRequest.userManager.event.sms, this.onEvent_SMS.bind(this));
		},

		onUnload() {
			uni.$off(this.gRequest.userManager.event.login, this.onEvent_Login.bind(this));
			uni.$off(this.gRequest.userManager.event.register, this.onEvent_Register.bind(this));
			uni.$off(this.gRequest.userManager.event.forget, this.onEvent_Forget.bind(this));
			uni.$off(this.gRequest.userManager.event.sms, this.onEvent_SMS.bind(this));
		},

		onReady() {
			this.flush_bottomButton();
			this.getAreaFromIp1();
		},

		methods: {
			// 刷新底部按钮
			flush_bottomButton() {
				setTimeout(() => {
					const query = uni.createSelectorQuery().in(this);
					query.select('#loginitem').boundingClientRect(data => {
						// var px = uni.upx2px(data.height);
						let infosync = uni.getSystemInfoSync();
						// console.log(data);
						// console.log(px);
						// console.log(infosync);
						this.dyMarginTopPX = (infosync.windowHeight - data.height - uni.upx2px(180));
						if (Number(this.dyMarginTopPX) < 0) {
							this.dyMarginTopPX = 0;
						}
						this.dyMarginTopPX = this.dyMarginTopPX + 'px';
						// console.log(this.dyMarginTopPX);
					}).exec();
				}, 100);
			},

			onbuttonClick_back() {
				uni.switchTab({
					url: "game/idx1"
				})
			},

			// 登录按钮
			onClickButton_Login() {
				if (this.loginParams.mobile.length == 0) {
					this.gHelper.toast(this.$t('KEY_EPN'));
				} else if (this.loginParams.mobile.length < 9) {
					this.gHelper.toast(this.$t('KEY_PEPN'));
				} else if (this.loginParams.password.length == 0) {
					this.gHelper.toast(this.$t('KEY_EPW'));
				} else {
					this.loginParams.mobile = this.loginParams.mobile;
					this.gRequest.userManager.login(this.gHelper.gCaptchaId, this.loginParams.yzm, this.loginParams.mobile, this.loginParams
						.password, this.onEvent_Login
						.bind(this));

					this.loginParams.yzm = '';
					this.flushRecaptchaStatus();
				}
			},

			// 登录返回
			onEvent_Login() {
				this.gRequest.baseRequest.gotoMainPage();
			},

			// 注册按钮
			onClickButton_Register() {
				// if (this.registerParams.mobile.length == 0) {
				// 	this.gHelper.toast(this.$t('KEY_EPN'));

				// } else if (this.registerParams.mobile.length < 10) {
				// 	this.gHelper.toast(this.$t('KEY_PEPN'));

				// } else if (this.registerParams.password.length == 0 || this.registerParams.password_repeat.length == 0) {
				// 	this.gHelper.toast(this.$t('KEY_EPW'));

				// } else if (this.registerParams.sms.length == 0) {
				// 	this.gHelper.toast(this.$t('KEY_PEVC'));

				// } else if (this.registerParams.password != this.registerParams.password_repeat) {
				// 	this.gHelper.toast(this.$t('KEY_PWINCON'));

				// } else if (this.registerParams.code.length == 0) {
				// 	this.gHelper.toast(this.$t('KEY_NO_CODE'));
				// } else {
				// 	this.registerParams.mobile = this.registerParams.mobile;

				// }
				this.gRequest.userManager.register(this.gHelper.gCaptchaId, null, this.AreaCode, this.registerParams.sms, this.registerParams
					.mobile, this.registerParams.sms, this.registerParams.password, this.registerParams.password_repeat, this.registerParams
					.code, this.registerParams.username, null, null, null, this.onEvent_Register.bind(this));
					
				this.registerParams.sms = "";
				this.flushRecaptchaStatus();
			},

			// 注册返回
			onEvent_Register() {
				this.gRequest.baseRequest.gotoMainPage();
			},


			// 密码重置按钮
			onClickButton_Forget() {
				if (this.forgetParams.mobile.length == 0) {
					this.gHelper.toast(this.$t('KEY_EPN'));

				} else if (this.forgetParams.mobile.length < 10) {
					this.gHelper.toast(this.$t('KEY_PEPN'));

				} else if (this.forgetParams.password.length == 0 || this.forgetParams.password_repeat.length == 0) {
					this.gHelper.toast(this.$t('KEY_EPW'));

				} else if (this.forgetParams.sms.length == 0) {
					this.gHelper.toast(this.$t('KEY_PEVC'));

				} else if (this.forgetParams.password != this.forgetParams.password_repeat) {
					this.gHelper.toast(this.$t('KEY_PWINCON'));

				} else {
					this.forgetParams.mobile = this.forgetParams.mobile;
					this.gRequest.userManager.forget(this.forgetParams.mobile, this.forgetParams.sms, this.forgetParams.password,
						this.forgetParams.password_repeat);
				}
			},

			// 重置密码返回
			onEvent_Forget() {
				this.currentIndex = 0;
				this.gHelper.toast(this.$t('KEY_TIPS_FP'));
			},

			// 查看输入密码
			onClickButton_See(type) {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				if (type == "login") {
					this.loginParams.show = !this.loginParams.show;
				} else if (type == "register") {
					this.registerParams.show = !this.registerParams.show;
				} else if (type == "forget") {
					this.forgetParams.show = !this.forgetParams.show;
				}
			},

			// 跳转注册页面
			onClickButton_RegisterPage() {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				this.currentIndex = 1;
			},

			// 跳转忘记密码页面
			onClickButton_ForgetPasswordPage() {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				this.currentIndex = 2;
			},

			// 返回主页
			onClickButton_Back() {
				// this.currentIndex = 0;
				// this.flush_bottomButton();
				this.onbuttonClick_back();
			},

			// 隐私协议
			onClickButton_PrivacyAgreement() {
				let key = 'uu';
				let data = this.gRequest.ipConfig.getPrivacyAgreementURL();

				// #ifdef APP-PLUS
				// this.gHelper.gWebViewParm[key] = data;
				// if (data) {
				// 	uni.navigateTo({
				// 		url: '/pages/webview/webview?' + 'title=' + this.$t('KEY_LOGIN_PA') + '&' + key + '=' + data,
				// 	});
				// }
				// #endif

				this.gAndroidUtils.openBrowser(data);
			},

			// 单选框 保存密码
			onClickCheckbox_SavePasswrod(e) {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				let values = e.detail.value;
				this.loginParams.isChecked = (values[0] == 1);
			},

			// 发送手机验证码 进入倒计时 
			onClickButton_Countdown(type) {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				let mobile = '';
				this.downTimeType = type;

				// 校验手机号是否输入了
				if (this.downTimeType === 'register') {
					if (this.registerParams.mobile.length == 0) {
						this.gHelper.toast(this.$t('KEY_LOGIN_PN2'));
						return;

					} else {
						mobile = this.registerParams.mobile;
					}

				} else if (this.downTimeType === 'forget') {
					if (this.forgetParams.mobile.length == 0) {
						this.gHelper.toast(this.$t('KEY_LOGIN_PN2'));
						return;

					} else {
						mobile = this.forgetParams.mobile;
					}
				}

				this.gRequest.userManager.sendSMS(this.AreaCode, mobile, this.onEvent_SMS.bind(this));
			},

			// 发送验证码返回
			onEvent_SMS() {
				// 开启倒计时
				if (this.downTimeType === 'register') {
					this.registerParams.CountdownTimer = '60';
					this.forgetParams.CountdownTimer = '0';

				} else if (this.downTimeType === 'forget') {
					this.registerParams.CountdownTimer = '0';
					this.forgetParams.CountdownTimer = '60';
				}

				clearInterval(this.timer);
				this.timer = setInterval(() => {
					this.timeDownCount()
				}, 1000)
			},

			// 倒计时
			timeDownCount() {
				let time = 0;
				if (this.downTimeType === 'register') {
					time = Number(this.registerParams.CountdownTimer) - 1;
					if (time <= 0)
						time = 0;
					this.registerParams.CountdownTimer = time.toString();

				} else if (this.downTimeType === 'forget') {
					time = Number(this.forgetParams.CountdownTimer) - 1;
					if (time <= 0)
						time = 0;
					this.forgetParams.CountdownTimer = time.toString();
				}

				if (time <= 0) {
					clearInterval(this.timer);
				}
			},

			// 复制验证码
			onButtonClick_Copy() {
				this.gHelper.toast(this.$t('KEY_INV_COPY_SUCC'));
				this.gAndroidUtils.copyToSystemClipboard(this.registerSMSNum);
			},

			// 重置人机验证状态
			flushRecaptchaStatus() {
				if (this.$refs && this.$refs.comCaptcha1 && this.currentIndex == 0) {
					this.$refs.comCaptcha1.reset();
				}
				if (this.$refs && this.$refs.comCaptcha2 && this.currentIndex == 1) {
					this.$refs.comCaptcha2.reset();
				}
			},
			// #ifdef H5
			// H5模式下 下载APK地址
			onButtonClick_DownlaodAPK() {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				this.gHelper.toast(this.$t("KEY_INV_COPY_SUCC"));
				this.gAndroidUtils.copyToSystemClipboard(this.gRequest.ipConfig.getAPKDownloadUrl());
			},
			// #endif

			/////////////////////////////////////////////////////////////////////////////////
			getAreaFromIp1() {
				let data = this.gHttp.get('https://api.db-ip.com/v2/free/self');
				let that = this;
				data.then((val) => {
					if (val.countryName) {
						that.gHelper.gIpAddress = val.ipAddress;
						// that.setAreaCode(val.countryName);
					} else {
						that.getAreaFromIp2();
					}
				}, (err) => {
					// this.areaCodeText = "+1"
					console.log(err)
				});
			},

			getAreaFromIp2() {
				let data = this.gHttp.get('https://www.iplocate.io/api/lookup/');
				let that = this;
				data.then((val) => {
					if (val.country) {
						that.gHelper.gIpAddress = val.ip;
						// that.setAreaCode(val.country);
					} else {
						that.getAreaFromIp3();
					}

				}, (err) => {
					// this.areaCodeText = "+1"
					console.log(err)
				});
			},

			getAreaFromIp3() {
				let data = this.gHttp.get('https://api.ip.sb/geoip');
				let that = this;
				data.then((val) => {
					if (val.country) {
						that.gHelper.gIpAddress = val.ip;
						// that.setAreaCode(val.country);
					} else {
						// this.areaCodeText = "+1"
					}
				}, (err) => {
					// this.areaCodeText = "+1"
					console.log(err)
				});
			},
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #313783;
		// background: linear-gradient(to right, #4A3A91, #695CC4, #5566CB);

		// background: url('@/static/new/loadbg.png') no-repeat;
		// background-size: 750rpx 1624rpx;
		// width: 750rpx;
		// height: 1624rpx;
		font-size: 32rpx;
	}
	
	.logInputBg {
		background: rgba($color: #202949, $alpha: 0.6);
		background-size: 100% 100%;
		width: 700rpx;
		height: 916rpx;
		margin: auto;
		border-radius: 18rpx;
	}

	.box {

		// 登录
		.login {
			position: absolute;
			// width: 100%;
			// height: 100%;

			// background: url('@/static/new/bgss.jpg') no-repeat;
			background-size: 750rpx 1640rpx;

			width: 750rpx;
			height: 1640rpx;
			// height: 100%;
			// background: red;
			top: -10rpx;

			.item {
				display: flex;
				flex-direction: column;
				// background: rgba($color: #FF0000, $alpha: 0.3);

				.imagelogo {
					// padding-bottom: 100upx;
					width: 450upx;
					// height: 94upx;
					margin: 0 auto;
				}

				.rememberPrivacy {
					font-size: 40upx;
					width: 80%;
					border-radius: 12rpx;

					.remenberText {
						position: absolute;
						font-size: 40rpx;
						margin-top: 5rpx;
						margin-left: 8rpx;
						color: #FFFFFF;
					}
				}
			}

			.bottom-btn {
				width: 100%;
				// height: 100%;
				// margin-top: 50rpx;
				// background-color: red;
				// padding-bottom: 10rpx;

				.forgetbutton {
					margin: auto;
					font-size: 30rpx;
					color: #FFFFFF;
					width: 37%;
					text-align: center;
					border-bottom: 2rpx solid #FFFFFF; // 底部横线 ;
				}


				// 下载APP
				/* #ifdef H5 */
				.downloadapp {
					width: 100%;
					height: 100rpx;

					margin-top: 20rpx;
					padding-top: 20rpx;
					// padding-bottom: 5rpx;

					background: linear-gradient(to right, #8A65DB, #A452D2);

					display: flex;
					flex-direction: row;
					justify-content: center;

					font-size: 30rpx;
					color: #FFFFFF;
					line-height: 100rpx;
				}

				/* #endif */

			}
		}
		
		
		// 隐私协议
		.privacyagreenment {
			// display: flex;
			// justify-content: center;
		
			// margin-top: 0rpx;
		
			font-size: 26rpx;
			color: #FFFFFF;
			border-bottom: 2rpx solid #FFFFFF; // 底部横线 ;
		
			// margin: auto;
			// width: 30%;
			// margin-left: 25%;
			// background: red;
		}

		// 注册
		.register {
			width: 100%;
			height: 100%;

			position: absolute;
			background: #313783;

			.item {
				display: flex;
				flex-direction: column;
				padding-top: 20%;
			}
		}

		// 忘记密码
		.forgetpassword {
			width: 100%;
			height: 100%;

			position: absolute;
			background: #4E4A63;

			.item {
				display: flex;
				flex-direction: column;
				padding-top: 20%;
			}
		}

		// 中间的 账号密码 元素
		.middle_item {
			margin: auto;
			// margin-top: 10%;
			width: 96%;

			.middle_item_bg {
				width: 100%;
				// background: rgba($color: #3A3881, $alpha: 1.0);
				border-radius: 20rpx;
				// border-radius: 100rpx;
			}
		}

		// 中间的 账号密码 元素 带背景色
		.middle_item_color {
			width: 96%;
			margin: auto;
			background: #191D5C;
			border-radius: 20rpx;
		}
		
		.loginInputBg {
			margin: auto;
			
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			
			// background: url('@/static/load_bg_enter.png') no-repeat;
			background: rgba($color: #313783, $alpha: 0.6);
			background-size: 598rpx 70rpx;
			
			width: 90%;
			height: 70rpx;
			border-radius: 360rpx;
			
			color: #FFFFFF;
			.lefticon {
				margin-left: 14rpx;
				margin-top: 0rpx;
				width: 90rpx;
				height: 100%;
			}
			
			// 区号
			.AreaCode {
				font-size: 26upx;
				margin-left: 20rpx;
				// margin-top: 30rpx;
				/* #ifdef APP-PLUS */
				margin-top: 28rpx;
				/* #endif */
				font-weight: bold;
				line-height: 70rpx;
			}
			
			.login-type-input {
				height: 70rpx;
				// background: #F0AD4E;
				// margin-top: 30rpx;
				// margin: auto;
				font-size: 26rpx;
				width: 100%;
				margin-left: 14rpx;
				font-weight: bold;
			}
			
			.righticon {
				width: 100rpx;
				height: 100rpx;
				margin-top: -2rpx;
				margin-right: 15rpx;
			}
		}

		// 输入框
		.input-item {
			margin: auto;

			display: flex;
			flex-direction: row;
			justify-content: flex-start;

			background: #313783;
			
			width: 90%;
			height: 70rpx;
			border-radius: 120rpx;

			color: #FFFFFF;
			// line-height: 100rpx;

			.lefticon {
				margin-left: 14rpx;
				margin-top: 0rpx;
				width: 90rpx;
				height: 100%;
			}

			// 区号
			.AreaCode {
				font-size: 26upx;
				margin-left: 20rpx;
				// margin-top: 30rpx;
				/* #ifdef APP-PLUS */
				margin-top: 28rpx;
				/* #endif */
				font-weight: bold;
				line-height: 70rpx;
			}

			.login-type-input {
				height: 70rpx;
				// background: #F0AD4E;
				// margin-top: 30rpx;
				// margin: auto;
				font-size: 26rpx;
				width: 100%;
				margin-left: 14rpx;
				font-weight: bold;
			}

			.righticon {
				width: 100rpx;
				height: 100rpx;
				margin-top: -2rpx;
				margin-right: 15rpx;
			}

			// 发送短信按钮
			.smsButton {
				background: linear-gradient(to right, #8A65DB, #A452D2);
				margin-top: 10rpx;
				margin-right: 14rpx;
				width: 160rpx;
				height: 50upx;
				line-height: 50rpx;
				font-size: 26rpx;
				// font-weight: bold;
				text-align: center;
				border-radius: 10rpx;
				color: $color-white;
			}

			.smsDown {
				background: #787878;
				margin-top: 6rpx;
				margin-right: 14rpx;
				width: 160rpx;
				height: 60upx;
				line-height: 40rpx; font-size: 26rpx;
				font-size: 30upx;
				color: $color-white;
				text-align: center;
				vertical-align: middle;
				border-radius: 50upx;
			}

			.mask {
				background: #000000;
				width: 800rpx;
				height: 100rpx;
				margin-top: -100rpx;
			}
		}

		// 横线
		.hengxian {
			width: 88%;
			height: 3rpx;
			margin: 10rpx auto;
			background-color: #EFC7A4;
			overflow: hidden;
		}
	}
</style>
