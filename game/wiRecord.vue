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
          color: #ffffff;
        "
      >
        <view style="width: 33%">{{ $t("list.test5") }}</view>
        <view style="width: 26%">{{ $t("list.test6") }}</view>
        <view style="width: 40%">{{ $t("list.test7") }}</view>
      </view>

      <view style="font-size: 20rpx; padding-top: 10rpx">
        <block v-for="(item, index) in list" v-bind:key="index">
          <view
            class="hengzhe hengzhe_item"
          >
            <view  class="date">{{
              item.Date
            }}</view>
            <view
              style="
                width: 26%;
                white-space: normal;
                text-align: center;
                text-overflow: ellipsis;
                margin: auto;
                color: #f2f65d;
              "
              >{{ gHelper.formatMoney(item.Amount) }}</view
            >
            <view
              style="
                width: 40%;
                text-align: center;
                color: #ffffff;
                display: flex;
                margin: auto;
              "
              v-if="item.Status == 0"
            >
              <view style="margin: auto 10rpx auto auto">
                <image
                  :src="gAssets.statusImg3"
                  style="width: 28rpx; height: 35rpx"
                ></image>
              </view>
              <view
                style="
                  margin: auto auto auto 0rpx;
                  font-size: 20rpx;
                  width: 70%;
                "
              >
                {{ $t("list.test8") }}
              </view>
            </view>
            <view
              style="
                width: 40%;
                text-align: center;
                color: #ffffff;
                display: flex;
                margin: auto;
              "
              v-if="item.Status == 1"
            >
              <view style="margin: auto 10rpx auto auto">
                <image
                  :src="gAssets.statusImg1"
                  style="width: 39rpx; height: 29rpx"
                ></image>
              </view>
              <view
                style="
                  margin: auto auto auto 0rpx;
                  font-size: 20rpx;
                  width: 70%;
                "
              >
                {{ $t("list.test9") }}
              </view>
            </view>
            <view
              style="
                width: 40%;
                text-align: center;
                color: #ffffff;
                display: flex;
                margin: auto;
              "
              v-if="item.Status == 2"
            >
              <view style="margin: auto 10rpx auto auto">
                <image
                  :src="gAssets.statusImg2"
                  style="width: 28rpx; height: 31rpx"
                ></image>
              </view>
              <view
                style="
                  margin: auto auto auto 0rpx;
                  font-size: 20rpx;
                  width: 70%;
                "
              >
                {{ $t("list.test10") }}
              </view>
            </view>
            <view
              style="
                width: 40%;
                text-align: center;
                color: #ffffff;
                display: flex;
                margin: auto;
              "
              v-if="item.Status == 22"
            >
              <view style="margin: auto 10rpx auto auto">
                <image
                  :src="gAssets.statusImg2"
                  style="width: 28rpx; height: 31rpx"
                ></image>
              </view>
              <view
                style="
                  margin: auto auto auto 0rpx;
                  font-size: 20rpx;
                  width: 70%;
                "
              >
                {{ $t("KEY_NEW_WITHDRAWTL") }}
              </view>
            </view>
            <view
              class="helpBtn"
              v-if="item.Status == 2 || item.Status == 22"
              @click="onButtonClick_showPop(item.Status)"
            ></view>
          </view>
        </block>
      </view>

      <view style="height: 20rpx"></view>
    </view>

    <view class="MaskWindow" v-if="showPop">
      <view class="out">
        <view class="window">
          <image
            :src="gAssets.closeImg"
            mode="widthFix"
            style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx"
            @click="onButtonClick_closePop()"
          ></image>
          <view style="height: 30rpx"></view>
          <view class="titleTest" style="">{{ $t("KEY_WIT_EXPLICAR") }}</view>
          <view style="height: 30rpx"></view>
          <view class="centerBg">
            <view style="height: 20rpx"></view>
            <view
              style="
                width: 94%;
                margin: auto;
                color: #ffffff;
                padding-bottom: 20rpx;
                border-radius: 10rpx;
                font-size: 26rpx;
                white-space: pre-wrap;
              "
              >{{ popTest }}</view
            >
            <view style="height: 10rpx"></view>
          </view>
          <view style="height: 20rpx"></view>
        </view>
      </view>
    </view>
    <comBottom></comBottom>
  </view>
</template>

<script>
import unititle from "@/components/common/uni-title.vue";
export default {
  components: {
    unititle,
  },

  data() {
    return {
      title: this.$t("list.test11"),

      lvSelect: 1,

      Count: 0,
      list: [],

      showPop: false,
      popTest: "",
    };
  },

  onLoad(option) {},

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow() {},

  onReady() {
    this.flush();
  },

  //监听下拉刷新
  onPullDownRefresh() {
    this.flush();
  },

  onHide() {},

  onUnload() {
    uni.stopPullDownRefresh();
  },

  methods: {
    flush() {
      uni.stopPullDownRefresh();
      this.gRequest.infomationManager.withdrawRecords(
        this.onEventCallback_withdrawRecords.bind(this)
      );
    },

    onClickButton_Back() {
      this.gHelper.back(this);
    },

    onButtonClick_Select(index) {
      this.lvSelect = index;
      this.list = [];
      this.curPage = 1;
      this.flush();
    },

    onEventCallback_withdrawRecords(data) {
      if (data && data.Records && data.Records.length > 0) {
        this.list = data.Records;
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].Date = this.gHelper.getTime(this.list[i].Date);
        }
      }
    },

    onButtonClick_showPop(type) {
      if (type == 22) {
        this.popTest = this.$t("KEY_NEW_WITHDRAWEERO1");
      } else {
        this.popTest = this.$t("KEY_NEW_WITHDRAWEERO2");
      }
      this.showPop = true;
    },

    onButtonClick_closePop() {
      this.showPop = false;
    },
  },
};
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

.helpBtn {
  background: url("@/static/icongth.png") no-repeat;
  background-size: 100% 100%;

  width: 39rpx;
  height: 39rpx;

  position: absolute;

  right: 10rpx;
  top: 12rpx;
}

.hengzhe_item {
  margin: auto;
  margin-top: 20rpx;
  justify-content: space-around;
  background: $lineBg;
  border-radius: 10rpx;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
  height: 46rpx;
  position: relative;

  .date{
	width: 33%; 
	margin: auto; 
	margin-left: 10rpx;
	color: $dateColor;
  }
}


</style>
