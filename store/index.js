import Vue from 'vue'
import Vuex from 'vuex'
import assets from '@/config/assets.js';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// Tabbar 配置相关
		tabBar: [{
				"pagePath": "/game/idx2",
				"iconPath": assets.tabbar2_0,
				"text": "Equipe",
				"selectedIconPath": assets.tabbar2_1,
				"num": 0, // 小红点数量
				"isDot": false, // 小红点
				"verify": true,
			},
			{
				"pagePath": "/game/idx1",
				"iconPath": assets.tabbar1_0,
				"text": "Pagina Principal",
				"selectedIconPath": assets.tabbar1_1,
				"verify": true,
				"isDot": false,
				"hump": false, // 中间凸起图标
			},
			{
				"pagePath": "/game/idx5",
				"iconPath": assets.tabbar5_0,
				"text": "Eu",
				"selectedIconPath": assets.tabbar5_1,
				"num": 0,
				"isDot": false,
				"verify": true,
				"hump": false, // 中间凸起图标
			}
		],
		tabBarIndex: 0, // 当前显示的Tabbar页面
		// Tabbar 配置相关

	},

	mutations: {
		// 改变tabbar
		changeTabBar(state, payload) {
			if (payload) {
				state.tabBarIndex = payload.index
			}
		},

	},

	actions: {

	}
})

export default store
