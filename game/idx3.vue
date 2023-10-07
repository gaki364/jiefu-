<template>
  <view>
    <!-- 玩家信息 -->
    <unititle
      :titleText="$t('KEY_TABBAR_3')"
      titleEvent="registerClick"
      @registerClick="onClickButton_Back"
      :titleColor="'transparent'"
    ></unititle>
    <view style="height: 20rpx"></view>
    <view class="dlBg" style="height: 360rpx">
      <view style="width: 90%; margin: auto">
        <view style="height: 20rpx"></view>
        <view style="width: 80%; margin: auto">
          <view style="font-size: 30rpx; color: #6838d8; font-weight: 600">{{
            $t("KEY_INDEX3_VIPATUAL") + " " + vipinfo.VipLevel
          }}</view>
          <view style="color: #ffffff; font-size: 28">{{
            $t("KEY_INDEX3_NMLD") + " VIP " + (vipinfo.VipLevel + 1)
          }}</view>
          <view style="height: 10rpx"></view>
        </view>

        <view style="display: flex">
          <view
            class="btnHuangSe"
            style="
              line-height: 30rpx;
              font-size: 20rpx;
              width: 48%;
              height: 78rpx;
            "
          >
            <view style="height: 6rpx"></view>
            <view style="color: #ffffff">{{ $t("KEY_INDEX3_VDR") }}</view>
            <view style="height: 6rpx"></view>
            <view style="color: #f94184"
              >BRL {{ gHelper.formatMoney(vipinfo.VipRechargeAmount) }}</view
            >
          </view>
          <view
            class="btnHuangSe"
            style="
              line-height: 30rpx;
              font-size: 20rpx;
              width: 48%;
              height: 78rpx;
            "
          >
            <view style="height: 6rpx"></view>
            <view style="color: #ffffff">{{ $t("KEY_INDEX3_VDC") }}</view>
            <view style="height: 6rpx"></view>
            <view style="color: #f94184"
              >BRL {{ gHelper.formatMoney(vipinfo.VipTurnover) }}</view
            >
          </view>
        </view>
        <view style="height: 10rpx"></view>
        <view style="width: 80%; margin: auto">
          <!-- 进度条 -->
          <view style="margin: auto; margin-left: 0rpx; font-size: 20rpx">{{
            $t("KEY_INDEX3_VDR")
          }}</view>
          <view class="strip" style="width: 100%; margin-top: 0rpx">
            <view
              class="blue"
              :style="
                'width:' +
                (Number(vipinfo.RechargeAmount) / vipinfo.VipRechargeAmount > 1
                  ? 100
                  : (Number(vipinfo.RechargeAmount) /
                      vipinfo.VipRechargeAmount) *
                    100) +
                '%'
              "
            ></view>
            <view
              style="
                width: 100%;
                text-align: center;
                color: #3b409c;
                font-size: 20rpx;
                top: -4rpx;
                position: absolute;
              "
              >{{
                Math.floor(
                  Number(vipinfo.RechargeAmount) / vipinfo.VipRechargeAmount > 1
                    ? 10000
                    : (Number(vipinfo.RechargeAmount) /
                        Number(vipinfo.VipRechargeAmount)) *
                        10000
                ) /
                  100 +
                "%"
              }}</view
            >
          </view>

          <view style="height: 10rpx"></view>
          <view style="margin: auto; margin-left: 0rpx; font-size: 20rpx">{{
            $t("KEY_INDEX3_VDC")
          }}</view>
          <!-- 进度条 -->
          <view class="strip" style="width: 100%; margin-top: 0rpx">
            <view
              class="blue"
              :style="
                'width:' +
                (Number(vipinfo.Turnover) / vipinfo.VipTurnover > 1
                  ? 100
                  : (Number(vipinfo.Turnover) / Number(vipinfo.VipTurnover)) *
                    100) +
                '%'
              "
            ></view>
            <view
              style="
                width: 100%;
                text-align: center;
                color: #3b409c;
                font-size: 20rpx;
                top: -4rpx;
                position: absolute;
              "
              >{{
                Math.floor(
                  Number(vipinfo.Turnover) / vipinfo.VipTurnover > 1
                    ? 10000
                    : (Number(vipinfo.Turnover) / Number(vipinfo.VipTurnover)) *
                        10000
                ) /
                  100 +
                "%"
              }}</view
            >
          </view>
        </view>
      </view>
    </view>

    <view style="height: 20rpx"></view>
    <view>
      <block v-for="(item, index) in vipinfo.VipInfos" v-bind:key="index">
        <view class="vipBg">
          <image
            :src="gAssets.vipimagelist1[index]"
            mode="widthFix"
            style="width: 80rpx; position: absolute; top: 120rpx; left: 196rpx"
          ></image>
          <view
            style="position: absolute; top: 30rpx; right: 10rpx; width: 56%"
          >
            <view
              style="
                font-size: 20rpx;
                color: #ffffff;
                font-weight: 600;
                -webkit-text-stroke: 1rpx #efcd2e;
              "
              >{{ $t("KEY_NEW_IDX3_PDV") }}</view
            >
            <view style="display: flex">
              <view
                style="
                  width: 16rpx;
                  height: 16rpx;
                  background: #efcd2e;
                  border-radius: 360rpx;
                  margin: auto 0rpx auto 0rpx;
                "
              ></view>
              <view
                style="
                  margin: auto;
                  margin-left: 10rpx;
                  font-size: 20rpx;
                  color: #efcd2e;
                  width: 80%;
                "
                >{{ $t("KEY_NEW_IDX3_VU") + " "
                }}<span
                  style="color: #00c593; -webkit-text-stroke: 1rpx #ffffff"
                  >{{ item.WithdrawAmount }}</span
                ></view
              >
            </view>
            <view style="display: flex">
              <view
                style="
                  width: 16rpx;
                  height: 16rpx;
                  background: #efcd2e;
                  border-radius: 360rpx;
                  margin: auto 0rpx auto 0rpx;
                "
              ></view>
              <view
                style="
                  margin: auto;
                  margin-left: 10rpx;
                  font-size: 20rpx;
                  color: #efcd2e;
                  width: 80%;
                "
                >{{ $t("KEY_NEW_IDX3_TDR") + " "
                }}<span
                  style="color: #00c593; -webkit-text-stroke: 1rpx #ffffff"
                  >{{ Math.floor(item.WithdrawRate * 10000) / 100 + "%" }}</span
                ></view
              >
            </view>
            <view style="display: flex">
              <view
                style="
                  width: 16rpx;
                  height: 16rpx;
                  background: #efcd2e;
                  border-radius: 360rpx;
                  margin: auto 0rpx auto 0rpx;
                "
              ></view>
              <view
                style="
                  margin: auto;
                  margin-left: 10rpx;
                  font-size: 20rpx;
                  color: #efcd2e;
                  width: 80%;
                "
                >{{ $t("KEY_NEW_IDX3_SD") + " "
                }}<span
                  style="color: #00c593; -webkit-text-stroke: 1rpx #ffffff"
                  >{{ item.WithdrawTimes + "vezes/dia" }}</span
                ></view
              >
            </view>
          </view>
          <view
            style="width: 80%; position: absolute; bottom: 30rpx; left: 40rpx"
          >
            <view
              style="
                margin: auto;
                margin-left: 0rpx;
                font-size: 20rpx;
                color: #efcd2e;
              "
              >{{ $t("KEY_INDEX3_VDR") + ": " }}
              <span style="color: #00c593; -webkit-text-stroke: 1rpx #ffffff">{{
                "BRL " + item.RechargeAmount
              }}</span></view
            >
            <view style="height: 10rpx"></view>
            <view
              style="
                margin: auto;
                margin-left: 0rpx;
                font-size: 20rpx;
                color: #efcd2e;
              "
              >{{ $t("KEY_INDEX3_VDC") + " " }}
              <span style="color: #00c593; -webkit-text-stroke: 1rpx #ffffff">{{
                "BRL " + item.Turnover
              }}</span></view
            >
          </view>
        </view>
        <view style="height: 20rpx"></view>
      </block>
    </view>
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
      vipinfo: {},

      vipswitch: 0,
      Box: [],
      Vatest: this.$t('KEY_INDEX3_VA'),
      Metest: this.$t('KEY_INDEX3_MDT'),

    }
  },

  onLoad (option) {
    uni.hideTabBar()
  },

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow () {

    if (this.$refs && this.$refs.myTabbar) {
      this.$refs.myTabbar.flushTabarText()
    }
    this.flush()
    // this.$store.commit('changeTabBar', {
    // 	index: 1
    // });
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

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    flush () {
      uni.stopPullDownRefresh()
      if (this.$refs && this.$refs.uniplayertitle) {
        this.$refs.uniplayertitle.flush()
      }
      this.gRequest.teamManager.getVipInfo(this.onEventCallback_getVipInfo.bind(this))
    },

    flushTarbar () {
      if (this.$refs && this.$refs.myTabbar) {
        this.$refs.myTabbar.flushTabarText()
      }
    },

    onEventCallback_getVipInfo (data) {
      if (data) {
        this.vipinfo = data

        // this.vipinfo.RechargeAmount = this.gHelper.formatMoney(this.vipinfo.RechargeAmount);
        // this.vipinfo.LackTurnover = this.gHelper.formatMoney(this.vipinfo.LackTurnover);
        // this.vipinfo.LackRechargeAmount = this.gHelper.formatMoney(this.vipinfo.LackRechargeAmount);
        // this.vipinfo.RechargeAmount = this.gHelper.formatMoney(this.vipinfo.RechargeAmount);
        // this.vipinfo.Turnover = this.gHelper.formatMoney(this.vipinfo.Turnover);
        // this.vipinfo.Turnover = this.gHelper.formatMoney(this.vipinfo.Turnover);
        // this.vipinfo.WithdrawAmount = this.gHelper.formatMoney(this.vipinfo.WithdrawAmount);
        for (let i = 0; i < this.vipinfo.VipInfos.length; i++) {
          // this.vipinfo.VipInfos[i].RechargeAmount = this.gHelper.formatMoney(this.vipinfo.VipInfos[i].RechargeAmount);
          // this.vipinfo.VipInfos[i].Turnover = this.gHelper.formatMoney(this.vipinfo.VipInfos[i].Turnover);
          // this.vipinfo.VipInfos[i].WithdrawAmount = this.gHelper.formatMoney(this.vipinfo.VipInfos[i].WithdrawAmount);
        }

        this.Box = data.Box
      }
    },

    // 左右切换VIP等级
    onButtonClick_VIP (mode) {
      switch (mode) {
        case 0:
          this.vipswitch--
          break
        case 1:
          this.vipswitch++
          break
      }

      if (this.vipswitch >= 10) {
        this.vipswitch = 10
      } else if (this.vipswitch <= 0) {
        this.vipswitch = 0
      }
    },

    // Team etails
    onButtonClick_Receive () {
      this.gRequest.teamManager.receiveVipBox(this.flush.bind(this))
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
  width: 90%;
  margin: auto;
  margin-top: 10rpx;
  border-radius: 10rpx;
  font-size: 24rpx;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
  position: absolute;
  left: 4%;
  bottom: 15%;
}

.vipBg {
  background: url("@/static/new/bgv0.png") no-repeat;
  background-size: 100% 100%;
  width: 660rpx;
  height: 339rpx;
  position: relative;
  margin: auto;
}
</style>
