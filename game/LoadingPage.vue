<template>
  <view style="text-align: center">
    <!-- <image :src="gAssets.common_Loading" style="width: 100%" mode="widthFix"></image> -->
  </view>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  onLoad (option) {
    if (option && option.bet777) {
      this.gRequest.baseRequest.reCode = option.bet777
    }
  },

  onShow () {
    setTimeout(() => {
      uni.switchTab({
        url: "idx1",
      })
    }, 2500)
  }
}
</script> 

<style lang="scss" scoped>
page {
  background: url("@/static/jiefu17/brrealbet.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
</style>
