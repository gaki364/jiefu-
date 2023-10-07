<template>
	<view>
		
		<view style=" border-radius: 12rpx; width: 100%; margin: auto;" >
			<view style="height: 6rpx;"></view>
			<view class="commonBtnBg2" style="width: 98%; margin: auto; display: flex;">
				
				<view style="font-size: 30rpx; margin: auto;">{{'Dados deste mês'}}</view>
			</view>
			
			<view class="commonBtnBg3" >
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 0rpx auto 20rpx;">Receita total deste mês</view>
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 6rpx auto auto;">{{gHelper.formatMoney(serverData.ThisMonthIncome) + "R$"}}</view>
					<view @click="onButtonClick_DadosO(0)"  class="commonBtnBg" style="width: 20%; height: 40rpx; line-height: 40rpx; font-size: 20rpx; border-radius: 10rpx; margin-right: 20rpx; margin-left: 0rpx;">{{"Dados"}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			
			<view class="commonBtnBg3">
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 0rpx auto 20rpx;">Número de membros este mês</view>
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 16rpx auto auto;">{{serverData.ThisMonthMember}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			
			<view class="commonBtnBg3" >
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 0rpx auto 20rpx;">Recarga</view>
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 16rpx auto auto;">{{gHelper.formatMoney(serverData.ThisMonthDeposit) + "R$"}}</view>
		
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			<view class="commonBtnBg3" >
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 0rpx auto 20rpx;">Retirada</view>
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 16rpx auto auto;">{{gHelper.formatMoney(serverData.ThisMonthWithdraw) + "R$"}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			<view style="height: 20rpx;"></view>
		</view>
		<view style="height: 20rpx;"></view>
		<view style="border-radius: 12rpx; width: 100%; margin: auto;">
			<view style="height: 6rpx;"></view>
			<view class="commonBtnBg2" style="width: 98%; margin: auto; display: flex;">
				
				<view style="font-size: 30rpx; margin: auto;">{{'Dados do último mês'}}</view>
			</view>
			<view style="height: 10rpx;"></view>
			<view class="commonBtnBg3" style="margin: auto;">
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 0rpx auto 20rpx;">Receita total deste mês</view>
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 6rpx auto auto;">{{gHelper.formatMoney(serverData.LastMonthIncome) + "R$"}}</view>
					<view @click="onButtonClick_DadosO(-1)"  class="commonBtnBg" style="width: 20%; height: 40rpx; line-height: 40rpx; font-size: 20rpx; border-radius: 10rpx; margin-right: 20rpx; margin-left: 0rpx;">{{"Dados"}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			<view style="height: 10rpx;"></view>
			<view class="commonBtnBg3" style="margin: auto;">
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 0rpx auto 20rpx;">Número de membros este mês</view>
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 16rpx auto auto;">{{serverData.LastMonthMember}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			<view style="height: 10rpx;"></view>
			<view class="commonBtnBg3" style="margin: auto;">
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 0rpx auto 20rpx;">Recarga</view>
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 16rpx auto auto;">{{gHelper.formatMoney(serverData.LastMonthDeposit) + "R$"}}</view>
		
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			<view style="height: 10rpx;"></view>
			<view class="commonBtnBg3" style="margin: auto;">
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 0rpx auto 20rpx;">Retirada</view>
					<view style="font-size: 20rpx; color: #FFFFFF; text-align: center; margin: auto 16rpx auto auto;">{{gHelper.formatMoney(serverData.LastMonthWithdraw) + "R$"}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			<view style="height: 20rpx;"></view>
		</view>
	</view>
</template>

<script>
	import uniplayertitle from '@/components/game/uni-playertitle.vue';

	export default {
		components: {
			uniplayertitle,
		},

		data() {
			return {
				copy1Text: "",
				copy2Text: "",
				inputAmount: "",
				showPop: false,
				
				serverData: {},
				tips: "Os usuários que se registrarem por meio do seu código promocional ou link promocional se tornarão seus usuários proxy, e a diferença entre a recarga e a retirada dos usuários proxy será enviada a você como um bônus todos os meses. (O agente desenvolvido pelo seu usuário agente também se tornará seu agente, podendo ter até 3 níveis de agentes)",
				
			}
		},

		onLoad(option) {
			uni.hideTabBar();
		},
		
		
		mounted() {
			this.flush();
		},

		// 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
		onShow() {
			if (this.$refs && this.$refs.myTabbar) {
				this.$refs.myTabbar.flushTabarText();
			}
			this.flush();
			this.$store.commit('changeTabBar', {
				index: 1
			});
		},

		onReady() {
			// this.flush();
			if (this.$refs && this.$refs.myTabbar) {
				this.$refs.myTabbar.flushTabarText();
			}
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
				if (this.$refs && this.$refs.uniplayertitle) {
					this.$refs.uniplayertitle.flush();
				}
				this.gRequest.teamManager.bloggerHome(this.onEventCallback_promoteHome.bind(this));
			},
			
			flushTarbar() {
				if (this.$refs && this.$refs.myTabbar) {
					this.$refs.myTabbar.flushTabarText();
				}
			},

			onEventCallback_promoteHome(data) {
				if (data) {
					this.copy1Text = data.ReferralCode;
					this.copy2Text = data.ReferralLink;
					this.serverData = data;
				}
			},
			
			onButtonClick_DadosO(idx) {
				uni.navigateTo({
					url:'DadosO?type=' + idx,
				})
			},
			
			// Seque
			onButtonClick_Seque() {
				uni.navigateTo({
					url: "TeamWithdraw",
				});
			},
			
			// Seque
			onButtonClick_TeamSqueRe() {
				uni.navigateTo({
					url: "teamSqueRecord",
				});
			},
			
			// Seque
			onButtonClick_BountRc() {
				uni.navigateTo({
					url: "bonusRecord",
				});
			},
			
			// Transferir
			onButtonClick_Transferir() {
				this.gRequest.teamManager.promoteConversion(this.inputAmount, this.onEventCallback_Transferir.bind(this));
			},
			
			onEventCallback_Transferir() {
				this.flush();
				this.showPop = false;
				this.inputamount = "";
				this.gHelper.toast("Transferir sucesso");
			},
			
			onButtonClick_OpenPopWindow() {
				this.showPop = true;
			},
			
			onButtonClick_ClosePopWindow() {
				this.showPop = false;
			},

		},
	}
</script>

<style lang="scss">
	page {
		background: #0B0C10;
		color: #FFFFFF;
		font-size: 30rpx;
	}
	
	.tbg {
		background: url('@/static/new/bg012-1.png') no-repeat;
		background-size: 100% 100%;
		width: 215rpx;
		height: 211rpx;
		margin: auto;
		margin-left: 0rpx;
		position: relative;
	}
	
	.commonBtnBg2 {
		background: #ffb000;
		width: 670rpx;
		height: 68rpx;
		color: #FFFFFF;
		margin: auto;
		border-radius: 6rpx;
	}
	
	.commonBtnBg3 {
		background:rgba(98, 32, 157, 0.6);
		width: 98%;
		height: 71rpx;
		color: #FFFFFF;
		margin: 20rpx auto;
		border: 2rpx solid #db921a;
		border-radius: 6rpx;
	}
	
</style>
