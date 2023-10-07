<!-- 公告弹窗 -->
<template>
	<view class="MaskWindow" @touchmove.stop.prevent="moveHandle" v-if="isShow">
		<view class="out">
			<view class="window" style="width: 90%; margin: auto; position: relative;">
				<view style="height: 40rpx;"></view>
				<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute;width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onClickButton_ClosePop()"></image>
				<view class="titleTest">MUDANÇA DE NOME</view>
				<view style="height: 60rpx;"></view>
				<view class="commonJbBg" style="margin: auto; width: 80%;">
					<input class="inputType" placeholder="Insira um novo nome" placeholder-style="color: #D8D7D5" type="text" v-model="newName" />
				</view>
				<view style="height: 60rpx;"></view>
				<view style="display: flex;">
					<view class="btnHuangSe" style="margin: auto;" @click="onClickButton_ClosePop()">{{$t('KEY_NEW_NO')}}</view>
					<view class="btnLvSe" style="margin: auto;" @click="onClickButton_ModifyName()">{{$t('KEY_NEW_YES')}}</view>
				</view>
				<view style="height: 30rpx;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	

	export default {
		components: {
			
		},
		
		props: {
			
		},

		data() {
			return {
				newName: "",
				isShow: false,
			}
		},

		mounted() {
			
		},

		methods: {
			// 禁止滑动窗口
			moveHandle() {
				return;
			},
			
			showPop() {
				this.newName = "";
				this.isShow = true;
			},
			
			onClickButton_ClosePop() {
				this.isShow = false;
			},
			
			onClickButton_ModifyName() {
				this.gRequest.userManager.updateNickname(this.newName, this.onEventCallback_updateNickname.bind(this));
			},
			
			onEventCallback_updateNickname() {
				this.isShow = false;
				this.$emit("flushName");
			},

		},
	}
</script>

<style lang="scss">
	.inputType {
		width: 92%;
		margin: auto;
		font-size: 20rpx;
		color: #FFFFFF;
		height: 71rpx;
		line-height: 71rpx;
		text-align: left;
	}
</style>
