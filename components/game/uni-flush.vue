<!-- 
刷新
-->
<template>
	<view>
		<image :src="gAssets.common_flush" @click="onButtonClick_flush()" class="btn"></image>
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

<style lang="scss" scoped>
.btn{
	width: 72rpx;
	height: 53rpx;
}
</style>
