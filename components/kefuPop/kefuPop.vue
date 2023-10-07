<template>
	<view>
		<view class="MaskWindow" v-if="this.show">
			<view class="out">
				<view class="window">
					<view style="height: 60rpx;"></view>
					<view class="titleTest" style="font-size: 36rpx;">{{$t('KEY_INDEX5_1')}}</view>
					<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onButtonClick_ClosePopWindow()"></image>
					
					<view style="height: 40rpx;"></view>
					<view style="width: 90%; margin: auto; display: flex;">
						<view style="width: 40%; margin: auto; text-align: center;" @click="onButtonClick_OpenWebView('1')">
							<image :src="gAssets.common_pic3" style="width: 40%;" mode="widthFix"></image>
							<view class="titleTest" style="font-size: 30rpx;">Whatsapp</view>
						</view>
						<view style="width: 40%; margin: auto; text-align: center;" @click="onButtonClick_OpenWebView('2')">
							<image :src="gAssets.common_pic4" style="width: 40%;" mode="widthFix"></image>
							<view class="titleTest" style="font-size: 30rpx;">Telegram</view>
						</view>
					</view>
					<view style="height: 40rpx;"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				link1: "",
				link2: "",
				
				show: false,
			};
		},
		
		beforeMount() {
			// if (this.gRequest.userManager.getSmobilesData == null) {
			// 	this.gRequest.userManager.getSmobiles(this.onEventCallBack_getSmobiles.bind(this));
			// }
		},
		
		methods: {
			
			ShowPopWindow() {
				this.show = true;
				// this.onButtonClick_OpenWebView()
			},
			
			onButtonClick_ClosePopWindow() {
				this.show = false;
			},
			
			onButtonClick_OpenWebView(type) {
				// if (this.gRequest.userManager.getSmobilesData == null) {
				// 	return
				// }
				// this.link1 = this.gRequest.userManager.getSmobilesData[0].TelGram
				let link = "";
				if (this.gRequest.userManager.getSmobilesData) {
					for (let i = 0; i < this.gRequest.userManager.getSmobilesData.length; i++) {
						let linkD = this.gRequest.userManager.getSmobilesData[i].TelGram
						if (this.gRequest.userManager.getSmobilesData[i].Type == type) {
							link = linkD;
						}
					}
				}
				
				this.gAndroidUtils.openBrowser(link);
			},
			
			onEventCallBack_getSmobiles() {
				if (this.gRequest.userManager.getSmobilesData) {
					for (let i = 0; i < this.gRequest.userManager.getSmobilesData.length; i++) {
						let link = this.gRequest.userManager.getSmobilesData[i].TelGram
						if (this.gRequest.userManager.getSmobilesData[i].Type == '1') {
							this.link1 = link;
						} else if (this.gRequest.userManager.getSmobilesData[i].Type == '2')  {
							this.link2 = link;
						}
					}
				}
			},
		},
	}
</script>

<style lang="scss">

</style>
