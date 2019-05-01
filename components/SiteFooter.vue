<template lang="pug">
footer.site-footer
  .wrap-mail
    p.mail-img
      img.mail-icon(
        src="~/assets/images/mail-icon.svg"
        alt="mail"
      )
    .text
      p.mail-text メールでのお問い合わせはこちらまでお願いいたします。
      p.mail-text iyumusictokyo@gmail.com
  .wrap-copyright
    p.copyright-text ©iyumusic.tokyo All Rights Reserved.
  .wrap-sns-icons
    a(
      href="https://twitter.com/iyu_band"
      target="_blank"
    )
      img.twitter-icon(
        src="~/assets/images/twitter-icon.svg"
        alt="mail"
      )
</template>

<style lang="scss" scoped>
* {
  color: $white;
}
// img
.mail-icon {
  height: 50px;
  width: auto;
}
.twitter-icon {
  height: 40px;
  width: auto;
}
// styles
.site-footer {
  width: 100%;
  padding: 20px 40px;
  background-color: $main-blue;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid $white;
}
.wrap-mail {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 33%;
  font-size: 14px;
  .text {
    margin-left: 15px;
  }
}
.wrap-copyright {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  font-size: 12px;
}
.wrap-sns-icons {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
}
</style>
