<!-- app端 状态栏 -->
<template>
	<view :style="{ height: statusBarHeight }" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
	export default {
		name: 'UniStatusBar',
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		},

		beforeCreate() {
			// #ifdef APP-PLUS
			// this.gAndroidUtils.logOuti('状态栏高度:' + statusBarHeight);
			// this.gAndroidUtils.logOuti('安全区高度:' + uni.getSystemInfoSync().safeArea.height);
			// this.gAndroidUtils.logOuti('屏幕总高度:' + uni.getSystemInfoSync().screenHeight);
			if (this.gHelper.isIOS()) {
				// 如果是ios 直接设置为0 不考虑刘海的情况
				/*if (plus.navigator.hasNotchInScreen()) {
					this.gAndroidUtils.logOuti('has notch screen');
				} else {
					this.gAndroidUtils.logOuti('no notch screen');
					statusBarHeight = '0px';
				}*/
				statusBarHeight = '0px';
			}
			// #endif
		},

	}
</script>

<style lang="scss" scoped>
	.uni-status-bar {
		width: 750rpx;
		// height: 20px;
		// height: var(--status-bar-height);
	}
</style>
