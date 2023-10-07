<template>
  <view>
    <view style="width: 100%; margin: auto; text-align: center">
      <view style="height: 30rpx"></view>
      <view class="Logo"></view>
      <view style="height: 30rpx"></view>
      <view class="bg" style="margin-top: 0rpx">
        <view style="height: 10rpx"></view>
        <view class="p1"></view>
        <view style="height: 40rpx"></view>
        <view class="inputBg">
          <view style="width: 100%; margin: auto; display: flex">
            <input
              style="
                font-size: 20rpx;
                text-align: left;
                margin: auto auto auto 20rpx;
                color: #ffffff;
                line-height: 66rpx;
                height: 66rpx;
              "
              v-model="playerId"
              placeholder="Insira o ID do seu jogo"
            />
            <view class="btn1" @click="onButtonClick_Commit()"></view>
          </view>
        </view>

        <view style="height: 50rpx"></view>
        <view @click="onButtonClick_Kf()" class="btn2"></view>
        <view style="height: 30rpx"></view>

        <view
          style="
            width: 96%;
            margin: auto;
            background-color: #bec0cc;
            border-radius: 18rpx;
          "
        >
          <view style="height: 20rpx"></view>
          <view
            style="font-size: 30rpx; font-weight: 600; width: 90%; margin: auto"
            >Para mais atividades e bônus, entre no canal oficial do Telegram
            para ver</view
          >
          <view style="height: 20rpx"></view>
        </view>
        <view style="height: 30rpx"></view>
      </view>
    </view>

    <view class="MaskWindow" v-if="showPop">
      <view class="out">
        <view class="window">
          <view style="height: 60rpx"></view>
          <view
            style="width: 90%; margin: auto; color: #ffffff; font-size: 30rpx"
            >{{ test }}</view
          >
          <view style="height: 60rpx"></view>
          <view style="display: flex">
            <view
              class="btnLvSe"
              style="font-size: 20rpx"
              @click="onButtonClick_closePop()"
              >OK</view
            >
          </view>
          <view style="height: 20rpx"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},

  data () {
    return {
      giftData: "",
      playerId: "",
      link1: "",
      showPop: false,
      test: "",
      canSend: true,
    }
  },

  onLoad (option) {
    if (option && option.key && option.key.length > 0) {
      this.giftData = JSON.parse(this.gBase64.decode(option.key))
    }
    this.gRequest.userManager.getOfficial(this.onEventCallback_getOfficial.bind(this))
  },

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow () {

  },

  onReady () { },

  //监听下拉刷新
  onPullDownRefresh () { },

  onHide () { },

  onUnload () { },

  methods: {
    // Commit
    onButtonClick_Commit () {
      if (this.giftData && this.playerId.length > 0) {
        if (this.canSend) {
          if (this.giftData.type == 1) {
            this.gRequest.infomationManager.giftOrientation(this.onEventCallback_success.bind(this), this.playerId, this.giftData.giftKey)
          } else if (this.giftData.type == 2) {
            this.gRequest.infomationManager.giftRandom(this.onEventCallback_success.bind(this), this.playerId, this.giftData.giftKey)
          }
          this.canSend = false

          setTimeout(() => {
            this.canSend = true
          }, 3000)
        }
      }
    },

    onEventCallback_success (data) {
      this.showPop = true
      this.test = data
    },

    onButtonClick_closePop () {
      this.showPop = false
    },

    onEventCallback_getOfficial (data) {
      if (data) {
        for (let i = 0; i < data.length; i++) {
          let link = data[i].TelGram
          if (data[i].Type == 2) {
            this.link1 = link
          }
        }
      }
    },

    onButtonClick_Kf () {
      this.gAndroidUtils.openBrowser(this.link1)
    },
  },
}
</script>

<style lang="scss" scoped>
page {
  background: url("@/static/jiefu17/page.png") no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  font-size: 24rpx;

  // background: url('@/static/gift/bg.webp') no-repeat;
  // background-size: 750rpx 1424rpx;
  // width: 750rpx;
  // height: 1424rpx;
}

.bg {
  background: rgba($color: #191d5c, $alpha: 1);
  border-radius: 12rpx;
  width: 684rpx;
  height: 741rpx;
  margin: auto;
}

.Logo {
  background: url("@/static/jiefu17/logo.png") no-repeat;
  background-size: 100% 100%;
  width: 345rpx;
  height: 288rpx;
  margin: auto;
  // transform: scale(2);
}

.btn1 {
  background: url("@/static/gift/btns1k.png") no-repeat;
  background-size: 233rpx 59rpx;
  width: 233rpx;
  height: 59rpx;
  margin: auto;
  margin-right: 0rpx;

  text-align: center;
  color: #001939;
  font-size: 20rpx;
  line-height: 69rpx;
}

.btn2 {
  background: url("@/static/gift/btns2.png") no-repeat;
  background-size: 595rpx 66rpx;
  width: 595rpx;
  height: 66rpx;
  margin: auto;

  text-align: center;
  color: #232626;
  font-size: 20rpx;
  line-height: 60rpx;
}

.p1 {
  background: url("@/static/gift/p1.webp") no-repeat;
  background-size: 100% 100%;
  width: 666rpx;
  height: 307rpx;
  margin: auto;
}

.inputBg {
  background: #060d29;
  width: 604rpx;
  height: 66rpx;
  border-radius: 360rpx;
  margin: auto;
}
</style>
