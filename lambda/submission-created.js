import axios from 'axios'
import querystring from 'querystring'

exports.handler = function(event, context, callback) {
  const token = 'sFW0U11C8weGFxvGsnL8MMXG0aT3ta7fpqvSc2SHbRU'
  const params = querystring.parse(decodeURIComponent(event.body))

  axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
      message: getMsg(params)
    })
  })
  .then((res) => {
    res.data.statusCode = 200
    res.data.body = 'ok'
    callback(null, res.data)
  })
  .catch(err => callback(err))

}


function getMsg(params) {

  // todo: liveDateとTicketsCountがなかったら表示しない制御
  const msg = `
webサイトからContactがありました！

--
[Name] ${params.name}
[Category] ${params.category}
[LiveDate] ${params.liveDate}
[TicketsCount] ${params.ticketsCount}
[Email] ${params.email}
[Content]
${params.content}
  `

  return msg
}
