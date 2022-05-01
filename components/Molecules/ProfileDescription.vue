<template>
  <div class="profile-description">
    <ul class="member-list">
      <li class="member">
        <p class="name">
          nagata
        </p>
        <p class="part">
          (Ba)
        </p>
      </li>
      <li class="member">
        <p class="name">
          koudai
        </p>
        <p class="part">
          (Key)
        </p>
      </li>
      <li class="member">
        <p class="name">
          zun
        </p>
        <p class="part">
          (Vo)
        </p>
      </li>
      <li class="member">
        <p class="name">
          kou
        </p>
        <p class="part">
          (Dr)
        </p>
      </li>
      <li class="member">
        <p class="name">
          neri
        </p>
        <p class="part">
          (Gt)
        </p>
      </li>
    </ul>
    <p class="description">
      2017年3月結成。都内を中心に活動中。<br />都市の雑踏、積み重ねの日々、<br
        class="break-sp"
      />暮らしの中に等身大で身近な音楽。
    </p>
  </div>
</template>

<style lang="scss" scoped>
.profile-description {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 30px $side-padding-pc;
  @include mq(tb) {
    position: static;
    bottom: auto;
    left: auto;
    transform: unset;
    background: $main-blue;
  }
}
.member-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  color: $white;
  margin: 0 auto;
}
.member {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  &:not(:last-child) {
    &::after {
      content: ',';
      display: block;
      padding: 0 0.7em 0 0;
    }
  }
}
.part {
  margin-left: 0.2em;
}
.description {
  text-align: center;
  color: $white;
  letter-spacing: 0.1em;
  line-height: 1.8;
  position: relative;
  margin-top: 20px;
  &::selection {
    background-color: $yellow-rgba;
    color: $black-rgba;
  }
  @include mq() {
    position: static;
    background: $main-blue;
    font-size: 14px;
  }
  @include mq(fhd) {
    line-height: 2;
  }
}
.break-sp {
  display: none;
  @include mq() {
    display: inline;
  }
}
</style>
