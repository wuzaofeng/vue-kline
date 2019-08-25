import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return response
    }
    if (response.data.code) {
      return response.data
    }
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default axiosInstance
