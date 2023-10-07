/**
 * 首页相关
 */
import baseRequest from '@/config/httprequest/baseRequest.js';
import MD5 from '@/framework/md5/md5.js';
import userdata from '../userdata.js';
import utils from '@/framework/sdk/utils.js';

export default class teamManager {

	NextTime = 0

	/**
	 * 团队首页
	 */
	promoteHome(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/home',
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
	 * 本周收益
	 */
	thisWeekRebate(page, limit, callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/thisWeekRebate',
			data: {
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
	 * 团队详情
	 */
	teamTotalRebate(page, limit, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/teamTotalRebate',
			data: {
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
	 * 个人返利
	 */
	playerRebate(page, limit, callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/playerRebate',
			data: {
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
	 * 收益详情界面
	 */
	weekRebate(page, limit, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/weekRebate',
			data: {
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
	 * teamLostRebate
	 */
	teamLostRebate(page, limit, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/teamLostRebate',
			data: {
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
	 * vip
	 */
	getVipInfo(callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/vip/home',
			data: {},

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
	 * 收益详情
	 */
	incomeDetails(callBack, page, limit = 20) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/incomeDetails',
			data: {
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
	 * 会员详情
	 */
	memberDetails(callBack, level, page, limit = 20) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/memberDetails',
			data: {
				page,
				limit,
				level,
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
	 * receiveTeamBox
	 */
	receiveTeamBox(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/receive-box',
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
	 * 会员详情
	 */
	receiveVipBox(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/vip/receive-box',
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
	 * promoteConversion
	 */
	promoteConversion(amount, callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/conversion',
			data: {
				amount,
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
	 * 会员详情
	 */
	bonusPayout(amount, password, callBack) {
		password = baseRequest.MD5(password);
		baseRequest.requestPost({
			apiUrl: '/v1/api/pay/bonusPayout',
			data: {
				amount, 
				password,
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
	 * bonusRecord
	 */
	bonusRecord(page, callBack, limit = 30) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/bonus',
			data: {
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
	 * 会员详情
	 */
	bonusTransferRecord(page, callBack, limit = 30) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/bonusTransfer',
			data: {
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
	 * receiveTurnoverVip
	 */
	receiveTurnoverVip(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/vip/receive-turnover-rebate',
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
	 * agentHome
	 */
	agentHome(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/agent/home',
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
	 * agentUsers
	 */
	agentUsers(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/agent/users',
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
	 * agentDetails
	 */
	agentDetails(callBack, week) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/agent/details',
			data: {
				week,
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
	 * agentReceive
	 */
	agentReceive(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/agent/receive',
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
	 * agentMessage
	 */
	agentMessage(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/agent/message',
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
	 * agentMessage
	 */
	agentMessageDelete(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/agent/message-delete',
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
	 * bloggerHome
	 */
	bloggerHome(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/blogger/home',
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
	 * bloggerData
	 */
	bloggerData(callBack, month) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/blogger/data',
			data: {
				month,
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
	 * promoteDailyDetail
	 */
	promoteDailyDetail(callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/dailyDetail',
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
	 * 代理团队详情
	 */
	agentTeamStatistics(callBack, startTime, endTime) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/agent/team-statistics',
			data: {
				startTime,
				endTime,
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
	 * 代理团队详情
	 */
	agentClosePopup() {
		baseRequest.requestPost({
			apiUrl: '/v1/api/agent/close-popup',
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
	 * 代理团队详情
	 */
	TotalIncomeDetails(startTime, endTime, level, page, callBack, limit = 30) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/promote/total-income-details',
			data: {
				startTime,
				endTime,
				level,
				page,
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
