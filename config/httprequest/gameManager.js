/**
 * 游戏相关
 */
import baseRequest from '@/config/httprequest/baseRequest.js';
import MD5 from '@/framework/md5/md5.js';
import userdata from '../userdata.js';
import utils from '@/framework/sdk/utils.js';
import helper from '@/framework/helper.js';

export default class gameManager {

	jumpToPage2ShowGamePopData = null;

	/**
	 * 游戏类型
	 */
	gameTypes(callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/types',
			data: {

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
	 * 热门游戏
	 */
	hotGame(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/game/hotGame',
			isAddToken: false,
			data: {

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
	 * 游戏记录
	 */
	playHistory(callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/playHistory',
			data: {

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
	 * 推荐平台
	 */
	platformRecommended(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/game/platform/recommended',
			data: {

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
	 * 推荐游戏
	 */
	gameRecommended(callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/recommended',
			data: {

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
	 * 获取游戏类型下的平台
	 */
	gameTypePlatform(gameType, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/typePlatform',
			data: {
				gameType,
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
	 * 游戏信息
	 */
	gameInfos(gameType, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/infos',
			data: {
				gameType,
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
	 * 进入游戏
	 */
	gameEnter(gameId, callBack) {
		let mobile = helper.isPc() ? '0' : '1';
		// let winOpen = null;
		// if (userdata.getToken() && utils.isIosBorwer()) {
		// 	winOpen = utils.getWinOpen();
		// }
		baseRequest.requestPost({
			apiUrl: '/v1/api/game/enter',
			data: {
				gameId,
				mobile,
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
	 * 进入游戏
	 */
	gameEnter2(gameId, callBack) {
		let mobile = helper.isPc() ? '0' : '1';
		let winOpen = null;
		let url = "https://jfbapi-beta.jiefubet.com/zqs/idx/gw2?data="
		if (userdata.getToken() && utils.isIosBorwer()) {
			winOpen = utils.getWinOpen();
		}
		baseRequest.requestPost({
			apiUrl: '/v1/api/game/enter-seamless',
			data: {
				gameId,
				mobile,
			},

		}, function(r) {
			// 成功
			if (r.Code === 200) {

				// #ifdef APP-PLUS
				if (callBack) {
					callBack(r.Body);
				}
				// #endif


				// #ifdef H5
				url = url + r.Body.token + "&ad=" + r.Body.domain;
				if (utils.isIosBorwer()) {
					if (winOpen) {
						console.log(url);
						utils.setWinOpenUrl(winOpen, url)
					}
				} else {
					utils.openBrowser(url);
				}
				// #endif
			} else if (r.Msg) {
				baseRequest.toast(r.Msg);
			}
		}.bind(this));
	}

	/**
	 * 退出游戏
	 */
	gameQuite(callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/quite',
			data: {

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
	 * 退出游戏
	 */
	gameSearch(gameName, callBack, gameType, manufacturer) {
		if (gameType == 0) {
			gameType = null;
		}
		baseRequest.requestPost({
			apiUrl: '/v1/api/game/search',
			data: {
				gameName,
				gameType,
				manufacturer,
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
	 * JackPot信息
	 */
	gameHome(callBack) {
		let appId = utils.getAppId();
		let platform = utils.getPlatform();

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/home',
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
	 * gameCollect信息
	 */
	gameCollect(isCollect, gameId, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/collect',
			data: {
				isCollect,
				gameId,
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
	 * gamecollections信息
	 */
	gameCollections(callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/collections',
			data: {
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
	 * gameNewGame信息
	 */
	gameNewGame(callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/newGame',
			data: {
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
	 * gamePlatformInfos信息
	 */
	gamePlatformInfos(platform, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/platform-infos',
			data: {
				platform,
				gameType: 1,
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
	 * gamePage信息
	 */
	gamePage(platform, callBack, page, limit=20) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/game/page',
			data: {
				platform,
				gameType: 1,
				page,
				limit,
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
	 * 排行
	 */
	gamePlayerWin(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/ranking/player-win',
			data: {
				
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
	
	gameTurnoverWin(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/ranking/turnover-new',
			data: {
				
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
