<template>
	<view>
		<unititle :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back" :titleColor="'transparent'"></unititle>


		<view class="dlBg">
			<view style="justify-content: left;">
				<view style="width: 94%; margin: auto; position: relative;">
					<view style="height: 16rpx;"></view>
					<view style="display: flex;">
						<view class="dlImg" style=""></view>
						<view style="font-size: 40rpx; color: #7242CC; margin: auto; margin-left: 10rpx;">{{"Nível"}}<span style="color: #FFC003;">{{" VIP" + playerInfo.Level}}</span></view>
					</view>
					
				</view>
				<view style="height: 10rpx;"></view>
				<view style="width: 84%; margin: auto;">
					<view style="height: 6rpx;"></view>
					<view class="hengzhe" style="font-size: 30rpx; margin-top: 16rpx; margin-left: 0rpx; justify-content: left; margin-left: 10rpx;">
						<view style="color: #7242CC;">{{$t("KEY_WIT_NDR")}}</view>
						<view v-if="playerInfo" style="color: #FFFFFF; margin-left: 10rpx;">{{playerInfo.WithdrawTimes}}</view>
					</view>
					<view class="hengzhe" style="font-size: 30rpx; margin-top: 15rpx; margin-left: 0rpx; justify-content: left; margin-left: 10rpx;">
						<view style="color: #7242CC;">{{$t("KEY_WIT_TDR")}}</view>
						<view style="color: #FFFFFF; margin-left: 10rpx;">{{(Math.floor(playerInfo.WithdrawRate *10000) / 100) + "%"}}</view>
					</view>
					<view class="hengzhe" style="font-size: 30rpx; margin-top: 15rpx; margin-left: 0rpx; justify-content: left; margin-left: 10rpx;">
						<view style="white-space: nowrap;color: #7242CC;">{{$t("KEY_WIT_VUDDROL")}}<span style="color: #FFFFFF;">{{" " + gHelper.formatMoney(playerInfo.MaxWithdraw)}}</span></view>
						<!-- <view style="color: #CFEA86;">xxxx</view> -->
					</view>
					<view style="height: 20rpx;"></view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
		</view>

		<view style="width: 94%; margin: auto;  border-radius: 10rpx; margin-top: 20rpx; font-size: 20rpx;" class="cardBg">
			<view style="height: 20rpx;"></view>
			<view style="display: flex; width: 96%; margin: auto;">
				<view style="width: 43%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center;">{{$t("KEY_WIT_LDS")}}</view>
					<view style="height: 10rpx;"></view>
					<view class="inputType" style="display: flex;">
						<image :src="gAssets.jb" mode="widthFix" style="width: 36rpx; margin-top: auto; margin-bottom: auto; margin-left: 20rpx;"></image>
						
						<view v-if="playerInfo && playerInfo" style="margin-left: 10rpx; line-height: 62rpx; margin-top: auto; margin-bottom: auto; color: #FFFFFF;">{{gHelper.formatMoney(playerInfo.WithdrawAmount)}}</view>
					</view>
				</view>
				<view style="width: 43%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center;">{{$t("KEY_WIT_ATIVOS")}}</view>
					<view style="height: 10rpx;"></view>
					<view class="inputType" style="display: flex; height: 62rpx;">
						<image :src="gAssets.common_suo" mode="widthFix" style="width: 36rpx; margin-top: auto; margin-bottom: auto; margin-left: 20rpx;"></image>
						
						<view v-if="playerInfo && playerInfo" style="margin-left: 10rpx; line-height: 62rpx; margin-top: auto; margin-bottom: auto; color: #FFCE17;">{{gHelper.formatMoney(playerInfo.LimitAmount)}}</view>
						
					</view>
				</view>
				<image :src="gAssets.btn_help" mode="widthFix" style="width: 61rpx; margin: auto; margin-bottom: 0rpx;" @click="onButtonClick_showPopWindow()"></image>
			</view>
			
			<view style="height: 20rpx;"></view>
			<view style="display: flex;">
				<view style="margin: auto auto auto 30rpx; font-size: 20rpx; color: #FFFFFF;">{{$t('KEY_WIT_TIPS2')}}</view>
				<!-- <view style="font-size: 20rpx; text-align: right; margin: auto 30rpx auto auto;">{{gHelper.formatMoney(playerInfo.Turnover)+ "/" +gHelper.formatMoney(playerInfo.RequireTurnover)}}</view> -->
			</view>
			
			<view style="height: 0rpx;"></view>
			<view style="width: 90%; margin: auto; display: flex;">
				<!-- 进度条 -->
				<view class="strip" style="width: 100%;">
					<view v-if="Number(playerInfo.RequireTurnover) != 0" class="blue" :style="'width:'+ ((Number(playerInfo.Turnover) / Number(playerInfo.RequireTurnover) > 1 ? 1:Number(playerInfo.Turnover) / Number(playerInfo.RequireTurnover)) * 100) +'%'"></view>
					<!-- <view v-if="Number(playerInfo.RequireTurnover) != 0" style="width: 100%; text-align: center; color: #FFFFFF; font-size: 20rpx; top: 0rpx; position: absolute;">{{Math.floor(((Number(playerInfo.Turnover) / Number(playerInfo.RequireTurnover) > 1 ? 1:Number(playerInfo.Turnover) / Number(playerInfo.RequireTurnover)) * 10000))/100 + "%"}}</view> -->
					<view v-if="Number(playerInfo.RequireTurnover) == 0" class="blue" :style="'width:'+ 100 +'%'"></view>
					<!-- <view v-if="Number(playerInfo.RequireTurnover) == 0" style="width: 100%; text-align: center; color: #FFFFFF; font-size: 20rpx; top: 0rpx; position: absolute;">{{"100%"}}</view> -->
				</view>
				
			</view>
			<view style="height: 10rpx;"></view>
			<view v-if="!playerInfo.Loading" style="width: 90%; margin: auto; margin-left: 30rpx; margin-top: 10rpx; font-size: 22rpx; color: #FFFFFF;">{{$t('KEY_WIT_TIPS1')}}</view>
			<view v-if="playerInfo.Loading" style="width: 90%; margin: auto; margin-left: 30rpx; margin-top: 10rpx; color: #FFFFFF; display: flex;">
				<view style="font-size: 20rpx; margin: auto auto auto 0rpx;">Os dados do jogo estão sendo sincronizados...</view>
				<!-- <image :src="gAssets.common_Refresh" style="width: 67rpx; height: 53rpx; margin: auto 0rpx auto auto;"></image> -->
			</view>
			<view style="height: 30rpx;"></view>
		</view>


		<view style="width: 94%; position: relative; margin: auto; border-radius: 10rpx; margin-top: 30rpx; font-size: 20rpx;" class="cardBg">
			<view style="height: 20rpx;"></view>
			<view style="width: 90%; margin: auto; margin-left: 30rpx; margin-top: 10rpx; font-size: 26rpx; color: #FFFFFF;">{{$t("KEY_WIT_SC")}}</view>

			<view style="width: 90%; margin: auto; margin-top: 10rpx; border-radius: 12rpx; font-size: 20rpx; font-weight: bold; color: #FFFFFF;">
				<view class="hengzhe" style="position: relative; justify-content: left; width: 90%; margin: auto; padding-top: 20rpx; color: #FFFFFF;">
					<view>{{$t("KEY_WIT_IT")}}</view>
					<view v-if="playerInfo.WithdrawAccount" style="margin-left: 10rpx;">{{playerInfo.WithdrawAccount.PixType}}</view>
					<view style="position: absolute; right: 10rpx;">{{$t("KEY_WIT_PIX")}}</view>
				</view>

				<view class="hengzhe" style="justify-content: left; width: 90%; margin: auto; padding-top: 10rpx; color: #FFFFFF;">
					<view>{{$t("KEY_WIT_PIXAN")}}</view>
					<view v-if="playerInfo.WithdrawAccount" style="margin-left: 10rpx;">{{playerInfo.WithdrawAccount.PixKey}}</view>
				</view>
				<view style="height: 20rpx;"></view>
				<!-- <view style="width: 90%; height: 2rpx; background: #59626F; margin: auto; margin-top: 10rpx;"></view> -->
				<view class="commonBtnBg enviarBtn" style="margin: auto;" @click="onButtonClick_Edit()">{{$t('KEY_NEW_IDX5_MODIFY')}}</view>
				
				<view style="height: 20rpx;"></view>
			</view>

			<view style="height: 20rpx;"></view>
		</view>




		<view style="width: 94%; margin: auto;  border-radius: 10rpx; margin-top: 30rpx; font-size: 20rpx;" class="cardBg">

			<view style="width: 90%; margin: auto; margin-left: 5%; padding-top: 10rpx; position: relative;">
				<view style="margin-top: 20rpx; color: #FFFFFF;">{{$t("KEY_WIT_WA")}}</view>
				<input class="inputType" style="text-indent: 40rpx;" :placeholder="inputamount" type="number" v-model="params.amount"  @keyup="params.amount=params.amount.replace(/[^\d]/g, '')"></input>
				<view style="margin-top: 20rpx; color: #FFFFFF;">{{$t("KEY_WIT_FP")}}</view>
				<input class="inputType" style="text-indent: 40rpx;" :placeholder="inputpassword" type="password" placeholder-style="transform: scale(0.95); margin-left: -2%;" v-model="params.password"></input>
				<view class="modifyBtn" style="position: absolute; width: 220rpx; transform: scale(0.8); bottom: 2.7%; right: 0rpx;" @click="onButtonClick_ForgotPassword()">{{$t("KEY_WIT_FP")}}</view>
			</view>

			<view class="hengzhe" style=" margin: auto; margin-top: 50rpx; width: 94%;">
				
				<view class="commonBtnBg enviarBtn" @click="onButtonClick_Submit()">{{$t("KEY_WIT_SUBMIT")}}</view>
			</view>

			<view style="height: 50rpx;"></view>
			<view style="color: #FFFFFF; width: 90%; margin: auto; ">{{$t("KEY_WIT_T1")}}</view>
			<view style="height: 40rpx;"></view>
		</view>

		<view style="height: 40rpx;"></view>

		<view v-if="showPop">
			<view class="MaskWindow" @touchmove.stop.prevent="moveHandle">
				<view class="out">
					<view class="window">
						<!-- 关闭按钮 -->
						<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onButtonClick_ClosePopWindow()"></image>
						<view style="height: 30rpx;"></view>
						<view class="titleTest" style="font-size: 36rpx;">{{$t("KEY_WIT_EXPLICAR")}}</view>
						
						<view style="height: 30rpx;"></view>
						<view class="centerBg">
							<view style="height: 10rpx;"></view>
							<view style="width: 94%; margin: auto; color: #FFFFFF; padding-bottom: 20rpx; border-radius: 10rpx; font-size: 26rpx; white-space: pre-wrap;">{{$t("KEY_WIT_TTT")}}</view>
							<view style="height: 10rpx;"></view>
						</view>
						
						<view style="height: 10rpx;"></view>
					</view>
				</view>
			</view>
		</view>
		<comBottom></comBottom>
	</view>
