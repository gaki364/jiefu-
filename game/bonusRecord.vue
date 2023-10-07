<template>
  <view>
    <unititle
      :titleText="title"
      titleEvent="registerClick"
      @registerClick="onClickButton_Back"
      :titleColor="'transparent'"
    ></unititle>

    <view class="bg">
      <view
        class="hengzhe"
        style="
          padding-top: 20rpx;
          margin: auto;
          justify-content: space-around;
          text-align: center;
          width: 90%;
          color: #ffffff;
        "
      >
        <view style="width: 40%; margin: auto">{{ $t("KEY_ID_TIME") }}</view>
        <view style="width: 40%; margin: auto">{{ $t("KEY_NEW_BONUS") }}</view>
      </view>

      <view style="font-size: 20rpx; padding-top: 10rpx">
        <block v-for="(item, index) in list" v-bind:key="index">
          <view
            class="hengzhe"
            style="
              margin: auto;
              margin-top: 10rpx;
              justify-content: space-around;
              background: #000000;
              border-radius: 180rpx;
              width: 90%;
              padding-top: 10rpx;
              padding-bottom: 10rpx;
            "
          >
            <view style="width: 40%; margin: auto; text-align: center">{{
              item.CreateTime
            }}</view>
            <view style="width: 40%; margin: auto; text-align: center">{{
              "R$" + gHelper.formatMoney(item.Bonus)
            }}</view>
          </view>
        </block>
      </view>

      <view style="height: 20rpx"></view>
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
      title: "Obtenção de registos de bónus",

      list: [
      ],

      curPage: 1,

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

  onReachBottom () {
    this.flush()
  },

  methods: {
    flush () {
      uni.stopPullDownRefresh()
      this.gRequest.teamManager.bonusRecord(this.curPage, this.onEventCallback_bonusRecord.bind(this))
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onEventCallback_bonusRecord (data) {
      if (data && data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          data[i].CreateTime = this.gHelper.getTime(data[i].CreateTime)
          this.list.push(data[i])
        }
        this.curPage = this.curPage + 1
      }
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
  width: 95%;
  margin: auto;
  margin-top: 20rpx;
  border-radius: 18rpx;
  font-size: 24rpx;
}
</style>
