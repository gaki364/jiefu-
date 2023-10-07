<!-- 
玩家信息
-->
<template>
  <view>
    <!-- 充值 提现 标题 -->
    <view class="toptitle" style="text-align: center">
      <!-- logo -->
      <view style="height: 50rpx"></view>
      <view
        style="
          width: 87%;
          display: flex;
          margin: auto;
          margin-right: 10rpx;
          position: relative;
        "
      >
        <image
          :src="gAssets.login_logo"
          mode="widthFix"
          style="width: 160rpx; position: absolute; left: -32rpx; top: -30rpx"
        ></image>
        <view style="width: 1rpx; margin: auto"></view>
        <view
          v-if="!isLogin"
          style="display: flex; width: 80%; margin: auto; margin-right: 10rpx"
        >
          <view
            class="btn1"
            style="width: 46%"
            @click="onButtonClick_Login(1)"
            >{{ $t("KEY_LOGIN_REGISTER") }}</view
          >
          <view
            class="btn1"
            style="width: 46%"
            @click="onButtonClick_Login(0)"
            >{{ $t("KEY_LOGIN_U1") }}</view
          >
        </view>
        <view
          v-if="isLogin"
          style="
            display: flex;
            width: 80%;
            margin: auto;
            margin-left: 10rpx;
            align-items: center;
          "
        >
          <view
            class="commonJbBg"
            style="display: flex; justify-content: left; margin: auto"
          >
            <!-- <image :src="gAssets.jinbi" mode="widthFix" style="width: 56rpx; margin-left: 16rpx; margin-top: auto; margin-bottom: auto;"></image> -->
            <view style="" class="flush_box">{{ "R$" + playerInfo.gold }}</view>
            <btnFlush
              style="margin: 0rpx 10rpx auto 0rpx"
              @flushPoint="flushPoint"
            ></btnFlush>
          </view>
          <view class="btn5" @click="onButtonClick_Recharge()">{{
            $t("KEY_INDEX1_RECHARGE")
          }}</view>
          <view class="btn2" @click="onButtonClick_Withdraw()">{{
            $t("KEY_INDEX1_WITHDRAW")
          }}</view>
        </view>
      </view>

      <view
        class="btn7"
        v-if="isLogin"
        @click="onButtonClick_showLeftPop"
      ></view>
      <view style="height: 20rpx"></view>
    </view>
    <view style="width: 100%" v-if="mode == 1">
      <view
        style="height: 20rpx"
        v-if="swiperlist == null || swiperlist.length <= 0"
      ></view>
      <swiper
        v-if="swiperlist && swiperlist.length > 0"
        style="width: 100%; height: 300rpx"
        :circular="false"
        :indicator-dots="false"
        :autoplay="true"
      >
        <block v-for="(item, index) in swiperlist" v-bind:key="index">
          <swiper-item>
            <image
              :src="item.image"
              style="width: 100%; height: 300rpx"
            ></image>
          </swiper-item>
        </block>
      </swiper>
      <view style="height: 0rpx"></view>
    </view>

    <leftPop ref="leftPop"></leftPop>
    <vipPop ref="vipPop" @flushPlayer="flush()" :canShow="isShowVip"></vipPop>
    <!-- <signPop ref="signPop" @flushPlayer="flush()" :canShow="isShowVip"></signPop> -->
    <mdfName ref="mdfName" @flushName="flush()"></mdfName>
    <kefuPop ref="kefuPop"></kefuPop>
    <loginPop
      ref="loginPop"
      @flushPager="flush()"
      @showRegister="showRegisterPop()"
    ></loginPop>
    <registerPop ref="registerPop" @flushPager="flush()"></registerPop>
    <view class="MaskWindow" v-if="giftPop && isShowVip">
      <view class="out">
        <view class="window">
          <view style="height: 60rpx"></view>
          <view
            style="width: 90%; margin: auto; color: #ffffff; font-size: 30rpx"
            >{{ test }}</view
          >
          <view style="height: 60rpx"></view>
          <view style="display: flex">
            <view
              class="btnLvSe"
              style="font-size: 20rpx"
              @click="onButtonClick_closePop()"
              >OK</view
            >
          </view>
          <view style="height: 20rpx"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import vipPop from '@/components/game/uni-VipPop.vue'
