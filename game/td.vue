<template>
  <view>
    <unititle
      :titleText="title"
      titleEvent="registerClick"
      @registerClick="onClickButton_Back"
      :titleColor="'transparent'"
    ></unititle>

    <!-- Total People -->
    <!-- <view class="bg">
			<view class="hengzhe" style="justify-content: space-around; padding-top: 20rpx; padding-bottom: 20rpx;">
				<view style="color: #FFFFFF; width: 60%;">{{$t("KEY_TD_TP")}}</view>
				<view>{{Count}}</view>
			</view>
		</view> -->

    <view class="bg">
      <view
        class="hengzhe"
        style="
          padding-top: 20rpx;
          width: 90%;
          margin: auto;
          justify-content: space-around;
          text-align: center;
          color: #ffffff;
        "
      >
        <view style="width: 30%; margin: auto; text-align: left">{{
          $t("KEY_NEW_HDR")
        }}</view>
        <view style="width: 30%; margin: auto; text-align: center">{{
          $t("KEY_TD_NAME")
        }}</view>
        <view style="width: 30%; margin: auto; text-align: center">{{
          $t("KEY_TD_CON")
        }}</view>
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
              border-radius: 10rpx;
              width: 90%;
              padding-top: 10rpx;
              padding-bottom: 10rpx;
            "
          >
            <view style="width: 30%; margin: auto">{{ item.JoiningDate }}</view>
            <view
              style="
                width: 30%;
                white-space: normal;
                text-align: center;
                text-overflow: ellipsis;
                margin: auto;
              "
              >{{ item.Name }}</view
            >
            <view
              style="
                width: 30%;
                text-align: center;
                color: #f2f65d;
                margin: auto;
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
      title: this.$t('KEY_TD_TITLE'),

      lvSelect: 0,
      startTime: null,
      endTime: null,

      Count: 0,
      list: [],


    }
  },

  onLoad (option) {
    if (option) {
      if (option.type) {
        this.lvSelect = Number(option.type)
      }
      if (option.startTime && option.startTime.length > 0) {
        this.startTime = Number(option.startTime)
      }
      if (option.endTime && option.endTime.length > 0) {
        this.endTime = Number(option.endTime)
      }
    }

    if (this.lvSelect == 1) {
      this.title = "LV1"
    } else if (this.lvSelect == 2) {
      this.title = "LV2"

    } else {
      this.title = this.$t('KEY_TD_TITLE')
    }
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
      this.gRequest.teamManager.TotalIncomeDetails(this.startTime, this.endTime, this.lvSelect, this.curPage, this.onEventCallback_incomeDetails.bind(this))
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onButtonClick_Select (index) {
      this.lvSelect = index
      this.list = []
      this.curPage = 1
      this.flush()
    },

    onEventCallback_incomeDetails (data) {
      this.Count = data.Count
      if (data && data.MemberDetails && data.MemberDetails.length > 0) {
        for (let i = 0; i < data.MemberDetails.length; i++) {
          data.MemberDetails[i].JoiningDate = this.gHelper.getTime(data.MemberDetails[i].JoiningDate)
          this.list.push(data.MemberDetails[i])
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
  background: #191d5c;
  font-size: 24rpx;
}
</style>
