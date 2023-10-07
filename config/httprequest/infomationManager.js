/**
 * infomation页相关
 */
import baseRequest from '@/config/httprequest/baseRequest.js'
import MD5 from '@/framework/md5/md5.js'
import userdata from '../userdata.js'
import utils from '@/framework/sdk/utils.js'

export default class infomationManager {

	payBankInfo = [];
	bankType = ['', "Bank", 'E-money', 'Others'];
	bankList = [];
	emoneyList = [];
	rechargeData = null;
	infoData = null;

	/**
	 * 个人信息
	 */
	informationInfo (callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/player/information',
			data: {

			},
		}, function (r) {
			// 成功
			if (r.Code === 200) {
				this.infoData = r.Body
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * 新增银行卡
	 */
	saveBank (name, email, mobile, cpf, isPix, pixType, pixKey, accountDigit, bankCardNumber, bankCode, bankBranch, password, repeatPassword, callBack) {
		password = baseRequest.MD5(password)
		repeatPassword = baseRequest.MD5(repeatPassword)
		baseRequest.requestPost({
			apiUrl: '/v1/api/account/save',
			data: {
				name,
				email,
				mobile,
				cpf,
				isPix,
				pixType,
				password,
				repeatPassword,
				pixKey,
				accountDigit,
				bankCardNumber,
				bankCode,
				bankBranch,
			},

		}, function (r) {
			// 成功
			console.log('saveBank', r)
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}
				this.informationInfo(null)
				FF.EventManager.raiseEvent(INFOEVENTNAME.FLUSHINFO)

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}
	/**
	 * 新增充值银行卡
	 */
	saveRBank (name, email, mobile, cpf, callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/recharge/account/save',
			data: {
				name,
				email,
				mobile,
				cpf,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * 获取银行卡信息信息
	 */
	getBankInfo (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/account/get',
			data: {

			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}



	/**
	 * 更新银行卡信息
	 */
	updateBankInfo (name, email, mobile, cpf, isPix, pixType, pixKey, accountDigit, bankCardNumber, bankCode, bankBranch, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/account/update',
			data: {
				name,
				email,
				mobile,
				cpf,
				isPix,
				pixType,
				pixKey,
				accountDigit,
				bankCardNumber,
				bankCode,
				bankBranch,
			},

		}, function (r) {
			// 成功
			console.log('updateBank', r)
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}
				FF.EventManager.raiseEvent(INFOEVENTNAME.FLUSHINFO)
			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}




	/**
	 * 更新充值银行卡信息
	 */
	updateRBankInfo (name, email, mobile, cpf, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/recharge/account/update',
			data: {
				name,
				email,
				mobile,
				cpf,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * 忘记资金密码
	 */
	forgetFundPassword (oldPassword, password, repeatPassword, cbFun) {
		oldPassword = baseRequest.MD5(oldPassword)
		password = baseRequest.MD5(password)
		repeatPassword = baseRequest.MD5(repeatPassword)
		baseRequest.requestPost({
			apiUrl: '/v1/api/account/forget-fund-password',
			data: {
				oldPassword,
				password,
				repeatPassword,
			},
		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (cbFun) {
					cbFun(r.Body)
				}
			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * 提款记录
	 */
	withdrawRecords (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/withdraw/records',
			data: {
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * 充值记录
	 */
	rechargeRecords (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/recharge/records',
			data: {
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * 充值
	 */
	recharge (amount, accountId, destinationId, payType, callBack, isReward) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/pay/recharge',
			data: {
				amount,
				accountId,
				destinationId,
				payType,
				isReward,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			}
			if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * 提款
	 */
	payout (amount, password, callBack) {
		password = baseRequest.MD5(password)
		baseRequest.requestPost({
			apiUrl: '/v1/api/pay/payout',
			data: {
				amount,
				password,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			}
			if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * 获取充值页面列表
	 */
	getProducts (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/pay/products',
			data: {

			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}



	/**
	 * 更新昵称
	 */
	updateNickname (nickname, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/player/updateNickname',
			data: {
				nickname,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}


	/**
	 * 头像信息
	 */
	getAvatars (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/player/avatars',
			data: {

			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}


	/**
	 * 更新头像
	 */
	updateAvatar (avatar, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/player/updateAvatar',
			data: {
				avatar,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}


	/**
	 * 银行信息
	 */
	getPayBankInfo (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/pay/bankInfo',
			data: {

			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				this.payBankInfo = r.Body
				this.bankList = []
				this.emoneyList = []
				for (let i = 0; i < this.payBankInfo.length; i++) {
					if (this.payBankInfo[i].Type == 1) {
						this.bankList.push(this.payBankInfo[i])
					} else if (this.payBankInfo[i].Type == 2) {
						this.emoneyList.push(this.payBankInfo[i])
					}
				}
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}


	/**
	 * 充值卡号
	 */
	getDestinationInfo (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/pay/destinationInfo',
			data: {

			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}


	/**
	 * 取消订单
	 */
	endOrder (orderId, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/pay/endOrder',
			data: {
				orderId,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}


	/**
	 * 修改邮箱
	 */
	emailChange (email, callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/player/email',
			data: {
				email,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}


	/**
	 * 修改邮箱
	 */
	getBankType (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/pay/bankType',
			data: {

			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	getBankImgForBankCode (bankCode, type) {
		for (let i = 0; i < this.payBankInfo.length; i++) {
			if (bankCode == this.payBankInfo[i].BankCode && type == this.payBankInfo[i].type) {
				return this.payBankInfo[i].BankLogo
			}
		}

	}

	/**
	 * vipsmobiles
	 */
	getVipsmobiles (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/apk/vipsmobiles',
			data: {

			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}


	/**
	 * getFundDetail
	 */
	getFundDetail (callBack, page, limit = 30) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/player/fund-detail',
			data: {
				page,
				limit,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * giftOrientation
	 */
	giftOrientation (callBack, playerId, giftKey) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/gift/orientation',
			isAddToken: false,
			data: {
				playerId,
				giftKey,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * giftOrientation
	 */
	giftRandom (callBack, playerId, giftKey) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/gift/Random',
			isAddToken: false,
			data: {
				playerId,
				giftKey,
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * giftMessage
	 */
	giftMessage (callBack) {

		baseRequest.requestPost({
			apiUrl: '/v1/api/gift/message',
			data: {
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * giftDelete
	 */
	giftDelete (callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/gift/delete',
			data: {
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}

	/**
	 * signInConfig
	 */
	signInConfig (callBack) {
		// baseRequest.requestPost({
		// 	apiUrl: '/v1/api/signIn/config',
		// 	data: {
		// 	},

		// }, function (r) {
		// 	// 成功
		// 	if (r.Code === 200) {
		// 		if (callBack) {
		// 			callBack(r.Body);
		// 		}

		// 	} else if (r.Msg) {
		// 		baseRequest.toast(r.Msg);
		// 	}
		// }.bind(this));
	}

	/**
	 * signInPlayer
	 */
	signInPlayer (callBack) {
		baseRequest.requestPost({
			apiUrl: '/v1/api/signIn/player',
			data: {
			},

		}, function (r) {
			// 成功
			if (r.Code === 200) {
				if (callBack) {
					callBack(r.Body)
				}

			} else if (r.Msg) {
				baseRequest.toast(r.Msg)
			}
		}.bind(this))
	}
}
