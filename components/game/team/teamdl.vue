<template>
	<view>
		<view class="dlBg" style="position:relative;text-align:center">
			<view style="height: 10rpx;"></view>
			<!-- <view class="dlImg" style="margin: auto;"></view>
			<view style="height: 10rpx;"></view>
			<view style="font-size: 30rpx; width: #FFFFFF; margin: auto; text-align: center;">{{$t('KEY_NEW_NDA') + " "}}<span style="font-size: 40rpx; color: #FBC040;">{{serverData.AgentLevel}}</span></view> -->
			<image :src="gAssets.idx2_ban" mode="widthFix"  class="ban"></image>
			<view style="height: 150rpx;"></view>
			<!-- <view style="font-size: 30rpx; text-align: center; color: #5938D0;">{{$t("KEY_NEW_TD_ANPA")}}</view> -->
			<image :src="gAssets.idx2_text" mode="widthFix"  class="text"></image>
			<!-- 进度条 -->
			<view class="strip" style="width: 80%;">
				<view class="blue" :style="'width:'+ ((Number(serverData.CurrentTurnover) / Number(serverData.NextTurnover)) > 1 ? 100 : (Number(serverData.CurrentTurnover) / Number(serverData.NextTurnover) * 100))+'%'"></view>
				<view style="width: 100%; text-align: center; color: #5C3CB9; font-size: 20rpx; top: 0rpx; position: absolute;">{{Math.floor(Number(serverData.CurrentTurnover) / Number(serverData.NextTurnover) * 10000) / 100 + "%"}}</view>
			</view>
			
		</view>
		
		<view style="height: 20rpx;"></view>
		<view style="width: 100%; margin: auto; border-radius: 12rpx; color: #FFFFFF;" class="cardBg">
			<view style="height: 20rpx;"></view>
			
			<view style="width: 96%; margin: auto;">
				
				<view class="hengzhe" style="">
					<!-- <image :src="gAssets.idx1kefu" mode="widthFix" style="width: 73rpx; margin: auto; margin-left: 20rpx;" @click="onButtonClick_kf()"></image> -->
					<view style="width: 96%; margin: auto; font-size: 20rpx; color: #FFFFFF; margin-left: 10rpx;">{{tips1}}</view>
				</view>
				
				
			</view>
			
			<view style="height: 20rpx;"></view>
			
			<view style="display: flex;">
				<view style="width: 46%; margin: auto; font-size: 26rpx;">
					<view style="color: #FCEDD4;">{{$t('KEY_NEW_DL_VDAES')}}</view>
					<view style="height: 10rpx;"></view>
					<view class="btnLvSe" style="width: 100%; border-radius: 12rpx; margin: auto; text-align: center; font-size: 26rpx;">
						<!-- <view style="height: 20rpx;"></view> -->
						<view >{{gHelper.formatMoney(serverData.ThisWeekTurnover) + 'R$'}}</view>
						<!-- <view style="height: 20rpx;"></view> -->
					</view>
				</view>
				<view style="width: 46%; margin: auto; font-size: 26rpx;">
					<view style="color: #FCEDD4;">{{$t('KEY_NEW_DL_VDADSP')}}</view>
					<view style="height: 10rpx;"></view>
					<view class="btnLvSe" style="width: 100%; border-radius: 12rpx; margin: auto; text-align: center; font-size: 26rpx;">
						<!-- <view style="height: 20rpx;"></view> -->
						<view >{{gHelper.formatMoney(serverData.LastWeekTurnover) + 'R$'}}</view>
						<!-- <view style="height: 20rpx;"></view> -->
					</view>
				</view>
			</view>
			<view style="height: 20rpx;"></view>
			
			<view style="display: flex;">
				<view style="width: 46%; margin: auto; font-size: 26rpx;">
					<view style="color: #FCEDD4;">{{$t('KEY_NEW_DL_SE')}}</view>
					<view style="height: 10rpx;"></view>
					<view class="btnLvSe" style="width: 100%; border-radius: 12rpx; margin: auto; text-align: center; font-size: 26rpx;">
						<!-- <view style="height: 20rpx;"></view> -->
						<view >{{gHelper.formatMoney(serverData.ThisWeekSalary) + 'R$'}}</view>
						<!-- <view style="height: 20rpx;"></view> -->
					</view>
				</view>
				<view style="width: 46%; margin: auto; font-size: 26rpx;">
					<view style="color: #FCEDD4;">{{$t('KEY_NEW_DL_SC')}}</view>
					<view style="height: 10rpx;"></view>
					<view class="btnLvSe" style="width: 100%; border-radius: 12rpx; margin: auto; text-align: center; font-size: 26rpx;">
						<!-- <view style="height: 20rpx;"></view> -->
						<view >{{gHelper.formatMoney(serverData.LastWeekSalary) + 'R$'}}</view>
						<!-- <view style="height: 20rpx;"></view> -->
					</view>
				</view>
			</view>
			
			<view style="height: 40rpx;"></view>
			<view @click="onButtonClick_Receber" class="receberBtnBg" style="display: flex;">
				<view class="saqueImg"></view>
				<view style=" margin-right: 40rpx;margin-left:10rpx; width: 70%;">{{$t('KEY_INDEX2_RE')}}</view>
			</view>
			<view style="height: 20rpx;"></view>
			<!-- <view style="width: 96%; margin: auto; height: 2rpx; background-color: #ffffff;"></view> -->
			<view style="height: 10rpx;"></view>
			
			<view style="font-size: 20rpx; color: #ffffff; width: 90%; margin: auto;padding:10rpx 20rpx" class="boxShadow">{{$t('KEY_NEW_DL_TEN')}}</view>
			<view style="height: 20rpx;"></view>
		</view>
		
		<view style="height: 20rpx;"></view>
		<view style=" width: 100%; margin: auto; border-radius: 12rpx;" class="cardBg">
			<view style="height: 20rpx;"></view>
			<view style=" border-radius: 12rpx; width: 96%; margin: auto;">
				<view style="height: 20rpx;"></view>
				<view style=" margin: auto; font-size: 20rpx; color: #ffffff;">
					<view class="boxShadow" style="padding: 10rpx 20rpx;">{{tips2}}</view>
					<!-- <view>{{tips3}}</view> -->
				</view>
				<view style="height: 20rpx;"></view>
				<view v-if="AgentLevelInfo && AgentLevelInfo.length > 0" style="margin: auto;">
					<view style="height: 60rpx; border: 2rpx solid #6dedf5; display: flex; background-color: #d93195;">
						<view style="text-align: center; width: 33%; font-size: 20rpx; line-height: 60rpx;">{{$t('KEY_NEW_NDA')}}</view>
						<view style="height: 60rpx; width: 2rpx; background-color: #6dedf5;"></view>
						<view style="text-align: center; width: 32%; font-size: 20rpx; line-height: 60rpx;">{{$t('KEY_NEW_DL_QUALIFICADA')}}</view>
						<view style="height: 60rpx; width: 2rpx; background-color: #6dedf5;"></view>
						<view style="text-align: center; width: 35%; font-size: 20rpx; line-height: 60rpx;">{{$t('KEY_NEW_DL_SS')}}</view>
					</view>
					<view v-for="(item, index) in AgentLevelInfo" v-bind:key="index">
						<view style="display: flex; border-bottom: 2rpx solid #6dedf5; background-color:transparent;">
							<view style="height: 60rpx; width: 2rpx; background-color: #6dedf5;"></view>
							<view style="text-align: center; width: 33%; font-size: 20rpx; line-height: 60rpx;">{{(item.Level == 0 ? 'Agente de nível ': 'Agente nível ') + item.Level}}</view>
							<view style="height: 60rpx; width: 2rpx; background-color: #6dedf5;"></view>
							<view style="text-align: center; width: 32%; font-size: 20rpx; line-height: 60rpx;" v-if="index != AgentLevelInfo.length - 1">{{item.MinTurnover + "-" + item.MaxTurnover}}</view>
							<view style="text-align: center; width: 32%; font-size: 20rpx; line-height: 60rpx;" v-if="index == AgentLevelInfo.length - 1">{{"≥ " + item.MinTurnover}}</view>
							<view style="height: 60rpx; width: 2rpx; background-color: #6dedf5;"></view>
							<view style="text-align: center; width: 35%; font-size: 20rpx; line-height: 60rpx; white-space: nowrap;">{{item.Salary == 0 ? 'sem salário semanal' : item.Salary + "R$"}}</view>
							<view style="height: 60rpx; width: 2rpx; background-color: #6dedf5;"></view>
						</view>
					</view>
				</view>
				<view style="height: 20rpx;"></view>
				<view style=" margin: auto; font-size: 20rpx; color: #ffffff;">
					<view class="boxShadow" style="padding: 10rpx 20rpx;">{{tips4}}</view>
					<!-- <view>{{tips5}}</view> -->
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			<view style="height: 20rpx;"></view>
		</view>
		<view class="MaskWindow" v-if="showPop">
			<view class="out">
				<view class="window">
					<!-- 关闭按钮 -->
					<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onButtonClick_closePop()"></image>
					<view style="height: 30rpx;"></view>
					<view style="color: #87EF85; width: 100%; font-weight: 600; text-align: center; font-size: 36rpx;">{{$t("KEY_WIT_EXPLICAR")}}</view>
					
					<view style="height: 30rpx;"></view>
					<view style="background: rgba(0,0,0,0.5); border-radius: 12rpx; width: 96%; margin: auto;">
						<view style="height: 20rpx;"></view>
						<view style="width: 94%; margin: auto; color: #FFFFFF; padding-bottom: 20rpx; border-radius: 10rpx; font-size: 26rpx; white-space: pre-wrap;">{{popTips}}</view>
						<view style="height: 10rpx;"></view>
					</view>
					
					<view style="height: 10rpx;"></view>
				</view>
			</view>
		</view>
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
				tips1: "Recomenda-se entrar em contato com o gerente de atendimento exclusivo, que dará orientação profissional.",
				tips2: "Diferentes níveis de agência significam que você poderá obter diferentes salários semanais de agência. Quanto maior o nível, maior o salário semanal. Consulte seu gerente de conta toda semana para obtê-lo. O salário semanal correspondente aos diferentes níveis é detalhado na tabela abaixo:",
				tips3: "Usuários ativos: usuários que jogaram por 3 dias ou recarregaram 3 vezes esta semana são usuários ativos.",
				tips4: "Mantenha o agente nível 5 por mais de 1 mês, você pode entrar em contato com o atendimento ao cliente para atualizar para agente sênior.",
				tips5: "Agente avançado: usuários ativos 300+/salário semanal 2.000R$/usuários ativos podem receber um dividendo de 0,2% do valor das apostas no jogo dos usuários ativos.",
			
				serverData: {},
				AgentLevelInfo: [],
				showPop: false,
				popTips: '',
			}
		},

		onLoad(option) {

		},

		// 第一次执行onShow时 组件还没加载完成, 这是否就只能放在onReady刷新
		// onShow() {
		// 	this.flush();
		// },
		
		mounted() {
			this.flush();
		},

		onReady() {
			
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
			onClickButton_Back() {
				this.gHelper.back(this);
			},
			
			flush() {
				uni.stopPullDownRefresh();
				this.gRequest.teamManager.agentHome(this.onEventCallback_agentHome.bind(this));
				this.gRequest.teamManager.agentMessage(this.onEventCallback_agentMessage.bind(this));
			},
			
			onEventCallback_agentHome(data) {
				this.serverData = data;
				this.AgentLevelInfo = data.AgentLevelInfo;
			},
			
			onEventCallback_agentMessage(data) {
				if (data && data.length > 0) {
					this.showPop = true;
					this.popTips = data;
				}
			},
			
			onButtonClick_closePop() {
				this.popTips = "";
				this.showPop = false;
				this.gRequest.teamManager.agentMessageDelete();
			},
			
			onButtonClick_kf() {
				this.gAndroidUtils.openBrowser(this.serverData.GroupLink);
			},
			
			onButtonClick_Dados() {
				uni.navigateTo({
					url:'teamDados',
				})
			},
			
			onButtonClick_Receber() {
				this.gAndroidUtils.openBrowser(this.serverData.CustomerServiceLink);
			},
			
			onEventCallback_receberSuccess(data) {
				if (data && data.length > 0) {
					this.gHelper.toast(data);
				}
				this.flush();
			},
			
			onButtonClick_Lista() {
				uni.navigateTo({
					url:'teamLista',
				})
			},

		},
	}
