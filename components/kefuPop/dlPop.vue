<template>
	<view>
		<view class="MaskWindow" v-if="this.show">
			<view class="out">
				<view class="window bg" style="text-align: center;width: 90%; border: none;background: #26255F !important;">
					<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onButtonClick_ClosePopWindow()"></image>
					<view style="height: 20rpx;"></view>
					<image :src="gAssets.dlPop1" style="width: 312rpx;" mode="widthFix"></image>
					<image :src="gAssets.dlPop2" style="width: 593rpx;" mode="widthFix"></image>
					<view style="height: 20rpx;"></view>
					<view style="display: flex;">
						<view class="btnLvSe" style="margin: auto; font-size: 27rpx;" @click="onButtonClick_gotoPage2()">página proxy</view>
						<view class="btnHuangSe" style="margin: auto; font-size: 27rpx;" @click="onButtonClick_OpenWebView()">gerente de contato</view>
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
				link: "",
				
				show: false,
			};
		},
		
		beforeMount() {
			
		},
		
		methods: {
			
			ShowPopWindow() {
				this.show = true;
				
			},
			
			onButtonClick_ClosePopWindow() {
				this.show = false;
				this.gRequest.teamManager.agentClosePopup();
			},
			
			onButtonClick_gotoPage2() {
				this.onButtonClick_ClosePopWindow();
				uni.switchTab({
					url:'idx2'
				})
			},
			
			onButtonClick_OpenWebView() {
				let link = "";
				for (let i = 0; i < this.gRequest.userManager.getSmobilesData.length; i++) {
					let linkD = this.gRequest.userManager.getSmobilesData[i].TelGram
					if (this.gRequest.userManager.getSmobilesData[i].Type == '2')  {
						link = linkD;
					}
				}
				this.onButtonClick_ClosePopWindow();
				this.gAndroidUtils.openBrowser(link);
			},
			
		},
	}
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
.btnLvSe,.btnHuangSe{
	background: url("@/static/btn0012.png");
	background-size:100% 100% ;
	color:#502781 ;
}
</style>
