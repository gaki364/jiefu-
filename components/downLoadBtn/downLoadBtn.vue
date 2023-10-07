<template>
	<view v-if="isShow">
		<!-- <movable-area class="img1">
			<movable-view style="width: 114rpx; pointer-events: auto;" :x="x" :y="y" direction="all">
				<view style="transform: scale(0.7);">
					<view v-if="link2.length > 0" class="moView2" direction="all" @click="onButtonClickAd(link2)">
						
					</view>
					<view v-if="link1.length > 0" class="moView3" direction="all" @click="onButtonClickAd(link1)">
						
					</view>
					<view class="moView" @click="onButtonClick()">
						<view style="width: 100%; color: #1A60B2; text-align: center; position: absolute; bottom: 14rpx; font-size: 20rpx;">{{$t('KEY_Download')}}</view>
					</view>
				</view>
			</movable-view>
			
		</movable-area> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				x: 316,
				y: 320,
				link1: '',
				link2: '',
			};
		},

		mounted() {
			this.isShow = !this.gHelper.isAppWebview();
			// this.gRequest.infomationManager.getOfficial(this.onEventCallback_getOfficial.bind(this));
			this.isShow = false
		},

		methods: {
			onButtonClick() {
				this.gAndroidUtils.openBrowser("https://dl.omgbet568.com/apk/index.html");
			},
			
			onEventCallback_getOfficial(data) {
				if (data) {
					for (let i=0; i < data.length; i++) {
						let link = data[i].TelGram;
						if (data[i].Type == 2) {
							this.link1 = link;
						} else if (data[i].Type == 3) {
							this.link2 = link;
						}
					}
				}
			},
			
			onButtonClickAd(link) {
				this.gAndroidUtils.openBrowser(link);
			},
		},
	}
</script>

<style lang="scss">
	// .img1 {
		
	// 	position: fixed;
	// 	width: 100%;
	// 	height: 100%;
	// 	pointer-events: none;
	// 	z-index: 100;
	// 	top: 0rpx;
		
	// 	.moView {
	// 		width: 148rpx;
	// 		height: 145rpx;
	// 		pointer-events: auto;
	// 		background: url('@/static/Download.png') no-repeat;
	// 		background-size: 100% 100%;
	// 		position: relative;
	// 		// right: 10rpx;
	// 		// bottom: 200rpx;
	// 		margin-top: 20rpx;
	// 	}
		
	// 	.moView2 {
	// 		width: 140rpx;
	// 		height: 140rpx;
	// 		pointer-events: auto;
	// 		background: url('@/static/Instagram.png') no-repeat;
	// 		background-size: 100% 100%;
	// 		// right: 10rpx;
	// 		// bottom: 340rpx;
	// 		margin-top: 20rpx;
	// 	}
		
	// 	.moView3 {
	// 		width: 140rpx;
	// 		height: 140rpx;
	// 		pointer-events: auto;
	// 		background: url('@/static/Telegram.png') no-repeat;
	// 		background-size: 100% 100%;
	// 		// right: 10rpx;
	// 		// bottom: 480rpx;
	// 		margin-top: 20rpx;
	// 	}
	// }
</style>
