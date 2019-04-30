<template lang="pug">
form.contact-form(
  name="iyu-contact"
  method="POST"
  netlify-honeypot="bot-field"
  data-netlify="true"
)
  //- form start
  input(
    name="name"
    type="text"
    placeholder="お名前"
    required
  )
  select.category(
    name="cateogory"
    required
  )
    //- option(
    //-   value=""
    //-   disabled
    //- ) - お問い合わせ種類を選択してください -
    //- option(
    //-   value="live"
    //- ) ライブのチケットお取り置き
    //- option(
    //-   value="together"
    //- ) 共演のお誘い
    //- option(
    //-   value="other"
    //- ) その他
  //- チケット取り置きが選択されたときのみ
  select.is-small(
    name="live-date"
  )
    //- option(
    //-   value=""
    //-   selected
    //-   disabled
    //- ) - お取り置き日程 -
    //- option(
    //-   v-for="live in liveDetails"
    //-   :key="live.date"
    //- ) {{ `${live.date} - ${live.title}` }}
  select.is-small(
    name="tickets-count"
  )
    //- option(
    //-   value=""
    //-   selected
    //-   disabled
    //- ) - お取り置き枚数 -
    //- option(
    //-   v-for="value in maxTicketNumber"
    //-   :key="value"
    //-   :value="`${value}枚`"
    //- ) {{ `${value}枚` }}
  input(
    name="email"
    type="email"
    placeholder="ご連絡先メールアドレス"
    required
  )
  textarea(
    name="content"
    placeholder="内容"
    required
  )

</template>
