<template lang="pug">
.contact
  heading.heading-adj(
    text="Contact"
    color="yellow"
  )
  //- todo: required の制御
  .wrap
    p.lead
      | ライブのチケットお取り置き、共演のお誘いなど、お気軽にご連絡ください。
    form.contact-form(
      method="POST"
      data-netlify="true"
    )
      input(
        name="name"
        type="text"
        placeholder="お名前"
        required
      )
      select.category(
        name="cateogory"
        required
        v-model="selectedCategory"
      )
        option(
          value=""
          disabled
        ) - お問い合わせ種類を選択してください -
        option(
          value="live"
        ) ライブのチケットお取り置き
        option(
          value="together"
        ) 共演のお誘い
        option(
          value="other"
        ) その他
      //- チケット取り置きが選択されたときのみ
      .show-only-live(
          v-show="isSelectedTicketReserve"
        )
        select.is-small(
          name="live-date"
        )
          option(
            value=""
            selected
            disabled
          ) - お取り置き日程 -
          option(
            v-for="live in liveDetails"
            :key="live.date"
          ) {{ `${live.date} - ${live.title}` }}
        select.is-small(
          name="tickets-count"
        )
          option(
            value=""
            selected
            disabled
          ) - お取り置き枚数 -
          option(
            v-for="value in maxTicketNumber"
            :key="value"
            :value="`${value}枚`"
          ) {{ `${value}枚` }}
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
      button(
        type="submit"
      ) 送信
</template>

<script>
import Heading from '~/components/Heading.vue'
import liveArray from '~/assets/js/LiveDetails.js'

export default {
  components: {
    Heading
  },
  data() {
    return {
      liveDetails: liveArray,
      maxTicketNumber: 5,
      selectedCategory: ''
    }
  },
  computed: {
    isSelectedTicketReserve() {
      return this.selectedCategory === 'live'
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  background: $main-blue;
  padding-bottom: 50px;
}
.heading-adj {
  padding: 30px 0;
}
.wrap {
  max-width: 400px;
  margin: 0 auto;
}
.lead {
  color: $white;
  text-align: center;
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

// -- form parts basic style --
input,
select,
textarea {
  width: 100%;
  -webkit-appearance: none;
  background: $white;
  border: none;
  border-radius: 0;
  margin-top: 10px;
  font-size: 16px;
  padding: 0.5em 0.7em;
}
textarea {
  resize: vertical;
  height: 10em;
}
</style>
