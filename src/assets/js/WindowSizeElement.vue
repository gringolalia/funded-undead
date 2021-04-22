<!-- eslint-disable -->
<template>
  <div>
    <div class="only-top">
      <div>{{ $mq }}サイズ</div>
      <div v-if="small">smallサイズ</div>
      <div v-else-if="medium">mediumサイズ</div>
      <div v-else-if="tablet">tabletサイズ</div>
      <div v-else-if="largePlus">large+サイズ</div>
      <div v-else-if="large">largeサイズ</div>
      <div v-else-if="xlarge">xlargeサイズ</div>
      <div v-else>xxlargeサイズ</div>
    </div>
    <div>window width: {{ windowWidth }} px</div>
    <div>window height: {{ windowHeight }} px</div>
    <div>amount of scrolling : {{ windowPageYOffset }} px</div>
  </div>
</template>

<script>
import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    small: 640,
    medium: 769,
    tablet: 1025,
    large: 1201,
    xlarge: 1441,
    xxlarge: Infinity,
  },
  defaultBreakpoint: "small",
});

Vue.mixin({
  data() {
    return {
      small: false, // until 640px
      medium: false, // until 769px
      // tabletOnly: false, // from 769px and until 1025px
      tablet: false, // from 1025px
      largePlus: false, // from 1025px and until 1201px
      large: false, // from 1025px
      xlarge: false, // from 1201px
      xxlarge: false, // from 1441px
    };
  },
});

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      windowPageYOffset: window.pageYOffset,
    };
  },
  watch: {
    $mq() {
      this.small = this.$mq === "small";
      this.medium = this.$mq === "medium";
      this.tablet = this.$mq === "tablet";
      // this.tabletOnly = this.$mq === 'tablet'
      // this.tablet = this.$mq === 'tablet' || this.$mq === 'desktop'
      this.largePlus = this.$mq === "xlarge" || this.$mq === "xxlarge";
      this.large = this.$mq === "large";
      this.xlarge = this.$mq === "xlarge";
      this.xxlarge = this.$mq === "xxlarge";
    },
  },
  mounted() {
    this.small = this.$mq === "small";
    this.medium = this.$mq === "medium";
    this.tablet = this.$mq === "tablet";
    this.largePlus = this.$mq === "xlarge" || this.$mq === "xxlarge";
    this.large = this.$mq === "large";
    this.xlarge = this.$mq === "xlarge";
    this.xxlarge = this.$mq === "xxlarge";
    window.addEventListener("resize", this.calculateWindowWidth);
    window.addEventListener("resize", this.calculateWindowHeight);
    window.addEventListener("scroll", this.calculateWindowPageYOffset);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calculateWindowWidth);
    window.removeEventListener("resize", this.calculateWindowHeight);
    window.removeEventListener("scroll", this.calculateWindowPageYOffset);
  },
  methods: {
    calculateWindowWidth() {
      // resizeのたびに発火する
      this.windowWidth = window.innerWidth;
    },
    calculateWindowHeight() {
      this.windowHeight = window.innerHeight;
    },
    calculateWindowPageYOffset() {
      this.windowPageYOffset = window.pageYOffset;
    },
  },
};
</script>
