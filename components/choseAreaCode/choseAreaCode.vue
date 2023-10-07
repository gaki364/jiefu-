<template>
	<view class="MaskWindow" v-if="isShow" @click.stop="onButtonClick_Close">
		<view class="bg">
			<view class="popwindow">
				<view class="international">
					<view v-for="(item, index) in choseList">
						<view style="height: 10rpx;"></view>
						<view style="display: flex;" @click="onClick_ChoseAreaCode(item.code)">
							<view style="margin-right: auto" v-if="gHelper.getBrowserPagesLanguage() == 'en-US'">{{item.en}}</view>
							<view style="margin-right: auto" v-if="gHelper.getBrowserPagesLanguage() == 'es'">{{item.es}}</view>
							<view style="margin-left: 50rpx;">{{item.code}}</view>
						</view>
						<view style="height: 10rpx;"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import conuntrtList from '../../framework/country.js';
	
	export default {
		data() {
			return {
				isShow: false,
				choseList: conuntrtList.list,
			};
		},
		
		mounted () {
			
		},
		
		methods: {
			popShow() {
				this.isShow = true;
			},
			
			popClose() {
				this.isShow = false;
			},
			
			onButtonClick_Close() {
				this.isShow = false;
			},
			
			onClick_ChoseAreaCode(code) {
				this.isShow = false;
				this.$emit("changeCode", code);
			},
		},
	}
</script>

<style lang="scss">
	// 弹出窗口
	.MaskWindow {
		background: rgba(0, 0, 0, 0);
		position: fixed;
		left: 0;
		// top: 0;
		z-index: 110;
		width: 100%;
		height: 100%;
		
		.bg {
			// background: rgba(0, 0, 0, 0.3);
			width: 100%;
			height: 100%;
			position: relative;

			// display: flex;
			// flex-direction: column;
			// justify-content: center;
			
			.popwindow {
				width: 96%;
				height: 396rpx;
				border-radius: 20rpx;
				margin: auto;
				background-color: #EAECEE;
				position: relative;
				border-style: solid;
				border-width: 3rpx;
				border-color: #D5D4D9;
				
				.international {
					width: 96%;
					height: 376rpx;
					margin: auto;
					overflow: scroll;
				}
			}
		}
	}
</style>
