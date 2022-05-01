<template>  
  <section class="contact">
    <heading text="Contact" color="yellow"></heading>
    <div class="wrap">
      <p class="lead">ライブのチケットお取り置き、共演のお誘い、<br>メッセージなど、お気軽にご連絡ください。</p>
      <form class="contact-form" name="iyu-form" method="POST" netlify-honeypot="bot-field" data-netlify="true" @submit.prevent="handleSubmit">
        <input type="hidden" name="form-name" value="iyu-form">
        <input name="name" type="text" placeholder="お名前" required v-model="formData.name">
        <select class="category" name="category" required v-model="formData.category">
          <option value="" disabled>- お問い合わせ種類 -</option>
          <option value="live">ライブのチケットお取り置き</option>
          <option value="together">共演のお誘い</option>
          <option value="other">その他</option>
        </select>
        <div class="show-only-live" v-show="isSelectedTicketReserve">
          <select class="is-small" name="reservedate" v-model="formData.reservedate">
            <option value="" selected disabled>- お取り置き日程 -</option>
            <option v-for="live in liveDetails" v-if="$dayjs().subtract(1, 'day').isBefore(live.date)" :key="live.date">{{ `${$dayjs(live.date).format('YYYY/M/D (ddd)')} - ${live.title}` }}</option>
          </select>
          <select class="is-small" name="reservecount" v-model="formData.reservecount">
            <option value="" selected disabled>- お取り置き枚数 -</option>
            <option v-for="value in maxTicketNumber" :key="value" :value="`${value}枚`">{{ `${value}枚` }}</option>
          </select>
        </div>
        <input name="email" type="email" placeholder="ご連絡先メールアドレス" required v-model="formData.email">
        <textarea name="message" placeholder="内容" required v-model="formData.message"></textarea>
        <button class="send-button" :disabled="isFormDisabled" type="submit">{{isFormDisabled ? "送信中..." : "送信する"}}</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Heading from '~/components/Atoms/Heading.vue';
import { typeOfLiveDetail } from '~/plugins/contentful.js';

export default {
  components: {
    Heading
  },
  props: {
    liveDetails: {
      type: Array[typeOfLiveDetail],
      default: []
    }
  },
  data() {
    return {
      maxTicketNumber: 5,
      isFormDisabled: false,
      formData: {
        // memo: form本体のname、Netlifyのform-API生成用のダミーの両方と名前を一致させる
        name: '',
        category: '',
        reservedate: '',
        reservecount: '',
        email: '',
        message: ''
      }
    };
  },
  computed: {
    isSelectedTicketReserve() {
      return this.formData.category === 'live';
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
        .join('&');
    },
    handleSubmit() {
      this.isFormDisabled = true;
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      };
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
        .finally(() => {
          this.isFormDisabled = false;
        });
    }
  }
};
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
  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

// -- form parts basic style --
input,
select,
textarea,
button {
  width: 100%;
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