import signPop from '@/components/game/uni-SignPop.vue'
import mdfName from '@/components/game/uni-mdfName.vue'
import loginPop from '@/components/game/loginPop.vue'
import registerPop from '@/components/game/RegisterPop.vue'
import leftPop from '@/components/game/leftPop.vue'
export default {
  components: {
    vipPop,
    signPop,
    mdfName,
    loginPop,
    registerPop,
    leftPop,
  },

  props: {
    mode: 0,
    isShowVip: false,
    swiperlist: null,
  },

  data () {
    return {
      // 玩家信息
      playerInfo: {
        gold: 0,
        name: "",
        Id: null,
        NickName: "",
      },
      isLogin: false,
      test: "",
      giftPop: "",
      link1: "",
      link2: "",

      showMdfName: true,
    }
  },

  created () {
    this.flush()
    this.onEventCallback_getOfficial()
    // this.gRequest.infomationManager.getOfficial(this.onEventCallback_getOfficial.bind(this));
  },

  methods: {
    flush () {
      if (this.gUserData.getToken()) {
        this.gRequest.userManager.userInfo(this.onEventCallBack_userInfo.bind(this))
      }
    },

    // 获取首页数据回调
    onEventCallBack_userInfo (data) {
      if (data) {
        this.gRequest.userManager.getSmobiles()
        this.playerInfo.name = data.PlayerName
        this.playerInfo.NickName = data.Nickname
        this.playerInfo.gold = this.gHelper.formatMoney(data.TotalAssets)
        this.playerInfo.Id = data.PlayerId
        this.isLogin = true

        if (this.$refs && this.$refs.vipPop) {
          this.$refs.vipPop.showPop()
        }
        this.$emit("flushTarbar")
        this.gRequest.infomationManager.giftMessage(this.onEventCallback_showGifPop.bind(this))
        if (!data.IsTodaySignIn && this.isShowVip) {
          this.gRequest.infomationManager.signInConfig(this.onEventCallback_signInConfig.bind(this))
        }
        if (data.IsAgent) {
          this.$emit("showDlPop")
        }

        if (data.AgentAnnouncement == 1) {
          this.gRequest.userManager.announcementAgent(this.onEventCallback_getAnnouncementAgent.bind(this))
        }
      }
    },

    showSignPop () {
      // this.gRequest.infomationManager.signInConfig(this.onEventCallback_signInConfig.bind(this));
    },

    onEventCallback_getOfficial () {
      let data = this.gRequest.userManager.OfficialData
      if (data) {
        for (let i = 0; i < data.length; i++) {
          let link = data[i].TelGram
          if (data[i].Type == 2) {
            this.link1 = link
          } else if (data[i].Type == 3) {
            this.link2 = link
          }
        }
      }
    },

    onButtonClickAd (link) {
      this.gAndroidUtils.openBrowser(link)
    },

    onEventCallback_showGifPop (data) {
      if (data && data.length > 0) {
        this.giftPop = true
        this.test = data
      }
    },


    onEventCallback_signInConfig (data) {
      if (data) {
        if (this.$refs && this.$refs.signPop) {
          this.$refs.signPop.showPop(data)
        }
      }
    },

    onButtonClick_Recharge () {
      uni.navigateTo({
        url: 'recharge',
      })
    },

    onButtonClick_Withdraw () {
      uni.navigateTo({
        url: 'withdraw',
      })
    },

    // 客服按钮
    onButtonClick_KeFu () {
      if (this.$refs && this.$refs.kefuPop) {
        this.$refs.kefuPop.ShowPopWindow()
      }
    },

    flushPoint (data) {
      this.playerInfo.gold = this.gHelper.formatMoney(data)
    },

    onButtonClick_Login (idx) {
      // let url = 'login/login'
      // if (idx == 1) {
      // 	url = 'login/login?curPage=1'
      // }
      // uni.navigateTo({
      // 	url: url,
      // });
      if (idx == 1) {
        this.showRegisterPop()
      } else {
        this.showLoginPop()
      }

    },

    onButtonClick_closePop () {
      this.giftPop = false
      this.gRequest.infomationManager.giftDelete()
    },


    onButtonClick_dw () {
      let url = this.gRequest.ipConfig.getDownloadUrl()
      this.gAndroidUtils.openBrowser(url)
    },

    onButtonClick_showLeftPop () {
      if (this.$refs && this.$refs.leftPop) {
        this.$refs.leftPop.ShowPopWindow()
      }
    },

    onButtonClick_coGame () {
      uni.navigateTo({
        url: 'MoreGame?type=' + 0,
      })
    },


    onButtonClick_ShowMdfName () {
      if (this.$refs && this.$refs.mdfName) {
        this.$refs.mdfName.showPop()
      }
    },

    onEventCallback_getAnnouncementAgent (data) {
      if (data && data.Announcement && data.Announcement.length > 0) {
        let time = this.gHelper.getTodayTimestamp()[0]
        let NtData = this.gUserData.getNTdata3()
        if (NtData.length <= 0) {
          if (this.$refs && this.$refs.notice2) {
            this.gUserData.setNTdata3(time.toString() + ";" + data.Id)
            this.$refs.notice2.showHtml(data.Announcement)
          }

          return
        }
        let nData = NtData.split(";")
        let time2 = Number(nData[0])
        let id = Number(nData[1])
        let show = true
        if (time == time2) {
          show = false
        }
        if (id != data.Id) {
          show = true
        }
        if (this.$refs && this.$refs.notice2 && show) {
          this.gUserData.setNTdata3(time.toString() + ";" + data.Id)
          this.$refs.notice2.showHtml(data.Announcement)
        }
      }
    },

    ///////////////////////////////////////////////////
    showLoginPop () {
      if (this.$refs && this.$refs.loginPop) {
        this.$refs.loginPop.ShowPopWindow()
      }
    },
    showRegisterPop (code) {
      if (this.$refs && this.$refs.registerPop) {
        this.$refs.registerPop.ShowPopWindow(code)
      }
    },

  },
}
</script>

