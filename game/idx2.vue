<template>
  <view>
    <!-- 玩家信息 -->
    <uniplayertitle
      ref="uniplayertitle"
      @flushTarbar="flushTarbar"
    ></uniplayertitle>
    <view style="width: 96%; margin: auto; margin-top: 20rpx">
      <view class="Dados">
        <view class="Dados_box" @click="onButtonClick_chosePage(1)">
          <view :class="pageTpye == 1 ? 'page1Img' : 'page1Img2'"></view>
          <view
            :class="pageTpye == 1 ? 'choseColor text' : 'NoChoseColor text'"
            >{{ $t("KEY_NEW_IDX2DAE") }}</view
          >
        </view>
        <!-- <view style="width: 2rpx; height: 78rpx; margin: auto; background-color: #A3A3A3;"></view> -->
        <view class="Dados_box" @click="onButtonClick_chosePage(0)">
          <view :class="pageTpye == 0 ? 'page2Img' : 'page2Img2'"></view>
          <view
            :class="pageTpye == 0 ? 'choseColor text' : 'NoChoseColor text'"
            >{{ $t("KEY_NEW_IDX2RDE") }}</view
          >
        </view>
        <!-- <view style="width: 2rpx; height: 78rpx; margin: auto; background-color: #A3A3A3;" v-if="IsAgent==1 || gRequest.userManager.isBz"></view> -->
        <view class="Dados_box" @click="onButtonClick_chosePage(2)">
          <view :class="pageTpye == 2 ? 'page3Img' : 'page3Img2'"></view>
          <view
            :class="pageTpye == 2 ? 'choseColor text' : 'NoChoseColor text'"
            >{{ BtnText }}</view
          >
        </view>
        <!-- <view @click="onButtonClick_chosePage(1)" :class="pageTpye==1?'cBg1':'cBg2'">Dados da Equipe</view>
				<view @click="onButtonClick_chosePage(0)" :class="pageTpye==0?'cBg1':'cBg2'">renda da equipe</view>
				<view v-if="IsAgent==1 || gRequest.userManager.isBz" @click="onButtonClick_chosePage(2)" :class="pageTpye==2?'cBg3':'cBg4'">{{BtnText}}</view> -->
      </view>

      <view class="gap"></view>

      <view v-if="pageTpye == 0">
        <view class="cardBg card_item">
          <view class="total_line">
            <view class="commonBtnBg2">
              <view class="saqueImg"></view>
              <view style="font-size: 30rpx; margin-left: 10rpx">{{
                $t("KEY_INDEX2_TI1")
              }}</view>
            </view>

            <view class="transNum">{{
              gHelper.formatMoney(serverData.TotalRevenue)
            }}</view>
          </view>

          <view style="height: 10rpx"></view>
          <!-- <view style="text-align: center; font-size: 24rpx; color: #56a6bd">{{
            gHelper.formatMoney(serverData.TotalRevenue)
          }}</view> -->
          <view style="height: 10rpx"></view>
          <view class="renda">
            <view class="renda_item">
              <view
                style="
                  color: #ffffff;
                  font-size: 28rpx;

                  margin-left: 20rpx;
                "
                >{{ $t("KEY_INDEX2_TI") }}</view
              >
              <view class="money">{{
                gHelper.formatMoney(serverData.TodayEarnings)
              }}</view>
            </view>
            <view class="renda_item">
              <view class="name">{{ $t("KEY_INDEX2_YI") }}</view>
              <view class="money">{{
                gHelper.formatMoney(serverData.YesterdayEarnings)
              }}</view>
            </view>
          </view>
          <view style="height: 20rpx"></view>
        </view>
        <view style="height: 20rpx"></view>

        <view
          style="border-radius: 12rpx; width: 100%; margin: auto"
          class="cardBg card_item"
        >
          <view class="total_line">
            <view class="commonBtnBg2">
              <view
                style="
                  font-size: 30rpx;
                  text-align: center;
                  line-height: 68rpx;
                  text-align: center;
                "
                >{{ $t("KEY_NEW_IDX2_VDA") }}</view
              >
            </view>

            <view class="transNum">
              <view class="LvImg"></view>
              <text>
                {{ "R$ " + gHelper.formatMoney(serverData2.TurnoverTeam) }}
              </text>
            </view>
          </view>
          <view style="height: 6rpx"></view>

          <view style="height: 10rpx"></view>
          <!-- <view style="text-align: center; font-size: 24rpx; color: #56a6bd">{{
            "R$ " + gHelper.formatMoney(serverData2.TurnoverTeam)
          }}</view> -->
          <view style="position: relative" class="renda">
            <view class="renda_item">
              <view>{{ "Nível 1" }}</view>
              <view class="money">{{
                "R$ " + gHelper.formatMoney(serverData2.TurnoverSub)
              }}</view>
            </view>
            <view class="renda_item">
              <view>{{ "Nível 2" }}</view>
              <view class="money">{{
                "R$ " + gHelper.formatMoney(serverData2.TurnoverSon)
              }}</view>
            </view>
            <!-- <view class="LvImg"></view> -->
          </view>
          <view style="height: 20rpx"></view>
        </view>
        <view style="height: 20rpx"></view>
        <view
          style="border-radius: 12rpx; width: 100%; margin: auto"
          class="cardBg card_item"
        >
          <view class="total_line">
            <view class="commonBtnBg2">
              <view>{{ $t("KEY_NEW_IDX2_NDD") }}</view>
            </view>

            <view class="transNum">
              <view class="LvImg"></view>
              <text>
                {{ serverData2.RechargePlayerTeam }}
              </text>
            </view>
          </view>
          <view style="height: 10rpx"></view>
          <!-- <view style="text-align: center; font-size: 24rpx; color: #56a6bd">{{
            serverData2.RechargePlayerTeam
          }}</view> -->
          <view style="position: relative" class="renda">
            <view class="renda_item">
              <view>{{ "Nível 1" }}</view>
              <view class="money">{{ serverData2.RechargePlayerSub }}</view>
            </view>
            <view class="renda_item">
              <view>{{ "Nível 2" }}</view>
              <view class="money">{{ serverData2.RechargePlayerSon }}</view>
            </view>
            <!-- <view class="LvImg"></view> -->
          </view>
          <view style="height: 20rpx"></view>
        </view>
        <view style="height: 20rpx"></view>
        <view
          style="border-radius: 12rpx; width: 100%; margin: auto"
          class="cardBg card_item"
        >
          <view class="total_line">
            <view class="commonBtnBg2" >
              <view
                style="font-size: 30rpx; text-align: center; line-height: 68rpx"
                >{{ $t("KEY_NEW_IDX2_CT") }}</view
              >
            </view>

            <view class="transNum">
              <view class="LvImg"></view>
              <text>
                {{ "R$ " + gHelper.formatMoney(serverData2.IncomeTeam) }}
              </text>
            </view>
          </view>

          <view style="height: 10rpx"></view>
          <!-- <view style="text-align: center; font-size: 24rpx; color: #56a6bd">{{
            "R$ " + gHelper.formatMoney(serverData2.IncomeTeam)
          }}</view> -->
          <view style="position: relative" class="renda">
            <view
             class="renda_item"
            >
              <view>{{ "Nível 1" }}</view>
              <view class="money">{{
                "R$ " + gHelper.formatMoney(serverData2.IncomeSub)
              }}</view>
            </view>
            <view
             class="renda_item"
            >
              <view>{{ "Nível 2" }}</view>
              <view class="money">{{
                "R$ " + gHelper.formatMoney(serverData2.IncomeSon)
              }}</view>
            </view>
           
          </view>
          <view style="height: 20rpx"></view>
        </view>
        <view style="height: 20rpx"></view>
      </view>
      <view v-if="pageTpye == 1">
        <view class="link cardBg" v-if="copy2Text && copy2Text.length > 0">
          <view class="gap"></view>
          <view class="link_box">
            <view class="label">{{ $t("KEY_INDEX2_RL") }}</view>
            <view class="input">
              <view class="inputType input_box">
                <view class="input_line">{{ copy2Text }}</view>
              </view>
              <image
                :src="gAssets.copyImage"
                class="input_img"
                @click="onButtonClick_Copy(copy2Text)"
              ></image>
            </view>
          </view>

          <view style="height: 20rpx"></view>
          <view class="link_box">
            <view class="label">{{ $t("KEY_INDEX2_RC") }}</view>

            <view class="input">
              <view class="inputType input_box">
                <view class="input_line">{{ copy1Text }}</view>
              </view>
              <image
                :src="gAssets.copyImage"
                class="input_img"
                @click="onButtonClick_Copy(copy1Text)"
              ></image>
            </view>
          </view>

          <view style="height: 20rpx"></view>
          <view class="bottom_line">{{
            "Convide seus amigos para participar e você receberá grandes recompensas"
          }}</view>
          <view style="height: 20rpx"></view>
        </view>

        <view class="gap"></view>
        <view class="bonus cardBg">
          <view class="gap"></view>
          <view class="bonus_line">
            <view class="item1">
              <view style="height: 6rpx"></view>
              <view class="item1_top">{{ $t("KEY_NEW_BONUS") }}</view>
              <view style="height: 6rpx"></view>
              <view class="item1_bot">{{
                gHelper.formatMoney(serverData.BonusAmount)
              }}</view>
              <view style="height: 6rpx"></view>
            </view>

            <view @click="onButtonClick_BountRc" class="item2">
              <text>{{ $t("KEY_NEW_IDX2_VTOB") }}</text></view
            >
            <view @click="onButtonClick_TeamSqueRe" class="item3"
              ><text>{{ $t("KEY_NEW_IDX2_RDRR") }}</text></view
            >
          </view>
          <view class="gap"></view>
          <view class="btn_line">
            <view style="display: flex">
              <view
                @click="onButtonClick_Seque"
                class="commonBtnBg"
                style="display: flex"
              >
                <view class="saqueImg"></view>
                <view class="saqueText">{{ $t("KEY_INDEX1_WITHDRAW") }}</view>
              </view>
              <view
                @click="onButtonClick_OpenPopWindow"
                class="commonBtnBg"
                style="display: flex"
              >
                <view class="TransferirImg"></view>
                <view class="saqueText">{{
                  $t("KEY_NEW_IDX2_TRANSFERIR")
                }}</view>
              </view>
            </view>
          </view>
          <view style="height: 30rpx"></view>
          <view class="textarea">
            <view style="height: 10rpx"></view>
            <view class="tips">{{ tips }}</view>
            <view style="height: 10rpx"></view>
            <view class="tips2">{{ tips2 }}</view>
            <view style="height: 10rpx"></view>
            <view class="tipsImg">
              <image :src="gAssets.idx2_load"></image>

              <text>
                A liquidação da comissdo val demorar um pouco, por favor, sea
                pacient
              </text>
            </view>
          </view>
          <view style="height: 20rpx"></view>
        </view>

        <view style="height: 20rpx"></view>
        <view style="display: flex; padding: 0px 60rpx">
          <!-- <view class="BoxBgImg" style="margin-left: 0rpx;">
							<view style="font-size: 20rpx; text-align: center; line-height: 82rpx;">Número de total</view>
							<view style="font-size: 20rpx; text-align: center; line-height: 82rpx;">{{Number(serverData.TodayPromoteNum) + Number(serverData.YesterdayPromoteReward)}}</view>
						</view> -->
          <view class="BoxBgImg">
            <!-- 昨天的数字 -->
            <view class="name overLine">Número de hoje</view>
            <view
              style="font-size: 28rpx; text-align: center; line-height: 90rpx"
              >{{ serverData.TodayPromoteNum }}</view
            >
          </view>
          <view class="BoxBgImg" style="margin-right: 0rpx">
            <!-- 今天的数字 -->
            <view class="name overLine">Número de ontem</view>
            <view
              style="font-size: 28rpx; text-align: center; line-height: 90rpx"
              >{{ serverData.YesterdayPromoteReward }}</view
            >
          </view>
        </view>
        <view style="height: 20rpx"></view>
        <view class="detalhes cardBg">
          <view style="height: 20rpx"></view>
          <view class="detal_btn" @click="onButtonClick_Detalhes()">
            <view style="width: 44rpx; height: 50rpx; margin-right: 20rpx">
              <image
                :src="gAssets.idx2_enjoy"
                style="width: 100%; height: 100%"
              ></image>
            </view>

            {{ $t("KEY_NEW_IDX2_DETALHES") }}
          </view>
          <view style="height: 20rpx"></view>
          <view
            style="
              width: 96%;
              margin: auto;
              border-radius: 12rpx;
              font-size: 20rpx;
              color: #ffffff;
            "
          >
            <view style="height: 16rpx"></view>
            <view style="width: 96%; margin: auto">
              <view style="white-space: pre-wrap">{{
                $t("KEY_INDEX2_T1")
              }}</view>
              <!-- <view style="white-space: pre-wrap;">{{$t("idx2Tips1")}}</view> -->
              <view style="height: 30rpx"></view>
              <view style="font-size: 28rpx">{{
                gHelper.StrReplace(
                  $t("KEY_INDEX2_LV1"),
                  Math.floor(Number(serverData.Lv1Rate) * 10000) / 100
                )
              }}</view>
              <view style="font-size: 28rpx">{{
                gHelper.StrReplace(
                  $t("KEY_INDEX2_LV2"),
                  Math.floor(Number(serverData.Lv2Rate) * 10000) / 100
                )
              }}</view>
              <!-- <view style="">{{gHelper.StrReplace($t('KEY_INDEX2_LV3'), (Math.floor(Number(serverData.Lv3Rate) * 10000) / 100))}}</view> -->
              <view style="height: 14rpx"></view>
            </view>

            <view style="height: 16rpx"></view>
          </view>
          <view style="height: 20rpx"></view>
        </view>
        <view style="height: 20rpx"></view>
        <view class="teamPic"></view>
        <!-- 第三行 -->
        <view class="Ervie cardBg">
          <view style="height: 10rpx"></view>
          <view
            style="
              width: 95%;
              margin: auto;
              border-radius: 10rpx;
              margin-left: 2.5%;
            "
          >
            <view
              style="
                padding-top: 20rpx;
                padding-bottom: 20rpx;
                padding-left: 10rpx;
                padding-right: 10rpx;
              "
            >
              <view style="white-space: pre-wrap">{{ $t("idx2Tips") }}</view>
            </view>
          </view>

          <view style="height: 10rpx"></view>
        </view>
      </view>

      <view v-if="pageTpye == 2">
        <teamDl ref="teamDl" v-if="!gRequest.userManager.isBz"></teamDl>
        <bz ref="bz" v-if="gRequest.userManager.isBz"></bz>
      </view>
    </view>

    <view class="MaskWindow" v-if="showPop">
      <view class="out">
        <view class="window">
          <image
            :src="gAssets.closeImg"
            mode="widthFix"
            style="
              width: 56rpx;
              position: absolute;
              top: 20rpx;
              right: 20rpx;
              z-index: 11;
            "
            @click="onButtonClick_ClosePopWindow"
          ></image>
          <view style="height: 50rpx"></view>
          <view style="text-align: center">
            <image
              :src="gAssets.idx2_popText"
              style="width: 347rpx; margin: auto"
              mode="widthFix"
            ></image>
          </view>
          <view style="height: 30rpx"></view>
          <view class="centerBg">
            <input
              style="
                width: 96%;
                margin: auto;
                color: #ffffff;
                line-height: 92rpx;
                height: 92rpx;
                font-size: 26rpx;
              "
              v-model="inputAmount"
              type="number"
              :placeholder="$t('KEY_NEW_IDX2_IOTIPS')"
            />
          </view>
          <view style="height: 30rpx"></view>
          <view class="btnLvSe" @click="onButtonClick_Transferir">{{
            $t("KEY_INDEX5_OK")
          }}</view>
        </view>
      </view>
    </view>

    <comBottom></comBottom>
    <!-- 自定义tabbar -->
    <view style="height: 200rpx"></view>
    <myTabbar ref="myTabbar"></myTabbar>
  </view>
