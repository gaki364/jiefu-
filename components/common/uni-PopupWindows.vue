<!-- 通用弹出窗口 -->
<template>
	<view class="MaskWindow" @touchmove.stop.prevent="moveHandle">
		<view class="out">
			<view class="window">
				<view style="height: 60rpx;"></view>
				<view class="text" :style="{fontSize: fontSize}">{{content}}</view>
				
				<view style="display: flex; justify-content: space-around; position: absolute; bottom: 30rpx; width: 100%;">
					<view class='btn1' btnEvent='btnBtnNo' @click='onButtonClick_NO'>{{$t('KEY_COMMON_No')}}</view>
					<view class='btn2' btnEvent='btnBtnYes' @click='onButtonClick_YES'>{{$t('KEY_COMMON_YES')}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import btn from '@/components/common/uni-btn.vue';
	export default {
		components: {
			btn,
		},

		props: {
			content: {
				type: String,
				default: "",
			},
			
			fontSize: {
				type: String,
				default: '32rpx',
			},
			
			noBtn: {
				type: String,
				default: "",
			},
			
			yesBtn: {
				type: String,
				default: "",
			}
		},

		data() {
			return {
				depositAmount: '', // 输入的内容
				text_Yes: this.$t('KEY_COMMON_YES'),
				text_No: this.$t('KEY_COMMON_No'),
			}
		},

		methods: {
			moveHandle() {
				return;
			},

			onButtonClick_NO() {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				this.$emit(this.noBtn);
			},

			onButtonClick_YES() {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				this.$emit(this.yesBtn);
			},

		}
	}
</script>

<style lang="scss">
	.MaskWindow {
		background: rgba(0, 0, 0, 0.0);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 110;
		width: 100%;
		height: 100%;
		.out {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.8);
			display: flex;
			flex-direction: column;
			justify-content: center;
			.window {
				// background: url('@/static/login/window_bg.png') no-repeat;
				// background-size: 612rpx 524rpx;
				background-color: #FFFFFF;
				border-radius: 12rpx;
				border-radius: 10rpx;
				// border: 2rpx solid $ComBorder-color1;
				width: 612rpx;
				height: 473rpx;
				position: relative;
				// top: 30%;
				margin: auto;
				
				.text {
					text-align: center;
					font-weight: 600;
					padding-top: 120rpx;
				}
				
				.btn1 {
					width: 40%;
					height: 80rpx;
					margin: auto;
					background-color: #FFFFFF;
					line-height: 80rpx;
					text-align: center;
					color: #000000;
					border-radius: 50rpx;
					border: 5rpx solid #C9CECD;
				}

				.btn2 {
					width: 40%;
					height: 80rpx;
					margin: auto;
					background-color: #4C6EF3;
					line-height: 80rpx;
					text-align: center;
					color: #FFFFFF;
					border-radius: 50rpx;
				}

			}
		}
	}
</style>
