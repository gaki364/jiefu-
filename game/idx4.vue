<template>
  <view>
    <!-- 活动列表 -->
    <view
      style="width: 96%; margin: auto; margin-top: 50rpx"
      v-if="activityShow == 0"
    >
      <block
        v-for="(item, index) in activityList"
        v-bind:key="index"
        style="margin: auto"
      >
        <view style="border-radius: 18rpx; width: 100%">
          <!-- <view style="height: 30rpx;"></view> -->
          <!-- <view class="titleBg">{{gHelper.getTime(item.CreateTime)}}</view> -->
          <!-- <view style="height: 30rpx;"></view> -->
          <view style="width: 98%; margin: auto; text-align: center">
            <image
              :src="item.Image"
              mode="widthFix"
              style="width: 100%; margin: auto"
              @click="onButtonClick_Activity(index)"
            ></image>
          </view>
          <view style="height: 20rpx"></view>
        </view>
        <view style="height: 30rpx"></view>
      </block>
    </view>

    <notice ref="notice" @click="onNoticeClick_GotIt"></notice>
  </view>
</template>

<script>
import uniplayertitle from '@/components/game/uni-playertitle.vue'
import notice from '@/components/notice/notice.vue'
import signPop from '@/components/game/uni-SignPop.vue'

export default {
  components: {
    uniplayertitle,
    notice,
    signPop,
  },

  data () {
    return {
      // 活动列表
      activityList: [],
      notice: false,
      // 活动详情
      activityShow: 0,
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
    // 	index: 3
    // });
  },

  onReady () {
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
      this.gRequest.mainManager.announcementInfo(this.onEventCallback_adInfo.bind(this))
    },

    flushTarbar () {
      if (this.$refs && this.$refs.myTabbar) {
        this.$refs.myTabbar.flushTabarText()
      }
    },

    onEventCallback_adInfo (data) {
      this.activityList = data
    },

    // 活动详情
    onButtonClick_Activity (index) {
      if (this.activityList[index].Title == "telegrem") {
        this.gAndroidUtils.openBrowser(this.gBase64.decode(this.activityList[index].Content))
      } else if (this.activityList[index].Title == "sign") {
        // this.gRequest.infomationManager.signInConfig(this.onEventCallback_signInConfig.bind(this));
      } else {
        this.notice = true
        if (this.$refs && this.$refs.notice) {
          this.$refs.notice.showHtml(this.activityList[index].Title, this.activityList[index].Content)
        }
      }
    },


    onEventCallback_signInConfig (data) {
      if (data) {
        if (this.$refs && this.$refs.signPop) {
          this.$refs.signPop.showPop(data)
        }
      }
    },

    // 活动详情返回
    onButtonClick_Return () {
      this.activityShow = 0
    },

    // 关闭Notice
    onNoticeClick_GotIt () {
      this.notice = false
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

.titleBg {
  background: linear-gradient(to right, #2198f0, #21aff0, #2198f0);
  background-size: 100% 100%;

  width: 95%;
  height: 70rpx;
  line-height: 70rpx;
  color: #ffffff;
  text-align: center;
  font-size: 32rpx;
  margin: auto;
  border-radius: 360rpx;
}
</style>