</script>

<style lang="scss">
	page {
		background: #101318;
		color: #FFFFFF;
		font-size: 30rpx;
	}

	.dlComBtn {
		background: linear-gradient(to right, #FFFFFF, #FFFFFF, #FFFFFF);
		background-size: 100% 100%;
		border: 4rpx solid #46AB56;
		line-height: 70rpx;
		border-radius: 120rpx;
		color: #46AB56;
		margin: auto;
		position: relative;
		margin: auto;
		width: 160rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		font-size: 30rpx;
		margin-right: 2rpx;
		border-radius: 360rpx;
	}
	
	.ReceberBg {
		// background: url('@/static/dl/Receber.png') no-repeat;
		// background-size: 100% 100%;
		
		margin: auto;
		width: 180rpx;
		height: 141rpx;
		text-align: center;
		position: relative;
		color: #FFFFFF;
		font-size: 30rpx;
		margin-right: 2rpx;
	}
	
	.kfImg {
		// background: url('@/static/dl/kefu.png') no-repeat;
		// background-size: 100% 100%;
		position: absolute;
		width: 48rpx;
		height: 48rpx;
		color: #FFFFFF;
		top: 12rpx;
		left: 40rpx;
	}
	
	.saqueImg {
		background: url("@/static/jiefu17/sa_message.png") no-repeat;
		background-size: 100% 100%;
		width: 34rpx;
		height: 22rpx;
		margin-left: 40rpx;
	}
	.ban{
		width: 537rpx; 
		margin: auto; 
		margin-left: 20rpx;
		position: absolute;
		left: 50%;
		top: -40rpx;
		transform: translateX(-50%);
	}
	.text{
      width: 613rpx;
	}
	.receberBtnBg{
		background:  url('@/static/jiefu17/sa_btn.png') no-repeat;
		background-size: 100% 100%;
		width: 260rpx;
		height: 80rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
