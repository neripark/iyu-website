import axios from 'axios'
import querystring from 'querystring'

exports.handler = function(event, context, callback) {
  const token = 'sFW0U11C8weGFxvGsnL8MMXG0aT3ta7fpqvSc2SHbRU'

  axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
      message: 'test string Hello from form-receive.js!'
    })
  })
  .then(res => callback(null, res.data))
  .catch(err => callback(err))
}
