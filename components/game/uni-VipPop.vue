<!-- 公告弹窗 -->
<template>
	<view class="MaskWindow" @touchmove.stop.prevent="moveHandle" v-if="(isShow && canShow)">
		<view class="out">
			<view class="window" style="width: 96%; margin: auto; position: relative;">
				<view style="height: 40rpx;"></view>
				<image :src="gAssets.closeImg" mode="widthFix" style="width: 56rpx; position: absolute;width: 56rpx; position: absolute; top: 20rpx; right: 20rpx;" @click="onClickButton_ClosePop()"></image>
				<view style="position: absolute; width: 185rpx; height: 175rpx; top: -20rpx; left: 10rpx;">
					<image :src="gAssets.common_laba" style="width: 137rpx; height: 113rpx;"></image>
				</view>
				<view style="color: #FAEA82; width: 100%; margin: auto;  text-align: center; font-size: 36rpx;">{{"Recompensa de direitos VIP"}}</view>
				<view style="height: 60rpx;"></view>
				<view style="width: 92%; margin: auto; text-align: center; color: #FFFFFF; font-size: 20rpx;">
					{{gHelper.StrReplace(tips1, RebateRate)}}
				</view>
				<view style="height: 20rpx;"></view>
				<view style="color: #FAEA82; width: 100%; margin: auto;  text-align: center; font-size: 42rpx;">{{Rebate + "R$"}}</view>
				<view style="height: 20rpx;"></view>
				<view class="btnHuangSe" @click="onClickButton_Receber">Receber</view>
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
		
		props: {
			canShow: false,
		},

		data() {
			return {
				Rebate: 0,
				RebateRate: 0,
				tips1: "Recompensa em dinheiro pelo volume de apostas de ontem ({0}%)",
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
				if (this.gRequest.userManager.userInfoData) {
					this.isShow = this.gRequest.userManager.userInfoData.VipRebate == 1;
					this.RebateRate = Math.floor(this.gRequest.userManager.userInfoData.RebateRate * 10000) / 100;
					this.Rebate = this.gRequest.userManager.userInfoData.Rebate;
				}
			},
			
			onClickButton_ClosePop() {
				this.isShow = false;
			},
			
			onClickButton_Receber() {
				this.gRequest.teamManager.receiveTurnoverVip(this.onEventCallback_success.bind(this));
			},
			
			onEventCallback_success() {
				this.$emit("flushPlayer");
				this.gHelper.toast("Receba sucesso");
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

</style>
