<template>
	<view>
		<!-- 玩家信息 -->
		<uniplayertitle ref="uniplayertitle" mode="1" :swiperlist="swiperlist" :isShowVip="true" @flushTarbar="flushTarbar"
		 @showDlPop="onEvent_showDlPop"></uniplayertitle>

		<!-- 广告 -->
		<view style="height: 10rpx;"></view>

		<!-- 游戏列表 -->
		
		<image style="width: 119rpx;" mode="widthFix" :src="gAssets.idx1gameImg2[2]" v-if="Histories && Histories.length > 0">		
			</image>
			<unigamelist v-if="Histories && Histories.length > 0" @eventShowPop="onEventCallBack_showPop"
				 :titleText="'Histories'" @eventMore="onEvent_ClickMore" :type="5" :gameList="Histories" isHistory></unigamelist>
			<view style="height: 10rpx;"></view>
		<view style="width: 100%; margin: auto; margin-top: 20rpx; font-weight: bold; position: relative;">
			<view style=" width: 100%; position: absolute; top: 0rpx; height: 130rpx;" class="cardBg"></view>
			<view style="height: 10rpx;"></view>
			<view style="width: 90%; margin: auto;">
				<view style="width: auto; display: flex; margin: auto; margin: auto; position: relative; width: 80%; justify-content: space-evenly;">
					

					<image @click="onButtonClick_SwitchGame(3)" style="width: 119rpx;" mode="widthFix" :src="gamelistIndex == 3 ? gAssets.idx1gameImg[0]:gAssets.idx1gameImg2[0]" v-if="PGGames && PGGames.length > 0">


					</image>

					<image @click="onButtonClick_SwitchGame(4)" style="width: 119rpx;" mode="widthFix" :src="gamelistIndex == 4 ? gAssets.idx1gameImg[1]:gAssets.idx1gameImg2[1]" v-if="PPGames && PPGames.length > 0">

					</image>
					
					

					<image @click="onButtonClick_SwitchGame(0)" style="width: 119rpx;" mode="widthFix" :src="gamelistIndex == 0 ? gAssets.idx1gameImg[3]:gAssets.idx1gameImg2[3]" v-if="Collections && Collections.length > 0">

					</image>
				</view>
				<view style="height: 30rpx;"></view>
				<view class="PageBox1" style="margin: auto; margin-top: 0rpx;" v-if="showGame">
					<view style="height: 10rpx;"></view>
					

					<unigamelist v-if="PGGames && PGGames.length > 0 && gamelistIndex == 3" @eventShowPop="onEventCallBack_showPop"
					 :titleText="'PG game'" @eventMore="onEvent_ClickMore" :type="3" :gameList="PGGames"></unigamelist>
					<unigamelist v-if="PPGames && PPGames.length > 0 && gamelistIndex == 4" @eventShowPop="onEventCallBack_showPop"
					 :titleText="'PP game'" @eventMore="onEvent_ClickMore" :type="4" :gameList="PPGames"></unigamelist>
					<unigamelist v-if="Collections && Collections.length > 0 && gamelistIndex == 0" @eventShowPop="onEventCallBack_showPop"
					 :titleText="$t('KEY_INDEX1_COLLECTION')" @eventMore="onEvent_ClickMore" :type="0" :gameList="Collections"></unigamelist>
					<view style="height: 20rpx;"></view>
				</view>
			</view>
		</view>
		<view style="height: 10rpx;"></view>
		<!-- <gameRank></gameRank> -->
		<comBottom :canShow="true"></comBottom>

		<view class="MaskWindow" v-if="showPop">
			<view class="out">
				<view class="window">
					<view style="height: 60rpx;"></view>
					<view style="width: 90%; margin: auto; color: #FFFFFF;">{{$t('KEY_NEW_IDX1TIPS')}}</view>
					<view style="height: 30rpx;"></view>
					<view style="display: flex;">
						<view class="btnLvSe" style="font-size: 20rpx;" @click="onClickButton_gotoRecharge()">{{$t('KEY_INDEX5_OK')}}</view>
						<view class="btnHuangSe" style="font-size: 20rpx;" @click="onClickButton_clsoePop">{{$t('CANCELAR')}}</view>
					</view>
					<view style="height: 40rpx;"></view>
				</view>
			</view>
		</view>

		<view class="btn6" @tap.stop="onButtonClick_KeFu()"></view>
		<view class="btn5" @tap.stop="onButtonClick_dw()"></view>
		<view class="btn4" @tap.stop="onButtonClick_opLink(3)"></view>
		<view class="btn3" @tap.stop="onButtonClick_opLink(2)"></view>
		<notice2 ref="notice"></notice2>
		<notice2 ref="notice3"></notice2>
		<downLoadBtn></downLoadBtn>
		<kfBtn ref='kfBtn'></kfBtn>
		<dlPop ref='dlPop'></dlPop>


		<!-- 自定义tabbar -->
		<view style="height: 200rpx;"></view>
		<myTabbar ref="myTabbar"></myTabbar>
	</view>
