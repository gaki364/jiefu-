<template>
	<view>
		<unititle :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back" :titleColor="'transparent'"></unititle>


		<view class="bg cardBg">
			<view class="hengzhe" style="padding-top: 20rpx; justify-content:space-around; text-align: center; color: #FFFFFF;">
				<view style="width: 33%;">{{$t("list.test5")}}</view>
				<view style="width: 33%;">{{$t("list.test6")}}</view>
				<view style="width: 33%;">{{$t("list.test7")}}</view>
			</view>

			<view style="font-size: 20rpx; padding-top: 10rpx;">
				<block v-for="(item, index) in list" v-bind:key="index">
					<view class="hengzhe" style="margin: auto; margin-top: 10rpx; justify-content:space-around; background: #000000; border-radius: 10rpx; width: 90%; padding-top: 10rpx; padding-bottom: 10rpx;">
						<view style="width: 33%; margin: auto; margin-left: 10rpx;">{{item.Date}}</view>
						<view style="width: 33%; white-space:normal; text-align: center; text-overflow: ellipsis; margin: auto; color: #F2F65D;">{{gHelper.formatMoney(item.Amount)}}</view>
						<view style="width: 33%; text-align: center; color: #FFFFFF; display: flex; margin: auto;" v-if="item.Status == 0">
							<view style="margin: auto 10rpx auto auto;">
								<image :src="gAssets.statusImg3" style="width: 28rpx; height: 35rpx;"></image>
							</view>
							<view style="margin: auto auto auto 0rpx; font-size: 20rpx; width: 70%;">
								{{$t('list.test8')}}
							</view>
						</view>
						<view style="width: 33%; text-align: center; color: #FFFFFF; display: flex; margin: auto;" v-if="item.Status == 1">
							<view style="margin: auto 10rpx auto auto;">
								<image :src="gAssets.statusImg1" style="width: 39rpx; height: 29rpx;"></image>
							</view>
							<view style="margin: auto auto auto 0rpx; font-size: 20rpx; width: 70%;">
								{{$t('list.test9')}}
							</view>
						</view>
						<view style="width: 33%; text-align: center; color: #FFFFFF; display: flex; margin: auto;" v-if="item.Status == 2">
							<view style="margin: auto 10rpx auto auto;">
								<image :src="gAssets.statusImg2" style="width: 28rpx; height: 31rpx;"></image>
							</view>
							<view style="margin: auto auto auto 0rpx; font-size: 20rpx; width: 70%;">
								{{$t('list.test10')}}
							</view>
						</view>
					</view>
				</block>
			</view>

			<view style="height: 20rpx;"></view>
		</view>
		<comBottom></comBottom>
	</view>
</template>

<script>
	import unititle from '@/components/common/uni-title.vue'
	export default {
		components: {
			unititle
		},

		data() {
			return {
				title: this.$t('list.test4'),

				lvSelect: 1,

				Count: 0,
				list: [],


			}
		},

		onLoad(option) {

		},

		// 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
		onShow() {

		},

		onReady() {
			this.flush();
		},

		//监听下拉刷新
		onPullDownRefresh() {
			this.flush();
		},

		onHide() {},

		onUnload() {
			uni.stopPullDownRefresh();
		},

		methods: {
			flush() {
				uni.stopPullDownRefresh();
				this.gRequest.infomationManager.rechargeRecords(this.onEventCallback_rechargeRecords.bind(this));
			},

			onClickButton_Back() {
				this.gHelper.back(this);
			},

			onButtonClick_Select(index) {
				this.lvSelect = index;
				this.list = [];
				this.curPage = 1;
				this.flush();
			},

			onEventCallback_rechargeRecords(data) {
				if (data && data.Records && data.Records.length > 0) {
					this.list = data.Records;
					for (let i = 0; i < this.list.length; i++) {
						this.list[i].Date = this.gHelper.getTime(this.list[i].Date);
					}
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background: url("@/static/jiefu17/page.png") no-repeat;
		background-size: 100% 100%;
		color: #FFFFFF;
		font-size: 30rpx;
	}

	.bg {
		width: 95%;
		margin: auto;
		margin-top: 20rpx;
		border-radius: 10rpx;
		font-size: 24rpx;
	}
</style>
