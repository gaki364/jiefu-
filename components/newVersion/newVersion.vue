<!-- 检测新版本提示 -->
<template>
	<view class="MaskWindow" @touchmove.stop.prevent="moveHandle">
		<view class='newVersion'>
			<view style="width: 100%;height: 100%;">
				<image mode="widthFix" :src="gAssets.NewVersion_Icon" style="width: 551rpx; height: 0rpx; position: relative; top: -30rpx; left: 10rpx;"></image>
				<view style="height: 60rpx;"></view>
				<view class="text">{{$t('KEY_NEWVERSION')}}</view>
				<view class="button">
					<view class="btnNo" @click="onClickButtonNO">{{$t('KEY_NEW_NO')}}</view>
					<view class="btnYes" @click="onClickButtonYES">{{$t('KEY_NEW_YES')}}</view>
				</view>
				<view style="height: 60rpx;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},

		data() {
			return {}
		},

		beforeDestroy() {},

		methods: {
			// 禁止滑动窗口
			moveHandle() {
				return;
			},

			// 刷新显示
			flush() {

			},

			onClickButtonNO() {
				this.$emit('noUpdate');
			},

			onClickButtonYES() {
				this.$emit('yesUpdate');
			},
		},
	}
</script>

<style lang="scss">
	// 弹出窗口
	.MaskWindow {
		background: rgba(0, 0, 0, 0.3);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 120;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;

		.newVersion {
			width: 90%;
			background: rgba($color: #111113, $alpha: 1);
			border-radius: 12rpx;
			border: 2rpx solid #6D6D6E;
			position: relative;
			margin: auto;

			.text {
				color: #FFFFFF;
				font-size: 30rpx;
				width: 90%;
				margin: auto;
			}

			.button {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				margin-top: 60upx;

				.btnNo {
					background: linear-gradient(to right, #7FD4C1, #5BA491); 
					margin: 40rpx auto auto auto; 
					text-align: center; 
					font-size: 20rpx; 
					color: #FFFFFF; 
					width: 40%; 
					height: 50rpx; 
					line-height: 50rpx;
				}

				.btnYes {
					background: linear-gradient(to right, #D9B981, #AA855E);
					margin: 40rpx auto auto auto; 
					text-align: center; 
					font-size: 20rpx; 
					color: #FFFFFF; 
					width: 40%; 
					height: 50rpx; 
					line-height: 50rpx;
				}
			}
		}
	}
</style>
