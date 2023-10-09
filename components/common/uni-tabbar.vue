<!-- 自定义tabbar -->
<template>
	<view v-if="show" class="tui-tabbar" :class="{'tui-tabbar-fixed':isFixed,'tui-unlined':unlined}" :style="{background:backgroundColor}">

		<!-- 所有icon -->
		<block v-for="(item, index) in tabBar" :key="index">
			<view class="tui-tabbar-item" :class="{'tui-item-hump':item.hump}" :style="{backgroundColor:item.hump?backgroundColor:'none'}"
			 @tap="tabbarSwitch(index, item.hump, item.pagePath, item.verify)">

				<view class="tui-icon-box" :class="{'tui-tabbar-hump':item.hump}">
					<!-- 图标 -->
					<image mode="widthFix" :src="current==index?item.selectedIconPath:item.iconPath" style="width: 116rpx; margin-top: 0rpx;"></image>
                 
					<!-- 小红点 -->
					<view :class="[item.isDot?'tui-badge-dot':'tui-badge']" :style="{color:badgeColor,backgroundColor:badgeBgColor}"
					 v-if="item.num">{{item.isDot?"":item.num}}</view>
					 
				</view>
               
				<!-- 下面文字 -->
				<view class="tui-text-scale" :class="{'tui-text-hump':item.hump}" :style="{color:current==index?selectedColor:color}">{{item.text}}</view>
			</view>
		</block>

		<!-- 中间凸起 -->
		<view :class="{'tui-hump-box':hump}" v-if="hump && !unlined"></view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		name: "tuiTabbar",
		props: {
			//字体颜色
			color: {
				type: String,
				default: "#ffffff"
			},
			//字体选中颜色
			selectedColor: {
				type: String,
				default: "#69f4f9"
			},
			//背景颜色
			backgroundColor: {
				type: String,
				default: "#045D27;"
			},
			//是否需要中间凸起按钮
			hump: {
				type: Boolean,
				default: false
			},
			//固定在底部
			isFixed: {
				type: Boolean,
				default: true
			},
			//角标字体颜色
			badgeColor: {
				type: String,
				default: "#fff"
			},
			//角标背景颜色
			badgeBgColor: {
				type: String,
				default: "#F74D54"
			},
			// 横线描边
			unlined: {
				type: Boolean,
				default: false
			}
		},

		computed: mapState(["tabBarIndex", "tabBar"]),

		created() {
			this.current = this.tabBarIndex;
		},
		
		mounted() {
			this.flushTabarText();
		},

		beforeDestroy() {
			// 退出到login界面时 要重新设置一下index 重新登录后才显示正常
			this.$store.commit('changeTabBar', {
				index: 0
			});
		},

		watch: {
			tabBarIndex() {
				this.current = this.tabBarIndex;
			}
		},

		data() {
			return {
				current: 0,
				tarBarText: [this.$t('KEY_TABBAR_1'),
					this.$t('KEY_TABBAR_2'),
					this.$t('KEY_TABBAR_3'),
					this.$t('KEY_TABBAR_4'),
					this.$t('KEY_TABBAR_5'),
				],
				show: true,
			};
		},

		methods: {
			...mapMutations(['changeTabBar']),

			// 点击tabbar按钮
			tabbarSwitch(index, hump, pagePath, verify) {
				if (verify) {
					if (index == 1) {
						this.gRequest.mainManager.jumpToPage2 = true;
					} else {
						this.gRequest.mainManager.jumpToPage2 = false;
					}
					this.changeTabBar({
						index: index
					})
					uni.switchTab({
						url: pagePath,
						fail(r) {
							// console.log('fail');
							console.log(r);
						},
					})
				} else {
					this.$emit("click", {
						index: index,
						hump: hump,
						pagePath: pagePath,
						verify: verify
					})
				}

			},
			
			flushTabarText () {
				// if (this.gRequest.userManager.isBz) {
				// 	this.tarBarText= [this.$t('KEY_TABBAR_1'),
				// 		'Blogueiro',
				// 		this.$t('KEY_TABBAR_3'),
				// 		this.$t('KEY_TABBAR_4'),
				// 		this.$t('KEY_TABBAR_5'),
				// 	];
				// 	this.tabBar[1].iconPath = this.gAssets.tabbar6_0;
				// 	this.tabBar[1].selectedIconPath = this.gAssets.tabbar6_1;
				// } else {
				// 	this.tarBarText= [this.$t('KEY_TABBAR_1'),
				// 		this.$t('KEY_TABBAR_2'),
				// 		this.$t('KEY_TABBAR_3'),
				// 		this.$t('KEY_TABBAR_4'),
				// 		this.$t('KEY_TABBAR_5'),
				// 	];
				// 	this.tabBar[1].iconPath = this.gAssets.tabbar2_0;
				// 	this.tabBar[1].selectedIconPath = this.gAssets.tabbar2_1;
				// }
				// this.show = false;
				// this.$nextTick(function(){
				// 	this.show = true;
				// })
			},
		}
	}
