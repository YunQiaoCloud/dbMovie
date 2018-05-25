const serverPath = 'https://douban.uieee.com/v2/movie/'

export function post(url, body = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverPath + url,    // 拼接完整的url
      data: body,
      method: 'POST',
      header: { 'content-type': 'json' },
      success(res) {
        resolve(res.data)  // 把返回的数据传出去
      },
      fail(error) {
        reject(error)   // 把错误信息传出去
      }
    })
  })
}
