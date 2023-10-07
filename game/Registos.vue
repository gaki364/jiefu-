<template>
  <view>
    <unititle
      :titleText="title"
      titleEvent="registerClick"
      @registerClick="onClickButton_Back"
      :titleColor="'transparent'"
    ></unititle>

    <view class="bg cardBg">
      <view
        class="hengzhe"
        style="
          padding-top: 20rpx;
          justify-content: space-around;
          text-align: center;
          width: 95%;
          margin: auto;
        "
      >
        <view style="width: 30%; margin: auto">{{ $t("KEY_ID_TIME") }}</view>
        <view style="width: 20%; margin: auto">{{ $t("KEY_NEW_OPERAR") }}</view>
        <view style="width: 40%; margin: auto">{{ $t("KEY_NEW_MDA") }}</view>
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
              width: 95%;
              padding-top: 10rpx;
              padding-bottom: 10rpx;
            "
          >
            <view style="width: 30%; margin: auto; margin-left: 10rpx">{{
              item.ChangeTime
            }}</view>
            <view
              style="
                width: 20%;
                white-space: normal;
                text-align: center;
                text-overflow: ellipsis;
                margin: auto;
                margin-right: 10rpx;
                color: #08bb18;
              "
              v-if="item.ChangeAmount <= 0"
              >{{ item.Name }}</view
            >
            <view
              style="
                width: 20%;
                white-space: normal;
                text-align: center;
                text-overflow: ellipsis;
                margin: auto;
                margin-right: 10rpx;
                color: #dcff36;
              "
              v-if="item.ChangeAmount > 0"
              >{{ item.Name }}</view
            >
            <view
              style="
                width: 40%;
                text-align: center;
                color: #ffffff;
                display: flex;
                margin: auto;
                margin-left: 10rpx;
              "
            >
              <view
                style="
                  font-size: 20rpx;
                  color: #ffffff;
                  margin: auto 6rpx auto 0rpx;
                  width: 44%;
                  text-align: left;
                "
                >R${{ gHelper.formatMoney(item.BeforeBalance) }}</view
              >
              <image
                :src="gAssets.common_Po1"
                style="width: 57rpx; height: 53rpx; margin: auto 0rpx auto 0rpx"
                v-if="item.ChangeAmount <= 0"
              ></image>
              <image
                :src="gAssets.common_Po2"
                style="width: 57rpx; height: 53rpx; margin: auto 0rpx auto 0rpx"
                v-if="item.ChangeAmount > 0"
              ></image>
              <view
                style="
                  font-size: 20rpx;
                  color: #ffffff;
                  margin: auto 0rpx auto 6rpx;
                  width: 44%;
                  text-align: left;
                "
                >{{ gHelper.formatMoney(item.AfterBalance) }}</view
              >
            </view>
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
      title: this.$t('KEY_NEW_RDF'),

      page: 1,

      list: [],


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
      this.gRequest.infomationManager.getFundDetail(this.onEventCallback_getFundDetail.bind(this), this.page)
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onEventCallback_getFundDetail (data) {
      if (data && data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          data[i].ChangeTime = this.gHelper.getTime(data[i].ChangeTime)
          this.list.push(data[i])
        }
        this.page = this.page + 1
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
  font-size: 24rpx;
}
</style>
