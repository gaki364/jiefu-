/*
 * 资源配置
 * 图片静态资源表，所有图片资源路径在这统一管理，不应该写死在页面中，该数据挂载到Vue原型中。
 * 页面使用：this.gAssets.loginBg
 * CSS背景：应尽量使用:style="" 行内样式设置背景图
 * PATH_OLD说明：本地路径或者服务器路径
 *
 * 举例：<image :src="grid_1">  需要在data中映射 grid_1: this.$mAssetsPath.grid_1
 *
 * 特别注意：经测试小程序中不支持 <image :src="$mAssetsPath.grid_1"> 该用法
 */

// 图片基础路径
const PATH = '/static/'

export default {


	backImg: PATH + "btn0012a.png",

	common_time: PATH + 'time.png',
	common_Loading: PATH + 'loading.png',
	common_laba: PATH + 'window_laba.png',

	// gift
	giftimg: PATH + "01.png",

	Menu_Pic5: PATH + 'menu/Y1.png',
	Menu_Pic6: PATH + 'menu/Y2.png',
	Menu_Pic7: PATH + 'menu/Y3.png',
	Menu_Pic8: PATH + 'menu/Y4.png',
	Menu_Pic9: PATH + 'menu/Y5.png',
	Menu_Pic10: PATH + 'menu/Y6.png',
	Menu_Pic11: PATH + 'menu/Y7.png',
	Menu_Pic12: PATH + 'menu/g1.png',
	Menu_Pic13: PATH + 'menu/g2.png',
	Menu_Pic14: PATH + 'menu/g3.png',
	Menu_Pic15: PATH + 'menu/g4.png',
	Menu_Pic16: PATH + 'menu/g5.png',
	Menu_Pic17: PATH + 'menu/g6.png',
	Menu_Pic18: PATH + 'menu/g7.png',


	idx1gameTab1: [
		PATH + "A1.png",
		// PATH + "A2.png",
		PATH + "A3.png",
		PATH + "A5.png",
		PATH + "A6.png",
		PATH + "A4.png",
	],

	idx1gameTab0: [
		PATH + "A1.png",
		// PATH + "A2.png",
		PATH + "A3.png",
		PATH + "A5.png",
		PATH + "A6.png",
		PATH + "A4.png",
	],

	mogamePic: PATH + 'more.png',
	mogamePic1: PATH + 'more1.png',
	mogamePic3: PATH + 'more-cq9.png',
	mogamePic4: PATH + 'more-fc.png',
	gameC1: PATH + "Collection1.png",
	gameC2: PATH + "Collection2.png",

	idx2_Team: PATH + "Team.png",
	idx2_Team1: PATH + "Detalhes.png",
	idx2_popText: PATH + "Retirad.png",


	// index3
	vipimagelist: [
		PATH + "V0.png",
		PATH + "V1.png",
		PATH + "V2.png",
		PATH + "V3.png",
		PATH + "V4.png",
		PATH + "V5.png",
		PATH + "V6.png",
		PATH + "V7.png",
		PATH + "V8.png",
		PATH + "V9.png",
		PATH + "V10.png",
	],
	btnvip: PATH + "vip_btn1.png",




	statusImg1: PATH + 'zt_01.png',
	statusImg2: PATH + 'zt_02.png',
	statusImg3: PATH + 'zt_03.png',

	common_Po1: PATH + 'me_01.png',
	common_Po2: PATH + 'me_02.png',
	common_pic3: PATH + 'kf_01.webp',
	common_pic4: PATH + 'kf_02.webp',
	imgdiqiu: PATH + "_0004_yuy2.png",
	imgQi: [
		PATH + "_0000_yuy6.png",
		PATH + "_0003_yuy3.png",
	],
	gou: PATH + "_0002_yuy4.png",


	login_logo: PATH + 'jiefu17/logo.png',
	idx1kefu: PATH + 'jiefu16/kefu.png',
	jinbi: PATH + 'new/icon001.png',
	// tabbar 未选中
	tabbar1_0: PATH + 'jiefu16/3.png',
	tabbar2_0: PATH + 'jiefu16/1.png',
	tabbar3_0: PATH + 'new/icon011b.png',
	tabbar4_0: PATH + 'new/icon010b.png',
	tabbar5_0: PATH + 'jiefu16/5.png',
	// tabbar 选中
	tabbar1_1: PATH + 'jiefu16/4.png',
	tabbar2_1: PATH + 'jiefu16/2.png',
	tabbar3_1: PATH + 'new/icon011.png',
	tabbar4_1: PATH + 'new/icon010.png',
	tabbar5_1: PATH + 'jiefu16/6.png',

	idx1gameImg: [
		PATH + "new/icon005.png",
		PATH + "new/icon006.png",
		PATH + "new/icon002bb.png",
		PATH + "new/btn004.png",
	],

	idx1gameImg2: [
		PATH + "new/icon005hd.png",
		PATH + "new/icon006tt.png",
		PATH + "new/icon002bb.png",
		PATH + "new/btn004 k.png",
	],
	mogamePic: PATH + 'new/more2.png',
	common_flush: PATH + 'jiefu17/flush.png',
	rankImg: [
		PATH + "new/icon0021.png",
		PATH + "new/icon0022.png",
		PATH + "new/icon0023.png",
	],
	gameTypeImg: {
		"1": PATH + "new/icon0018a.png",
		"2": PATH + "new/icon0015a.png",
		"3": PATH + "new/icon0016ab.png",
		"100": PATH + "new/icon0017a.png",
	},

	// index3
	vipimagelist1: [
		PATH + "new/iconvip0.png",
		PATH + "new/iconvip1.png",
		PATH + "new/iconvip2.png",
		PATH + "new/iconvip3.png",
		PATH + "new/iconvip4.png",
		PATH + "new/iconvip5.png",
		PATH + "new/iconvip6.png",
		PATH + "new/iconvip7.png",
		PATH + "new/iconvip8.png",
		PATH + "new/iconvip9.png",
		PATH + "new/iconvip10.png",
	],
	vipimageBg: [
		PATH + "iconvip1.png",
		PATH + "iconvip1.png",
		PATH + "iconvip2.png",
		PATH + "iconvip3.png",
		PATH + "iconvip4.png",
		PATH + "iconvip5.png",
		PATH + "iconvip6.png",
		PATH + "iconvip7.png",
		PATH + "iconvip8.png",
		PATH + "iconvip9.png",
		PATH + "iconvip10.png",
	],

	boxImg1: PATH + 'new/iconhg13.png',
	boxImg2: PATH + 'new/iconhg12.png',
	boxImg3: PATH + 'new/iconhg11.png',
	idx2_Team1: PATH + "new/icon31.png",
	idx2_jt: PATH + "new/iconh1a.png",
	idx2_rqi: PATH + "new/iconbd1.png",
	copyImage: PATH + "jiefu17/copy.png",
	idx2_team1: PATH + "new/icon33.png",
	idx2_Team2: PATH + "new/icon-h2.png",
	idx2_load: PATH + "jiefu16/load.png",
	idx2_enjoy: PATH + "jiefu17/enjoy.png",
	idx2_ban: PATH + "jiefu16/ban.png",
	idx2_text: PATH + "jiefu16/text.png",
	vipimagelist2: [
		PATH + "new/iconhg00.png",
		PATH + "new/iconhg01.png",
		PATH + "new/iconhg02.png",
		PATH + "new/iconhg03.png",
		PATH + "new/iconhg04.png",
		PATH + "new/iconhg05.png",
		PATH + "new/iconhg06.png",
		PATH + "new/iconhg07.png",
		PATH + "new/iconhg08.png",
		PATH + "new/iconhg09.png",
		PATH + "new/iconhg10.png",
	],

	imgLogin: PATH + "new/icon7-2.png",
	login_phone: PATH + 'new/icon25-2.png',
	login_pw1: PATH + 'new/icon6-2.png',
	login_pw2: PATH + 'new/icon6-2.png',
	btn_help: PATH + "new/btn99.png",

	// index5
	imglist: [
		PATH + "new/icon3_0001.png",
		PATH + "new/icon3_0004.png",
		PATH + "new/icon3_0003.png",
		PATH + "new/icon3_0006.png",
		PATH + "new/icon3_0002.png",
		PATH + "new/icon3_0005.png",
		PATH + "new/icon3_0005.png",
		PATH + "new/icon3_0005.png",
	],
	idx5_logout: PATH + "new/icon3_0000.png",

	dlPop1: PATH + "new/bg0321.png",
	dlPop2: PATH + "new/iconjh2.png",

	common_Po1: PATH + 'new/iconh1b.png',
	common_Po2: PATH + 'new/iconh1a.png',

	closeImg: PATH + "jiefu16/btn02ee2.png",
	bgImg: PATH + "new/bg099yell-1.png",
	// mudar banco
	choose1: PATH + "new/btn8-2.png",
	choose2: PATH + "new/btn92.png",

	buttomPic: PATH + "jiefu16/bg03.png",

	jb: PATH + "new/coin1.png",
	common_suo: PATH + 'new/coin2.png',


	moreBtn: PATH + "btn0014.png",
	noticeTop: PATH + "bg02cvb.png",
	noticeTop2: PATH + "bg03b.png",

	idx5_icon1: PATH + "jiefu17/phone.png",
	idx5_icon2: PATH + "jiefu17/group.png",
	idx5_eu1: PATH + "jiefu17/fundo.png",
	idx5_eu2: PATH + "jiefu17/logout.png",
	idx5_eu3: PATH + "jiefu17/recarga.png",
	idx5_eu4: PATH + "jiefu17/rada.png",
	idx5_trends: PATH + "jiefu17/trend.png",
	idx5_de1:PATH + "jiefu17/de1.png",
	idx5_de2:PATH + "jiefu17/de2.png",
	idx5_de3:PATH + "jiefu17/de3.png",

}
