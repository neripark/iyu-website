import axios from 'axios'
import querystring from 'querystring'

exports.handler = function(event, context, callback) {
  const token = 'sFW0U11C8weGFxvGsnL8MMXG0aT3ta7fpqvSc2SHbRU'
  // const payload = event.body.payload

  // const payload = typeof event.body // これはString
  // const payload2 = typeof event.body.payload // これはundefined!


  const params = querystring.parse(decodeURIComponent(event.body))
  console.log(params)

  const msg = `
webサイトからContactがありました！

--
[Name] ${params.name}
[Category] ${params.category}
[LiveDate] ${params.liveDate}
[TicketsCount] ${params.ticketsCount}
[email] ${params.email}
[Content]
${params.content}
  `

  axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
      message: msg
    })
  })
  .then((res) => {
    res.data.statusCode = 200
    res.data.body = 'ok'
    // res.data.body = JSON.stringify(event.body)
    callback(null, res.data)
  })
  .catch(err => callback(err))

}
