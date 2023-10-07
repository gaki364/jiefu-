<template>
  <view style="height: 1624rpx">
    <view class="topBg">
      <view style="height: 80rpx"></view>
      <view
        style="
          text-align: center;
          font-size: 36rpx;
          color: #ffffff;
          text-align: center;
        "
        >{{ $t("KEY_RECH_PAGAR1") }}</view
      >
      <image
        :src="gAssets.backImg"
        mode="widthFix"
        style="
          width: 72rpx;
          height: 72rpx;
          margin: auto;
          position: absolute;
          top: 60rpx;
          left: 30rpx;
        "
        @click="onClickButton_Back()"
      ></image>
    </view>
    <view style="height: 40rpx"></view>
    <view
      style="
        text-align: center;
        font-size: 36rpx;
        color: #ffffff;
        text-align: center;
        width: 654rpx;
        margin: auto;
      "
      >{{ $t("KEY_RECH_PAGAR2") + rechargeAmount }}</view
    >
    <view style="height: 40rpx"></view>
    <view class="Bg">
      <view style="height: 30rpx"></view>
      <view
        style="
          text-align: center;
          font-size: 30rpx;
          color: #ffffff;
          text-align: center;
          width: 80%;
          margin: auto;
        "
        >{{ $t("KEY_RECH_PAGAR3") }}</view
      >
      <view style="height: 60rpx"></view>
      <view
        style="margin: auto; text-align: center"
        v-if="reBase64Img.length > 0"
      >
        <image
          :src="reBase64Img"
          mode="widthFix"
          style="width: 300rpx; margin: auto"
        ></image>
      </view>
      <view style="height: 60rpx"></view>
      <view
        class="commonBtnBg"
        style="width: 64%"
        @click="onButtonClick_copyArCode"
        >{{ $t("KEY_RECH_PAGAR4") }}</view
      >
      <view style="height: 30rpx"></view>
    </view>
    <view style="height: 40rpx"></view>
    <view
      style="
        text-align: center;
        font-size: 30rpx;
        color: #edd30b;
        text-align: center;
        margin: auto;
      "
      >{{ $t("KEY_RECH_PAGAR5") }}</view
    >
    <comBottom></comBottom>
  </view>
</template>

<script>
export default {
  data () {
    return {
      rechargeAmount: 0,
      reBase64Img: "",
      info: "",
    }
  },

  onShow () {
    this.flush()
  },

  methods: {
    flush () {
      uni.stopPullDownRefresh()
      if (this.gRequest.infomationManager.rechargeData) {
        this.rechargeAmount = this.gRequest.infomationManager.rechargeData.amount
        this.reBase64Img = this.gRequest.infomationManager.rechargeData.base64Img
        this.info = this.gRequest.infomationManager.rechargeData.info
      }
    },

    onClickButton_Back () {
      this.gRequest.infomationManager.rechargeAmount = null
      this.gHelper.back(this)
    },

    onButtonClick_copyArCode () {
      this.gAndroidUtils.copyToSystemClipboard(this.info)
      this.gHelper.toast(this.$t('KEY_NEW_CPSUCCESS'))
    },
  },
}
</script>

<style lang="scss" scoped>
page {
  background: url("@/static/000.png") no-repeat;
  background-size: 100% 1642rpx;
}

.topBg {
  background: url("@/static/_0019_bg.png") no-repeat;
  background-size: 100% 100%;

  width: 100%;
  height: 155rpx;
}

.Bg {
  background: url("@/static/001.png") no-repeat;
  background-size: 100% 100%;

  width: 654rpx;
  margin: auto;
}
</style>
