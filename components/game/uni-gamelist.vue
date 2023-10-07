<!-- 
游戏列表
-->
<template>
	<view class="gamelistView" style="color: #FFFFFF;">
		
		<view style="margin-top: -20rpx; border-radius: 12rpx;">
			<view style="height: 20rpx;"></view>
			<view :class="[isHistory ? 'specialList' : '' , 'gamelist']">
				<block v-for="(item, index) in gameList" v-bind:key="index">
					<view style="width: 92%; position: relative; margin: auto; margin-top: 10rpx;" @click="onButtonClick_Game(item.GameId, item.Name, item.IsMaintain)">
						<image :src="item.Logo" mode="widthFix" style="width: 100%; border-radius: 12rpx;height:fit-content"></image>
						<image v-if="item.IsCollect != null && !isHistory" :src="item.IsCollect == 1 ? gAssets.gameC2: gAssets.gameC1" mode="widthFix" style="width: 50rpx; position: absolute; top: 20rpx; right: 10rpx;" @tap.stop="onButtonClick_collect(item.GameId, item.IsCollect)"></image>
						<view class="gameNew" v-if="item.IsNew"></view>
						<view class="gameHot" v-if="item.IsHot"></view>
						<view class="gameStatusBg" v-if="item.IsMaintain==1">
							<view style="height: 16%;"></view>
							<image :src="gAssets.common_time" mode="widthFix" style="width: 42rpx;"></image>
							<view style="height: 10rpx;"></view>
							<view style="font-size: 20rpx; text-align: center; color: #FFFFFF; width: 98%; margin: auto; white-space: pre-wrap;">{{item.MaintainTime}}</view>
						</view>
					</view>
				</block>
				<image v-if="type != 5 && type != 0" :src="gAssets.moreBtn" mode="widthFix" style="width: 92%; margin: auto; margin-top: 10rpx;" @click="onButtonClick_MORE(type)"></image>
			</view>
			<view style="height: 10rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},

		props: {
			// 标题
			titleText: {
				type: String,
				default: '',
			},
			
			// MORE按钮事件名字
			type: {
				type: Number,
				default: 0,
			},
			
			// 游戏列表
			gameList: {},
			
			showPop: false,
			isHistory:{
				type:Boolean,
				default:false
			}
		},

		data() {
			return {
				gameName: "",
			}
		},

		mounted() {

		},

		methods: {
			// 点击MORE
			onButtonClick_MORE(type) {
				let mType = null
				if (type == 3) {
					mType = 8;
				} else if (type == 4) {
					mType = 7;
				} else if (type == 2) {
					mType = 4;
				} else if (type == 1) {
					mType = 1;
				} else if (type == 0) {
					mType = 0;
				}
				if (mType != null) {
					uni.navigateTo({
						url: 'MoreGame?type=' + mType,
					});
				}
				
			},

			// 点击开始游戏
			onButtonClick_Game(gameId, name, IsMaintain) {
				if (IsMaintain == 0) {
					if (gameId == 100001 || gameId == 100002) {
						this.gHelper.toast(this.$t('bind.new25'));
					} else {
						this.gameName = name;
						if (this.gRequest.userManager.userInfoData && Number(this.gRequest.userManager.userInfoData.TotalAssets) < 1 && this.gRequest.userManager.userInfoData.GameLimit == 1) {
							this.$emit("eventShowPop");
						} else {
							this.gRequest.gameManager.gameEnter(gameId, this.onEventCalback_enterGame.bind(this));
						}
					}
				}
			},
			
			onEventCalback_enterGame(data) {
				this.gHelper.gWebViewParm['uu'] = data;
				uni.navigateTo({
					url: 'gameWeb?title=' + this.gameName,
				});
			},
			
			onButtonClick_collect(gameId, IsCollect) {
				let co = IsCollect == 1 ? 0 : 1;
				this.gRequest.gameManager.gameCollect(co, gameId, this.onEventCallback_collect.bind(this));
			},
			
			onEventCallback_collect(data) {
				this.$emit("eventMore");
			},
			

		},
	}
</script>

<style lang="scss">
	.gamelist {
		width: 100%;
		overflow: hidden;
		display: grid; 
		grid-template-columns: auto auto auto; 
		grid-row-gap: 10rpx;
		margin: auto;
		margin-top: 0rpx;
	}

	.specialList{
		grid-template-columns: auto auto auto auto auto auto; 
	}
	
	.gameStatusBg {
		background: rgba($color: #000000, $alpha: 0.6);
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 12rpx;
		top: 0rpx;
		text-align: center;
	}
	
	.tbg {
		// background: url('@/static/new/bg01.png') no-repeat;
		background-size: 100% 100%;
		width: 697rpx;
		height: 60rpx;
		margin: auto;
		position: relative;
		display: flex;
		// margin-left: 0rpx;
	}
	
	.tbg2 {
		
		background-size: 100% 100%;
		width: 697rpx;
		height: 60rpx;
		margin: auto;
		position: relative;
		display: flex;
		// margin-left: 0rpx;
	}
	

</style>