</script>

<style scoped lang="scss">
	.tui-tabbar {
		width: 100%;
		height: 115rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		-webkit-overflow-scroll: touch;
		// background: linear-gradient(#181E5C, #181E5C);
		background:url("@/static/jiefu17/footer_bg.png") no-repeat;
		background-size: 100% 100%;
		border-top: 2rpx solid #69f4f9;
	}

	.tui-tabbar-fixed {
		position: fixed;
		z-index: 100;
		left: 0;
		bottom: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-tabbar::before {
		content: '';
		width: 100%;
		/* border-top: 1rpx solid #B2B2B2; */
		position: absolute;
		top: 0;
		left: 0;
		transform: scaleY(0.5);
		transform-origin: 0 100%;
	}

	.tui-tabbar-item {
		height: 100%;
		flex: 1;
		display: flex;
		text-align: center;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		padding: 0rpx 0;
		box-sizing: border-box;
		border-right: 2rpx solid #69f4f9;
		&:last-child{
			border-right: 2rpx solid transparent;
		}
	}

	.tui-icon-box {
		position: relative;
		top: -14rpx;

		.text{
			position: absolute;
		}
	}

	.tui-item-hump {
		height: 68rpx;
		z-index: 2;
	}

	.tui-tabbar-icon {
		/* background: #FF0000; */
		margin-top: -20rpx;
		width: 116rpx;
		display: block;
	}

	.tui-tabbar-icon2 {
		/* background: #FF0000; */
		margin-top: -20rpx;
		width: 60rpx;
		display: block;
	}

	.tui-tabbar-icon-scale {
		width: 81rpx;
		height: 81rpx;
	}

	.tui-tabbar-icon-scale2 {
		width: 81rpx;
		height: 81rpx;
	}

	.tui-hump-box {
		width: 120rpx;
		height: 120rpx;
		background: #FFFFFF;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -40rpx;
		border-radius: 50%;
		z-index: 1;
	}

	.tui-hump-box::before {
		content: '';
		height: 200%;
		width: 200%;
		border: 1rpx solid #B2B2B2;
		position: absolute;
		top: 0;
		left: 0;
		transform: scale(0.5) translateZ(0);
		transform-origin: 0 0;
		border-radius: 100%;
	}

	.tui-unlined::before {
		border: 0 !important
	}

	.tui-tabbar-hump {
		width: 116rpx;
		height: 116rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%) rotate(0deg);
		top: -40rpx;
		transition: all 0.2s linear;
	}

	.tui-tabbar-hump image {
		width: 116rpx;
		height: 116rpx;
		display: block;
		text-align: center;
	}

	.tui-hump-active {
		transform: translateX(-50%) rotate(135deg);
	}

	.tui-text-hump {
		position: absolute;
		bottom: 10rpx;
	}

	.tui-text-scale {
		/* width: 260rpx; */
		/* white-space: nowrap; */
		position: absolute;
		/* font-weight: bold; */
		font-size: 20rpx;
		line-height: 28rpx;
		transform-origin: center 100%;
		bottom: 10rpx;
		text-align: center;
	}

	.tui-badge {
		position: absolute;
		font-size: 24rpx;
		height: 32rpx;
		min-width: 20rpx;
		padding: 0 6rpx;
		border-radius: 40rpx;
		right: 0;
		top: -5rpx;
		transform: translateX(70%);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-badge-dot {
		position: absolute;
		height: 16rpx;
		width: 16rpx;
		border-radius: 50%;
		right: -4rpx;
		top: -4rpx;
	}
</style>
