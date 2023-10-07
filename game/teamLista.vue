<template>
  <view>
    <unititle
      titleText="lista subordinada"
      titleEvent="registerClick"
      @registerClick="onClickButton_Back"
      :titleColor="'transparent'"
    ></unititle>

    <view class="bg">
      <view
        class="hengzhe"
        style="
          padding-top: 20rpx;
          justify-content: space-around;
          text-align: center;
          width: 90%;
          margin: auto;
          color: #ffffff;
        "
      >
        <view
          style="
            width: 36%;
            margin: auto;
            text-align: center;
            text-align: center;
          "
          >{{ "Nome de usuário" }}</view
        >
        <view style="width: 30%; margin: auto; text-align: center">{{
          "Usuário ativo"
        }}</view>
        <view style="width: 30%; margin: auto; text-align: center">{{
          "Conexão"
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
              border-radius: 120rpx;
              width: 90%;
              padding-top: 10rpx;
              padding-bottom: 10rpx;
            "
          >
            <view style="width: 36%; margin: auto; text-align: center">{{
              item.Phone
            }}</view>
            <view
              style="
                width: 30%;
                margin: auto;
                text-align: center;
                color: #30e39f;
              "
              v-if="item.IsActive == 1"
              >{{ "Sim" }}</view
            >
            <view
              style="width: 30%; margin: auto; text-align: center"
              v-if="item.IsActive == 0"
              >{{ "Não" }}</view
            >
            <view
              @click="onButtonClick_tele(item.Whatsapp)"
              style="width: 30%; margin: auto; text-align: center"
            >
              <view class="imgCo"></view>
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

      list: [
      ],

      curPage: 1,

    }
  },

  onLoad (option) {

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

  onReachBottom () {
    this.flush()
  },

  methods: {
    flush () {
      uni.stopPullDownRefresh()
      this.gRequest.teamManager.agentUsers(this.onEventCallback_agentUsers.bind(this))
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onEventCallback_agentUsers (data) {
      if (data && data.length > 0) {
        this.list = data
      }
    },

    onButtonClick_tele (link) {
      this.gAndroidUtils.openBrowser(link)
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

.imgCo {
  background: url("@/static/dl/whatsapp.png") no-repeat;
  background-size: 100% 100%;

  margin: auto;
  width: 40rpx;
  height: 42rpx;
}
</style>
