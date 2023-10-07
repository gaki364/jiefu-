<template>
	<view v-if="isShow">
		<movable-area class="img1">
			<movable-view class="moView" :x="x" :y="y" direction="all" @click="onButtonClick()">
				<view style="height: 90rpx;"></view>
				<view style="margin: auto; width: 50%; text-align: center; text-shadow:3rpx 3rpx #00B3FF; font-size: 24rpx;">{{"Canal"}}</view>
				<view style="margin: auto; width: 50%; text-align: center; text-shadow:3rpx 3rpx #00B3FF; font-size: 30rpx; margin-top: -10rpx;">{{"oficial"}}</view>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				x: 0,
				y: 490,
				kfUrl: "",
			};
		},

		mounted() {
			this.flush();
		},

		methods: {
			
			flush() {
				if (this.gUserData.getToken()) {
					if (this.gRequest.infomationManager.infoData) {
						this.onEventCallback_informationInfo();
					} else {
						this.gRequest.infomationManager.informationInfo(this.onEventCallback_informationInfo.bind(this));
					}
				}
			},
			
			onButtonClick() {
				this.gAndroidUtils.openBrowser(this.kfUrl);
			},
			
			onEventCallback_informationInfo() {
				
				if (this.gRequest.infomationManager.infoData.IsRecharge != 0) {
					this.gRequest.infomationManager.getVipsmobiles(this.onEventCallBack_getVipsmobiles.bind(this));
				}
			},
			
			onEventCallBack_getVipsmobiles(data) {
				if (data) {
					for (let i = 0; i < data.length; i++) {
						let link = data[i].TelGram;
						if (data[i].Type == '1') {
							this.kfUrl = link;
						}
					}
					if (this.kfUrl.length > 0) {
						this.isShow = true;
					} else {
						this.isShow = false;
					}
				}
			},
		},
	}
</script>

<style lang="scss">
	.img1 {
		
		position: fixed;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 100;
		
		top: 0rpx;
		
		.moView {
			width: 193rpx;
			height: 194rpx;
			pointer-events: auto;
			// background: url('@/static/xfn.png') no-repeat;
			background-size: 100% 100%;
			right: 10rpx;
			bottom: 200rpx;
		}
	}
</style>
