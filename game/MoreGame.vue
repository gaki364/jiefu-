<template>
  <view>
    <!-- <unititle v-if="type != 7 && type != 8" :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back"></unititle> -->
    <view class="titleH"></view>
    <view class="titleBg">
      <!-- <view style="height: 181rpx;"></view> -->
      <view class="titleReturn" @click="onClickButton_Back()"></view>
      <view
        style="
          font-size: 40rpx;
          font-weight: 600;
          position: absolute;
          left: 10rpx;
          top: 80rpx;
          text-align: center;
          width: 40%;
          color: #d1a95c;
        "
        >{{ title }}</view
      >
      <view
        class="commonJbBg"
        style="
          width: 60%;
          height: 71rpx;
          top: 66rpx;
          right: 20rpx;
          position: absolute;
          display: flex;
        "
      >
        <view class="scImg" @click="buttonClick_serchGame"></view>
        <input
          class="inputType2"
          placeholder="procurar"
          placeholder-style="color:#FFFFFF;"
          v-model="gameName"
        />
        <view
          class="clearImg"
          v-if="gameName.length > 0"
          @click="buttonClick_serchGame2"
        ></view>
      </view>
    </view>
    <!-- <view style="height: 20rpx;" v-if="type == 7 || type == 8"></view> -->
    <view style="width: 98%; margin: auto">
      <!-- 游戏列表 -->
      <view class="gamelist">
        <block v-for="(item, index) in list" v-bind:key="index">
          <view
            style="width: 92%; position: relative; margin: auto"
            @click="onButtonClick_Game(item.GameId, item.Name, item.IsMaintain)"
          >
            <image
              :src="item.Logo"
              mode="widthFix"
              style="width: 100%; border-radius: 12rpx"
            ></image>
            <image
              v-if="item.IsCollect != null"
              :src="item.IsCollect == 1 ? gAssets.gameC2 : gAssets.gameC1"
              mode="widthFix"
              style="width: 50rpx; position: absolute; top: 20rpx; right: 10rpx"
              @tap.stop="
                onButtonClick_collect(item.GameId, item.IsCollect, index)
              "
            ></image>
            <view class="gameNew" v-if="item.IsNew"></view>
            <view class="gameHot" v-if="item.IsHot"></view>
            <view class="gameStatusBg" v-if="item.IsMaintain == 1">
              <view style="height: 16%"></view>
              <image
                :src="gAssets.common_time"
                mode="widthFix"
                style="width: 42rpx"
              ></image>
              <view style="height: 10rpx"></view>
              <view
                style="
                  font-size: 20rpx;
                  text-align: center;
                  color: #ffffff;
                  width: 98%;
                  margin: auto;
                  white-space: pre-wrap;
                "
                >{{ item.MaintainTime }}</view
              >
            </view>
          </view>
        </block>
      </view>
    </view>

    <view class="topBtn" @click="onClickButton_gotoTop"> </view>
    <view class="MaskWindow" v-if="showPop">
      <view class="out">
        <view class="window">
          <view style="height: 60rpx"></view>
          <view style="width: 90%; margin: auto; color: #ffffff">{{
            $t("KEY_NEW_IDX1TIPS")
          }}</view>
          <view style="height: 30rpx"></view>
          <view style="display: flex">
            <view
              class="btnLvSe"
              style="font-size: 20rpx"
              @click="onClickButton_gotoRecharge()"
              >{{ $t("KEY_INDEX5_OK") }}</view
            >
            <view
              class="btnHuangSe"
              style="font-size: 20rpx"
              @click="onClickButton_clsoePop"
              >{{ $t("CANCELAR") }}</view
            >
          </view>
          <view style="height: 40rpx"></view>
        </view>
      </view>
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
      title: "",

      type: 0,
      curPage: 1,

      list: [],
      listData: [],

      gameName: "",

      showPop: false,
      choseCoIdx: null,
      choseCoStatus: null,
    }
  },

  onLoad (option) {
    if (option) {
      this.type = option.type
      if (this.type == 0) {
        this.title = this.$t('KEY_INDEX1_COLLECTION')
      } else if (this.type == 1) {
        this.title = this.$t('KEY_INDEX1_HISTORY')
        // this.title = "OG";
      } else if (this.type == 2) {
        this.title = this.$t('KEY_INDEX1_HOTGAMES')
      } else if (this.type == 3) {
        this.title = this.$t('KEY_INDEX1_NEWGAMES')
      } else if (this.type == 4) {
        this.title = 'LC'
      } else if (this.type == 5) {
        this.title = 'FISHING'
      } else if (this.type == 7) {
        this.title = 'PP'
      } else if (this.type == 8) {
        this.title = 'PG'
      } else if (this.type == 9) {
        this.title = 'CQ9'
      } else if (this.type == 10) {
        this.title = 'FC'
      } else {
        this.title = "SLOTS"
      }
    }
  },

  // 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
  onShow () {
    this.flush()
  },

  onReady () {
    // this.flush();
  },

  //监听下拉刷新
  onPullDownRefresh () {
    this.flush()
  },

  onHide () { },

  onUnload () {
    uni.stopPullDownRefresh()
  },

  onReachBottom () {
    if (this.type == 7 || this.type == 8) {
      this.flush()
    }
  },

  methods: {
    flush () {
      uni.stopPullDownRefresh()
      if (this.type == 0) {
        this.gRequest.gameManager.gameCollections(this.onEventCallback_list.bind(this))
      } else if (this.type == 1) {
        this.gRequest.gameManager.playHistory(this.onEventCallback_list.bind(this))
        // this.gRequest.gameManager.gameInfos(100, this.onEventCallback_list.bind(this));
      } else if (this.type == 2) {
        this.gRequest.gameManager.hotGame(this.onEventCallback_list.bind(this))
      } else if (this.type == 3) {
        this.gRequest.gameManager.gameNewGame(this.onEventCallback_list.bind(this))
      } else if (this.type == 4) {
        this.gRequest.gameManager.gameInfos(2, this.onEventCallback_list.bind(this))
      } else if (this.type == 5) {
        this.gRequest.gameManager.gameInfos(4, this.onEventCallback_list.bind(this))
      } else if (this.type == 7) {
        this.gRequest.gameManager.gamePage(this.title, this.onEventCallback_list.bind(this), this.curPage)
      } else if (this.type == 8) {
        this.gRequest.gameManager.gamePage(this.title, this.onEventCallback_list.bind(this), this.curPage)
      } else if (this.type == 9) {
        this.gRequest.gameManager.gamePage(this.title, this.onEventCallback_list.bind(this), this.curPage)
      } else if (this.type == 10) {
        this.gRequest.gameManager.gamePage(this.title, this.onEventCallback_list.bind(this), this.curPage)
      } else {
        this.gRequest.gameManager.gameInfos(1, this.onEventCallback_list.bind(this))
      }

    },

    onEventCallback_list (data) {
      if (this.type == 7 || this.type == 8) {
        if (data && data.GameInfoResponse && data.GameInfoResponse.length > 0) {
          for (let i = 0; i < data.GameInfoResponse.length; i++) {
            this.list.push(data.GameInfoResponse[i])
          }
          this.listData = this.list
          this.curPage = this.curPage + 1
        }
      } else {
        this.list = data
        this.listData = this.list
      }
    },

    onEventCallback_list2 (data) {
      this.list = data
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onClickButton_gotoTop () {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },

    buttonClick_serchGame () {
      let gameType = this.type
      let manufacturer = this.title
      if (this.type == 7 || this.type == 8) {
        gameType = ""
        manufacturer = this.title
      } else {
        gameType = this.getGameTypeFromType()
        manufacturer = ""
      }
      this.list = []
      if (this.gameName.length <= 0) {
        this.list = this.listData
      } else {
        this.gRequest.gameManager.gameSearch(this.gameName, this.onEventCallback_list2.bind(this), Number(gameType), this.title)
      }
    },

    buttonClick_serchGame2 () {
      this.gameName = ""
      this.list = this.listData
    },

    getGameTypeFromType () {
      if (this.type == 1) {
        return 100
      } else if (this.type == 4) {
        return 2
      } else {
        return 1
      }
    },

    // 点击开始游戏
    onButtonClick_Game (gameId, name, IsMaintain) {
      if (IsMaintain == 0) {
        if (gameId == 100001 || gameId == 100002) {
          this.gHelper.toast(this.$t('bind.new25'))
        } else {
          this.gameName = name
          if (this.gRequest.userManager.userInfoData && Number(this.gRequest.userManager.userInfoData.TotalAssets) < 1 && this.gRequest.userManager.userInfoData.GameLimit == 1) {
            this.showPop = true
          } else {
            this.gRequest.gameManager.gameEnter(gameId, this.onEventCalback_enterGame.bind(this))
          }
        }
      }
    },

    onEventCalback_enterGame (data) {
      this.gHelper.gWebViewParm['uu'] = data
      uni.navigateTo({
        url: 'gameWeb?title=' + this.gameName,
      })
    },

    onButtonClick_collect (gameId, IsCollect, index) {
      let co = IsCollect == 1 ? 0 : 1
      this.choseCoIdx = index
      this.choseCoStatus = IsCollect
      this.gRequest.gameManager.gameCollect(co, gameId, this.onEventCallBack_collectSuccess.bind(this))
    },

    onEventCallBack_collectSuccess () {
      let co = this.choseCoStatus == 1 ? 0 : 1
      this.list[this.choseCoIdx].IsCollect = co
      this.listData[this.choseCoIdx].IsCollect = co
    },

    onEventCallBack_showPop () {
      this.showPop = true
    },

    onClickButton_gotoRecharge () {
      this.showPop = false
      uni.navigateTo({
        url: "recharge",
      })
    },

    onClickButton_clsoePop () {
      this.showPop = false
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
.gamelist {
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 18rpx;
  margin: auto;

  margin-top: 10rpx;
}

.titleH {
  padding-top: env(safe-area-inset-top);
  padding-top: var(--status-bar-height);

  height: 181rpx;
}

.titleBg {
  padding-top: env(safe-area-inset-top);
  padding-top: var(--status-bar-height);

  background-color: #313783;
  width: 100%;
  position: fixed;
  z-index: 20;
  height: 181rpx;
  top: 0rpx;
}

.titleReturn {
  // float: left;
  position: absolute;
  text-align: left;
  vertical-align: middle;
  background-color: #18b566;

  width: 31rpx;
  height: 53rpx;
  // color: rgba(80, 80, 80, 1);
  background: url("@/static/new/btn0012.png") no-repeat;
  background-size: 100% 100%;
  // border-radius: 30rpx;
  left: 6%;
  top: 80rpx;
  z-index: 80;
}

.topBtn {
  background: url("@/static/new/btn0014.png") no-repeat;
  background-size: 100% 100%;

  width: 42rpx;
  height: 43rpx;
  position: fixed;
  right: 20rpx;
  bottom: 10%;
  z-index: 96;
}

.scImg {
  background: url("@/static/new/btn0013.png") no-repeat;
  background-size: 100% 100%;

  width: 60rpx;
  height: 60rpx;
  margin: auto 0rpx auto 10rpx;
}

.clearImg {
  background: url("@/static/btn0011.png") no-repeat;
  background-size: 100% 100%;

  width: 31rpx;
  height: 36rpx;
  margin: auto;
}

.inputType2 {
  width: 68%;
  margin: auto 10rpx auto 6rpx;
  height: 71rpx;
  color: #ffffff;
  text-align: left;
  line-height: 71rpx;
}

.gameStatusBg {
  background: rgba($color: #000000, $alpha: 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 12rpx;
  top: 0rpx;
  text-align: center;
}
</style>