</template>

<script>
	import unititle from '@/components/common/uni-title.vue'
	export default {
		components: {
			unititle
		},

		data() {
			return {
				title: this.$t('KEY_WIT_TITLE'),
				inputamount: this.$t('KEY_WIT_I1'),
				inputpassword: this.$t('KEY_WIT_I2'),

				params: {
					amount: "",
					password: "",
				},

				playerInfo: {},
				showPop: 0, // =1 弹窗
			}
		},

		onLoad(option) {

		},

		// 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
		onShow() {
			this.flush();
		},

		onReady() {
			
		},

		//监听下拉刷新
		onPullDownRefresh() {
			this.flush();
		},

		onHide() {},

		onUnload() {
			uni.stopPullDownRefresh();
		},

		methods: {
			flush() {
				uni.stopPullDownRefresh();
				this.gRequest.infomationManager.informationInfo(this.onEventCallback_informationInfo.bind(this));
			},
	
			onEventCallback_informationInfo(data) {
				if (data) {
					this.playerInfo = data;
					if (this.playerInfo.WithdrawAccount == null || this.playerInfo.WithdrawAccount.Id == 0) {
						uni.navigateTo({
							url: 'mudarbanco?type=3',
						});
					}
				}
				
			},

			onClickButton_Back() {
				this.gHelper.back(this);
			},

			onButtonClick_ForgotPassword() {
				uni.navigateTo({
					url: "bindaccount"
				});
			},

			onButtonClick_Submit() {
				this.gRequest.infomationManager.payout(this.params.amount, this.params.password, this.onEventCallBack_SubmitSuccess.bind(this));
			},
			
			
			onEventCallBack_SubmitSuccess() {
				this.gHelper.toast("Saque sucesso")
				this.flush();
			},

			onButtonClick_ClosePopWindow() {
				this.showPop = 0;
			},
			onButtonClick_showPopWindow() {
				this.showPop = 1;
			},

			onButtonClick_Edit() {
				uni.navigateTo({
					url: "mudarbanco?type=2"
				});
			},
			
			changeInput(e) {
				// let amount = this.params.amount;
				this.$nextTick(function(){
					this.params.amount = e.target.value.replace(/[^\d]/g, "");
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background: url("@/static/jiefu17/page.png") no-repeat;
		background-size: 100% 100%;
		color: #FFFFFF;
		font-size: 30rpx;
	}
	
	.vipBg {
		background: url('@/static/new/btn444-1.png') no-repeat;
		background-size: 100% 100%;
		
		width: 119rpx;
		height: 43rpx;
		line-height: 43rpx;
		color: #663B47;
		text-indent: 50rpx;
	}

	.input-type {
		width: 100%;
		border-radius: 12rpx;
		background: #313783;

		margin: auto;
		margin-top: 20rpx;

		padding-top: 10rpx;
		padding-bottom: 10rpx;

		font-weight: bold;
		text-indent: 20rpx;
		font-size: 26rpx;
	}
	
</style>
