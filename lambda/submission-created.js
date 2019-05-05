// 結論：おそらくfunctionフォルダに直接ファイルを置くか置かないかは関係ないかな・・・
import querystring from 'querystring'
import axios from 'axios'

exports.handler = function(event, context, callback) {
  const token = 'sFW0U11C8weGFxvGsnL8MMXG0aT3ta7fpqvSc2SHbRU'
  // const params = querystring.parse(decodeURIComponent(event.body)) // development

  // const eventKeys = Object.keys(event)

  // event はObject型。
  // event.body はString型。（どうして？）
  // console.log(event.body) は長すぎて取れない。フルで見れれば・・・

  const eventBody = event.body
  const eventBodyObj = JSON.parse(event.body)

  console.log('-- typeof event.body --')
  // console.log(typeof event.body)

  console.log('-- eventBodyObj.payload.human_fields.Name --')
  console.log(eventBodyObj.payload.human_fields.Name) // とれた！

  const body1 = eventBody.substr(0, 3000)
  console.log(body1)


  // console.log(getMsg(eventBodyObj.payload.data))

  axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
      message: getMsg(eventBodyObj.payload.data)
      // message: '固定メッセージ'
    })
  })
    .then(res => {
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
[LiveDate] ${params.reservedate}
[TicketsCount] ${params.reservecount}
[Email] ${params.email}
[Content]
${params.message}
  `

  return msg
}

// function arrayLogger(array) {
//   array.forEach((value, index) => {
//     console.log(value)
//   })
// }
