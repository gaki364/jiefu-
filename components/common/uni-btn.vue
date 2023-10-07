<!-- 
通用按钮
-->
<template>
	<button :class="setBtnType(btnType)" @click="onClickButton">
		<view class="btnText" :style="{'line-height': setBtnTextLineHeight(btnType), 'font-size':fontSize, 'color':btnFontColor}">{{btnText}}</view>
	</button>
</template>

<script>
	export default {
		props: {
			// 按钮文本
			btnText: {
				type: String,
				default: '',
			},

			btnTextLineHeght: {
				type: String,
				default: '100rpx',
			},

			btnEvent: {
				type: String,
				default: 'btnEvent',
			},

			btnType: {
				type: Number,
				default: 0,
			},

			btnFontSize: {
				type: String,
				default: '',
			},
			
			btnFontColor: {
				type: String,
				default: '#FFFFFF',
			},
		},

		data() {
			return {
				// 按钮样式 默认0普通的，1弹窗左边，2弹窗右边
				BtnTypeClass: ['btn', 'popupBtnLeft', 'popupBtnRight'],
				// 默认字体大小
				fontSize: '40rpx',
			}
		},

		created() {
			if (this.btnFontSize.length > 0) {
				this.fontSize = this.btnFontSize;
			}
		},

		methods: {
			onClickButton() {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				this.$emit(this.btnEvent);
			},

			// 设置按钮样式
			setBtnType(type) {
				return this.BtnTypeClass[type];
			},

			// 设置按钮文本行搞
			setBtnTextLineHeight(type) {
				if (type != 0) {
					return '80rpx'
				} else {
					return this.btnTextLineHeght;
				}
			}

		},
	}
</script>

<style lang="scss">
	.btn {
		background: $ComBtn-color-blue;
		width: 480rpx;
		height: 80rpx;
		border-radius: 10rpx 10rpx 10rpx 10rpx; // 圆角

		.btnText {
			color: $color-white;
			height: 80rpx;
			line-height: 80rpx;
			// font-size: $font-lg;
			text-align: center;
		}
	}


	.popupBtnLeft {
		background: $ComBtn-color-orange;
		width: 298rpx;
		height: 80rpx;
		border-radius: 8rpx; // 圆角

		.btnText {
			color: $color-white;
			height: 80rpx;
			// font-size: $font-lg;
			text-align: center;
		}
	}

	.popupBtnRight {
		background: $ComBtn-color-blue;
		width: 298rpx;
		height: 80rpx;
		border-radius: 6rpx; // 圆角

		.btnText {
			color: $color-white;
			height: 80rpx;
			// font-size: $font-lg;
			text-align: center;
		}
	}
</style>
