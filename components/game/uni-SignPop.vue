<!-- 公告弹窗 -->
<template>
	<view class="MaskWindow" @touchmove.stop.prevent="moveHandle" v-if="(isShow && canShow && Object.keys(SignData).length > 0 && SignData[curVip])">
		<view class="out">
			<view class="window" style="width: 90%; margin: auto; position: relative;">
				<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute;width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onClickButton_ClosePop()"></image>
				<view style="height: 20rpx;"></view>
				<view class="titleTest" style="font-size: 34rpx;">Check-in diário</view>
				<view style="height: 20rpx;"></view>
				<view style="background-color: #000515; border: 2rpx solid #000515; border-radius: 360rpx; width: 66%; margin: auto;">
					<view style="height: 12rpx;"></view>
					<view style="width: 80%; margin: auto; display: flex;">
						<view @click="onButtonClick_SwitchLv(0)" style="font-size: 27rpx; margin: auto; text-align: center; color: #C9C7C3; width: 20%; line-height: 40rpx;">{{(curVip - 1) < mimLv ? 'VIP' + MaxLv : 'VIP' + (curVip - 1) }}</view>
						<view @click="onButtonClick_SwitchLv(0)" style="font-size: 36rpx; margin: auto; text-align: center; color: #C9C7C3; width: 10%; line-height: 30rpx;"><</view>
						<view style="font-size: 27rpx; margin: auto; text-align: center; color: #F5A314; width: 20%; line-height: 40rpx;">{{'VIP' + curVip }}</view>
						<view @click="onButtonClick_SwitchLv(1)" style="font-size: 36rpx; margin: auto; text-align: center; color: #C9C7C3; width: 10%; line-height: 30rpx;">></view>
						<view @click="onButtonClick_SwitchLv(1)" style="font-size: 27rpx; margin: auto; text-align: center; color: #C9C7C3; width: 20%; line-height: 40rpx;">{{(curVip + 1) > MaxLv ? 'VIP' + mimLv : 'VIP' + (curVip + 1) }}</view>
					</view>
					<view style="height: 12rpx;"></view>
				</view>
				<view style="height: 22rpx;"></view>
				<view style="margin: auto; display: flex;width: 86%;">
					<view style="width: 70%; margin: auto;">
						<view style="display: flex;">
							<view @click="onButtonClick_lq(0, SignData[curVip][0].Type == 2)" :class="(SignData[curVip][0].Type == 2 || SignData[curVip][0].Type == 3) ? 'SignItem2':'SignItem1'">
								<view class="itemText1">{{"Dia 1"}}</view>
								<view :class="(SignData[curVip][0].Type == 2)?'itemText3':'itemText2'">{{gHelper.formatMoney(SignData[curVip][0].Reward) + "BRL"}}</view>
								<view class="signImg" v-if="SignData[curVip][0].Type == 3"></view>
							</view>
							<view @click="onButtonClick_lq(0, SignData[curVip][1].Type == 2)" :class="(SignData[curVip][1].Type == 2 || SignData[curVip][1].Type == 3) ? 'SignItem2':'SignItem1'">
								<view class="itemText1">{{"Dia 2"}}</view>
								<view :class="(SignData[curVip][1].Type == 2)?'itemText3':'itemText2'">{{gHelper.formatMoney(SignData[curVip][1].Reward) + "BRL"}}</view>
								<view class="signImg" v-if="SignData[curVip][1].Type == 3"></view>
							</view>
							<view @click="onButtonClick_lq(0, SignData[curVip][2].Type == 2)" :class="(SignData[curVip][2].Type == 2 || SignData[curVip][2].Type == 3) ? 'SignItem2':'SignItem1'">
								<view class="itemText1">{{"Dia 3"}}</view>
								<view :class="(SignData[curVip][2].Type == 2)?'itemText3':'itemText2'">{{gHelper.formatMoney(SignData[curVip][2].Reward) + "BRL"}}</view>
								<view class="signImg" v-if="SignData[curVip][2].Type == 3"></view>
							</view>
						</view>
						<view style="height: 20rpx;"></view>
						<view style="display: flex;">
							<view @click="onButtonClick_lq(0, SignData[curVip][3].Type == 2)" :class="(SignData[curVip][3].Type == 2 || SignData[curVip][3].Type == 3) ? 'SignItem2':'SignItem1'">
								<view class="itemText1">{{"Dia 4"}}</view>
								<view :class="(SignData[curVip][3].Type == 2) ?'itemText3':'itemText2'">{{gHelper.formatMoney(SignData[curVip][3].Reward) + "BRL"}}</view>
								<view class="signImg" v-if="SignData[curVip][3].Type == 3"></view>
							</view>
							<view @click="onButtonClick_lq(0, SignData[curVip][4].Type == 2)" :class="(SignData[curVip][4].Type == 2 || SignData[curVip][4].Type == 3) ? 'SignItem2':'SignItem1'">
								<view class="itemText1">{{"Dia 5"}}</view>
								<view :class="(SignData[curVip][4].Type == 2)?'itemText3':'itemText2'">{{gHelper.formatMoney(SignData[curVip][4].Reward) + "BRL"}}</view>
								<view class="signImg" v-if="SignData[curVip][4].Type == 3"></view>
							</view>
							<view @click="onButtonClick_lq(0, SignData[curVip][5].Type == 2)" :class="(SignData[curVip][5].Type == 2 || SignData[curVip][5].Type == 3) ? 'SignItem2':'SignItem1'">
								<view class="itemText1">{{"Dia 6"}}</view>
								<view :class="(SignData[curVip][5].Type == 2)?'itemText3':'itemText2'">{{gHelper.formatMoney(SignData[curVip][5].Reward) + "BRL"}}</view>
								<view class="signImg" v-if="SignData[curVip][5].Type == 3"></view>
							</view>
						</view>
					</view>
					<view @click="onButtonClick_lq(0, SignData[curVip][6].Type == 2)" :class="(SignData[curVip][6].Type == 2 || SignData[curVip][6].Type == 3) ? 'SignItem4':'SignItem3'">
						<view class="itemText1">{{"Dia 7"}}</view>
						<view :class="(SignData[curVip][6].Type == 2)?'itemText5':'itemText4'" style="font-size: 35rpx; bottom: 10rpx;">{{gHelper.formatMoney(SignData[curVip][6].Reward) + "BRL"}}</view>
						<view class="signImg" style="left: 12%; top: 28%;" v-if="SignData[curVip][6].Type == 3"></view>
					</view>
				</view>
				<view style="height: 30rpx;"></view>
				<view @click="onButtonClick_lq(1)" class="btnLvSe" style="width: 60%;">Check-in diário</view>
				<view style="height: 20rpx;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import jyfParser from "@/components/common/jyf-parser/jyf-parser";

	export default {
		components: {
			jyfParser
		},
		
		props: {
			canShow: false,
		},

		data() {
			return {
				isShow: false,
				curVip: 0,
				myVip: 0,
				MaxLv: 10,
				mimLv: 0,
				SignData: [],
			}
		},

		mounted() {
			
		},

		methods: {
			// 禁止滑动窗口
			moveHandle() {
				return;
			},
			
			showPop(data) {
				if (this.gRequest.userManager && this.gRequest.userManager.userInfoData) {
					
					this.myVip = this.gRequest.userManager.userInfoData.Level;
					this.MaxLv = Object.keys(data).length - 1;
					this.curVip = this.myVip;
					this.SignData = data;
					this.isShow = true;
				}
			},
			
			onButtonClick_lq(type, isSign) {
				if (type == 0) {
					if (isSign) {
						this.gRequest.infomationManager.signInPlayer(this.onEventCallback_signInPlayer.bind(this));
						
					}
				} else {
					this.gRequest.infomationManager.signInPlayer(this.onEventCallback_signInPlayer.bind(this));
					
				}
			},
			
			onEventCallback_signInPlayer() {
				let wTime = 1000
				if (this.curVip != this.myVip) {
					setTimeout(() => {
					   this.flushSignStatus();
					}, 200);
					wTime = 1200;
				} else {
					this.flushSignStatus();
				}
				this.curVip = this.myVip;
				
				this.$emit("flushPlayer");
				setTimeout(() => {
				    this.isShow = false
				}, wTime);
			},
			
			flushSignStatus() {
				for (let i = 0; i < this.SignData[this.curVip].length; i++) {
					if (this.SignData[this.curVip][i].Type == 2) {
						this.SignData[this.curVip][i].Type = 3;
						break;
					}
				}
			},
			
			onButtonClick_SwitchLv(type) {
				if (type == 0) {
					this.curVip -= 1;
					if (this.curVip < this.mimLv) {
						this.curVip = this.MaxLv
					}
				} else {
					this.curVip += 1;
					if (this.curVip > this.MaxLv) {
						this.curVip = this.mimLv;
					}
				}
			},
			
			onClickButton_ClosePop() {
				this.isShow = false;
			},
			
			onClickButton_Receber() {
				this.gRequest.teamManager.receiveTurnoverVip(this.onEventCallback_success.bind(this));
			},
			
			onEventCallback_success() {
				this.$emit("flushPlayer");
				this.gHelper.toast("Receba sucesso");
				this.isShow = false;
			},

			linkpress(e) {
				e.ignore(); // 此链接不进行自动跳转/复制
				// 自定义操作
				this.gAndroidUtils.copyToSystemClipboard(e.href);
				this.gHelper.toast(this.$t("KEY_COPYSUCCESS"));
			},
		},
	}
