import axios from 'axios'
import qs from 'qs'

/* 全局默认配置 */
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.baseURL = 'xxx' // 接口地址

// 拦截器 post传参序列化
// axios.interceptors.request.use((config) => {
// 	if(config.method.toLowerCase() === 'post') {
// 		console.log('传参成功')
// 		config.data = qs.stringify(config.data)
// 	}
// 	return config
// }),(error) => {
// 	console.log('传参错误')
// 	return Promise.reject(error)
// }

// Add a response interceptor
axios.interceptors.response.use((response) => {
	// Do something with response data
    if(!response.data){
    	return Promise.reject(response)
    }
    return response;
  },(error) => {
    console.log('响应失败')
    return Promise.reject(error);
  });

// 发送请求函数的封装
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
            	console.log(response)
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}
export default {
	/**
	 *	获取线路列表
	 */
	getRoutesList () {
		return fetch('../../static/data.json')
	}
}
