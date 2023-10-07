<!-- 
刷新
-->
<template>
	<view>
		<image :src="gAssets.common_flush" @click="onButtonClick_flush()" style="width: 56rpx; height: 44rpx;"></image>
	</view>
</template>

<script>
	export default {
		components: {},

		props: {
			mode: 0,
		},

		data() {
			return {

			}
		},

		mounted() {
			
		},

		methods: {
			onButtonClick_flush() {
				if (this.gUserData.getToken()) {
					this.gRequest.userManager.flushPlayerPoint(this.onEventCallBack_flushPlayerPoint.bind(this));
				}
			},
			
			onEventCallBack_flushPlayerPoint(data) {
				this.$emit("flushPoint", data);
			}
		
		},
	}
</script>

<style lang="scss">

</style>
