<template>
  <view>
    <!-- <unititle :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back"></unititle> -->
    <web-view :webview-styles="webviewStyles" :src="src"></web-view>
    <image
      :src="gAssets.backImg"
      mode="widthFix"
      style="
        width: 72rpx;
        height: 72rpx;
        margin: auto;
        position: fixed;
        top: 60rpx;
        left: 40rpx;
        z-index: 99;
      "
      @click="onClickButton_showPop()"
    ></image>

    <view v-if="showPop">
      <view class="MaskWindow" @touchmove.stop.prevent="moveHandle">
        <view class="out">
          <view class="window">
            <!-- 关闭按钮 -->
            <view style="height: 30rpx"></view>
            <!-- <image :src="gAssets.closeImg" mode="widthFix" style="width: 26rpx; margin-left: 90%; margin-top: 10rpx;" @click="onButtonClick_ClosePopWindow()"></image> -->
            <view
              class="titleTest"
              style="width: 100%; text-align: center; font-size: 40rpx"
              >{{ $t("KEY_NEW_CONSELHOS") }}</view
            >

            <view style="height: 30rpx"></view>
            <view
              class="centerBg"
              style="width: 90%; margin: auto; border-radius: 10rpx"
            >
              <view
                style="
                  width: 95%;
                  margin-left: 2.5%;
                  padding-top: 20rpx;
                  padding-bottom: 20rpx;
                  border-radius: 10rpx;
                  font-size: 26rpx;
                  white-space: pre-wrap;
                "
                >{{ $t("KEY_NEW_OTIPS") }}</view
              >
            </view>
            <view style="height: 40rpx"></view>
            <view style="display: flex">
              <view
                class="btnLvSe"
                style="font-size: 30rpx"
                @click="onClickButton_clsoePop"
                >{{ $t("KEY_NEW_CANCELAR") }}</view
              >
              <view
                class="btnHuangSe"
                style="font-size: 30rpx"
                @click="onClickButton_Back()"
                >{{ $t("KEY_INDEX5_OK") }}</view
              >
            </view>

            <view style="height: 10rpx"></view>
          </view>
        </view>
      </view>
    </view>
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
      title: "",
      src: "https://uniapp.dcloud.io/static/web-view.html",
      webviewStyles: {
        progress: {
          color: '#FF3333',
        }
      },
      showPop: false,
    }
  },

  onLoad (option) {
    if (option) {
      this.title = option.title || "Game"
      this.src = this.gHelper.gWebViewParm['uu'] || ""
    }
  },

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow () {
    this.flush()
  },

  onReady () {
    // this.flush();

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
      this.gRequest.gameManager.gameQuite()
      this.gHelper.back(this)
    },

    onClickButton_showPop () {
      this.showPop = true
    },

    onClickButton_clsoePop () {
      this.showPop = false
    },

  },
}
</script>

<style lang="scss" scoped>
page {
  background: #000000;
  color: #ffffff;
  font-size: 30rpx;
}
.gamelist {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 10rpx;
}
</style>
