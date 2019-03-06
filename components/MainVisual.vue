<template lang="pug">
section.sec
  p.lead
    | test of background-movie.
  video.mainVisual(src="~assets/videos/190306_iyu-webtop-video-FHD.mp4", autoplay, loop)
    //- TODO: posterの設定
</template>

<style lang="scss" scoped>
.sec {
  position: relative;
}
.lead {
  margin-top: 30px;
  color: #fff;
}
.mainVisual {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
}
</style>
