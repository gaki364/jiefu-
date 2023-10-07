<template>
  <view>
    <unititle
      :titleText="title"
      titleEvent="registerClick"
      @registerClick="onClickButton_Back"
      :titleColor="'transparent'"
    ></unititle>

    <view style="height: 20rpx"></view>

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
        <view style="width: 20%; margin: auto; transform: scale(0.9)">{{
          $t("KEY_NEW_DATA")
        }}</view>
        <view
          style="
            width: 20%;
            margin: auto;
            transform: scale(0.9);
            transform: scale(0.9);
          "
          >{{ $t("KEY_NEW_NDR") }}</view
        >
        <view style="width: 20%; margin: auto; transform: scale(0.9)">{{
          $t("KEY_NEW_NDRDNU")
        }}</view>
        <view style="width: 20%; margin: auto; transform: scale(0.9)">{{
          $t("KEY_NEW_RR")
        }}</view>
        <view style="width: 20%; margin: auto; transform: scale(0.9)">{{
          $t("KEY_NEW_GD")
        }}</view>
      </view>

      <view style="font-size: 20rpx; padding-top: 10rpx">
        <block v-for="(item, index) in list" v-bind:key="index">
          <view class="hengzhe cardBg line">
            <view
              style="width: 20%; margin: auto; transform: scale(0.9)"
              class="tableDate"
              >{{ item.Date }}</view
            >
            <view style="width: 20%; margin: auto; transform: scale(0.9)">{{
              item.Registers
            }}</view>
            <view style="width: 20%; margin: auto; transform: scale(0.9)">{{
              item.RegisterRecharges
            }}</view>
            <view style="width: 20%; margin: auto; transform: scale(0.9)">{{
              item.RepeatRecharges
            }}</view>
            <view
              style="
                width: 20%;
                color: #f7aa09;
                margin: auto;
                transform: scale(0.9);
              "
              >{{ gHelper.formatMoney(item.Profit) + "R$" }}</view
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
import unititle from "@/components/common/uni-title.vue"
export default {
  components: {
    unititle,
  },

  data () {
    return {
      title: "Dados operacionais",

      lvSelect: 0,

      Count: 0,
      list: [],
    }
  },

  onLoad (option) {
    if (option && option.type) {
      this.lvSelect = Number(option.type)
    }

    if (this.lvSelect == 0) {
      this.title = "Este mês"
    } else {
      this.title = "No mês passado"
    }
  },

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow () {
    this.flush()
  },

  onReady () { },

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
      this.gRequest.teamManager.bloggerData(
        this.onEventCallback_incomeDetails.bind(this),
        this.lvSelect
      )
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onButtonClick_Select (index) {
      this.lvSelect = index
      this.list = []
      this.flush()
    },

    onEventCallback_incomeDetails (data) {
      if (data && data.length > 0) {
        this.list = data
      }
    },
  },
};
</script>

<style lang="scss" scoped>
page {
  background: url("@/static/jiefu17/page.png") no-repeat;
  background-size: 100% auto;
  color: #ffffff;
  font-size: 30rpx;
}

.bg {
  width: 95%;
  margin: auto;
  margin-top: 20rpx;
  border-radius: 18rpx;
  font-size: 24rpx;

  .tableDate {
    color: #65c293;

    &:first-child {
      color: #ffffff;
    }
  }
}

.line {
  margin: auto;
  margin-top: 10rpx;
  text-align: center;
  justify-content: space-around;
  border-radius: 10rpx;
  width: 99%;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
  border: 2rpx solid #f7aa09;
}
</style>
