<template lang="pug">
.youtube
  a.link(
    href="https://www.youtube.com/channel/UCOhjr68zt5bWJo8cLKs2YAw"
  )
    img.icon(
      src="~assets/images/yt_icon_mono_dark.png"
      alt="iyu youtube channel"
    )
</template>

<style lang="scss" scoped>
.youtube {
  width: 40px;
  padding: 0 10px;
  box-sizing: content-box;
}
.icon {
  max-width: 30px;
  height: auto;
  box-sizing: content-box;
}
.link {
  display: block;
  text-align: center;
}
</style>
