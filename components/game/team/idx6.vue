<template>
	<view>
		
		<view style=" border-radius: 12rpx; width: 100%; margin: auto;" >
			<view style="height: 6rpx;"></view>
			<view class="commonBtnBg2" style="width: 98%; margin: auto; display: flex;">
				
				<view style="font-size: 30rpx; margin: auto;">{{'Dados deste mês'}}</view>
			</view>
			
			<view class="commonBtnBg3" >
				
				<view style="display: flex; width: 96%; margin: auto;" class="commonLine">
					<view class="text1">Receita total deste mês</view>
					<view class="text2">{{gHelper.formatMoney(serverData.ThisMonthIncome) + "R$"}}</view>
					<view @click="onButtonClick_DadosO(0)"  class="commonBtnBg">{{"Dados"}}</view>
				</view>
			</view>
			
			
			<view class="commonBtnBg3">
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;" >
					<view class="text1">Número de membros este mês</view>
					<view class="text2">{{serverData.ThisMonthMember}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			
			<view class="commonBtnBg3" >
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view class="text1">Recarga</view>
					<view class="text2">{{gHelper.formatMoney(serverData.ThisMonthDeposit) + "R$"}}</view>
		
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			<view class="commonBtnBg3" >
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view class="text1">Retirada</view>
					<view class="text2">{{gHelper.formatMoney(serverData.ThisMonthWithdraw) + "R$"}}</view>
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
			
			<view class="commonBtnBg3" >
				<view style="display: flex; width: 96%; margin: auto;" class="commonLine">
					<view class="text1">Receita total deste mês</view>
					<view class="text2">{{gHelper.formatMoney(serverData.LastMonthIncome) + "R$"}}</view>
					<view @click="onButtonClick_DadosO(-1)"  class="commonBtnBg">{{"Dados"}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			
			<view class="commonBtnBg3" >
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view class="text1">Número de membros este mês</view>
					<view class="text2">{{serverData.LastMonthMember}}</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			
			<view class="commonBtnBg3" >
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view class="text1">Recarga</view>
					<view class="text2">{{gHelper.formatMoney(serverData.LastMonthDeposit) + "R$"}}</view>
		
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			
			
			<view class="commonBtnBg3" >
				<view style="height: 20rpx;"></view>
				<view style="display: flex; width: 96%; margin: auto;">
					<view class="text1">Retirada</view>
					<view class="text2">{{gHelper.formatMoney(serverData.LastMonthWithdraw) + "R$"}}</view>
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

<style lang="scss" scoped>
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
		background:#01913a;
		width: 670rpx;
		height: 68rpx;
		color: #FFFFFF;
		margin: auto;
		border-radius: 6rpx;
	}
	
	.commonBtnBg3 {
		background:#ffd82b;
		width: 98%;
		height: 71rpx;
		color: #FFFFFF;
		margin: 30rpx auto;
		border-radius: 6rpx;
       
        .commonLine{
			display: flex;
			width: 96%;
			margin: auto;
			height: 100%;
			align-items: center;

			.commonBtnBg{
			width: 161rpx;
			height: 55rpx;
			background: url("@/static/jiefu17/tagBg.png") no-repeat;
			background-size: 100% 100%;
			border-radius: 0px;
			line-height: 55rpx;
		}

		

		}
		.text1{
			margin: auto 0rpx auto 20rpx;
			font-size: 26rpx;
			font-weight: bold ;
		}
		.text2{
			font-size: 32rpx;
			margin: auto 16rpx auto auto;

		}
		
	}
	
</style>
