<template lang="pug">
section.sec
  h1.iyu-logo
    img(
      src="~assets/images/iyu-logo-RGB.svg"
      alt="iyu-logo"
    )
  video.mainVisual(
    src="~assets/videos/190430_iyu-webtop-video-20sec3000bit24F.mp4"
    autoplay
    loop
  )
    //- TODO: posterの設定
</template>

<style lang="scss" scoped>
.iyu-logo {
  width: 495px;
  text-align: center;
}
.sec {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.mainVisual {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
}
</style>
