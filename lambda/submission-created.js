import axios from 'axios'
import querystring from 'querystring'

exports.handler = function(event, context, callback) {
  const token = 'sFW0U11C8weGFxvGsnL8MMXG0aT3ta7fpqvSc2SHbRU'
  // const payload = event.body.payload

  const payload = typeof event.body // これはString
  const payload2 = typeof event.body.payload // これはundefined!

  // const msg = new Buffer(event.body, 'base64')

//   const msg = ` // [Name] ${payload.name}
// [Category] ${payload.category}
// [LiveDate] ${payload.livedate}
// [TicketsCount] ${payload.ticketscount}
// [email] ${payload.email}
// [Content]
// ${payload.content}
//   `

  const msg = `
[Name]
[Category]
[LiveDate]
[TicketsCount]
[email]
[Content]
`

  axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
      // message: 'test string from "submittion-created"!'
      // message: `本文： ${JSON.stringify(event.body)}`
      // message: `本文： ${event.body.name}`
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

  // callback(null, {
  //   statusCode: 200,
  //   body: eventString
  // })
}
