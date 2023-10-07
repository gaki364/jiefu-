<template>
  <view>
    <!-- 玩家信息 -->
    <uniplayertitle
      ref="uniplayertitle"
      mode="2"
      @flushTarbar="flushTarbar"
    ></uniplayertitle>

    <view style="height: 20rpx"></view>
    <view style="width: 90%; border-radius: 12rpx; margin: auto">
      <view style="height: 20rpx"></view>
      <view style="display: flex; width: 98%; margin: auto">
        <view class="itemBg1" style="margin: auto; display: flex">
          <image
            :src="gAssets.idx5_icon1"
            mode="widthFix"
            style="
              width: 47rpx;
              margin: auto;
              margin-right: 10rpx;
              margin-left: 20rpx;
            "
          ></image>
          <view
            style="
              font-size: 26rpx;
              width: 80%;
              margin: auto;
              margin-left: 20rpx;
              line-height: 74rpx;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            >{{ playerInfo.Nickname }}</view
          >
        </view>
        <view class="itemBg1" style="margin: auto; display: flex">
          <image
            :src="gAssets.idx5_icon2"
            mode="widthFix"
            style="
              width: 47rpx;
              margin: auto;
              margin-right: 10rpx;
              margin-left: 20rpx;
            "
          ></image>
          <view
            style="
              font-size: 26rpx;
              width: 80%;
              margin: auto;
              margin-left: 20rpx;
              margin-right: 0rpx;
              line-height: 74rpx;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            >{{ playerInfo.PlayerId }}</view
          >
        </view>
        <image
          :src="gAssets.idx1kefu"
          mode="widthFix"
          style="width: 63rpx; margin: auto; margin-right: 10rpx"
          @click="onButtonClick_Menu(4)"
        ></image>
      </view>
      <view style="height: 20rpx"></view>
    </view>
    <view style="height: 20rpx"></view>
    <view style="display: flex; width: 90%; margin: auto">
      <view
        class="itemBg2"
        @click="onButtonClick_Menu(10)"
        style="width: 331rpx; height: 110rpx; display: flex"
      >
        <image
          :src="gAssets.idx5_eu1"
          mode="widthFix"
          style="
            width: 62rpx;
            margin: auto;
            margin-left: 20rpx;
            margin-right: 20rpx;
          "
        ></image>
        <view class="bg2_text">Registos dos fundos</view>
      </view>
      <view
        class="itemBg2"
        @click="onButtonClick_showIsLogout()"
        style="width: 331rpx; height: 110rpx; display: flex"
      >
        <image
          :src="gAssets.idx5_eu2"
          mode="widthFix"
          style="
            width: 62rpx;
            margin: auto;
            margin-left: 20rpx;
            margin-right: 20rpx;
          "
        ></image>
        <view class="bg2_text">{{ $t("KEY_INDEX5_LOOUT") }}</view>
      </view>
    </view>
    <view style="height: 20rpx"></view>
    <view style="display: flex; width: 90%; margin: auto">
      <view
        class="itemBg2"
        @click="onButtonClick_Menu(0)"
        style="width: 331rpx; height: 110rpx; display: flex"
      >
        <image
          :src="gAssets.idx5_eu3"
          mode="widthFix"
          style="
            width: 62rpx;
            margin: auto;
            margin-left: 20rpx;
            margin-right: 20rpx;
          "
        ></image>
        <view class="bg2_text">{{ $t("KEY_INDEX5_2") }}</view>
      </view>
      <view
        class="itemBg2"
        @click="onButtonClick_Menu(1)"
        style="width: 331rpx; height: 110rpx; display: flex"
      >
        <image
          :src="gAssets.idx5_eu4"
          mode="widthFix"
          style="
            width: 62rpx;
            margin: auto;
            margin-left: 20rpx;
            margin-right: 20rpx;
          "
        ></image>
        <view class="bg2_text">{{ $t("KEY_INDEX5_3") }}</view>
      </view>
    </view>
    <view
      style="
        width: 90%;
        margin: auto;
        border-radius: 10rpx;
        margin-top: 20rpx;
        font-size: 20rpx;
      "
      class="cardBg"
    >
      <view style="height: 20rpx"></view>
      <view class="itemBg4" style="display: flex; margin: auto">
        <view
          class="itemBg2"
          style="display: flex; width: 50%; height: 100%; margin-left: 0rpx"
        >
          <view class="ic1"></view>
          <view style="margin: auto; font-size: 20rpx; width: 60%">{{
            $t("KEY_WIT_LDS")
          }}</view>
        </view>
        <view
          v-if="playerInfo && playerInfo"
          style="text-align: center; margin: auto; font-size: 30rpx; width: 50%"
          >{{ gHelper.formatMoney(playerInfo.WithdrawAmount) }}</view
        >
      </view>
      <view style="height: 20rpx"></view>
      <view class="itemBg4" style="display: flex; margin: auto">
        <view
          class="itemBg2"
          style="display: flex; width: 50%; height: 100%; margin-left: 0rpx"
        >
          <view class="ic2"></view>
          <view style="margin: auto; font-size: 20rpx; width: 60%">{{
            $t("KEY_WIT_TIPS2")
          }}</view>
        </view>
        <view
          v-if="Number(playerInfo.RequireTurnover) != 0"
          style="
            width: 50%;
            text-align: center;
            color: #ffffff;
            font-size: 30rpx;
            margin: auto;
          "
          >{{
            Math.floor(
              (Number(playerInfo.Turnover) /
                Number(playerInfo.RequireTurnover) >
              1
                ? 1
                : Number(playerInfo.Turnover) /
                  Number(playerInfo.RequireTurnover)) * 10000
            ) /
              100 +
            "%"
          }}</view
        >
        <view
          v-if="Number(playerInfo.RequireTurnover) == 0"
          style="
            width: 50%;
            text-align: center;
            color: #ffffff;
            font-size: 30rpx;
            margin: auto;
          "
          >{{ "100%" }}</view
        >
      </view>
      <view style="height: 20rpx"></view>
      <view class="itemBg4" style="display: flex; margin: auto">
        <view
          class="itemBg2"
          style="display: flex; width: 50%; height: 100%; margin-left: 0rpx"
        >
          <view class="ic3"></view>
          <view style="margin: auto; font-size: 20rpx; width: 60%">{{
            $t("KEY_WIT_ATIVOS")
          }}</view>
        </view>
        <view
          v-if="playerInfo && playerInfo"
          style="text-align: center; margin: auto; font-size: 30rpx; width: 50%"
          >{{ gHelper.formatMoney(playerInfo.LimitAmount) }}</view
        >
      </view>

      <view style="height: 10rpx"></view>
      <view
        v-if="!playerInfo.Loading"
        style="font-size: 22rpx; color: #ffffff; text-align: center"
        >{{ $t("KEY_WIT_TIPS1") }}</view
      >
      <view v-if="playerInfo.Loading" style="color: #55ec3d">
        <view style="text-align: center"
          >Os dados do jogo estão sendo sincronizados...</view
        >
        <!-- <image :src="gAssets.common_Refresh" style="width: 67rpx; height: 53rpx; margin: auto 0rpx auto auto;"></image> -->
      </view>
      <view style="height: 30rpx"></view>
    </view>
    <view style="height: 20rpx"></view>
    <view class="itemBg3" @click="onButtonClick_Menu(2)">
      <image
        :src="gAssets.idx5_trends"
        mode="widthFix"
        style="
          width: 46rpx;
          margin: auto;
          margin-left: 40rpx;
          margin-right: 10rpx;
          margin-top: 10rpx;
        "
      ></image>
      <view
        style="
          margin: auto;
          margin-left: 100rpx;
          color: #ffffff;
          font-size: 30rpx;
        "
        >{{ $t("KEY_INDEX5_4") }}</view
      >
      <view class="jtou"></view>
    </view>
    <view style="height: 20rpx"></view>
    <view class="itemBg3" @click="onButtonClick_Menu(3)">
      <image
        :src="gAssets.idx5_trends"
        mode="widthFix"
        style="
          width: 46rpx;
          margin: auto;
          margin-left: 40rpx;
          margin-right: 10rpx;
          margin-top: 10rpx;
        "
      ></image>
      <view
        style="
          margin: auto;
          margin-left: 100rpx;
          color: #ffffff;
          font-size: 30rpx;
        "
        >{{ $t("KEY_INDEX5_5") }}</view
      >
      <view class="jtou"></view>
    </view>

    <!-- 编辑菜单 -->
    <view v-if="editMode != 0">
      <view class="MaskWindow" @touchmove.stop.prevent="moveHandle">
        <view class="out">
          <view class="window">
            <!-- 关闭按钮 -->
            <image
              :src="gAssets.closeImg"
              mode="widthFix"
              style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx"
              @click="onButtonClick_ClosePopWindow()"
            ></image>
            <view style="height: 40rpx"></view>

            <!-- 充值信息 -->
            <view v-if="editMode == 1" style="width: 100%">
              <view class="titleTest" style="font-size: 40rpx">{{
                $t("KEY_INDEX5_3")
              }}</view>
              <view class="editbg" style="font-weight: bold">
                <!-- pixType -->
                <view
                  class="hengzhe"
                  style="
                    width: 90%;
                    position: relative;
                    justify-content: left;
                    margin: auto;
                    padding-top: 20rpx;
                  "
                >
                  <view>{{ $t("KEY_MB_IT") }}</view>
                  <view style="margin-left: 10rpx">{{
                    playerInfo.WithdrawAccount.PixType
                  }}</view>
                  <view style="position: absolute; right: 10rpx">PIX</view>
                </view>
                <!-- pixKey -->
                <view
                  class="hengzhe"
                  style="
                    width: 90%;
                    justify-content: left;
                    margin: auto;
                    padding-top: 20rpx;
                  "
                >
                  <view style="margin: auto">{{
                    $t("KEY_WIT_PIXAN") + " "
                  }}</view>
                  <view style="margin: auto">{{
                    playerInfo.WithdrawAccount.PixKey
                  }}</view>
                </view>
                <!-- 横线 -->
                <view
                  style="
                    width: 100%;
                    height: 2rpx;
                    background: #666c72;
                    margin-top: 30rpx;
                  "
                ></view>
                <view
                  class="modifyBtn"
                  style="position: absolute; right: 20rpx; bottom: 14rpx"
                  @click="onButtonClick_Edit(editMode)"
                  >{{ $t("KEY_NEW_IDX5_MODIFY") }}</view
                >
                <!-- <image :src="gAssets.imgEdit" mode="widthFix" style="width: 58rpx; margin-top: 10rpx; margin-left: 80%;" @click="onButtonClick_Edit()"></image> -->
                <view style="height: 80rpx"></view>
              </view>

              <view
                class="btnHuangSe"
                style="margin-top: 30rpx"
                @click="onButtonClick_OK(editMode)"
                >{{ $t("KEY_INDEX5_OK") }}</view
              >
              <view style="height: 20rpx"></view>
            </view>

            <!-- 提现信息 -->
            <view v-else-if="editMode == 2" style="width: 100%">
              <view class="titleTest" style="font-size: 40rpx">{{
                $t("KEY_INDEX5_2")
              }}</view>
              <view class="editbg" style="font-weight: bold">
                <!-- 第1行 -->
                <view class="hengzhe" style="padding-top: 20rpx">
                  <view
                    class="hengzhe"
                    style="width: 80%; justify-content: left"
                  >
                    <view>{{ $t("KEY_INDEX5_NAME") }}</view>
                    <view>{{ playerInfo.RechargeAccount.Name }}</view>
                  </view>
                </view>
                <!-- 第2行 -->

                <view class="hengzhe" style="padding-top: 20rpx">
                  <view
                    class="hengzhe"
                    style="width: 80%; justify-content: left"
                  >
                    <view>{{ $t("KEY_INDEX5_CPF") }}</view>
                    <view>{{ playerInfo.RechargeAccount.Cpf }}</view>
                  </view>
                </view>

                <!-- 第2行 -->
                <view class="hengzhe" style="padding-top: 20rpx">
                  <view
                    class="hengzhe"
                    style="width: 80%; justify-content: left"
                  >
                    <view>{{ $t("KEY_INDEX5_MONBILE") }}</view>
                    <view>{{ playerInfo.RechargeAccount.Mobile }}</view>
                  </view>
                </view>
                <!-- 第2行 -->
                <view class="hengzhe" style="padding-top: 20rpx">
                  <view
                    class="hengzhe"
                    style="width: 80%; justify-content: left"
                  >
                    <view>{{ $t("KEY_INDEX5_EMAIL") }}</view>
                    <view>{{ playerInfo.RechargeAccount.Email }}</view>
                  </view>
                </view>
                <!-- 横线 -->
                <view
                  style="
                    width: 100%;
                    height: 2rpx;
                    background: #666c72;
                    margin-top: 30rpx;
                  "
                ></view>

                <view
                  class="modifyBtn"
                  style="position: absolute; right: 20rpx; bottom: 14rpx"
                  @click="onButtonClick_Edit(editMode)"
                  >{{ $t("KEY_NEW_IDX5_MODIFY") }}</view
                >

                <view style="height: 80rpx"></view>
              </view>

              <view
                class="btnHuangSe"
                style="margin-top: 30rpx"
                @click="onButtonClick_OK(editMode)"
                >{{ $t("KEY_INDEX5_OK") }}</view
              >
              <view style="height: 20rpx"></view>
            </view>

            <!-- 切换语言 -->
            <view v-else-if="editMode == 3" style="width: 100%">
              <view class="titleTest" style="font-size: 40rpx">{{
                $t("KEY_INDEX5_AI")
              }}</view>

              <block v-for="(item, index) in languageList" v-bind:key="index">
                <view
                  class="hengzhe"
                  style="
                    justify-content: left;
                    width: 90%;
                    margin: auto;
                    border-radius: 10rpx;
                    margin-top: 10rpx;
                    height: 80rpx;
                  "
                  @click="onButtonClick_SelectLanguth(index)"
                  :style="selectLanguage == index ? '' : ''"
                >
                  <image
                    :src="gAssets.imgdiqiu"
                    mode="widthFix"
                    style="width: 51rpx; margin-left: 10rpx; margin-top: 15rpx"
                  ></image>
                  <image
                    :src="item.img"
                    mode="widthFix"
                    style="width: 77rpx; margin-left: 10rpx; margin-top: 20rpx"
                  ></image>
                  <view style="margin: auto; margin-left: 10rpx">{{
                    item.text
                  }}</view>
                  <image
                    v-if="selectLanguage == index"
                    :src="gAssets.gou"
                    mode="widthFix"
                    style="
                      width: 60rpx;
                      margin-right: 30rpx;
                      margin-top: 10rpx;
                      margin-bottom: 10rpx;
                    "
                  ></image>
                </view>
              </block>

              <view
                class="btnHuangSe"
                style="margin-top: 100rpx"
                @click="onButtonClick_OK(editMode)"
                >{{ $t("KEY_INDEX5_OK") }}</view
              >
              <view style="height: 30rpx"></view>
            </view>

            <!-- 是否退出 -->
            <view v-else-if="editMode == 4" style="width: 100%">
              <view class="titleTest" style="font-size: 40rpx">{{
                $t("KEY_INDEX5_AI")
              }}</view>

              <view style="height: 30rpx"></view>
              <view class="centerBg">
                <view style="height: 20rpx"></view>
                <view
                  style="
                    width: 94%;
                    margin: auto;
                    color: #ffffff;
                    text-align: center;
                  "
                  >{{ $t("KEY_INDEX5_LOOUTTIPS") }}</view
                >
                <view style="height: 20rpx"></view>
              </view>
              <view style="height: 40rpx"></view>
              <view style="display: flex">
                <view
                  class="btnLvSe"
                  style="margin: auto"
                  @click="onButtonClick_loginOut()"
                  >{{ $t("KEY_NEW_YES") }}</view
                >
                <view
                  class="btnHuangSe"
                  style="margin: auto"
                  @click="onButtonClick_ClosePopWindow()"
                  >{{ $t("KEY_NEW_NO") }}</view
                >
              </view>

              <view style="height: 40rpx"></view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view v-if="editMode == 7">
      <view class="MaskWindow" @touchmove.stop.prevent="moveHandle">
        <view class="out">
          <view class="window">
            <!-- 关闭按钮 -->
            <image
              :src="gAssets.closeImg"
              mode="widthFix"
              style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx"
              @click="onButtonClick_ClosePopWindow()"
            ></image>
            <view style="height: 30rpx"></view>
            <view
              class="titleTest"
              style="
                width: 100%;
                font-weight: 600;
                text-align: center;
                font-size: 36rpx;
              "
              >{{ $t("KEY_WIT_EXPLICAR") }}</view
            >

            <view style="height: 30rpx"></view>
            <view class="centerBg">
              <view style="height: 10rpx"></view>
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
                >{{ $t("KEY_WIT_TTT") }}</view
              >
              <view style="height: 10rpx"></view>
            </view>

            <view style="height: 10rpx"></view>
          </view>
        </view>
      </view>
    </view>

    <view style="height: 30rpx"></view>
    <kefuPop ref="kefuPop"></kefuPop>
    <mdfName ref="mdfName" @flushName="flush()"></mdfName>
    <!-- <downLoadBtn></downLoadBtn> -->
    <kfBtn></kfBtn>
    <comBottom></comBottom>

    <!-- 自定义tabbar -->
    <view style="height: 200rpx"></view>
    <myTabbar ref="myTabbar"></myTabbar>
  </view>
