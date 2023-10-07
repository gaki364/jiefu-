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
        <view style="width: 20%">{{ $t("KEY_ID_TIME") }}</view>
        <view style="width: 20%">{{ $t("KEY_ID_NAME") }}</view>
        <view style="width: 20%">{{ $t("KEY_ID_CON") }}</view>
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
              border-radius: 120rpx;
              width: 90%;
              padding-top: 10rpx;
              padding-bottom: 10rpx;
            "
          >
            <view style="width: 20%; margin: auto">{{ item.Date }}</view>
            <view
              style="
                width: 30%;
                margin: auto;
                white-space: normal;
                text-align: center;
                text-overflow: ellipsis;
              "
              >{{ item.Name }}</view
            >
            <view
              style="
                width: 20%;
                margin: auto;
                text-align: center;
                color: #eeff7f;
              "
              >{{ gHelper.formatMoney(item.Income) }}</view
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
      title: this.$t('KEY_ID_TITLE'),

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
      this.gRequest.teamManager.incomeDetails(this.onEventCallback_incomeDetails.bind(this), this.curPage)
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onEventCallback_incomeDetails (data) {
      if (data && data.IncomeDetails && data.IncomeDetails.length > 0) {
        for (let i = 0; i < data.IncomeDetails.length; i++) {
          data.IncomeDetails[i].Date = this.gHelper.getTime(data.IncomeDetails[i].Date)
          this.list.push(data.IncomeDetails[i])
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
  border-radius: 10rpx;
  background: #a5794c;
  font-size: 24rpx;
}
</style>
