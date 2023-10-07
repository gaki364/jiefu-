<!-- 公告弹窗 -->
<template>
	<view style="position: relative;  width: 98%; height: 106rpx; margin: auto;">
		<view style="display: flex; margin: auto; width: 98%; height: 106rpx;" @tap.stop="onButtonClick_ShowLanguage($event)">
			<view style="width: 58rpx; height: 57rpx; margin: 14rpx 0rpx auto 10rpx;">
				<image :src="gAssets.language_Icon1" style="width: 58rpx; height: 57rpx;"></image>
			</view>
			<view style="font-size: 30rpx; color: #000000; margin: auto 0rpx auto 20rpx;">{{$t('KEY_LANGUAGE')}}</view>
			<view style="width: 77rpx; height: 57rpx; margin: 14rpx 10rpx auto auto;">
				<image :src="LanguageImg1[curLanguageIdx]" style="width: 77rpx; height: 55rpx;"></image>
			</view>
			<view style="width: 31rpx; height: 27rpx; margin: 0rpx 10rpx auto 10rpx;">
				<image :src="gAssets.language_Icon2" @tap.stop="onButtonClick_ShowLanguage($event)" style="width: 31rpx; height: 27rpx;"></image>
			</view>
		</view>
		<view style="height: 10rpx;"></view>
		<view class="languageBg" v-if="isShowLanguage">
			<scroll-view  style="height: 90%; width: 96%; margin: auto; margin-top: 22rpx;" scroll-y="true">
				<view v-for="(item, index) in LanguageImg2" :v-bind:key="index">
					<view style="height: 10rpx;"></view>
					<view class="imgBox">
						<image :src="item" class="imgBox" @click="onClickButton_chose(index)"></image>
					</view>
					<view style="height: 10rpx;"></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},

		data() {
			return {
				isShow: false,
				
				curLanguageIdx: 0,
				isShowLanguage: false,
				LanguageImg1: [this.gAssets.language_gj1,
								this.gAssets.language_gj2,
								this.gAssets.language_gj3,
								this.gAssets.language_gj4,
								this.gAssets.language_gj5,
								this.gAssets.language_gj6,
								this.gAssets.language_gj7,
								this.gAssets.language_gj8,
								this.gAssets.language_gj9,
								this.gAssets.language_gj10,
								this.gAssets.language_gj11,
								this.gAssets.language_gj12,
							],
							
				LanguageImg2: [this.gAssets.language_gj1_1,
								this.gAssets.language_gj2_1,
								this.gAssets.language_gj3_1,
								this.gAssets.language_gj4_1,
								this.gAssets.language_gj5_1,
								this.gAssets.language_gj6_1,
								this.gAssets.language_gj7_1,
								this.gAssets.language_gj8_1,
								this.gAssets.language_gj9_1,
								this.gAssets.language_gj10_1,
								this.gAssets.language_gj11_1,
								this.gAssets.language_gj12_1,
							],
			}
		},

		beforeMount() {
			if (this.gHelper.getBrowserPagesLanguage() == "ar") {
				this.curLanguageIdx = 2;
			} else if (this.gHelper.getBrowserPagesLanguage() == "es") {
				this.curLanguageIdx = 1;
			} else if (this.gHelper.getBrowserPagesLanguage() == "fa") {
				this.curLanguageIdx = 3;
			} else if (this.gHelper.getBrowserPagesLanguage() == "nl") {
				this.curLanguageIdx = 4;
			} else if (this.gHelper.getBrowserPagesLanguage() == "TUR") {
				this.curLanguageIdx = 5;
			} else if (this.gHelper.getBrowserPagesLanguage() == "nep") {
				this.curLanguageIdx = 6;
			} else if (this.gHelper.getBrowserPagesLanguage() == "el") {
				this.curLanguageIdx = 7;
			} else if (this.gHelper.getBrowserPagesLanguage() == "ro") {
				this.curLanguageIdx = 8;
			} else if (this.gHelper.getBrowserPagesLanguage() == "de") {
				this.curLanguageIdx = 9;
			} else if (this.gHelper.getBrowserPagesLanguage() == "bg") {
				this.curLanguageIdx = 10;
			} else if (this.gHelper.getBrowserPagesLanguage() == "pl") {
				this.curLanguageIdx = 11;
			} else {
				this.curLanguageIdx = 0;
			}
		},

		methods: {
			// 禁止滑动窗口
			moveHandle() {
				return;
			},
			
			popShow() {
				this.isShow = true;
			},
			
			popClose() {
				this.isShow = false;
				event.stopPropagation();
			},
			// 防止点击穿透
			onClick_visible() {
				event.stopPropagation();
			},
			
			onClickButton_chose(idx) {
				this.curLanguageIdx = idx;
				if (idx == 1) {
					this.gHelper.setBrowserPagesLanguage('es'); //英文
				} else if (idx == 2) {
					this.gHelper.setBrowserPagesLanguage('ar'); //阿拉伯
				} else if (idx == 3) {
					this.gHelper.setBrowserPagesLanguage('fa'); //波斯
				} else if (idx == 4) {
					this.gHelper.setBrowserPagesLanguage('nl'); //荷兰
				} else if (idx == 5) {
					this.gHelper.setBrowserPagesLanguage('TUR'); //土耳其
				} else if (idx == 6) {
					this.gHelper.setBrowserPagesLanguage('nep'); //尼泊尔
				} else if (idx == 7) {
					this.gHelper.setBrowserPagesLanguage('el'); //希腊
				} else if (idx == 8) {
					this.gHelper.setBrowserPagesLanguage('ro'); //罗马尼亚
				} else if (idx == 9) {
					this.gHelper.setBrowserPagesLanguage('de'); //德语
				} else if (idx == 10) {
					this.gHelper.setBrowserPagesLanguage('bg'); //保加利亚语
				} else if (idx == 11) {
					this.gHelper.setBrowserPagesLanguage('de'); //波兰
				} else {
					this.gHelper.setBrowserPagesLanguage('en-US'); //英文
				}
				this.isShow = false;
			},
			onButtonClick_ShowLanguage() {
				if (this.isShowLanguage) {
					this.isShowLanguage = false;
				} else {
					this.isShowLanguage = true;
				}
				event.stopPropagation();
			},
		},
	}
</script>

<style lang="scss">
	.languageBg {
		background: url('@/static/language/yuyan_bg.png') no-repeat;
		background-size: 253rpx 261rpx;
		width: 253rpx;
		height: 261rpx;
		position: absolute;
		right: 36rpx;
		top: 110rpx;
		
		.imgBox {
			width: 202rpx;
			height: 54rpx;
			margin: auto;
			text-align: center;
		}
	}
</style>