</template>

<script>
import uniplayertitle from '@/components/game/uni-playertitle.vue'
import mdfName from '@/components/game/uni-mdfName.vue'

export default {
  components: {
    uniplayertitle,
    mdfName,
  },

  data () {
    return {
      list: [
        {
          img: this.gAssets.imglist[1],
          text: this.$t("KEY_INDEX5_2"),
        },
        {
          img: this.gAssets.imglist[2],
          text: this.$t("KEY_INDEX5_3"),
        },
        {
          img: this.gAssets.imglist[3],
          text: this.$t("KEY_INDEX5_4"),
        },
        {
          img: this.gAssets.imglist[4],
          text: this.$t("KEY_INDEX5_5"),
        },
        {
          img: this.gAssets.imglist[0],
          text: this.$t("KEY_INDEX5_1"),
        },
        // {
        // 	img: this.gAssets.imglist[5],
        // 	text: this.$t("KEY_INDEX5_6"),
        // },
        // {
        // 	img: this.gAssets.imglist[6],
        // 	text: this.$t("KEY_INDEX5_7"),
        // },
      ],

      languageList: [
        {
          text: "Português",
          img: this.gAssets.imgQi[1],
        },
      ],
      // 语言选择
      selectLanguage: 0,

      playerInfo: {
        Nickname: "",
        RechargeAccount: null,
        WithdrawAccount: null,
        Email: "",
      },

      editMode: 0, // 0= 正常 1=充值信息 2=提现信息 3=切换语言
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
    this.$store.commit('changeTabBar', {
      index: 2
    })
  },

  onReady () {
    // this.flush();
    if (this.$refs && this.$refs.myTabbar) {
      this.$refs.myTabbar.flushTabarText()
    }
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
      if (this.$refs && this.$refs.uniplayertitle) {
        this.$refs.uniplayertitle.flush()
      }
      this.gRequest.infomationManager.informationInfo(this.onEventCallback_informationInfo.bind(this))
    },

    flushTarbar () {
      if (this.$refs && this.$refs.myTabbar) {
        this.$refs.myTabbar.flushTabarText()
      }
    },

    onEventCallback_informationInfo (data) {
      this.playerInfo = data
    },

    // 关闭
    onButtonClick_ClosePopWindow () {
      this.editMode = 0
    },

    // 编辑菜单下的OK按钮
    onButtonClick_OK (index) {
      this.editMode = 0
    },

    // 语言选择
    onButtonClick_SelectLanguth (index) {
      this.selectLanguage = index
    },

    // 点击菜单
    onButtonClick_Menu (index) {
      switch (index) {
        case 4:
          // realimentacao 客服
          if (this.$refs && this.$refs.kefuPop) {
            this.$refs.kefuPop.ShowPopWindow()
          }
          break

        case 0:
          // info recharge 提现信息
          if (this.playerInfo.RechargeAccount == null || this.playerInfo.RechargeAccount.Id == 0) {
            uni.navigateTo({
              url: 'bindrecharge',
            })
          } else {
            this.editMode = 2
          }

          break

        case 1:
          // info withdraw 充值信息
          if (this.playerInfo.WithdrawAccount == null || this.playerInfo.WithdrawAccount.Id == 0) {
            uni.navigateTo({
              url: 'mudarbanco',
            })
          } else {
            this.editMode = 1
          }
          break

        case 2:
          // recharge
          uni.navigateTo({
            url: 'reRecord',
          })
          break

        case 3:
          // withdrawals
          uni.navigateTo({
            url: 'wiRecord',
          })
          break

        case 5:
          // 语言
          this.editMode = 3
          break
        case 7:
          this.editMode = 7
          break
        case 10:
          uni.navigateTo({
            url: "Registos"
          })
          break
      }
    },

    // 编辑按钮
    onButtonClick_Edit (index) {
      if (1 == index) {
        // 提现绑定
        uni.navigateTo({
          url: 'mudarbanco?type=2',
        })
      } else if (2 == index) {
        // 充值绑定
        uni.navigateTo({
          url: 'bindrecharge?type=2',
        })
      }
    },

    onButtonClick_showIsLogout () {
      this.editMode = 4
    },

    onButtonClick_loginOut () {
      this.editMode = 0
      this.gRequest.userManager.logout()
    },


    onButtonClick_ShowMdfName () {
      if (this.$refs && this.$refs.mdfName) {
        this.$refs.mdfName.showPop()
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
  background: linear-gradient(#d01311, #f02301);
  background-size: 100% 100%;
  width: 679rpx;
  height: 90rpx;

  font-size: 30rpx;

  display: flex;

  text-align: center;
  margin: auto;
  border-radius: 12rpx;
  // margin-top: 22rpx;
  // padding-top: 22rpx;
}

.editbg {
  width: 90%;
  // height: 100rpx;
  margin: auto;
  margin-top: 20rpx;

  background: rgba($color: #000000, $alpha: 0.6);
  border-radius: 10rpx;
  font-size: 25rpx;
  position: relative;
}

.jtou {
  background: url("@/static/jiefu16/arrow.png") no-repeat;
  background-size: 100% 100%;

  width: 34rpx;
  height: 51rpx;

  margin: auto 30rpx auto auto;
}
.ic1 {
  background: url("@/static/jiefu16/seq1.png") no-repeat;
  background-size: 100% 100%;

  width: 36rpx;
  height: 34rpx;

  margin: auto auto auto 30rpx;
}
.ic2 {
  background: url("@/static/jiefu16/seq2.png") no-repeat;
  background-size: 100% 100%;

  width: 31rpx;
  height: 31rpx;

  margin: auto auto auto 30rpx;
}
.ic3 {
  background: url("@/static/jiefu16/seq3.png") no-repeat;
  background-size: 100% 100%;

  width: 28rpx;
  height: 34rpx;

  margin: auto auto auto 30rpx;
}

.itemBg1 {
  background: rgba(98, 32, 157, 0.6);
  width: 274rpx;
  height: 68rpx;
  border-radius: 10rpx;
  border: 2rpx solid #ffb000;
  color: #ffffff;
}

.itemBg2 {
  // background: url('@/static/new/btnred01.png') no-repeat;
  // background-size: 100% 100%;
  background: #d93195;
  border-radius: 10rpx;
  width: 670rpx;
  height: 110rpx;
  display: flex;
  margin: auto;

  .bg2_text {
    margin: auto;
    margin-left: 0rpx;
    margin-right: 0rpx;
    width: 60%;
    font-size: 30rpx;
  }
}

.itemBg3 {
  background: #d93195;
  width: 670rpx;
  height: 68rpx;
  color: #7a4117;
  display: flex;
  margin: auto;
  border-radius: 10rpx;
}

.itemBg4 {
  // background: url('@/static/new/enter-3.png') no-repeat;
  // background-size: 100% 100%;
  background: #62209d;
  width: 653rpx;
  height: 71rpx;
  color: #ffffff;
  border-radius: 10rpx;
  border: 2rpx solid #ffb000;
  display: flex;
  margin: auto;
}
</style>