<style lang="scss" scoped>
.toptitle {
  background: url("@/static/jiefu16/top_bg.png") no-repeat;
  background-size: 100% 154rpx;
  // background-color: #313783;
  width: 100%;
  padding-top: env(safe-area-inset-top);
  padding-top: var(--status-bar-height);
  position: relative;
  text-align: center;
  // display: flex;
  // flex-direction: row;
  // justify-content: center;

  .text {
    font-size: 25rpx;
    text-align: center;
    margin: auto;
    line-height: 66rpx;
  }
}

.btn1 {
  background: url("@/static/jiefu17/saque.png") no-repeat;
  background-size: 100% 100%;
  width: 114rpx;
  height: 70rpx;
  line-height: 70rpx;
  text-align: center;
  font-size: 26rpx;
  font-weight: 600;
  margin: auto;
  // border-radius: 12rpx;
}
.btn2 {
  background: url("@/static/jiefu17/saque.png") no-repeat;
  background-size: 100% 100%;
  // background: #00b678;
  width: 115rpx;
  height: 48rpx;
  line-height: 48rpx;
  text-align: center;
  font-size: 26rpx;
  font-weight: 600;
  // border-radius: 10rpx;
  // transform: skewX(-10deg);
  // border: 2rpx solid #a58bd9;
}

.btn5 {
  background: url("@/static/jiefu17/recarga.png") no-repeat;
  background-size: 100% 100%;
  width: 148rpx;
  height: 54rpx;
  margin: auto 10rpx;
  font-size: 18rpx;
  text-align: center;
  line-height: 48rpx;
  font-weight: 600;
}

.btn6 {
  background: url("@/static/new/btn005.png") no-repeat;
  background-size: 100% 100%;
  width: 63rpx;
  height: 63rpx;
  margin: auto;
  position: absolute;
  top: 40%;
  right: 6%;
}

.btn7 {
  background: url("@/static/jiefu17/more.png") no-repeat;
  background-size: 100% 100%;
  width: 55rpx;
  height: 57rpx;
  margin: auto;
  position: absolute;
  top: 40%;
  left: 10rpx;
}

.kfbg {
  // background: url('@/static/new/kfbg.png') no-repeat;
  // background-size: 100% 100%;

  margin: auto;
  display: flex;
  margin-right: 0rpx;
}

.flush_box {
  margin: auto;
  font-size: 30rpx;
  text-align: center;
  line-height: 54rpx;
}
</style>
