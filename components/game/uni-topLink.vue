<template>
  <view>
    <view class="toptitle" style="text-align: center">
      <view class="logo">
        <image :src="gAssets.login_logo" mode="widthFix"></image>
      </view>
      <view class="btn-group">
        <view v-if="!isLogin" class="loginBtn">
          <view @click="onButtonClick_Login(1)">{{
            $t("KEY_LOGIN_REGISTER")
          }}</view>
          <view @click="onButtonClick_Login(0)">{{ $t("KEY_LOGIN_U1") }}</view>
        </view>

        <view v-if="isLogin" class="chargeBtn">
          <view class="btn5"  @click="onButtonClick_Recharge()"> {{ $t("KEY_INDEX1_RECHARGE") }}</view>
          <view class="btn2" @click="onButtonClick_Withdraw()">{{ $t("KEY_INDEX1_WITHDRAW") }}</view>
        </view>
      </view>
    </view>

    <view class="reflush" v-if="isLogin">
      <view class="btn7" @click="onButtonClick_showLeftPop"></view>
      <view class="flush_box">
        {{ "R$" + playerInfo.gold }}

        <view class="flush_icon">
          <btnFlush
            @flushPoint="flushPoint"
          ></btnFlush>
        </view>
      </view>
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
import vipPop from "@/components/game/uni-VipPop.vue";
import signPop from "@/components/game/uni-SignPop.vue";
import mdfName from "@/components/game/uni-mdfName.vue";
import loginPop from "@/components/game/loginPop.vue";
import registerPop from "@/components/game/RegisterPop.vue";
import leftPop from "@/components/game/leftPop.vue";
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
  data() {
    return {
      // 玩家信息
      playerInfo: {
        gold: 0,
        name: "",
        Id: null,
        NickName: "",
      },
      isLogin: false  ,
      test: "",
      giftPop: "",
      link1: "",
      link2: "",

      showMdfName: true,
    };
  },

  created() {
    this.flush();
    this.onEventCallback_getOfficial();
    // this.gRequest.infomationManager.getOfficial(this.onEventCallback_getOfficial.bind(this));
  },

  methods: {
    flush() {
      if (this.gUserData.getToken()) {
        this.gRequest.userManager.userInfo(
          this.onEventCallBack_userInfo.bind(this)
        );
      }
    },
    onButtonClick_showLeftPop() {
      if (this.$refs && this.$refs.leftPop) {
        this.$refs.leftPop.ShowPopWindow();
      }
    },
    flushPoint(data) {
      this.playerInfo.gold = this.gHelper.formatMoney(data);
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

    onEventCallback_showGifPop (data) {
      if (data && data.length > 0) {
        this.giftPop = true
        this.test = data
      }
    },

     // 客服按钮
     onButtonClick_KeFu () {
      if (this.$refs && this.$refs.kefuPop) {
        this.$refs.kefuPop.ShowPopWindow()
      }
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
};
</script>
<style scoped lang="scss">
$content: calc(100% - 40rpx);
.toptitle {
  width: $content;
  height: 160rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20rpx;
  background: url("@/static/jiefu17/topBg.png") no-repeat;
  background-size: 100% 100%;

  .logo {
    image {
      width: 160rpx;
    }
  }
  .btn-group {
    .loginBtn {
      display: flex;

      > view {
        background: url("/static/jiefu17/btn1.png") no-repeat;
        background-size: 100% 100%;
        padding: -5px 10rpx;
        height: 64rpx;
        width: 152rpx;
        line-height: 64rpx;
        margin: 0 10rpx;
      }
    }

    .chargeBtn {
      display: flex;

      > view {
        padding: -5px 10rpx;
        height: 64rpx;
        width: 152rpx;
        line-height: 64rpx;
        margin: 0 10rpx;
      }

      .btn5 {
        background: url("/static/jiefu17/btn1.png") no-repeat;
        background-size: 100% 100%;
      }

      .btn2 {
        background: url("/static/jiefu17/btn2.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}

.reflush {
  width: $content;
  padding: 0 20rpx;
  margin-top: 30rpx;
  display: flex;
  justify-content: space-between;

  .btn7 {
    background: url("@/static/jiefu17/more.png") no-repeat;
    background-size: 100% 100%;
    width: 55rpx;
    height: 57rpx;
    margin: auto;
  }

  .flush_box {
    margin: auto;
    font-size: 26rpx;
    text-align: center;
    line-height: 54rpx;
    width: 562rpx;
    height: 53rpx;
    border-radius: 50rpx;
    background: rgba($color: #fff, $alpha: 0.2);
    position: relative;

    .flush_icon {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1000;
      width: 72rpx;
      height: 53rpx;
      // background: url("@/static/jiefu17/flush.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
