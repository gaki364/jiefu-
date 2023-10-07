/**
 * http 1.0.6
 * @Class http
 * @description luch-request 1.0.6 http请求插件
 * @Author lu-ch
 * @Date 2020-03-17
 * @Email webwork.s@qq.com
 * http://ext.dcloud.net.cn/plugin?id=392
 */
export default class http {
	/**
	 * 检查URL地址是否完整 http://xx.xx.xxx/
	 * @param {Object} url
	 */
	static posUrl(url) {
		/* 判断url是否为绝对路径 */
		return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
	}

	/**
	 * 拼接URL
	 * @param {Object} url
	 * @param {Object} baseUrl
	 * @param {Object} params
	 */
	static mergeUrl(url, params) {
		// 检查URL
		let mergeUrl = http.posUrl(url) ? url : ``;
		if (mergeUrl.length == 0) {
			console.error('URL address error: ${url}');
		}

		// 后面的参数
		if (Object.keys(params).length !== 0) {
			const paramsH = http.addQueryString(params);
			mergeUrl += mergeUrl.includes('?') ? `&${paramsH}` : `?${paramsH}`; // 这里拼接URL
		}

		// console.log(`请求的URL: ${mergeUrl}`);
		return mergeUrl;
	}

	static addQueryString(params) {
		let paramsData = '';
		Object.keys(params).forEach(function(key) {
			paramsData += key + '=' + encodeURIComponent(params[key]) + '&';
		});
		return paramsData.substring(0, paramsData.length - 1);
	}

	// 请求完成 
	requestCom(response) {
		return response;
	}


	/**
	 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
	 * @param { Number } statusCode - 请求响应体statusCode（只读）
	 * @return { Boolean } 如果为true,则 resolve, 否则 reject
	 */
	validateStatus(statusCode) {
		return statusCode === 200;
	}

	/**
	 * @property {Function} request 请求拦截器
	 * @property {Function} response 响应拦截器
	 * @type {{request: Request.interceptor.request, response: Request.interceptor.response}}
	 */
	interceptor = {
		/**
		 * @param {Request~responseCallback} cb 响应拦截器，对响应数据做点什么
		 * @param {Request~responseErrCallback} ecb 响应拦截器，对响应错误做点什么
		 */
		response: (cb) => {
			if (cb) {
				this.requestCom = cb;
			}
		}
	};

	/**
	 * @Function
	 * @param {Object} options - 请求配置项
	 * @prop {String} options.url - 请求路径
	 * @prop {Object} options.data - 请求参数
	 * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
	 * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
	 * @prop {Object} [options.header = config.header] - 请求header
	 * @prop {Object} [options.method = config.method] - 请求方法
	 * @returns {Promise<unknown>}
	 */
	request(options = {}) {
		// 封装默认的参数
		options.url = options.url;
		// options.dataType = options.dataType || this.config.dataType;
		options.data = options.data || {};
		options.params = options.params || {};
		options.header = options.header;
		options.method = options.method;

		return new Promise((resolve, reject) => {
			// console.log(options);

			// 开始请求
			const requestTask = uni.request({
				url: http.mergeUrl(options.url, options.params),
				data: options.data,
				header: options.header,
				method: options.method,
				// dataType: options.dataType,

				complete: response => {
					response.options = options;
					if (this.validateStatus(response.statusCode)) {
						// 成功
						response = this.requestCom(response);
						resolve(response);

					} else {
						// 失败
						response = this.requestCom(response);
						reject(response);
					}
				}
			});
		});
	}

	get(url, params = {}) {
		const options = {};
		options.params = params;
		return this.request({
			url,
			method: 'GET',
			...options
		});
	}

	post(url, header, data = {}) {
		return this.request({
			url,
			method: 'POST',
			header,
			data,
		});
	}

}
