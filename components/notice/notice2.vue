<!-- 公告弹窗 -->
<template>
	<view class="MaskWindow" @touchmove.stop.prevent="moveHandle" v-if="isShow">
		<view class="out">
			<view style="text-align: center;">
				<view class="window" style="width: 96%; margin: auto; position: relative;padding-bottom: 100rpx;">
					
					<view style="text-align: left; margin-top: -4rpx; position: relative;">
						
						
						<img :src="gAssets.noticeTop" mode="widthFix" style="width: 30%;margin-left: 3%;margin-top: 6%;"></img>
						<!-- <view style="width: 100%; position: absolute; top: -86rpx;">
							<image :src="gAssets.noticeTop2" mode="widthFix" style="width: 230rpx;"></image>
						</view> -->
					</view>
					<view style="height: 30rpx;"></view>
					<!-- <view class="titleTest" style="font-size: 62rpx;">{{title}}</view> -->
					<view style="height: 20rpx;"></view>
					<view class="content">
						<!-- 显示通知内容 -->
				
						<!-- 半透明背景 -->
						<view style="width: 96%; max-height: 720rpx; margin-left:2%; margin: auto; border-radius: 16rpx; font-size: 30rpx; color: #FFFFFF;">
							<!-- 滚动条 -->
							<scroll-view style="max-height: 720rpx; width: 95%; padding-left: 3%; padding-top: 0%;" scroll-y="true">
								<!-- 富文本显示 -->
								<jyfParser :html="html" ref="article" @linkpress="linkpress"></jyfParser>
							</scroll-view>
						</view>
						<!-- <view style="height: 20rpx;"></view> -->
						<!-- <view class="btnHuangSe" @click="onClickButton_Gotit()">OK</view> -->
						<!-- <view style="height: 40rpx;"></view> -->
					</view>
					<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; width: 56rpx;position: absolute;top: 3%;right: 3%;" @click="onClickButton_Gotit()"></image>
					<image :src="gAssets.bgImg" mode="widthFix" style="width:168rpx; width: 168rpx;position: absolute;bottom: 3%;right: 3%;" ></image>
					<!-- <img src="" alt=""> -->
				</view>
				<view style="height: 30rpx;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import jyfParser from "@/components/common/jyf-parser/jyf-parser";

	export default {
		components: {
			jyfParser
		},

		data() {
			return {
				// 富文本
				html: ``,
				title: ' ',
				isShow: false,
			}
		},

		beforeMount() {
			
			//测试文本
			// this.title = `Bônus de depósito 8%`;
			// this.title = "anúncio";
			// this.html = `
			// <div>
			// 	<div style="height:10rpx"></div>
			// 	<p style="font-size:26rpx; color:#FCC35F; width: 90%; margin: auto;">Atividade de recarga por tempo limitado</p>
			// 	<div style="height:10rpx"></div>
			// 	<div style="font-size:28rpx; color:#FFFFFF; width: 90%; margin: auto;  position: relative; text-indent: 20rpx;"><div style="display: block; position: absolute; top: 14rpx; background: #1288FE; border-radius: 360rpx; width: 11rpx; height: 11rpx;"></div>1. A primeira recarga de uma conta de usuário recém-registrada é superior a rs50 e um bônus de recarga de 20% pode ser obtido</div>
			// 	<div style="height:10rpx"></div>
			// 	<div style="font-size:28rpx; color:#FFFFFF; width: 90%; margin: auto;  position: relative; text-indent: 20rpx;"><div style="display: block; position: absolute; top: 14rpx; background: #1288FE; border-radius: 360rpx; width: 11rpx; height: 11rpx;"></div>2. Jogadores veteranos podem receber um bônus de recarga de 10% nas primeiras 5 recargas por dia</div>
			// 	<div style="height:10rpx"></div>
			// </div>
			// <div style="height:10rpx"></div>
			// `
			


			//测试文本
			// this.title = `Bônus de depósito de 50%`;
			// this.html =
			// 	`
			// <div style="background: #323941; border-radius: 12rpx;">
			// 	<div style="height:20rpx"></div>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">Como ele vai trabalhar?</p>
			// 	<div style="height:10rpx"></div>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">1. O primeiro dinheiro que você depositar nestaconta do jogo é ≥50R$, você receberá um bônus de50% do valor do depósito, e o bônus será adicionadoà sua conta ao mesmo tempo após o depósito.（Presente de até 500R$）</p>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">2. Uma conta tem apenas uma chance de receber obônus de primeiro depósito. A recompensa mais altaé 500R$. Então, por favor, aproveite estaoportunidade e obtenha o lucro máximo para você</p>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">3. Condições de saque: valor efetivo daaposta ≥ valor do depósito * 1+ bônus * 20Aposta efetiva = lucro ou perda no jogo</p>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">Exemplo:</p>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">Você teve um lucro de 100 no primeiro jogo e aaposta efetiva é de 100.</p>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">Você perde 100 no segundo jogo e a aposta efetiva é100.</p>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">O valor total da aposta válida é 200</p>
			// 	<p style="font-size:20rpx; color:#FFFFFF; width: 90%; margin: auto;">4. Este evento não será compartilhado com outros eventos</p>
			// 	<div style="height:30rpx"></div>
			// </div>
			// <div style="height:50rpx"></div>
			// <image mode="widthFix" style="width:90%; margin-left:5%;"src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></image>
			// <div style="height:50rpx"></div>
			// `;
		},

		methods: {
			// 禁止滑动窗口
			moveHandle() {
				return;
			},
			
			showHtml(data) {
				this.title = this.$t('KEY_NOTIC');
				this.html = this.gBase64.decode(data);
				this.isShow = true;
			},
			
			showPlayerMessage(data) {
				this.title = this.$t('KEY_MESSAGE')
				this.html = data;
			},

			onClickButton_Gotit() {
				this.isShow = false;
			},

			linkpress(e) {
				e.ignore(); // 此链接不进行自动跳转/复制
				// 自定义操作
				this.gAndroidUtils.copyToSystemClipboard(e.href);
				this.gHelper.toast(this.$t("KEY_COPYSUCCESS"));
			},
		},
	}
</script>

<style lang="scss">
	page {
		background: #ECF4F6;
		color: #FFFFFF;
		font-size: 24rpx;
	}
	
</style>

<style lang="scss" scoped>
.uni-image{
	background-size: auto;
}

.window{
	background-image: url("@/static/new/bg08.png") !important;
	border: none !important;

}

uni-image>div, uni-image>img{
	background-size: auto !important;
}
</style>