</template>

<script>
	import unigamelist from '@/components/game/uni-gamelist.vue';
	import uniplayertitle from '@/components/game/uni-playertitle.vue';
	import notice2 from "@/components/notice/notice2.vue";
	import gameRank from "@/components/game/uni-rank.vue";
	import dlPop from "@/components/kefuPop/dlPop.vue"

	export default {
		components: {
			uniplayertitle,
			unigamelist,
			notice2,
			gameRank,
			dlPop,
		},

		data() {
			return {
				swiperlist: [],
				btnText: ["Slots", "Original game", "Live casino", "Fishing"],
				// 游戏列表界面
				gamelistIndex: 3,
				Collections: [],
				Histories: [],
				HotGames: [],
				NewGames: [],
				FishGame: [],
				LiveGame: [],
				OriginalGames: [],
				PGGames: [],
				PPGames: [],
				ortheList: [],
				adData: [],
				// 弹出窗口
				popWindow: false,
				verionData: null,

				showPop: false,

				reCode: "",

				showGame: true,
			}
		},

		onLoad(option) {
			uni.hideTabBar();
			if (this.gRequest.baseRequest.reCode && this.gRequest.baseRequest.reCode.length > 0) {
				this.reCode = this.gRequest.baseRequest.reCode;
				this.gRequest.baseRequest.reCode = "";
			}
			// uni.$on("Collection", this.onEvent_ClickMore.bind(this));
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
			if (this.gUserData.getToken()) {
				if (this.$refs && this.$refs.kfBtn) {
					this.$refs.kfBtn.flush();
				}
			}
		},

		onReady() {
			// this.flush();
			if (this.$refs && this.$refs.myTabbar) {
				this.$refs.myTabbar.flushTabarText();
			}
			this.getAreaFromIp1();

			if (this.$refs && this.$refs.uniplayertitle && this.reCode && this.reCode.length > 0) {
				this.$refs.uniplayertitle.showRegisterPop(this.reCode);
			}

			this.gRequest.userManager.getHome(this.onEventCallback_home.bind(this));
		},

		//监听下拉刷新
		onPullDownRefresh() {
			this.flush();
		},

		onHide() {},

		onUnload() {
			// uni.$off("Collection");

			uni.stopPullDownRefresh();
		},

		methods: {
			flush() {
				switch (this.gamelistIndex) {
					case 0:
						break;
					case 1:
						break;
					case 2:
						break;
					case 3:
						break;
				}
				uni.stopPullDownRefresh();
				if (this.$refs && this.$refs.uniplayertitle) {
					this.$refs.uniplayertitle.flush();
				}
				this.Collections = [];
				this.Histories = [];
				this.HotGames = [];
				this.NewGames = [];
				this.FishGame = [];
				this.LiveGame = [];
				this.OriginalGames = [],
					this.PGGames = [],
					this.PPGames = [],
					this.ortheList = [];
				// this.gRequest.mainManager.announcementInfo(this.onEventCallback_adInfo.bind(this));
				this.flushList();
			},

			onEvent_showDlPop() {
				if (this.$refs && this.$refs.dlPop) {
					this.$refs.dlPop.ShowPopWindow();
				}
			},

			onEventCallback_home(data) {
				if (data) {
					this.onEventCallback_getVersion(data.ApkInfo);
					this.onEventCallback_getAnnouncementGroup(data.GroupApkInfos);
					this.onEventCallback_adInfo(data.Announcements);
					if (this.$refs && this.$refs.uniplayertitle) {
						this.$refs.uniplayertitle.onEventCallback_getOfficial();
					}

				}
			},

			onButtonClick_clickAd(idx) {
				let data = this.adData[idx]
				if (data) {
					if (data.Title == "telegrem") {
						this.gAndroidUtils.openBrowser(this.gBase64.decode(data.Content));
					} else if (data.Title == "sign") {
						if (this.$refs && this.$refs.uniplayertitle) {
							this.$refs.uniplayertitle.showSignPop();
						}
					} else {
						uni.switchTab({
							url: "idx4?idx=" + idx,
						})
					}
				}
			},

			onEventCallback_adInfo(data) {
				this.swiperlist = [];
				this.adData = data;
				if (data) {
					for (let i = 0; i < data.length; i++) {
						let img = {
							image: data[i].Image
						};
						this.swiperlist.push(img);
					}
				}
			},

			flushTarbar() {
				if (this.$refs && this.$refs.myTabbar) {
					this.$refs.myTabbar.flushTabarText();
				}
			},

			flushList() {
				this.gRequest.gameManager.gameHome(this.onEventCallback_gameHome.bind(this));
			},

			onEventCallback_gameHome(data) {
				this.Collections = data.Collections;
				this.Histories = data.Histories;
				this.HotGames = data.HotGames;
				this.NewGames = data.NewGames;
				this.FishGame = data.FishGames;
				this.LiveGame = data.CasinoGames;
				this.OriginalGames = data.OriginalGames;
				this.PGGames = data.PGGames;
				this.PPGames = data.PPGames;
				
				// if (this.Histories && this.Histories.length > 0) {
				// 	this.gamelistIndex = 5;
				// } else if (this.OriginalGames && this.OriginalGames.length > 0) {
				// 	this.gamelistIndex = 1;
				// } else if (this.PGGames && this.PGGames.length > 0) {
				// 	this.gamelistIndex = 3;
				// } else if (this.PPGames && this.PPGames.length > 0) {
				// 	this.gamelistIndex = 4;
				// } else if (this.LiveGame && this.LiveGame.length > 0) {
				// 	this.gamelistIndex = 2;
				// }
			},

			// 切换游戏
			onButtonClick_SwitchGame(index) {
				this.gamelistIndex = Number(index);
				this.showGame = false;
				this.$nextTick(function() {
					this.showGame = true;
				})
			},

			onEventCallback_gameInfos(data) {
				this.ortheList = data;
			},

			// 点击更多按钮
			onEvent_ClickMore(parm) {
				// 可以直接在组件内部实现
				this.flush();
			},

			onButtonClick_moregame(type) {

				uni.navigateTo({
					url: 'MoreGame?type=' + type,
				});
			},

			onButtonClick_RaslMode() {},

			onButtonClick_FunMode() {},

			// 关闭弹出窗口
			onButtonClick_ClosePopWindow() {
				this.popWindow = false;
			},

			onEventCallBack_showPop() {
				this.showPop = true;
			},

			onClickButton_gotoRecharge() {
				this.showPop = false;
				uni.navigateTo({
					url: "recharge",
				})
			},

			onClickButton_clsoePop() {
				this.showPop = false;
			},


			///////////////////////////////////////////////////////////////////

			onEventCallback_getVersion(data) {
				this.verionData = data;
				this.showNoticePopUp();
			},

			// 弹窗公告
			showNoticePopUp() {

				// 弹窗公告
				if (this.verionData && this.verionData.Announcement && this.verionData.Announcement.length > 0) {

					let time = this.gHelper.getTodayTimestamp()[0];
					let NtData = this.gUserData.getNTdata1();

					if (NtData.length <= 0) {
						if (this.$refs && this.$refs.notice) {
							this.$refs.notice.showHtml(this.verionData.Announcement);
							this.gUserData.setNTdata1(time.toString() + ";" + this.verionData.Id);
						}
						return
					}
					let nData = NtData.split(";");
					let time2 = Number(nData[0]);
					let id = Number(nData[1]);
					let show = true;

					if (time == time2) {
						show = false;
					}
					if (id != this.verionData.Id) {
						show = true;
					}
					if (this.$refs && this.$refs.notice && show) {
						this.$refs.notice.showHtml(this.verionData.Announcement);
						this.gUserData.setNTdata1(time.toString() + ";" + this.verionData.Id);
					}
				}
			},

			onEventCallback_getAnnouncementGroup(data) {
				if (data && data.Announcement && data.Announcement.length > 0) {
					let time = this.gHelper.getTodayTimestamp()[0];
					let NtData = this.gUserData.getNTdata2();
					if (NtData.length <= 0) {
						if (this.$refs && this.$refs.notice3) {
							this.gUserData.setNTdata2(time.toString() + ";" + data.Id);
							this.$refs.notice3.showHtml(data.Announcement);
						}

						return
					}
					let nData = NtData.split(";");
					let time2 = Number(nData[0]);
					let id = Number(nData[1]);
					let show = true;
					if (time == time2) {
						show = false;
					}
					if (id != data.Id) {
						show = true;
					}
					if (this.$refs && this.$refs.notice3 && show) {
						this.gUserData.setNTdata2(time.toString() + ";" + data.Id);
						this.$refs.notice3.showHtml(data.Announcement);
					}
				}
			},

			onButtonClick_opLink(type) {
				let data = this.gRequest.userManager.OfficialData;
				let mlink = "";
				if (data) {
					for (let i = 0; i < data.length; i++) {
						let link = data[i].TelGram;
						if (type == data[i].Type) {
							mlink = link;
						}
					}
				}
				if (mlink.length > 0) {
					this.gAndroidUtils.openBrowser(mlink);
				}
			},


			// 客服按钮
			onButtonClick_KeFu() {
				if (this.$refs && this.$refs.uniplayertitle) {
					this.$refs.uniplayertitle.onButtonClick_KeFu();
				}
			},


			onButtonClick_dw() {
				if (this.$refs && this.$refs.uniplayertitle) {
					this.$refs.uniplayertitle.onButtonClick_dw();
				}
			},

			/////////////////////////////////////////////////////////////////////////////////
			getAreaFromIp1() {
				let data = this.gHttp.get('https://api.db-ip.com/v2/free/self');
				let that = this;
				data.then((val) => {
					if (val.countryName) {
						that.gHelper.gIpAddress = val.ipAddress;
						// that.setAreaCode(val.countryName);
					} else {
						that.getAreaFromIp2();
					}
				}, (err) => {
					// this.areaCodeText = "+1"
					console.log(err)
				});
			},

			getAreaFromIp2() {
				let data = this.gHttp.get('https://www.iplocate.io/api/lookup/');
				let that = this;
				data.then((val) => {
					if (val.country) {
						that.gHelper.gIpAddress = val.ip;
						// that.setAreaCode(val.country);
					} else {
						that.getAreaFromIp3();
					}

				}, (err) => {
					// this.areaCodeText = "+1"
					console.log(err)
				});
			},

			getAreaFromIp3() {
				let data = this.gHttp.get('https://api.ip.sb/geoip');
				let that = this;
				data.then((val) => {
					if (val.country) {
						that.gHelper.gIpAddress = val.ip;
						// that.setAreaCode(val.country);
					} else {
						// this.areaCodeText = "+1"
					}
				}, (err) => {
					// this.areaCodeText = "+1"
					console.log(err)
				});
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

	.btnBg {
		// background: #39176D;
		// background-size: 100% 100%;
		width: 100%;
		// height: 90rpx;
		margin: auto;
		position: relative;
		// display: flex;
	}

	.tbg {

		width: 697rpx;
		height: 60rpx;
		margin: auto;
		position: relative;
		display: flex;
		// margin-left: 0rpx;
	}

	.btn3 {
		background: url('@/static/new/btn006.png') no-repeat;
		background-size: 100% 100%;
		width: 63rpx;
		height: 63rpx;
		position: fixed;
		right: 20rpx;
		top: 70%;
	}

	.btn4 {
		background: url('@/static/new/btn007.png') no-repeat;
		background-size: 100% 100%;
		width: 63rpx;
		height: 63rpx;
		position: fixed;
		right: 20rpx;
		top: 65%;
	}

	.btn5 {
		background: url('@/static/new/btn005.png') no-repeat;
		background-size: 100% 100%;
		width: 63rpx;
		height: 63rpx;
		position: fixed;
		right: 20rpx;
		top: 60%;
	}

	.btn6 {
		background: url('@/static/new/btn0021a.png') no-repeat;
		background-size: 100% 100%;
		width: 63rpx;
		height: 63rpx;
		position: fixed;
		right: 20rpx;
		top: 55%;
	}
</style>
