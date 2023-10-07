<template>
	<view class="box">
		<view style="margin: auto; width: 100%; text-align: center;">
			<image style="width: 200rpx;" mode="widthFix" :src="gAssets.common_noData"></image>
			<view style="font-size: 30rpx; text-align: center; color: #46A7FF;">{{$t('KEY_COMMON_NODATA')}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isShowBig: {
				type: Boolean,
				default: true,
			}
		},
	}
</script>

<style lang="scss">
	.box {
		width: 100%;
		height: 100%;
		margin-top: 20rpx;
	}
</style>
