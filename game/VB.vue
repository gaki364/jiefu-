<template>
  <view>
    <!-- 玩家信息 -->
    <unititle
      :titleText="$t('KEY_NEW_VIPBOX')"
      titleEvent="registerClick"
      @registerClick="onClickButton_Back"
      :titleColor="'transparent'"
    ></unititle>
    <view style="height: 30rpx"></view>
    <view style="text-align: center; font-size: 26rpx; color: #ffffff">{{
      $t("KEY_NEW_IDX3_TIPS")
    }}</view>
    <view style="height: 10rpx"></view>
    <view v-for="(item, index) in Box" v-bind:key="index">
      <view class="boxBg">
        <view style="height: 10rpx"></view>
        <view style="display: flex">
          <view
            style="
              width: 164rpx;
              height: 119rpx;
              position: relative;
              margin-left: 60rpx;
              margin-right: 0rpx;
              z-index: 4;
            "
          >
            <image
              :src="gAssets.vipimageBg[index]"
              style="width: 100%; height: 100%; margin: auto; margin-top: -4rpx"
            ></image>
            <!-- <view v-if="item.Received == 0 || item.Received == 2" style="position: absolute; width: 100%; text-align: center; bottom: 10rpx; color: #E4E4E4; font-weight: 600; font-size: 36rpx;">{{"V"+(index+1)}}</view> -->
            <view class="vipTextBg">{{ "V" + (index + 1) }}</view>
          </view>

          <!-- <view class="commonJbBg" style="width: 50%; margin: auto; margin-left: -80rpx; z-index: 3;">
						<view v-if="item.Received == 0" style="font-size: 30rpx; color: #8D8C8C; text-align: left; text-indent: 80rpx; font-size: 36rpx;">{{"BRL "}}<span style="color: #8D8C8C;">{{item.Amount}}</span></view>
						<view style="font-size: 30rpx; color: #11873E; text-align: left; text-indent: 80rpx; font-size: 36rpx;">{{"BRL "}}<span style="color: #F0E535;">{{item.Amount}}</span></view>
					</view> -->
          <view class="btnR" @click="onButtonClick_Receive(item.Received)">
            <view
              style="
                font-size: 20rpx;
                color: #ffffff;
                width: 100%;
                position: absolute;
                bottom: 40rpx;
                text-align: center;
              "
              >{{ item.Amount }}</view
            >
            <view
              class="mask"
              v-if="item.Received == 0 || item.Received == 2"
            ></view>
          </view>
          <view
            v-if="item.Received == 0 || item.Received == 2"
            class="recebtn1"
          ></view>
          <view v-if="item.Received == 1" class="recebtn2"></view>
        </view>

        <view style="height: 10rpx"></view>
      </view>
    </view>

    <view style="height: 30rpx"></view>
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
    onButtonClick_Receive (Received) {
      if (Received == 1) {
        this.gRequest.teamManager.receiveVipBox(this.flush.bind(this))
      } else {
        this.gHelper.toast("Recebeu ou não atingiu o nível VIP correspondente")
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

.boxBg {
  background: url("@/static/new/btnvipbx1.png") no-repeat;
  background-size: 100% 100%;

  width: 742rpx;
  height: 152rpx;
  margin: auto;
  position: relative;
}

.vipTextBg {
  background: url("@/static/new/icon041.png") no-repeat;
  background-size: 100% 100%;
  width: 114rpx;
  height: 36rpx;
  position: absolute;
  bottom: 0rpx;
  text-align: center;
  line-height: 35rpx;
  font-size: 20rpx;
  left: 24rpx;
  color: #ce53f6;
}

.btnR {
  background: url("@/static/new/btnjli01.png") no-repeat;
  background-size: 100% 100%;

  width: 130rpx;
  height: 130rpx;
  margin: auto;
  margin-top: 6rpx;
  margin-right: 40rpx;
  position: relative;
}

.mask {
  position: absolute;
  width: 128rpx;
  height: 128rpx;
  background: rgba($color: #454545, $alpha: 0.6);
  // border-radius: 360rpx;
  top: 0rpx;
  left: 0rpx;

  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
</style>
