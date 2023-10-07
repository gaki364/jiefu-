<template>
	<view>
		<unititle :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back" :titleColor="'transparent'"></unititle>

		<view class="bg">
			<view style="height: 20rpx;"></view>
			<view class="tips">{{$t("forget.test10")}}</view>
			<input class="inputType" style="text-indent: 36rpx;" :placeholder="holer1" type="password" v-model="params.oldPassword"></input>
			<view class="tips">{{$t("forget.test6")}}</view>
			<input class="inputType" style="text-indent: 36rpx;" :placeholder="holer2" type="password" v-model="params.newPassWord"></input>
			<view class="tips">{{$t("forget.test8")}}</view>
			<input class="inputType" style="text-indent: 36rpx;" :placeholder="holer3" type="password" v-model="params.RNewPassword"></input>
			<view style="height: 20rpx;"></view>
			
			<view style="height: 20rpx;"></view>
			<view class="commonBtnBg" style="width: 40%;" @click="onButtonClick_SUBMIT()">{{$t("KEY_BINDACC_SUBMIT")}}</view>
			<view style="height: 20rpx;"></view>
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
      title: this.$t('KEY_LOGIN_FORGOT'),
      holer1: this.$t("forget.test11"),
      holer2: this.$t("forget.test7"),
      holer3: this.$t("forget.test9"),

      select: 0,

      params: {
        oldPassword: "",
        newPassWord: "",
        RNewPassword: "",
      },

    }
  },

  onLoad (option) {

  },

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow () {

  },

  onReady () {
    this.flush()
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
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onButtonClick_SUBMIT () {
      this.gRequest.infomationManager.forgetFundPassword(this.params.oldPassword, this.params.newPassWord, this.params.RNewPassword, this.onClickButton_Back.bind(this))
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

.bg {
  width: 90%;
  margin: auto;
  margin-top: 20rpx;
  background: #191d5c;
  border-radius: 18rpx;
}

.tips {
  width: 90%;
  margin-left: 5%;
  margin-top: 10rpx;
  font-size: 26rpx;
}

.input-type {
  width: 90%;
  height: 50rpx;
  border-radius: 360rpx;
  background: #313783;

  margin: auto;
  margin-top: 10rpx;

  padding-top: 10rpx;
  padding-bottom: 10rpx;

  font-weight: bold;
  text-indent: 20rpx;

  font-size: 26rpx;
}
</style>