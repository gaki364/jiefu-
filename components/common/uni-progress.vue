<!-- 通用组件 进度条 -->

<template>
	<view class="uni-progress-box">
		<!-- 进度条底层 -->
		<view class="progress-bottom">
			<!-- 进度条实际 -->
			<view class="progress" :style="{width:percentage+'%', background:percentBackground}"></view>
		</view>
		<!-- 实际进度条占比 -->
		<view class="percentage"></view>
	</view>
</template>

<script>
	export default {
		props: {
			// 进度条占比
			percentage: {
				type: Number,
				default: null
			},

			// 进度条占比的颜色设置
			percentBackground: {
				type: String,
				default: null
			}
		},

		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.uni-progress-box {
		// background: red;

		// 进度条底层样式
		.progress-bottom {
			height: 100%;
			width: 100%;
			background: #BEBEBE;
			border-radius: 50upx;

			// 进度条占比样式
			.progress {
				height: 100%;
				width: 100%;
				border-radius: 50upx;
			}
		}

		// 已占比的进度条样式
		.percentage {
			margin: 0 4%;
		}
	}
</style>
