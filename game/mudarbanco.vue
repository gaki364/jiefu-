<template>
	<view>
		<unititle :titleText="title" titleEvent="registerClick" @registerClick="onClickButton_Back" :titleColor="'transparent'"></unititle>

		<view class="bg cardBg">
			<view style="width: 90%; margin-left: 5%; font-size: 26rpx; padding-top: 30rpx;">{{$t("KEY_MB_IT")}}</view>
			<view class="duoxuan">
				<block v-for="(item, index) in duoxuan" v-bind:key="index">
					<view class="hengzhe" style="justify-content: left; width: 25%; margin-left: 50rpx; margin-top: 20rpx; " @click="onButtonClick_duoxuan(index)">
						<image v-if="isSelect!=index" :src="gAssets.choose1" mode="widthFix" style="width: 51rpx;"></image>
						<image v-else-if="isSelect==index" :src="gAssets.choose2" mode="widthFix" style="width: 51rpx;"></image>
						<view style="font-size: 26rpx; margin: auto; margin-left: 10rpx;">{{item.text}}</view>
					</view>
				</block>
			</view>
			<view style="height: 30rpx;"></view>
		</view>


		<view class="bg cardBg">
			<view style="height: 20rpx;"></view>
			<view class="tips">{{$t("KEY_MB_NC")}}</view>
			<input class="inputType" style="text-indent: 36rpx;" :placeholder="holer1"  placeholder-style="color: #D8D7D5" type="text" v-model="params.completo"></input>
			<view class="tips">{{$t("KEY_MB_CPF")}}</view>
			<input class="inputType" style="text-indent: 36rpx;" :placeholder="holer2" placeholder-style="color: #D8D7D5" type="text" v-model="params.cpf"></input>
			<view v-if="isSelect >= 3">
				<view class="tips">{{$t("bind.new9")}}</view>
				<input class="inputType" style="text-indent: 36rpx;" :placeholder="$t('bind.new10')" placeholder-style="color: #D8D7D5" type="text" v-model="params.pixKey"></input>
			</view>
			<view class="tips">{{$t("KEY_MB_CELULAR")}}</view>
			<view class="inputType" style="display: flex; text-indent: 26rpx;">
				<view style="margin: auto; margin-left: 0rpx; margin-right: 0rpx; font-size: 26rpx; color: #FFFFFF;">+55</view>
				<input style="width: 80%; margin: auto; margin-left: 0rpx; font-size: 26rpx;" maxlength="11" :placeholder="holer3"  placeholder-style="color: #D8D7D5" type="number" v-model="params.celular"></input>
			</view>
			
			<view class="tips">{{$t("KEY_MB_EMAIL")}}</view>
			<input class="inputType" style="text-indent: 36rpx;" :placeholder="holer4"  placeholder-style="color: #D8D7D5" type="text" v-model="params.email"></input>
			<view v-if="curPage != 2">
				<view class="tips">{{$t("bind.test7")}}</view>
				<input class="inputType" style="text-indent: 36rpx;" :placeholder="$t('bind.test8')" placeholder-style="color: #D8D7D5" type="password" v-model="params.password"></input>
				<view class="tips">{{$t("bind.test9")}}</view>
				<input class="inputType" style="text-indent: 36rpx;" :placeholder="$t('bind.test9')" placeholder-style="color: #D8D7D5" type="password" v-model="params.repeatPassword"></input>
			</view>
			

			<view style="height: 30rpx;"></view>
			<view style="width: 90%; margin-left: 5%; color: #FFFFFF; font-size: 24rpx;">{{$t("KEY_MB_TE1")}}</view>
			<view style="height: 50rpx;"></view>
			<view class="commonBtnBg " style="font-size: 30rpx; font-weight: 600; width: 360rpx;" @click="onButtonClick_Enviar()">{{$t("KEY_MB_ENVIAR")}}</view>
			<view style="height: 50rpx;"></view>
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
				title: this.$t('KEY_MB_TITLE'),
				holer1: this.$t("KEY_MB_DUNDUR"),
				holer2: this.$t("KEY_MB_DOCPF"),
				holer3: this.$t("KEY_MB_DOT"),
				holer4: this.$t("KEY_MB_DSEDE"),
				
				params: {
					completo: "",
					cpf: "",
					celular: "",
					email: "",
					password: "",
					repeatPassword: "",
					pixType: "",
					pixKey: "",
				},
				pixType: "EMAIL",

				// 多选框
				duoxuan: [{
					isSelect: 0,
					text: this.$t("KEY_MB_EMAIL"),
					text2: "EMAIL",
				}, {
					isSelect: 0,
					text: this.$t("KEY_MB_PHONE"),
					text2: "PHONE",
				}, {
					isSelect: 0,
					text: this.$t("KEY_MB_CPF"),
					text2: "CPF",
				}, {
					isSelect: 0,
					text: this.$t("KEY_MB_CNPJ"),
					text2: "CNPJ",
				}, {
					isSelect: 0,
					text: this.$t("KEY_MB_EVP"),
					text2: "EVP",
				}, ],
				isSelect: -1,
				
				curPage: 0,
			}
		},

		onLoad(option) {
			if (option && option.type) {
				this.curPage = option.type;
				if (this.curPage == 2) {
					this.title = this.$t('bind.new8');
				} else {
					this.title = this.$t('KEY_MB_TITLE');
				}
			}
		},

		// 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
		onShow() {
			this.isSelect= -1;
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
				if (this.curPage == 3) {
					uni.switchTab({
						url: 'idx1'
					})
				} else if(this.curPage == 4) {
					uni.switchTab({
						url: 'idx2'
					})
				} else {
					this.gHelper.back(this);
				}
			},

			// 多选
			onButtonClick_duoxuan(idx) {
				this.isSelect = idx;
				this.pixType = this.duoxuan[this.isSelect].text2;
			},

			// 提交
			onButtonClick_Enviar() {
				if (this.isSelect == -1) {
					this.gHelper.toast("Selecione o tipo de identidade");
					return
				}
				if (this.curPage == 2) {
					this.gRequest.infomationManager.updateBankInfo(this.params.completo, this.params.email, this.params.celular, this.params.cpf, 1, this.pixType, this.params.pixKey, "",
						"", "", "", this.onClickButton_Back.bind(this));
				} else {
					this.gRequest.infomationManager.saveBank(this.params.completo, this.params.email, this.params.celular, this.params.cpf, 1, this.pixType, this.params.pixKey, "",
						"", "", "", this.params.password, this.params.repeatPassword, this.onClickButton_Back.bind(this));
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
		width: calc(96% - 40rpx);
		margin: auto;
		margin-top: 20rpx;
		border-radius: 10rpx;
		padding: 0 20rpx;
	}

	.tips {
		width: 90%;
		margin-left: 5%;
		margin-top: 10rpx;
		font-size: 26rpx;
	}

	.input-type {
		width: 90%;
		border-radius: 360rpx;
		background: #313783;

		margin: auto;
		margin-top: 20rpx;

		padding-top: 10rpx;
		padding-bottom: 10rpx;

		font-weight: bold;
		text-indent: 20rpx;
		
		font-size: 26rpx;
		color: #FFFFFF;
	}

	.duoxuan {
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: left;

		margin-top: 10rpx;
		color: #FFFFFF;
	}
</style>
