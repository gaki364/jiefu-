/**
 * 加载提示
 */
export default {
	/**
	 * 显示加载提示
	 * @param {Object} title 提示文本
	 */
	Show(title) {
		uni.showLoading({
			title: title,
		})
	},

	/**
	 * 隐藏加载提示
	 */
	Hide() {
		uni.hideLoading()
	},

}
