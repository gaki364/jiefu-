<template>
	<view>
		<view style="width: 100%; text-align: center; margin-top: 60rpx;" @click="onButtonClick_flushCaptcha">
			<image style="width: 240rpx; height: 80rpx;" :src="captchaData.img"></image>
		</view>
	</view>
</template>

<script>
	export default {
		mounted () {
			this.flush();
		},
		data() {
			return {
				captchaData: {captchaId: "", img: ""},
			};
		},
		
		methods: {
			
			flush() {
				this.gRequest.userManager.getCaptcha(this.onEventCallBack_getCaptcha.bind(this));
			},
			
			reset() {
				this.flush();
			},
			
			onButtonClick_flushCaptcha() {
				this.flush();
			},
			
			onEventCallBack_getCaptcha(data) {
				console.log('data',data)
				this.captchaData = data;
				this.gHelper.gCaptchaId = data.captchaId;

			},
		},
	}
</script>

<style lang="scss">

</style>
