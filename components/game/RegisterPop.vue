<template>
	<view>
		<view class="MaskWindow" v-if="show">
			<view class="out">
				<view class="window" style="width: 88%;background: #62209d;border: none;">
					<view style="height: 30rpx;"></view>
					<view class="titleTest" style="font-size: 36rpx;">REGISTRAR</view>
					<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onButtonClick_ClosePopWindow()"></image>
					
					<view style="height: 30rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<image mode="widthFix" style="width: 41rpx; margin: auto; margin-left:40rpx; margin-right: 10rpx;" :src="gAssets.login_phone"></image>
						<view style="margin: auto; margin-left: 0rpx; margin-right: 0rpx; font-size: 26rpx; font-weight: bold;">{{AreaCode}}</view>
						<input class="login-type-input" style="margin: auto; margin-left: 10rpx;" :placeholder="$t('KEY_LOGIN_PN2')" type="number" v-model="registerParams.mobile" maxlength="11">
					</view>
					
					<view style="height: 40rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<view style="width: 41rpx;"></view>
						<input class="login-type-input" style="margin: auto; margin-left: 10rpx;" :placeholder="'Insira o Nome de usuário'" type="text"
						v-model="registerParams.username" maxlength="99">
					</view>
					
					<view style="height: 40rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<image mode="widthFix" style="width: 41rpx; margin: auto; margin-left: 40rpx; margin-right: 10rpx;" :src="gAssets.login_pw1"></image>
						<input class="login-type-input" :placeholder="$t('KEY_LOGIN_P3')" type="password" v-model="registerParams.password"
						 maxlength="30">
					</view>
					
					<view style="height: 40rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<image mode="widthFix" style="width: 41rpx; margin: auto; margin-left: 40rpx; margin-right: 10rpx;" :src="gAssets.login_pw1"></image>
						<input class="login-type-input" :placeholder="$t('KEY_LOGIN_P4')" type="password" v-model="registerParams.password_repeat"
						 maxlength="30">
					</view>
					
					<view style="height: 40rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<view style="width: 41rpx;"></view>
						<input v-if="!disabledCode" class="login-type-input" :placeholder="$t('KEY_LOGIN_CODE3')" v-model="registerParams.code"
						 maxlength="30">
						<input v-if="disabledCode" disabled="false" class="login-type-input" :placeholder="$t('KEY_LOGIN_CODE3')"
						 v-model="registerParams.code" maxlength="30">
					</view>
					
					<view style="height: 40rpx;"></view>
					<view class="loginInput" style="width: 96%; margin: auto; display: flex;">
						<view style="width: 41rpx;"></view>
						<input class="login-type-input" :placeholder="$t('KEY_LOGIN_CODE1')" v-model="registerParams.sms" maxlength="30">
					</view>
					
					<comCaptcha style="background-color: #FFFFFF; width: 40%; margin: auto;" ref='comCaptcha1'></comCaptcha>
					<view style="height: 40rpx;"></view>
					<view class="commonBtnBg enviarBtn"  @click="onClickButton_Login">
						<view style="text-align: center; line-height: 70rpx; margin: auto; font-weight: 600;">{{$t('KEY_LOGIN_SUBMIT')}}</view>
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
				disabledCode: false,
				show: false,
				// 隐私协议
			};
		},
		
		mounted() {
			
		},
		
		methods: {
			
			ShowPopWindow(code) {
				this.show = true;
				if (code && code.length > 0) {
					this.disabledCode = true;
					this.registerParams.code = code; 
				}
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
				console.log(this.registerParams);
				this.gRequest.userManager.register(this.gHelper.gCaptchaId, null, this.AreaCode, this.registerParams.sms, this.registerParams
					.mobile, this.registerParams.sms, this.registerParams.password, this.registerParams.password_repeat, this.registerParams
					.code, this.registerParams.username, null, null, null, this.onEvent_Register.bind(this));
					
				this.registerParams.sms = "";
				this.flushRecaptchaStatus();
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
				
			},
			
			
			// 登录返回
			onEvent_Register() {
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
