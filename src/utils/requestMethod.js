const serverPath = 'https://douban.uieee.com/v2/movie/'

export function post(url, body = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverPath + url,    // 拼接完整的url
      data: body,
      method: 'POST',
      header: { 'content-type': 'json' },
      success(res) {
        if (res.statusCode < 200 || res.statusCode > 300) {
          reject(res.data || {})
        }

        resolve(res.data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}

export function get(url, body = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverPath + url,    // 拼接完整的url
      data: body,
      method: 'GET',
      header: { 'content-type': 'json' },
      success(res) {
        if (res.statusCode < 200 || res.statusCode > 300) {
          reject(res.data || {})
        }

        resolve(res.data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
