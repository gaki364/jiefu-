/* eslint-disable */

/**
 * HTTP请求封装
 */
import httpLib from './http';
import helper from '../helper.js';
const http = new httpLib();

let isRefreshing = false;

// 请求之后拦截器
http.interceptor.response(
	// 成功
	async response => {
		switch (response.statusCode) {
			case 200:
				// console.log('请求成功');
				break;

			case 401:
				// console.log('Sign in again');
				break;

			case 400:
				// console.log('Bad Request');
				break;

			case 405:
				// console.log('The current operation is not allowed');
				break;

			case 404:
				// console.log('Failed request 404');
				break;

			case 429:
				// console.log('Take a break from asking too much');
				break;

			case 500:
				// console.log('The server dozed off');
				break;

			default:
				// console.log('Unknown request result:');
				break;
		}

		if (response.statusCode !== 200) {
			helper.toast(helper.gVue.$t('KEY_NETERROR'));
		}
		return response.data;
	}
);

export {
	http
};
