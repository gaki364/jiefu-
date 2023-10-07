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
          justify-content: space-around;
          text-align: center;
          color: #ffffff;
        "
      >
        <view style="width: 24%; margin: auto; text-align: center">{{
          $t("KEY_ID_TIME")
        }}</view>
        <view style="width: 24%; margin: auto; text-align: center">{{
          "Quantidade da promoção"
        }}</view>
        <view style="width: 24%; margin: auto; text-align: center">{{
          "bônus"
        }}</view>
        <view style="width: 24%; margin: auto; text-align: center">{{
          "Pegar status"
        }}</view>
      </view>

      <view style="font-size: 20rpx; padding-top: 10rpx">
        <block v-for="(item, index) in list" v-bind:key="index">
          <view class="hengzhe cardBg line">
            <view style="width: 24%; margin: auto; text-align: center">{{
              item.CreateTime
            }}</view>
            <view
              style="
                width: 24%;
                margin: auto;
                white-space: normal;
                text-align: center;
                text-overflow: ellipsis;
              "
              >{{ item.Num }}</view
            >
            <view
              style="
                width: 24%;
                margin: auto;
                text-align: center;
                color: #f2f65d;
              "
              >{{ gHelper.formatMoney(item.Reward) }}</view
            >
            <view
              style="
                width: 24%;
                margin: auto;
                text-align: center;
                color: #f2f65d;
              "
              v-if="item.Received == 1"
              >{{ "Recebido" }}</view
            >
            <view
              style="
                width: 24%;
                margin: auto;
                text-align: center;
                color: #f97d27;
              "
              v-if="item.Received == 0"
              >{{ "Não recebeu" }}</view
            >
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
      title: this.$t('KEY_NEW_IDX2_DETALHES'),

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
      this.gRequest.teamManager.promoteDailyDetail(this.onEventCallback_promoteDailyDetail.bind(this), this.curPage)
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onEventCallback_promoteDailyDetail (data) {
      if (data && data.length > 0) {
        this.list = data
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].CreateTime = this.gHelper.getTime2(this.list[i].CreateTime)
        }

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
.line {
  margin: auto;
  margin-top: 10rpx;
  justify-content: space-around;
  border-radius: 10rpx;
  width: 96%;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
  border: 2rpx solid #ffb000;
}
</style>
