<template>
	<view>
		<view class="MaskWindow" v-if="show" @tap.stop="onButtonClick_closePop">
			<view class="out">
				<view style="width: 70%; height: 100%;" class="vipPage">
					<view style="height: 40rpx;"></view>
					<view class="btn7" @tap.stop="onButtonClick_closePop"></view>
					<view style="height: 40rpx;"></view>
					<view class="tx">
						<view style="height: 80rpx;"></view>
						<view style="font-size: 28rpx;  text-align: center;">{{"ID: "}}<span style="color: #FFFFFF;">{{gRequest.userManager.userInfoData.PlayerId}}</span></view>
						<view style="height: 26rpx;"></view>
						<view style="font-size: 28rpx; text-align: center;">{{$t('KEY_WIT_VIP') + ": "}}<span>{{gRequest.userManager.userInfoData.Level}}</span></view>
					</view>
					<view style="height: 40rpx;"></view>
					<view class="Btn longBtn" @click="onButtonClick_gotoPage(0)">
						<view class="icon1"></view>
						<view style="font-size: 30rpx; margin: auto; text-align: center;">{{$t('KEY_TABBAR_3')}}</view>
						<view class="btnTz"></view>
					</view>
					<view style="height: 20rpx;"></view>
					<view class="Btn longBtn" @click="onButtonClick_gotoPage(1)">
						<view class="icon2"></view>
						<view style="font-size: 30rpx; margin: auto; text-align: center;">{{$t('KEY_NEW_VIPBOX')}}</view>
						<view class="btnTz"></view>
					</view>
					
					<view style="width: 96%; margin: auto; margin-top: 50rpx; display: flex; flex-direction: column; height: 50vh;">
						<view style="flex: 1; overflow: scroll;">
							<scroll-view scroll-y="true" style="height: cacl(100% - 10rpx)">
								<block v-for="(item, index) in activityList" v-bind:key="index" style="margin: auto;">
									<view style="border-radius: 18rpx; width: 100%;">
										<view style="width: 98%; margin: auto; text-align: center;">
											<image :src="item.Image" mode="widthFix" style="width: 100%; margin: auto;" @tap.stop="onButtonClick_Activity(index)"></image>
										</view>
										<view style="height: 10rpx;"></view>
									</view>
									<view style="height: 0rpx;"></view>
								</block>
							</scroll-view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<notice ref="notice" @click="onNoticeClick_GotIt"></notice>
	</view>
</template>

<script>
	import notice from '@/components/notice/notice.vue';
	
	export default {
		components: {
			notice,
		},
		
		data() {
			return {
				activityList: [],
				show: false,
			};
		},
		
		mounted() {
			if (this.gRequest.mainManager.announcementData == null || this.gRequest.mainManager.announcementData.length <= 0) {
				this.gRequest.mainManager.announcementInfo(this.onEventCallback_adInfo.bind(this));
			} else {
				this.activityList = this.gRequest.mainManager.announcementData;
			}
		},
		
		methods: {
			
			ShowPopWindow() {
				this.show = true;
				
			},
			
			onButtonClick_closePop() {
				this.show = false;
			},

			onEventCallback_adInfo(data) {
				this.activityList = data
			},
			
			// 活动详情
			onButtonClick_Activity(index) {
				if (this.activityList[index].Title=="telegrem") {
					this.gAndroidUtils.openBrowser(this.gBase64.decode(this.activityList[index].Content));
				} else if (this.activityList[index].Title=="sign") {
					// this.gRequest.infomationManager.signInConfig(this.onEventCallback_signInConfig.bind(this));
				} else {
					this.notice = true;
					if (this.$refs && this.$refs.notice) {
						this.$refs.notice.showHtml(this.activityList[index].Title, this.activityList[index].Content)
					}
				}
			},
			
			// 关闭Notice
			onNoticeClick_GotIt() {
				this.notice = false;
			},
			
			onButtonClick_gotoPage(type) {
				let url = "";
				if (type == 0) {
					url = "idx3"
				} else if (type == 1) {
					url = "VB"
				}
				if (url.length > 0) {
					uni.navigateTo({
						url: url,
						fail(err) {
							console.log(err)
						}
					})
				}
				
			},
		},
	}
</script>

<style lang="scss" scoped>
	
	.btn7 {
		background: url('@/static/jiefu17/more.png') no-repeat;
		background-size: 100% 100%;
		width: 55rpx;
		height: 57rpx;
		margin: auto;
		margin-right: 40rpx;
	}
	.tx {
		background: url('@/static/jiefu16/txBg.png') no-repeat;
		background-size: 100% 100%;
		width: 360rpx;
		height: 228rpx;
		margin: auto;
	}
	
	.Btn {
		// background: url('@/static/new/btncb021.png') no-repeat;
		// background-size: 100% 100%;
		width: 494rpx;
		height: 70rpx;
		display: flex;
		border-radius: 18rpx;
		margin: auto;
		color: #5E45B3;
	}
	
	.icon1 {
		background: url('@/static/jiefu16/vip.png') no-repeat;
		background-size: 100% 100%;
		
		width: 37rpx;
		height: 39rpx;
		margin: auto;
		margin-left: 20rpx;
	}
	.icon2 {
		background: url('@/static/jiefu16/bau.png') no-repeat;
		background-size: 100% 100%;
		
		width: 38rpx;
		height: 31rpx;
		margin: auto;
		margin-left: 20rpx;
	}
	
	.btnTz {
		background: url('@/static/jiefu16/arrow.png') no-repeat;
		background-size: 100% 100%;
		
		width: 35rpx;
		height: 35rpx;
		margin: auto;
		margin-right: 20rpx;
	}
	.vipPage{
		background: url("@/static/jiefu17/page.png") no-repeat;
		background-size: 100% 100%;
	}
</style>
