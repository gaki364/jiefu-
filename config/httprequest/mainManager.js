/**
 * 首页相关
 */
import baseRequest from '@/config/httprequest/baseRequest.js';
import MD5 from '@/framework/md5/md5.js';
import userdata from '../userdata.js';
import utils from '@/framework/sdk/utils.js';

export default class mainManager {
	
	
	showPage2Idx = null;
	jumpToPage2 = false;
	announcementData = [];
	
	/**
	 * 广告信息
	 */
	adInfo(callBack) {
		
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		baseRequest.requestPost({
			apiUrl: '/v1/api/ad',
			isAddToken: false,
			data: {
				appId,
				platform,
			},

		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body);
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	/**
	 * 公告信息
	 */
	announcementInfo(callBack) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		
		baseRequest.requestPost({
			apiUrl: '/v1/api/announcement',
			isAddToken: false,
			data: {
				appId,
				platform,
			},
	
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				this.announcementData = r.Body;
				if (callBack) {
					callBack(r.Body);
				}
	
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
	/**
	 * JackPot信息
	 */
	jackPotInfo(callBack) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();
		
		baseRequest.requestPost({
			apiUrl: '/v1/api/jackPot',
			isAddToken: false,
			noLoading: false,
			data: {
				appId,
				platform,
			},
	
		}, function(r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body);
				}
	
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}
	
}
