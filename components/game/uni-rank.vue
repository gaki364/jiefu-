
<template>
	<view style="width: 94%; margin: auto;">
		<view style="height: 20rpx;"></view>
		<view class="jbImg"></view>
		<view style="height: 20rpx;"></view>
		<view style="width: 100%; background-color: #313783; border-radius: 12rpx;">
			
			<view style="height: 10rpx;"></view>
			<view style="display: flex; margin: auto;">
				<view @click="onButtonClick_chose(0)" :class="curType==0?'choseBtn':'noChoseBtn'" style="margin-right: 0rpx;">Último registro</view>
				<view @click="onButtonClick_chose(1)" :class="curType==1?'choseBtn':'noChoseBtn'" style="margin-left: 0rpx;">O maior</view>
			</view>
			
			<view style="width: 96%; margin: auto; background-color: #132442; border: 2rpx solid #132442; border-radius: 12rpx;">
				<view style="height: 30rpx;"></view>
				<view style="width: 100%; display: flex;">
					<view style="width: 33%; margin: auto; text-align: center; font-size: 22rpx; color: #D946DF;"v-if="curType == 0">Jogo</view>
					<view style="width: 33%; margin: auto; text-align: center; font-size: 22rpx; color: #D946DF;"v-if="curType == 1">Classificação</view>
					<view style="width: 33%; margin: auto; text-align: center; font-size: 22rpx; color: #D946DF;">Jogador</view>
					<view style="width: 33%; margin: auto; text-align: center; font-size: 22rpx; color: #D946DF;" v-if="curType == 0">Quantia</view>
					<view style="width: 33%; margin: auto; text-align: center; font-size: 22rpx; color: #D946DF;" v-if="curType == 1">Lucro</view>
				</view>
				<view style="height: 20rpx;"></view>
				<vueSeamless  v-if="curType == 0" :class-option="classOption" ref="seamlessScroll" :data="list" style="overflow: hidden; max-height: 780rpx;">
					<view style="width: 100%;">
						<view v-for="item in list">
							<view class="hengzhe" style="margin: auto; font-size: 22rpx; color: #FFFFFF;">
								<view v-if="curType == 1 && item.Sort > 3" style="width: 33%; margin: auto; text-align: center; font-size: 30rpx;">{{item.Sort}}</view>
								<view style="width: 33%; margin: auto; text-align: center;" v-if="curType == 1 && item.Sort <= 3">
									<image  :src="gAssets.rankImg[(item.Sort - 1)]" style="margin: auto; width: 42rpx;" mode="widthFix"></image>
								</view>
								
								<view style="width: 33%; margin: auto; text-align: center; display: flex;" v-if="curType == 0">
									<image :src="gAssets.gameTypeImg[item.Type]" style="margin: auto; width: 62rpx; margin-left: 10rpx; margin-right: 0rpx;" mode="widthFix"></image>
									<view style="color: #FFFFFF; font-size: 20rpx; margin: auto; margin-left: 6rpx; width: 70%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: left;">{{item.Name}}</view>
								</view>
								
								<view style="width: 33%; margin: auto; white-space:normal; text-align: center; text-overflow: ellipsis;">{{item.PlayerName}}</view>
								<view style="width: 33%; margin: auto; text-align: center; color: #9EDD09;">{{item.WinAmount}}</view>
							</view>
							<view style="height: 30rpx;"></view>
						</view>
					</view>
				</vueSeamless>
				<view style="font-size: 20rpx; padding-top: 10rpx;" v-if="curType == 1">
					<block v-for="(item, index) in list" v-bind:key="index">
						<view class="hengzhe" style="margin: auto; margin-top: 10rpx; font-size: 22rpx; color: #FFFFFF;">
							
							<view v-if="curType == 1 && item.Sort > 3" style="width: 33%; margin: auto; text-align: center; font-size: 30rpx;">{{item.Sort}}</view>
							<view style="width: 33%; margin: auto; text-align: center;" v-if="curType == 1 && item.Sort <= 3">
								<image  :src="gAssets.rankImg[(item.Sort - 1)]" style="margin: auto; width: 42rpx;" mode="widthFix"></image>
							</view>
							
							
							<view style="width: 33%; margin: auto; text-align: center; display: flex;" v-if="curType == 0">
								<image  :src="gAssets.gameTypeImg[item.Type]" style="margin: auto; width: 62rpx; margin-left: 10rpx; margin-right: 0rpx;" mode="widthFix"></image>
								<view style="color: #FFFFFF; font-size: 20rpx; margin: auto; margin-left: 6rpx; width: 70%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: left;">{{item.Name}}</view>
							</view>
							
							<view style="width: 33%; margin: auto; white-space:normal; text-align: center; text-overflow: ellipsis;">{{item.PlayerName}}</view>
							<view style="width: 33%; margin: auto; text-align: center; color: #9EDD09;">{{item.WinAmount}}</view>
						</view>
						<view style="height: 30rpx;"></view>
					</block>
				</view>
				<view style="height: 10rpx;"></view>
			</view>
			<view style="height: 10rpx;"></view>
		</view>
	</view>
</template>

<script>
	
	import vueSeamless from '@/components/vue-seamless-scroll';
	export default {
		components: {
			vueSeamless,
		},
		
		props: {
			
		},

		data() {
			return {
				curType: 0,
				list:[],
				classOption: {
					step: 1,
					hoverStop: false,
					openTouch: false,
				},
			}
		},

		mounted() {
			this.flssh();
		},

		methods: {
			
			flssh() {
				
				if (this.curType == 0) {
					this.gRequest.gameManager.gameTurnoverWin(this.onButtonClick_getData.bind(this));
				} else {
					this.gRequest.gameManager.gamePlayerWin(this.onButtonClick_getData.bind(this));
				}
			},
			
			onButtonClick_getData(data) {
				this.list = data;
				setTimeout(() => {
					if (this.$refs && this.$refs.seamlessScroll) {
						this.$refs.seamlessScroll.reset();
					}
				}, 2000);
			},
			
			onButtonClick_chose(idx) {
				this.curType = idx;
				this.list = [];
				this.flssh();
			},
			
		},
	}
</script>

<style lang="scss">
	.jbImg {
		background: url('@/static/new/icon008.png') no-repeat;
		background-size: 100% 100%;
		
		width: 297rpx;
		height: 43rpx;
		margin: auto;
	}
	
	.choseBtn {
		background: url('@/static/new/btn003.png') no-repeat;
		background-size: 100% 100%;
		
		width: 318rpx;
		height: 74rpx;
		line-height: 74rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: center;
		margin: auto;
		
	}
	
	.noChoseBtn {
		background: url('@/static/new/btn003aa.png') no-repeat;
		background-size: 100% 100%;
		
		width: 318rpx;
		height: 74rpx;
		line-height: 74rpx;
		font-size: 30rpx;
		color: #0A351A;
		text-align: center;
		margin: auto;
		font-weight: 600;
	}
</style>