</template>

<script>
import uniplayertitle from "@/components/game/uni-playertitle.vue";
import teamDl from "@/components/game/team/teamdl.vue";
import bz from "@/components/game/team/idx6.vue";
export default {
  components: {
    uniplayertitle,
    teamDl,
    bz,
  },

  data() {
    return {
      pageTpye: 1,
      curChose: 0,
      copy1Text: "",
      copy2Text: "",
      BtnText: "",

      serverData: {},
      serverData2: {},
      Box: [],
      inputAmount: "",
      showPop: false,
      IsAgent: 0,
      AgentLevel: 0,

      tips: this.$t("KEY_NEW_IDX2_TIPS"),
      tips2: this.$t("KEY_NEW_IDX2_TIPS2"),

      dateRange: [],
      startTime: "",
      endTime: "",
      ////////////////////
    };
  },

  onLoad(option) {
    uni.hideTabBar();
  },

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow() {
    // if (this.gRequest.userManager.isBz) {
    // 	uni.navigateTo({
    // 		url: 'idx6',
    // 		fail(error) {
    // 			console.log(error)
    // 		}
    // 	})
    // }
    if (this.$refs && this.$refs.myTabbar) {
      this.$refs.myTabbar.flushTabarText();
    }
    if (this.gRequest.userManager.isBz) {
      this.BtnText = this.$t("KEY_NEW_IDX2BL");
    } else {
      this.BtnText = this.$t("KEY_NEW_IDX2AGENTE");
    }

    this.flush();
    this.$store.commit("changeTabBar", {
      index: 0,
    });
  },

  onReady() {
    // this.flush();
    if (this.$refs && this.$refs.myTabbar) {
      this.$refs.myTabbar.flushTabarText();
    }
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
      if (this.$refs && this.$refs.uniplayertitle) {
        this.$refs.uniplayertitle.flush();
      }

      if (this.pageTpye == 0) {
        this.gRequest.teamManager.agentTeamStatistics(
          this.onEventCallback_agentTeamStatistics.bind(this),
          this.startTime,
          this.endTime
        );
      } else if (this.pageTpye == 1) {
        this.gRequest.teamManager.promoteHome(
          this.onEventCallback_promoteHome.bind(this)
        );
      } else {
        if (this.$refs && this.$refs.teamDl) {
          this.$refs.teamDl.flush();
        }

        if (this.$refs && this.$refs.bz) {
          this.$refs.bz.flush();
        }
      }
    },

    flushTarbar() {
      if (this.$refs && this.$refs.myTabbar) {
        this.$refs.myTabbar.flushTabarText();
      }
    },

    onButtonClick_chosePage(idx) {
      this.pageTpye = idx;
      this.flush();
    },

    onButtonClick_choseSelect(idx) {
      this.curChose = idx;
      if (this.curChose == 0) {
        this.startTime = "";
        this.endTime = "";
      } else if (this.curChose == 1) {
        let arr = this.gHelper.getTodayTimestamp();
        this.startTime = arr[0];
        this.endTime = arr[1];
      } else if (this.curChose == 2) {
        let arr = this.gHelper.getYesterdayTimestamp();
        this.startTime = arr[0];
        this.endTime = arr[1];
      } else if (this.curChose == 3) {
        let arr = this.gHelper.getThisWeekTimestamp();
        this.startTime = arr[0];
        this.endTime = arr[1];
      } else if (this.curChose == 4) {
        let arr = this.gHelper.getLastWeekTimestamp();
        this.startTime = arr[0];
        this.endTime = arr[1];
      }
      this.flush();
    },

    onEventCallback_promoteHome(data) {
      if (data) {
        this.copy1Text = data.ReferralCode;
        this.copy2Text = data.ReferralLink;
        this.serverData = data;
        this.Box = data.Box;
        this.IsAgent = data.IsAgent;
        this.AgentLevel = data.AgentLevel;
      }
    },

    onEventCallback_agentTeamStatistics(data) {
      if (data) {
        this.serverData2 = data;
      }
    },

    // 复制
    onButtonClick_Copy(text) {
      this.gAndroidUtils.copyToSystemClipboard(text);
      this.gHelper.toast(this.$t("KEY_INDEX2_CS"));
    },

    // Income details
    onButtonClick_IncomdeDetails() {
      uni.navigateTo({
        url: "id",
      });
    },

    // Team etails
    onButtonClick_TeamDetails(idx) {
      uni.navigateTo({
        url:
          "td?type=" +
          idx +
          "&startTime=" +
          this.startTime +
          "&endTime=" +
          this.endTime,
      });
    },

    // Team etails
    onButtonClick_Receive() {
      this.gRequest.teamManager.receiveTeamBox(this.flush.bind(this));
    },

    // Team etails
    onButtonClick_Detalhes() {
      uni.navigateTo({
        url: "teamDetalhes",
      });
    },

    // Transferir
    onButtonClick_Transferir() {
      this.gRequest.teamManager.promoteConversion(
        this.inputAmount,
        this.onEventCallback_Transferir.bind(this)
      );
    },

    onEventCallback_Transferir() {
      this.flush();
      this.showPop = false;
      this.inputamount = "";
      this.gHelper.toast(this.$t("KEY_NEW_IDX2_TS"));
    },

    // Seque
    onButtonClick_Seque() {
      uni.navigateTo({
        url: "TeamWithdraw",
      });
    },

    // Seque
    onButtonClick_TeamSqueRe() {
      uni.navigateTo({
        url: "teamSqueRecord",
      });
    },

    // Seque
    onButtonClick_BountRc() {
      uni.navigateTo({
        url: "bonusRecord",
      });
    },

    // dl
    onButtonClick_teamdl() {
      uni.navigateTo({
        url: "teamdl",
      });
    },

    onButtonClick_OpenPopWindow() {
      this.showPop = true;
    },

    onButtonClick_ClosePopWindow() {
      this.showPop = false;
    },

    //////////////////////////////////
    maskClick() {},

    confirmData(data) {
      this.startTime = "";
      this.endTime = "";
      if (data) {
        this.startTime = data[0] / 1000;
        this.endTime = data[1] / 1000 + 24 * 60 * 60 - 1;
      }

      this.flush();
    },

    getDate(date, addZero = true) {
      date = new Date(date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${addZero ? this.addZero(month) : month}-${
        addZero ? this.addZero(day) : day
      }`;
    },
    addZero(num) {
      if (num < 10) {
        num = `0${num}`;
      }
      return num;
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

.item {
  width: 28%;
  border-radius: 10rpx;
  background: #bec0cc;
  // height: 100rpx;
  color: #c0f5a2;
  text-align: center;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
  border-radius: 360rpx;
}

.choseColor {
  text-shadow: 3rpx 3rpx 30rpx #4cb839;
}

.NoChoseColor {
  color: #ffffff;
}

.teamPic {
  background: url("@/static/jiefu16/teampic.png") no-repeat;
  background-size: 100% 100%;

  margin: auto;
  width: 366rpx;
  height: 324rpx;
}

.BoxBgImg {
  background: url("@/static/jiefu17/xBtnbg.png") no-repeat;
  background-size: 100% 100%;

  margin: auto;
  width: 40%;
  height: 162rpx;
  // margin-left: 10rpx;
  padding: 0 10rpx;

  .name {
    font-size: 28rpx;
    text-align: center;
    line-height: 82rpx;
    color: #fff;
  }
}

.LvImg {
  background: url("@/static/jiefu17/descend.png") no-repeat;
  background-size: 100% 100%;

  margin: auto;
  width: 20rpx;
  height: 27rpx;
}

.teamBg {
  background: #bec0cc;
  background-size: 100% 100%;

  margin: auto;
  width: 667rpx;
  height: 86rpx;
  line-height: 86rpx;
  border-radius: 360rpx;
  position: relative;
}

.commonBtnBg {
  background: url("@/static/btn0012.png") no-repeat;
  background-size: 100% 100%;

  width: 258rpx;
  height: 70rpx;
  color: #ffffff;
  margin: auto;
}

.commonBtnBg2 {
  // background: url("@/static/bgblue01aa.png") no-repeat;
  // background-size: 100% 100%;
  // width: 670rpx;
  height: 68rpx;
  line-height: 68rpx;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  margin: auto;
  margin-left: 20rpx;
}
.Dados {
  display: flex;
  width: 96%;
  margin: auto;
  .Dados_box {
    width: 32%;
    margin: auto;
    position: relative;

    .page1Img {
      background: url("@/static/jiefu17/Dados.png") no-repeat;
      background-size: 100% 100%;
      width: 51rpx;
      height: 44rpx;
      position: relative;
      margin: auto;
    }
    .page1Img2 {
      background: url("@/static/jiefu17/Dados.png") no-repeat;
      background-size: 100% 100%;

      width: 51rpx;
      height: 44rpx;
      position: relative;
      margin: auto;
    }
    .text {
      padding-top: 10rpx;
      font-size: 20rpx;
      text-align: center;
      font-weight: bold;
    }

    .page2Img {
      background: url("@/static/jiefu17/team.png") no-repeat;
      background-size: 100% 100%;

      width: 57rpx;
      height: 47rpx;
      position: relative;
      margin: auto;
    }
    .page2Img2 {
      background: url("@/static/jiefu17/team.png") no-repeat;
      background-size: 100% 100%;

      width: 57rpx;
      height: 47rpx;
      position: relative;
      margin: auto;
    }

    .page3Img {
      background: url("@/static/jiefu17/222.png") no-repeat;
      background-size: 100% 100%;
      width: 60rpx;
      height: 60rpx;
      position: relative;
      margin: auto;
    }
    .page3Img2 {
      background: url("@/static/jiefu17/222.png") no-repeat;
      background-size: 100% 100%;
      width: 60rpx;
      height: 60rpx;
      position: relative;
      margin: auto;
    }
  }
}

.link {
  // background-color: rgba(98, 32, 157, 0.6);
  border-radius: 12rpx;
  width: 100%;
  margin: auto;
  position: relative;
  .link_box {
    width: calc(100% - 40rpx);
    padding: 20rpx;
    display: flex;
    font-size: 24rpx;

    .label {
      font-size: 24rpx;
      color: #ffffff;
      width: 280rpx;
      text-align: left;
    }
    .input {
      // width: 660rpx;
      display: flex;
      margin: auto;
      color: #ffffff;

      .input_box {
        display: flex;
        border-radius: 12rpx;
        // width: 96%;
        position: relative;
        display: flex;
        margin: auto 20rpx auto auto;
        height: 56rpx;

        .input_line {
          margin: auto auto auto 46rpx;
          width: 360rpx;
          font-size: 24rpx;
          line-height: 56rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 30rpx;
        }
      }
      .input_img {
        width: 38rpx;
        height: 42rpx;
        margin: auto 10rpx auto auto;
      }
    }
  }

  .bottom_line {
    font-size: 24rpx;
    color: #ffffff;
    text-align: center;
    width: calc(100% - 40rpx);
    padding: 0 20rpx;
  }
}

.bonus {
  border-radius: 12rpx;
  width: 100%;
  margin: auto;

  .bonus_line {
    width: 96%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24rpx;
    .item1 {
      .item1_top {
        text-align: left;
        color: #69f4f9;
      }
      .item1_bot {
        text-align: left;
        color: #ffffff;
      }
    }
    .item2 {
      color: #ffffff;
      text {
        text-decoration: underline;
      }
    }
    .item3 {
      color: #ffffff;
      text {
        text-decoration: underline;
      }
    }
  }
  .btn_line {
    width: 96%;
    margin: auto;

    .commonBtnBg {
      background: url("@/static/jiefu17/sa_btn.png") no-repeat;
      background-size: 100% 100%;
      width: 257rpx;
      height: 79rpx;
      color: #ffffff;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .saqueImg {
        background: url("@/static/jiefu17/total.png") no-repeat;
        background-size: 100% 100%;
        // margin: auto;
        width: 51rpx;
        height: 33rpx;
        margin: 0 20rpx;
      }

      .saqueText {
        // margin: auto;
        margin-right: 40rpx;
        color: #ffffff;
        font-size: 28rpx;
      }

      .TransferirImg {
        background: url("@/static/jiefu16/xz.png") no-repeat;
        background-size: 100% 100%;
        margin: auto;
        width: 44rpx;
        height: 46rpx;
        margin-left: 40rpx;
      }
    }
  }

  .textarea {
    border-radius: 12rpx;
    margin: auto;
    width: 96%;
    .tips {
      font-size: 24rpx;
      color: #e5ca8b;
      margin: auto;
    }
    .tips2 {
      font-size: 24rpx;
      color: #ffffff;
      margin: auto;
    }

    .tipsImg {
      //   background: url("@/static/new/bg02ffcc.png") no-repeat;
      background-size: 100% 100%;
      margin: auto;
      height: 31rpx;
      font-size: 20rpx;
      text-overflow: ellipsis;
      overflow: hidden;
      text-wrap: nowrap;
      color: #ffcc19;

      image {
        width: 25rpx;
        height: 26rpx;
        vertical-align: middle;
        margin-right: 10rpx;
      }
      text {
        font-size: 20rpx;
      }
    }
  }
}

.detalhes {
  border-radius: 12rpx;
  width: calc(100% - 40rpx);
  margin: auto;
  padding: 20rpx;

  .detal_btn {
    background: #d93195;
    border-radius: 10rpx;
    width: 100%;
    height: 79rpx;
    color: #fff;
    font-weight: 600;
    font-size: 36rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.Ervie {
  width: 100%;
  margin: auto;
  border-radius: 10rpx;
  margin-top: 20rpx;
  font-size: 20rpx;
  padding-top: 15rpx;
}
.card_item {
  padding-top: 20rpx;
  border-radius: 12rpx;
  width: 100%;
  margin: auto;
  background: #dfc329;
}
.saqueImg {
  background: url("@/static/jiefu17/total.png") no-repeat;
  background-size: 100% 100%;
  width: 57rpx;
  height: 61rpx;
  margin: 0rpx 10rpx;
}
.transNum {
  text-align: center;
  font-size: 32rpx;
  color: $dateColor;
  margin-right: 20rpx;
  line-height: 64rpx;
  display: flex;
}

.total_line {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.renda {
  display: flex;
  flex-direction: column;
  background: #ffe46b;
  margin: 0 20rpx;
  border-radius: 15rpx;
  .renda_item {
    display: flex;
    width: calc(98% - 40rpx);
    justify-content: space-between;
    margin: auto;
    padding: 10rpx 20rpx;

    .name {
      color: #ffffff;
      font-size: 28rpx;
      margin-left: 20rpx;
    }
    .money {
      color: $dateColor;
      font-size: 28rpx;
      margin-left: 10rpx;
    }
  }
}
</style>
