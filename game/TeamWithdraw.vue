<template>
	<view>
		<unititle :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back" :titleColor="'transparent'"></unititle>


		<view style="width: 94%; margin: auto;  border-radius: 10rpx; margin-top: 20rpx; font-size: 20rpx;" class="cardBg">
			<view style="height: 20rpx;"></view>
			<view style="display: flex; width: 96%; margin: auto;">
				<view style="width: 100%; margin: auto;">
					<view style="font-size: 20rpx; margin-left: 10rpx;">{{"Bónus"}}</view>
					<view style="height: 10rpx;"></view>
					<view style="background: #E9C46B; border-radius: 12rpx; display: flex; height: 62rpx;">
						<image :src="gAssets.jb" mode="widthFix" style="width: 36rpx; margin-top: auto; margin-bottom: auto; margin-left: 30rpx;"></image>
						
						<view style="margin-left: 20rpx; line-height: 62rpx; margin-top: auto; margin-bottom: auto; font-size: 30rpx;">{{gHelper.formatMoney(BonusAmount)}}</view>
					</view>
				</view>
			</view>
			
			
			<view style="height: 30rpx;"></view>
		</view>


		<view style="width: 94%; position: relative; margin: auto;  border-radius: 10rpx; margin-top: 30rpx; font-size: 20rpx;"  class="cardBg">
			<view style="height: 20rpx;"></view>
			<view style="width: 90%; margin: auto; margin-left: 30rpx; margin-top: 10rpx; font-size: 26rpx;">{{$t("KEY_WIT_SC")}}</view>

			<view style="width: 96%; margin: auto; margin-top: 10rpx; border-radius: 12rpx; font-size: 20rpx; background: #E9C46B; font-weight: bold; color: #FFFFFF;">
				<view class="hengzhe" style="position: relative; justify-content: left; width: 90%; margin: auto; padding-top: 20rpx;">
					<view>{{$t("KEY_WIT_IT")}}</view>
					<view v-if="playerInfo.WithdrawAccount" style="margin-left: 10rpx;">{{playerInfo.WithdrawAccount.PixType}}</view>
					<view style="position: absolute; right: 10rpx;">{{$t("KEY_WIT_PIX")}}</view>
				</view>

				<view class="hengzhe" style="justify-content: left; width: 90%; margin: auto; padding-top: 10rpx;">
					<view>{{$t("KEY_WIT_PIXAN")}}</view>
					<view v-if="playerInfo.WithdrawAccount" style="margin-left: 10rpx;">{{playerInfo.WithdrawAccount.PixKey}}</view>
				</view>

				<view style="width: 90%; height: 2rpx; background: #59626F; margin: auto; margin-top: 10rpx;"></view>
				<view class="modifyBtn" style="position: absolute; right: 60rpx; bottom: 34rpx;" @click="onButtonClick_Edit()">{{$t('KEY_NEW_IDX5_MODIFY')}}</view>
				<!-- <image :src="gAssets.imgEdit" mode="widthFix" style="width: 58rpx; margin-top: 10rpx; margin-left: 85%;" @click="onButtonClick_Edit()"></image> -->
				<view style="height: 80rpx;"></view>
			</view>

			<view style="height: 20rpx;"></view>
		</view>




		<view style="width: 94%; margin: auto;border-radius: 10rpx; margin-top: 30rpx; font-size: 20rpx;"  class="cardBg">

			<view style="width: 90%; margin: auto; margin-left: 5%; padding-top: 10rpx; position: relative;">
				<view style="margin-top: 20rpx;">{{$t("KEY_WIT_WA")}}</view>
				<input class="inputType" style="text-indent: 36rpx;" :placeholder="inputamount" type="number" v-model="params.amount"  @keyup="params.amount=params.amount.replace(/[^\d]/g, '')"></input>
				<view style="margin-top: 20rpx;">{{$t("KEY_WIT_FP")}}</view>
				<input class="inputType" style="text-indent: 36rpx;" :placeholder="inputpassword" type="password" placeholder-style="transform: scale(0.95); margin-left: -2%;" v-model="params.password"></input>
				<view class="modifyBtn" style="position: absolute; width: 220rpx; transform: scale(0.8); bottom: 2.7%; right: 0rpx;" @click="onButtonClick_ForgotPassword()">{{$t("KEY_WIT_FP")}}</view>
			</view>

			<view class="hengzhe" style=" margin: auto; margin-top: 50rpx; width: 94%;">
				
				<view class="commonBtnBg" style="font-size: 26rpx;" @click="onButtonClick_Submit()">{{$t("KEY_WIT_SUBMIT")}}</view>
			</view>

			<view style="height: 50rpx;"></view>
			<view style="color: #FFFFFF; width: 90%; margin: auto; ">{{$t("KEY_WIT_T1")}}</view>
			<view style="height: 40rpx;"></view>
		</view>



		<view v-if="showPop">
			<view class="MaskWindow" @touchmove.stop.prevent="moveHandle">
				<view class="out">
					<view class="window">
						<!-- 关闭按钮 -->
						<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onButtonClick_ClosePopWindow()"></image>
						<view style="height: 30rpx;"></view>
						<view style="color: #87EF85; width: 100%; font-weight: 600; text-align: center; font-size: 36rpx;">{{$t("KEY_WIT_EXPLICAR")}}</view>
						
						<view style="height: 30rpx;"></view>
						<view style="background-color: #0A101D; border-radius: 12rpx; width: 96%; margin: auto;">
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

  data () {
    return {
      title: this.$t('KEY_WIT_TITLE'),
      inputamount: this.$t('KEY_WIT_I1'),
      inputpassword: this.$t('KEY_WIT_I2'),

      params: {
        amount: "",
        password: "",
      },

      playerInfo: {},
      BonusAmount: 0,
      showPop: 0, // =1 弹窗
    }
  },

  onLoad (option) {

  },

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow () {
    this.flush()
  },

  onReady () {

  },

  //监听下拉刷新
  onPullDownRefresh () {
    this.flush()
  },

  onHide () { },

  onUnload () {
    uni.stopPullDownRefresh()
  },

  methods: {
    flush () {
      uni.stopPullDownRefresh()
      this.gRequest.infomationManager.informationInfo(this.onEventCallback_informationInfo.bind(this))
      this.gRequest.teamManager.promoteHome(this.onEventCallback_promoteHome.bind(this))
    },

    onEventCallback_informationInfo (data) {
      if (data) {
        this.playerInfo = data
        if (this.playerInfo.WithdrawAccount == null || this.playerInfo.WithdrawAccount.Id == 0) {
          uni.navigateTo({
            url: 'mudarbanco?type=4',
          })
        }
      }
    },

    onEventCallback_promoteHome (data) {
      if (data) {
        this.BonusAmount = data.BonusAmount
      }
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onButtonClick_ForgotPassword () {
      uni.navigateTo({
        url: "bindaccount"
      })
    },

    onButtonClick_Submit () {
      this.gRequest.teamManager.bonusPayout(this.params.amount, this.params.password, this.onEventCallBack_SubmitSuccess.bind(this))
    },

    onEventCallBack_SubmitSuccess () {
      this.gHelper.toast("Saque sucesso")
      this.flush()
    },

    onButtonClick_ClosePopWindow () {
      this.showPop = 0
    },
    onButtonClick_showPopWindow () {
      this.showPop = 1
    },

    onButtonClick_Edit () {
      uni.navigateTo({
        url: "mudarbanco?type=2"
      })
    },

    changeInput (e) {
      // let amount = this.params.amount;
      this.$nextTick(function () {
        this.params.amount = e.target.value.replace(/[^\d]/g, "")
      })
    },
  },
}
</script>

<style lang="scss" scoped>
page {
  background: url("@/static/jiefu17/page.png") no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  font-size: 30rpx;
}

.input-type {
  width: 100%;
  border-radius: 10rpx;
  background: #e9c46b;

  margin: auto;
  margin-top: 20rpx;

  padding-top: 10rpx;
  padding-bottom: 10rpx;

  font-weight: bold;
  text-indent: 20rpx;
  font-size: 26rpx;
  border-radius: 360rpx;
}
</style>
