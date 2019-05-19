<template lang="pug">
section.contact
  heading(
    text="Contact"
    color="yellow"
  )
  //- todo: required の制御
  .wrap
    p.lead
      | ライブのチケットお取り置き、共演のお誘い、
      br
      | メッセージなど、お気軽にご連絡ください。
    form.contact-form(
      name="iyu-form"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      @submit.prevent="handleSubmit"
    )

      //- NOTE:
      //- formをデプロイするとNetlify側で鍵となるこのhiddenタグをappendしてくれるが、
      //- Nuxt.jsの仕様により、prerenderされたDOMと実際に描画されたDOMに差分があるとJSエラーとなるため、
      //- SSRにする、かつno-ssrでくくらない、なおかつ直接hiddenタグを記述している。
      //- https://qiita.com/yahsan2/items/a70c4c8f617ee9b1f9ff

      input( type="hidden" name="form-name" value="iyu-form" )

      //- お名前
      //- input( name="name" type="text" placeholder="お名前" required @input="ev => formData.name = ev.target.value")
      input( name="name" type="text" placeholder="お名前" required v-model="formData.name")

      //- お問い合わせ種類
      select.category( name="category" required v-model="formData.category" )
        option( value="" disabled ) - お問い合わせ種類 -
        option( value="live" ) ライブのチケットお取り置き
        option( value="together" ) 共演のお誘い
        option( value="other" ) その他

      //- チケット取り置きが選択されたときのみ
      .show-only-live( v-show="isSelectedTicketReserve" )
        //- お取り置き日程
        select.is-small( name="reservedate" v-model="formData.reservedate" )
          option( value="" selected disabled ) - お取り置き日程 -
          option( v-for="live in liveDetails" :key="live.date" ) {{ `${live.date} - ${live.title}` }}
        //- お取り置き枚数
        select.is-small( name="reservecount" v-model="formData.reservecount" )
          option( value="" selected disabled ) - お取り置き枚数 -
          option( v-for="value in maxTicketNumber" :key="value" :value="`${value}枚`" ) {{ `${value}枚` }}

      //- メールアドレス
      input( name="email" type="email" placeholder="ご連絡先メールアドレス" required v-model="formData.email" )

      //- 本文
      textarea( name="message" placeholder="内容" required v-model="formData.message" )

      //- 送信ボタン
      button.send-button( type="submit") 送信する
    //- p.test(@click="logger") trigger
    //- p.test(@click="printEncode") encode
</template>

<script>
import Heading from '~/components/Heading.vue'
import liveArray from '~/assets/js/LiveDetails.js'
import axios from 'axios'

export default {
  components: {
    Heading
  },
  data() {
    return {
      liveDetails: liveArray,
      maxTicketNumber: 5,
      formData: {
        // memo: form本体のname、Netlifyのform-API生成用のダミーの両方と名前を一致させる
        name: '',
        category: '',
        reservedate: '',
        reservecount: '',
        email: '',
        message: ''
      }
    }
  },
  computed: {
    isSelectedTicketReserve() {
      return this.formData.category === 'live'
    }
  },
  methods: {
    // logger() {
    //   console.log(JSON.stringify(this.formData))
    // },
    // printEncode() {
    //   console.log(JSON.stringify(this.encode(this.formData)))
    // },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          // todo: 環境変数でdevとprodを分ける
          // '/.netlify/functions/submission-created', // development
          '/', // production
          this.encode({
            'form-name': 'iyu-form',
            ...this.formData
          }),
          axiosConfig
        )
        .then(res => alert('ご連絡ありがとうございます！返信をお待ち下さい。'))
        .catch(err =>
          alert(
            '申し訳ありません！エラーが発生しました。\r\nメール（iyumusictokyo@gmail.com）かTwitterでお問い合わせください。\r\n\r\n' +
              err
          )
        )
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  background: $main-blue;
  padding: 0 $side-padding-pc 80px;
  @include mq() {
    padding: 0 $side-padding-sp 50px;
  }
}
.wrap {
  max-width: 500px;
  margin: 0 auto;
}
.lead {
  color: $white;
  text-align: center;
  &::selection {
    background: $yellow-rgba;
    color: $main-blue;
  }
  br {
    @include mq() {
      display: none;
    }
  }
}
.contact-form {
  margin-top: 10px;
}
.show-only-live {
  text-align: right;
  .is-small {
    width: 95%;
  }
}
.send-button {
  background: $orange;
  color: $white;
  cursor: pointer;
}

// -- form parts basic style --
input,
select,
textarea,
button {
  width: 100%;
  -webkit-appearance: none;
  background: $white;
  border: none;
  border-radius: 0;
  margin-top: 10px;
  font-size: 16px;
  padding: 0.5em 0.7em;
  outline-color: $yellow-rgba;
}
button {
  user-select: none;
}
textarea {
  resize: vertical;
  height: 10em;
}
</style>
