/**
 * 保存用户的数据
 */

export default {
	getToken() {
		return uni.getStorageSync('token') || '';
	},

	/**
	 * 登录成功
	 * @param {Object} referrer
	 */
	login(r) {
		uni.setStorageSync('token', r.token || '');
	},

	// 登出
	logout(state) {
		uni.removeStorageSync('token');
	},
	
	//////////////////////////////////////////////////////
	setLocalAppId(appId) {
		uni.setStorageSync('appId', appId);
	},
	
	getLocalAppId() {
		return uni.getStorageSync('appId') || '';
	},
	
	removeLocalAppId() {
		uni.removeStorageSync('appId');
	},
	
	//////////////////////////////////////////////////////
	setRfcode(code) {
		uni.setStorageSync('Rfcode', code);
	},
	
	getRfcode() {
		return uni.getStorageSync('Rfcode') || '';
	},
	
	removeRfcode() {
		uni.removeStorageSync('Rfcode');
	},
	//////////////////////////////////////////////////////
	setNTdata1(code) {
		uni.setStorageSync('anuncio1', code);
	},
	
	getNTdata1() {
		return uni.getStorageSync('anuncio1') || '';
	},
	setNTdata2(code) {
		uni.setStorageSync('anuncio2', code);
	},
	
	getNTdata2() {
		return uni.getStorageSync('anuncio2') || '';
	},
	
	setNTdata3(code) {
		uni.setStorageSync('anuncio3', code);
	},
	
	getNTdata3() {
		return uni.getStorageSync('anuncio3') || '';
	},
	////////////////////////////////////////////////////////////////////
	// 联系人标志位

	// 读取联系人 标志
	getContactFlag() {
		return uni.getStorageSync('rc') || '';
	},

	// 设置联系人 标志
	setContactFlag(r) {
		uni.setStorageSync('rc', r);
	},

	// 删除联系人 标志
	delContactFlag(r) {
		uni.removeStorageSync('rc');
	},

	////////////////////////////////////////////////////////////////////
	// google 包第一运行
	// 获取google 是否第一次运行
	getGoogleIsFirstRun() {
		return uni.getStorageSync('isFirst') || '0';
	},

	// 设置google 
	setGoogleIsFirstRun(isFirst) {
		uni.setStorageSync('isFirst', isFirst || '0');
	},
}
