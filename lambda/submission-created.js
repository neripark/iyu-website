import querystring from 'querystring'
import axios from 'axios'

exports.handler = function(event, context, callback) {
  // todo: リポジトリ外に移動する
  const token = 'sFW0U11C8weGFxvGsnL8MMXG0aT3ta7fpqvSc2SHbRU'

  // NOTE:
  // production環境で、event はオブジェクト型で来ているが、event.body はString型だった。
  // Netlify側のログが出たり出なかったりしたため苦労したが、
  // JSON形式の文字列なので JSON.parse(event.body) で取得できる。
  // が、console.log が長すぎるとNetlify側のコンソールで末尾の3500文字程度しか表示してくれないので、
  // 先頭の3500文字を切り取って表示し、キー名を突き止めた。

  // NOTE:
  // function/ に直接ファイルを置くか置かないかは関係なかった。
  // ローカルでのエミュレートに合わせ、Netlify 側でもビルドするようにした。
  // そうしないと axios も使えないし。

  // todo: 環境変数でdevとprodを分ける
  // const params = querystring.parse(decodeURIComponent(event.body)) // development
  const params = JSON.parse(event.body).payload.data // production

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
    .then(res => {
      res.data.statusCode = 200
      res.data.body = 'ok'
      callback(null, res.data)
    })
    .catch(err => callback(err))
}

function getMsg(params) {
  // todo: reservedateとreservecountがなかったら表示しない制御
  const msg = `
webサイトからContactがありました！

--
[Name] ${params.name}
[Category] ${params.category}
[ReserveDate] ${params.reservedate}
[ReserveCount] ${params.reservecount}
[Email] ${params.email}
[Message]
${params.message}
  `

  return msg
}
