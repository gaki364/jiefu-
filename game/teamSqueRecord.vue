<template>
  <view>
    <unititle
      :titleText="title"
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
          width: 95%;
          margin: auto;
          color: #ffffff;
        "
      >
        <view style="width: 30%; margin: auto">{{ $t("KEY_ID_TIME") }}</view>
        <view style="width: 30%; margin: auto">{{ "Operar" }}</view>
        <view style="width: 30%; margin: auto">{{ "Bónus" }}</view>
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
              item.CreateTime
            }}</view>
            <view
              style="
                width: 30%;
                white-space: normal;
                text-align: center;
                text-overflow: ellipsis;
                margin: auto;
                margin-right: 10rpx;
                color: #f2f65d;
              "
              v-if="item.Name == 'retirar'"
              >{{ item.Name }}</view
            >
            <view
              style="
                width: 30%;
                white-space: normal;
                text-align: center;
                text-overflow: ellipsis;
                margin: auto;
                margin-right: 10rpx;
                color: #ff3835;
              "
              v-if="item.Name != 'retirar'"
              >{{ item.Name }}</view
            >
            <view
              style="
                width: 30%;
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
                  width: 100%;
                  text-align: center;
                "
                >R${{ gHelper.formatMoney(item.Bonus) }}</view
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
      title: "Registo de Recolha/Retirada",

      page: 1,

      list: [],


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

  methods: {
    flush () {
      uni.stopPullDownRefresh()
      this.gRequest.teamManager.bonusTransferRecord(this.page, this.onEventCallback_bonusTransferRecord.bind(this))
    },

    onClickButton_Back () {
      this.gHelper.back(this)
    },

    onEventCallback_bonusTransferRecord (data) {
      console.log(data)
      if (data && data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          data[i].CreateTime = this.gHelper.getTime(data[i].CreateTime)
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
  border-radius: 18rpx;
  // background: #191D5C;
  font-size: 24rpx;
}
</style>
