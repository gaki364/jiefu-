<!-- 
顶端标题 Title
-->
<template>
	<view class="outView">
		<view class="title" :class="{'title-fixed':isFixed}" ref="title" id="title" :style="{background: this.titleColor}">
			<view style="height: 20rpx;"></view>
			<uniStatusBar v-if="statusBar" />

			<text v-if="flag" class="titleReturn" @click="onClickButton_Back">{{titleReturn}}</text>
			<view class="titleText">{{titleText}}</view>
		</view>

		<!-- 如果是固定头部 那么计算头部占用的高度 预留高度 -->
		<view v-if="isFixed" :style="{
			width:'100%', 
			height:fixedHeight,}">
			<!-- <uni-status-bar v-if="statusBar" /> -->
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "./uni-status-bar.vue";
	export default {
		components: {
			uniStatusBar,
		},

		props: {
			// 标题
			titleText: {
				type: String,
				default: '',
			},

			titleReturn: {
				type: String,
				default: '',
			},

			titleEvent: {
				type: String,
				default: 'titleClick',
			},

			titleColor: {
				type: String,
				default: '#313783',
			},

			flag: {
				type: Boolean,
				default: true,
			},

			// 固定在顶部
			isFixed: {
				type: Boolean,
				default: true,
			},

			// APP端 状态栏预留 否则会顶到最上面
			statusBar: {
				type: [Boolean, String],
				default: true
			},
		},

		data() {
			return {
				fixedHeight: '0px',
			}
		},

		mounted() {
			setTimeout(() => {
				let statusBarHeight = 0;
				if (this.statusBar) {
					statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
				}

				const query = uni.createSelectorQuery().in(this);
				query.select('#title').boundingClientRect(data => {
					// this.fixedHeight = (data.height + statusBarHeight) + 'px';
					this.fixedHeight = (data.height) + 'px';
					this.gAndroidUtils.logOuti("Hight：" + this.fixedHeight + "  " + statusBarHeight);
				}).exec();
			}, 200);
		},

		methods: {
			// 点击返回
			onClickButton_Back() {
				this.gHelper.playSound(this.gAssets.BtnClickSound);
				this.$emit(this.titleEvent);
			}
		},
	}
</script>

<style lang="scss">
	.outView {
		.title-fixed {
			position: fixed;
			z-index: 100;
			top: 0;
			left: 0;
			// bottom: 0;
			padding-top: env(safe-area-inset-top);
			padding-top: var(--status-bar-height);
			// height: 1000upx;
			margin-bottom: 300upx;
		}

		.title {
			// background: $ComBorder-color1;
			// height: 100upx;
			width: 100%;
			line-height: 80upx;
			color: #D1A95C;

			.titleReturn {
				// float: left;
				position: absolute;
				text-align: left;
				vertical-align: middle;
				
				width: 31rpx;
				height: 53rpx;
				// color: rgba(80, 80, 80, 1);
				background: url('@/static/new/btn0012.png') no-repeat;
				background-size: 100% 100%;
				// border-radius: 30rpx;
				left: 6%;
				top: 34%;
			}

			.titleText {
				width: 100%;
				padding-top: 10rpx;
				font-size: 35rpx;
				line-height: 90rpx;
				text-align: center;
				margin: auto;
			}
		}

	}
</style>
