<template>
	<view>
		<unititle :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back" :titleColor="'transparent'"></unititle>

		<view style="height: 20rpx;"></view>
		<view style="width: 94%; display: flex; margin: auto;">
			<view style="margin: auto; margin-left: 0rpx; color: #ffffff;">{{$t("KEY_RECH_SDC")}}</view>
			<view class="commonJbBg" style="display: flex; justify-content:left;">
				<image :src="gAssets.jinbi" mode="widthFix" style="width: 48rpx; margin-left: 10rpx; margin-top: auto; margin-bottom: auto;"></image>
				<view style="margin: auto; line-height: 52rpx;">{{playerInfo.jb}}</view>
				<btnFlush style="margin: 8rpx 10rpx auto 0rpx;" @flushPoint="flushPoint"></btnFlush>
			</view>
		</view>
		<view class="bg cardBg">

			<!-- 充值金额选择 -->
			<view style="height: 10rpx;"></view>
			<view style=" width: 96%; margin: auto; color: #EaC571;">{{$t("KEY_RECH_QDR")}}</view>
			<view style="height: 20rpx;"></view>
			<view class="itemlist">
				<block v-for="(item, index) in itemList" v-bind:key="index">
					<view @click="onButtonClick_SelectRecharge(index)"
					 :class="index == selectRecharge?'choseBg':'noChoseBg'">
						<view style="width: 96%; margin: auto; color: #FFFFFF; text-align: center; display: table-cell; vertical-align: middle; ">
							<view class="hengzhe" style="margin: auto; text-align: center;">
								<view>{{$t("KEY_RECH_BRL")}}</view>
								<view :style="index == selectRecharge?'color: #2da4ff;':'color: #2da4ff;'">{{item.Amount}}</view>
							</view>
							<view v-if="item.RebateAmount!='' && item.RebateAmount != 0 && Select" style="font-size: 20rpx; " :style="index == selectRecharge?'color: #000000;':'color: #F62039;'">+{{$t("KEY_RECH_BRL")}}
								{{item.RebateAmount}}</view>
						</view>
					</view>
				</block>
			</view>

			<view style="height: 15rpx;"></view>
			<view style="width: 96%; margin: auto; border-radius: 10rpx; font-size: 20rpx; ">
				<view class="hengzhe" style="justify-content: left">
					<view style="margin-top: 25rpx; margin-left: 20rpx; width: 44%; color: #eac571;">{{$t("KEY_RECH_VP")}}</view>
					
					<view style="margin-top: 25rpx; margin-left: 20rpx; color: #FFFFFF;">{{$t("KEY_RECH_DES")}}:</view>
					<view style="color: #17DFB2; margin-top: 25rpx; margin-left: 10rpx;" class="hengzhe">
						<view>{{$t("KEY_RECH_RS")}}</view>
						<view style="margin-left: 4rpx; word-break: break-all;"> {{desconto}} </view>
					</view>
				</view>


				<view style="width: 100%; margin: auto; margin-top: 20rpx; border-radius: 12rpx; padding-top: 10rpx; padding-bottom: 10rpx;">
					<!-- <view style="margin-left: 20rpx; color: #C9C8C8;">{{$t("KEY_RECH_FIODR")}}</view> -->
					<input class="loginInput" style="width: 100%; text-indent: 50rpx; margin: auto; font-size: 26rpx;" @input="getDesconto()" :placeholder="$t('bind.test8')" type="number" v-model="inputAmount"></input>
				</view>
				<view style="height: 30rpx;"></view>
			</view>


			<!-- Type 选择 -->
			<view style="height: 15rpx;"></view>
			
			<scroll-view scroll-x="true" style="width: 96%; margin: auto;   border-radius: 10rpx; font-size: 20rpx;overflow: hidden;  white-space: nowrap; margin: auto; padding: 20rpx 0rpx 20rpx 0rpx;" class="drawBg">
				<block v-for="(item, index) in typeList" v-bind:key="index" style="display: inline-block;">
					<view @click="onButtonClick_TypeSelect(index)" :class="index == selectType ? 'choseTypeBg':'noChoseTypeBg'">
						<view style="">
							<view style="font-size: 36rpx; width: 100%; text-align: center; line-height: 99rpx; font-weight: 600;">{{$t("KEY_RECH_TYPE")}}{{index}}</view>
						</view>
					</view>
				</block>
			</scroll-view>
			
			<view style="width: 100%; margin: auto;" v-if="playerInfo.ChargeType == 1 || playerInfo.ChargeType == 3">
				<view v-if="playerInfo.ChargeType == 1">
					<view style="height: 15rpx;"></view>
					<view style="width: 96%; margin: auto;  background: #313783; border-radius: 10rpx; font-size: 20rpx; ">
						<view style="height: 15rpx;"></view>
						<view style="border-radius: 10rpx; width: 96%; margin: auto;">
							<view style="height: 15rpx;"></view>
							<view style="width: 92%; margin: auto; display: flex;">
								<view style="margin: auto auto auto 0rpx; font-size: 26rpx; color: #FFFFFF;">{{$t('KEY_NEW_IDX5_BD') + " " + Math.floor(playerInfo.RewardRate*10000)/100 + "%"}}</view>
								<view style="margin: auto 0rpx auto auto; font-size: 26rpx; color: #D9250E;" v-if="playerInfo.RewardTimes != 0">{{"("+ playerInfo.PlayerRewardTimes +"/"+ playerInfo.RewardTimes +")"}}</view>
							</view>
							<view style="height: 15rpx;"></view>
						</view>
						<view style="height: 15rpx;"></view>
					</view>
				</view>
				
				
				<view style="height: 30rpx;"></view>
				<view style="width: 96%; margin: auto; display: flex;">
					<image v-if="!Select" :src="gAssets.choose1" mode="widthFix" style="width: 51rpx;" @click="onButtonClick_isSelect"></image>
					<image v-else-if="Select" :src="gAssets.choose2" mode="widthFix" style="width: 51rpx;" @click="onButtonClick_isSelect"></image>
					<view style="margin: auto auto auto 10rpx; color: #FFFFFF; font-size: 26rpx;">{{$t('KEY_NEW_CB')}}</view>
				</view>
			</view>
			


			<view style="height: 25rpx;"></view>
			<view style="width: 96%; text-align: left; margin: auto;  font-size: 24rpx; color: #FFFFFF;">{{$t('KEY_RECH_T1')}}</view>

			<view style="height: 30rpx;"></view>
			<view class="commonBtnBg enviarBtn" style="font-size: 28rpx;" @click="onButtonClick_Enviar()">{{$t('KEY_RECH_ENVIAR')}}</view>

			<view style="height: 120rpx;"></view>

		</view>
			
		<view class="MaskWindow" @touchmove.stop.prevent="moveHandle" v-if="editMode != 0">
			<view class="out">
				<view class="window">
					<!-- 关闭按钮 -->
					<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onButtonClick_ClosePopWindow()"></image>
					<view style="height: 40rpx;"></view>
					<view style="margin: auto; text-align: center;" v-if="reBase64Img.length > 0">
						<image :src="reBase64Img" mode="widthFix" style="width: 300rpx; margin: auto;"></image>
					</view>
					<view style="height: 30rpx;"></view>
					<view style="height: 20rpx;"></view>
					<view class="commonBtnBg" style="font-size: 30rpx; width: 70%;" @click="onButtonClick_copyArCode()">Copiar QR code</view>
					<view style="height: 20rpx;"></view>
					<view style="font-size: 30rpx; color: #DE3500; text-align: center; width: 96%; margin: auto;">Copie o QR code e abra no pix para finalizar o pagamento</view>
					<view style="height: 30rpx;"></view>
					<view style="font-size: 60rpx; font-weight: 900; text-align: center; color: #14181B;">PIX</view>
					<view style="height: 20rpx;"></view>
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
				title: this.$t('KEY_RECH_TITLE'),

				playerInfo: {
					jb: 0,
					PlayerRewardTimes: 0,
					RewardTimes: 0,
					RewardRate: 0,
					ChargeType: 0,
				},

				itemList: [],

				typeList: [],
				
				serverData: {},

				selectRecharge: 0,
				selectType: 0,
				inputAmount: "",
				desconto: 0,
				
				isBind: false,
				
				editMode: 0,
				reBase64Img: "",
				rechargeInfo: "",
				
				Select: true,
				showKf: false,
				kfUrl: '',
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
				this.gRequest.infomationManager.informationInfo(this.onEventCallBack_userInfo.bind(this));
				this.gRequest.infomationManager.getProducts(this.onEventCallBack_getRechargeList.bind(this))
				this.gRequest.infomationManager.getDestinationInfo(this.onEventCallBack_getDestinationInfo.bind(this))
			},

			// 获取首页数据回调
			onEventCallBack_userInfo(data) {
				if (data) {
					this.showKf = data.IsRecharge != 0;
					if (this.showKf) {
						this.gRequest.infomationManager.getVipsmobiles(this.onEventCallBack_getVipsmobiles.bind(this));
					}
					this.playerInfo.jb = this.gHelper.formatMoney(data.TotalAssets);
					this.playerInfo.PlayerRewardTimes = data.PlayerRewardTimes;
					this.playerInfo.RewardTimes = data.RewardTimes;
					this.playerInfo.RewardRate = data.RewardRate;
					this.playerInfo.ChargeType = data.ChargeType;
					// if (this.playerInfo.PlayerRewardTimes < this.playerInfo.RewardTimes) {
					// 	if (this.playerInfo.ChargeType == 1 || this.playerInfo.ChargeType == 3) {
					// 		this.Select = true;
					// 	}
					// }
					if (data.RechargeAccount == null || data.RechargeAccount.Id == 0) {
						this.isBind = false;
					} else {
						this.isBind = true;
					}
					
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
				}
			},

			onEventCallBack_getRechargeList(data) {
				if (data) {
					this.itemList = data.Products;
					this.serverData = data;
				}
				
			},

			onEventCallBack_getDestinationInfo(data) {
				this.typeList = data;
			},

			onClickButton_Back() {
				this.gHelper.back(this);
			},
			
			onClickButton_selectBonus() {
				this.gHelper.back(this);
			},

			// 点击充值金额
			onButtonClick_SelectRecharge(index) {
				this.selectRecharge = index;
			},

			// Type 点击
			onButtonClick_TypeSelect(index) {
				this.selectType = index;
			},

			getDesconto() {
				let amount = 0;
				
				if (!this.Select) {
					return
				}
				if (this.serverData.Range1 && this.serverData.Range1.length > 0) {
					let r1 = this.serverData.Range1.split("-")[0];
					let r2 = this.serverData.Range1.split("-")[1];
					if (r2 && r2.length > 0) {
						if (Number(this.inputAmount) >= Number(r1) && Number(this.inputAmount) <= Number(r2)) {
							if (Number(this.serverData.Range1Rebate) > 1)  {
								amount = this.serverData.Range1Rebate;
							} else {
								amount = Number(this.serverData.Range1Rebate) * Number(this.inputAmount);
							}
						} else if (Number(this.inputAmount) > Number(r2)) {
							if (this.serverData.Range2 && this.serverData.Range2.length > 0) {
								amount = 0;
							} else {
								amount = Number(this.serverData.Range1Rebate) * Number(this.inputAmount);
							}
						} else {
							amount = 0;
						}
					} else {
						if (Number(this.inputAmount) == Number(r1)) {
							amount = Number(this.serverData.Range1Rebate)
						}
					}
					
				}
				if (this.serverData.Range2 && this.serverData.Range2.length > 0 && amount == 0) {
					let r1 = this.serverData.Range2.split("-")[0];
					let r2 = this.serverData.Range2.split("-")[1];
					if (Number(this.inputAmount) >= Number(r1) && Number(this.inputAmount) <= Number(r2)) {
						if (Number(this.serverData.Range2Rebate) > 1)  {
							amount = this.serverData.Range2Rebate;
						} else {
							amount = Number(this.serverData.Range2Rebate) * Number(this.inputAmount)
						}
					} else if (Number(this.inputAmount) > Number(r2)) {
						amount = Number(this.serverData.Range1Rebate) * Number(this.inputAmount);
						
					}
				}
				
				if (Number(amount) > Number(this.serverData.MaxRebate)) {
					amount = this.serverData.MaxRebate;
				}
				this.desconto = Math.floor(amount);
			},

			// Enviar
			onButtonClick_Enviar() {
				if (this.isBind) {
					let amount;
					amount = this.itemList[this.selectRecharge].Amount;
					if (this.inputAmount.length > 0) {
						amount = Number(this.inputAmount)
					}
					// if (amount < 20 && amount > 200000) {
					// 	this.gHelper.toast("1212121")
					// 	return
					// }
					let data = {amount: amount, base64Img: "", info: ""};
					let isReward = this.Select ? 1:0;
					this.gRequest.infomationManager.rechargeData = data;
					this.gRequest.infomationManager.recharge(amount, null, this.typeList[this.selectType].DestinationId, null, this.onEventCallBack_rechargeSuccess
						.bind(this), isReward);
				} else {
					uni.navigateTo({
						url: 'bindrecharge',
					});
				}
			},

			onEventCallBack_rechargeSuccess(data) {
				if (data.PayMode == "url") {
					this.gAndroidUtils.openBrowser(data.Data);
				} else if (data.PayMode == "base64") {
					// this.editMode = 1;
					this.reBase64Img =data.Data.base64Img;
					this.rechargeInfo = data.Data.info;
					this.gRequest.infomationManager.rechargeData.base64Img = data.Data.base64Img;
					this.gRequest.infomationManager.rechargeData.info = data.Data.info;
					uni.navigateTo({
						url:'Pagar',
					});
				}
				
			},
			
			
			onButtonClick_copyArCode() {
				this.gAndroidUtils.copyToSystemClipboard(this.rechargeInfo);
				this.gHelper.toast(this.$t("KEY_INDEX2_CS"));
			},
			
			// 关闭
			onButtonClick_ClosePopWindow() {
				this.reBase64Img = "";
				this.rechargeInfo = "";
				this.editMode = 0;
			},
			
			// 关闭
			onButtonClick_isSelect() {
				if (this.Select) {
					this.Select = false;
				} else {
					if (this.playerInfo.ChargeType == 3) {
						this.Select = true;
					} else {
						if (this.playerInfo.PlayerRewardTimes < this.playerInfo.RewardTimes) {
							this.Select = true;
						}
					}
				}
			},
			
			flushPoint(data) {
				console.log(data);
				this.playerInfo.jb = this.gHelper.formatMoney(data);
			},
			
			onButtonClick_OpenWebView() {
				this.gAndroidUtils.openBrowser(this.kfUrl);
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

	.bg {
		width: 95%;
		margin: auto;
		border-radius: 10rpx;

		font-size: 30rpx;
		margin-top: 20rpx;
	}

	.itemlist {
		width: 96%;
		overflow: hidden;
		display: grid; 
		grid-template-columns: auto auto auto; 
		grid-row-gap: 18rpx;
		margin: auto;

		margin-top: 10rpx;
	}
	
	.choseBg {
		background: url('@/static/new/btn-1.png') no-repeat;
		background-size: 100% 100%;
		width: 216rpx;
		height: 98rpx;
		margin: auto;
		display: table;
	}
	.noChoseBg {
		background: url('@/static/new/btn3-1.png') no-repeat;
		background-size: 100% 100%;
		width: 216rpx;
		height: 98rpx;
		margin: auto;
		display: table;
	}
	
	.choseTypeBg {
		background: url('@/static/new/btn-661.png') no-repeat;
		background-size: 100% 100%;
		width: 216rpx;
		height: 99rpx;
		display: table;
		margin-left: 10rpx;
		display: inline-block;
		margin-top: 2rpx;
	}
	.noChoseTypeBg {
		background: url('@/static/new/btn-b1.png') no-repeat;
		background-size: 100% 100%;
		width: 216rpx;
		height: 99rpx;
		display: table;
		margin-left: 10rpx;
		display: inline-block;
		margin-top: 2rpx;
	}
</style>