</script>

<style lang="scss">
	// .SignItem1 {
	// 	background: url('@/static/new/btn023-1.png') no-repeat;
	// 	background-size: 100% 100%;
		
	// 	width: 113rpx;
	// 	height: 114rpx;
		
	// 	margin: auto;
	// 	position: relative;
	// }
	
	// .SignItem2 {
	// 	background: url('@/static/new/btn02661.png') no-repeat;
	// 	background-size: 100% 100%;
		
	// 	width: 113rpx;
	// 	height: 114rpx;
		
	// 	margin: auto;
	// 	position: relative;
	// }
	
	// .SignItem3 {
	// 	background: url('@/static/new/btn230.png') no-repeat;
	// 	background-size: 100% 100%;
		
	// 	width: 151rpx;
	// 	height: 249rpx;
		
	// 	margin: auto;
	// 	margin-right: 20rpx; 
	// 	margin-left: 20rpx;
	// 	position: relative;
	// }
	
	// .SignItem4 {
	// 	background: url('@/static/new/btn231.png') no-repeat;
	// 	background-size: 100% 100%;
		
	// 	width: 151rpx;
	// 	height: 249rpx;
		
	// 	margin: auto;
	// 	margin-right: 20rpx; 
	// 	margin-left: 20rpx;
	// 	position: relative;
	// }
	
	// .signImg {
	// 	background: url('@/static/new/btn023pp1.png') no-repeat;
	// 	background-size: 100% 100%;
		
	// 	width: 113rpx;
	// 	height: 114rpx;
		
	// 	position: absolute;
	// 	top: 0rpx;
	// 	right: 0rpx;
	// }
	
	// .itemText1 {
	// 	font-size: 20rpx;
	// 	color: #79E5EF;
		
	// 	position: absolute;
	// 	top: 6rpx;
	// 	left: 10rpx;
	// }
	
	// .itemText2 {
	// 	font-size: 20rpx;
	// 	color: #B168F0;
		
	// 	position: absolute;
	// 	bottom: 0rpx;
	// 	width: 100%;
	// 	text-align: center;
	// }
	// .itemText3 {
	// 	font-size: 20rpx;
	// 	color: #4EE354;
		
	// 	position: absolute;
	// 	bottom: 0rpx;
	// 	width: 100%;
	// 	text-align: center;
	// }
	// .itemText4 {
	// 	font-size: 20rpx;
	// 	color: #644473;
		
	// 	position: absolute;
	// 	bottom: 0rpx;
	// 	width: 100%;
	// 	text-align: center;
	// }
	// .itemText5 {
	// 	font-size: 20rpx;
	// 	color: #34CCA3;
		
	// 	position: absolute;
	// 	bottom: 0rpx;
	// 	width: 100%;
	// 	text-align: center;
	// }
</style>
