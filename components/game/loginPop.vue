<template>
	<view>
		<view class="MaskWindow" v-if="show">
			<view class="out">
				<view class="window" style="width: 88%;border: none;background:#62209d" >
					<view style="height: 30rpx;"></view>
					<view class="titleTest" style="font-size: 36rpx;">ACESSAR</view>
					<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onButtonClick_ClosePopWindow()"></image>
					
					<view style="height: 30rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<image mode="widthFix" style="width: 41rpx; margin: auto; margin-left: 40rpx; margin-right: 10rpx;" :src="gAssets.login_phone"></image>
						<view style="margin: auto; margin-left: 0rpx; margin-right: 0rpx; font-size: 26rpx; font-weight: bold;">{{AreaCode}}</view>
						<input class="login-type-input" :placeholder="$t('KEY_LOGIN_PN2')" type="text" v-model="loginParams.mobile" maxlength="11">
					</view>
					
					<view style="height: 40rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<image mode="widthFix" style="width: 41rpx; margin: auto; margin-left: 40rpx; margin-right: 10rpx;" :src="gAssets.login_pw1"></image>
						<input class="login-type-input" :placeholder="$t('KEY_LOGIN_PW1')" type="password" v-model="loginParams.password"
						 maxlength="30">
					</view>
					
					<view style="height: 40rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<view style="width: 41rpx;"></view>
						<input class="login-type-input" style="margin-left: 20rpx;" :placeholder="$t('KEY_LOGIN_CODE1')" v-model="loginParams.yzm" maxlength="30">
					</view>
					
					<comCaptcha style="width: 40%; margin: auto; background-color: #FFFFFF;+" ref='comCaptcha1'></comCaptcha>
					<view style="height: 40rpx;"></view>
					<view class="commonBtnBg" style="display: flex; width: 80%;" @click="onClickButton_Login">
						<image :src="gAssets.imgLogin" style="width: 41rpx; margin: auto 20rpx auto 100rpx;" mode="widthFix"></image>
						<view style="text-align: center; line-height: 70rpx; margin: auto auto auto 90rpx; font-weight: 600;">{{$t('KEY_LOGIN_LOGIN')}}</view>
					</view>
					<view style="height: 30rpx;"></view>
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
					<view style="height: 40rpx;"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import comCaptcha from '@/components/comCaptcha/comCaptcha.vue';
	
	
	export default {
		
		components: {
			comCaptcha,
		},
		
		data() {
			return {
				AreaCode: "+55",
				// 登录参数
				loginParams: {
					mobile: '', // 手机号
					password: '', // 密码
					isChecked: true, // 记住密码
					show: false, // 显示密码
				},
				
				show: false,
				// 隐私协议
				PrivacyPolicy: true,
			};
		},
		
		mounted() {
			if (this.gRequest.baseRequest.showLoginPop == true) {
				this.show = true;
				this.gRequest.baseRequest.showLoginPop = false;
			}
		},
		
		methods: {
			
			ShowPopWindow() {
				this.show = true;
				this.flushRecaptchaStatus();
				// this.onButtonClick_OpenWebView()
			},
			
			onButtonClick_ClosePopWindow() {
				this.show = false;
			},
			
			
			// 重置人机验证状态
			flushRecaptchaStatus() {
				if (this.$refs && this.$refs.comCaptcha1) {
					this.$refs.comCaptcha1.reset();
				}
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
			
			
			// 跳转注册页面
			onClickButton_RegisterPage() {
				this.show = false;
				this.$emit("showRegister");
			},
			
			
			// 登录返回
			onEvent_Login() {
				this.show = false;
				this.$emit("flushPager");
			},
		},
	}
</script>

<style lang="scss" scoped>
	
	.login-type-input {
		// height: 71rpx;
		// background: #F0AD4E;
		// margin-top: 30rpx;
		margin: auto;
		font-size: 26rpx;
		width: 74%;
		margin-left: 14rpx;
		font-weight: bold;
		text-align: left;
		
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
</style>
