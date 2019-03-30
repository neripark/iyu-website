import Vue from 'vue'
// import VueScrollTo from 'vue-scrollto';

// スクロールイベント
Vue.directive('scroll', {
  inserted: function(el, binding) {
    window.addEventListener('scroll', function() {
      binding.value(el)
    })
  }
})

// Vue.use(VueScrollTo);
