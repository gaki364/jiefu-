import Vue from 'vue'
import App from './App'

// 多语言模块
import VueI18n from 'vue-i18n'; // 多语言插件
import messages, {
	jsonLang
} from './framework/lang.js'; // 多语言配置

// 工具类
import helper from './framework/helper.js';
import check from './framework/check.js';
import loading from './framework/loading.js';
import {
	http
} from '@/framework/request';

// sdk
import base64 from '@/framework/base64/base64.js'

// 组件
import uniTabbar from "./components/common/uni-tabbar.vue";
import AsyncError from './components/async-error/index.vue';


// 全局配置
import userdata from './config/userdata.js';
import assets from './config/assets.js';

// 全局存储
import store from '@/store';

// 通讯配置
import baseRequest from './config/httprequest/baseRequest.js';
import userManager from './config/httprequest/userManager.js'; // 用户信息
import mainManager from './config/httprequest/mainManager.js'; // 首页信息
import infomationManager from './config/httprequest/infomationManager.js'; // information页信息
import gameManager from './config/httprequest/gameManager.js'; // 游戏相关
import teamManager from './config/httprequest/teamManager.js'; // 游戏相关
import ipConfig from './config/ipConfig.js'; // IP和版本号配置

Vue.config.productionTip = false

App.mpType = 'app'

// -----------------------------------------------------------------------------
// 多语言的配置
Vue.use(VueI18n);

// 获取浏览器语言
helper.initBrowserPagesLanguage();
// uni.setStorageSync('locale', 'aaaa');

const i18n = new VueI18n({
	locale: uni.getStorageSync('locale') || 'en-US', // 默认选择的语言
	// locale: 'en-US', // 默认英语
	messages
})
Vue.prototype._i18n = i18n
// JSON字符串配置
messages['en-US'] = Object.assign(messages['en-US'], jsonLang['en-US']); // 英语

// -----------------------------------------------------------------------------

// 工具类
Vue.prototype.gHelper = helper;
Vue.prototype.gCheck = check;
Vue.prototype.gLoading = loading;
Vue.prototype.gHttp = http;

// sdk
import utils from './framework/sdk/utils.js';
Vue.prototype.gAndroidUtils = utils;

// 组件
Vue.component("myTabbar", uniTabbar);
Vue.component("AsyncError", AsyncError);

// 全局配置
Vue.prototype.gUserData = userdata;
Vue.prototype.gAssets = assets;
Vue.prototype.gBase64 = new base64();

// 通讯配置
Vue.prototype.gRequest = {
	'ipConfig': ipConfig,
	'baseRequest': baseRequest,
	'userManager': new userManager(),
	'mainManager': new mainManager(),
	'infomationManager': new infomationManager(),
	'gameManager': new gameManager(),
	'teamManager': new teamManager(),
};

// #ifdef APP-PLUS
// 重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast
plus.nativeUI.toast = (function(str) {
	if (str == '再按一次退出应用') {
		// helper.toast('Press again to exit the application.', 1000, false);
	} else {
		// helper.toast(str);
	}
});

// 屏蔽退出功能
plus.runtime.quit = (function() {
	
});

// #endif

import './uni.scss';

import moment from 'moment';
Vue.prototype.gMoment = moment;

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);


import kefuPop from '@/components/kefuPop/kefuPop.vue';
Vue.component('kefuPop', kefuPop);
import downLoadBtn from '@/components/downLoadBtn/downLoadBtn.vue';
Vue.component('downLoadBtn', downLoadBtn);
import btnFlush from '@/components/game/uni-flush.vue';
Vue.component('btnFlush', btnFlush);
import kfBtn from '@/components/downLoadBtn/kfBtn.vue';
Vue.component('kfBtn', kfBtn);
import comBottom from '@/components/downLoadBtn/comBottom.vue';
Vue.component('comBottom', comBottom);


const app = new Vue({
	i18n,
	...App,
	store: store
})
app.$mount()
