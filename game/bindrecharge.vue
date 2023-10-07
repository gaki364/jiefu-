<template>
	<view>
		<unititle :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back" :titleColor="'transparent'"></unititle>

		<view class="bg cardBg">
			<view style="width: 90%; margin: auto;">
				<view style="padding-top: 20rpx;">{{$t("KEY_RB_NAME")}}</view>
				<input class="inputType" style="text-indent: 50rpx;" :placeholder="input_name" type="text" v-model="params.name"></input>

				<view style="padding-top: 20rpx;">{{$t("KEY_RB_CPF")}}</view>
				<input class="inputType" style="text-indent: 50rpx;" :placeholder="input_cpf" type="text" v-model="params.cpf"></input>

				<view style="padding-top: 20rpx;">{{$t("KEY_RB_MOBILE")}}</view>
				<input class="inputType" style="text-indent: 50rpx;" :placeholder="input_mobile" type="number" v-model="params.mobile"></input>

				<view style="padding-top: 20rpx;">{{$t("KEY_RB_EMAIL")}}</view>
				<input class="inputType" style="text-indent: 50rpx;" :placeholder="input_email" type="text" v-model="params.email"></input>
			</view>


			<view class="commonBtnBg btnn" @click="onButtonClick_Submit()">{{$t("KEY_RB_SUBMIT")}}</view>

			<view style="height: 100rpx;"></view>

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
				title: this.$t('bind.new20'),
				input_name: this.$t('KEY_RB_I1'),
				input_cpf: this.$t('KEY_RB_I2'),
				input_mobile: this.$t('KEY_RB_I3'),
				input_email: this.$t('KEY_RB_I4'),

				params: {
					name: '',
					cpf: '',
					mobile: '',
					email: '',
				},
				
				type: 1,
			}
		},

		onLoad(option) {
			if (option && option.type) {
				this.type = option.type;
				
			}
			if (this.type == 1) {
				this.titleText = this.$t('bind.new7');
			} else {
				this.titleText = this.$t('bind.new20');
			}
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
			},

			onClickButton_Back() {
				this.gHelper.back(this);
			},

			// Submit
			onButtonClick_Submit() {
				if (this.type == 2) {
					this.gRequest.infomationManager.updateRBankInfo(this.params.name, this.params.email, this.params.mobile, this.params.cpf, this.onClickButton_Back.bind(this));
				} else {
					this.gRequest.infomationManager.saveRBank(this.params.name, this.params.email, this.params.mobile, this.params.cpf, this.onClickButton_Back.bind(this));
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

	}

	.bg {
		width: 90%;
		margin: auto;
		margin-top: 10rpx;

		border-radius: 18rpx;

		color: #FFFFFF;
		font-size: 26rpx;
	}

	.input-type {
		// height: 30rpx;
		font-size: 20rpx;
		width: 100%;
		// margin-left: 0rpx;
		margin-top: 10rpx;
		// font-weight: bold;
		background: #313783;
		border-radius: 360rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		font-size: 26rpx;
		height: 50rpx;
	}
	.btnn{
		margin-top: 100rpx; 
		font-size: 28rpx; 
		width: 40%;
		background: url("@/static/jiefu17/sa_btn.png") no-repeat;
		background-size: 100% 100%;
	}
</style>
