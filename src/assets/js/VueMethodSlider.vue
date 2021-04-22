<template>
  <div class="grid-x grid-margin-x">
    <div class="cell small-12 medium-10">
      <div
        id="slider"
        :data-initial-start="dataValue"
        :data-end="dataEnd"
        class="slider"
        data-slider
        data-step="1"
        data-position-value-function="log"
        data-non-linear-base="5"
      >
        <span
          class="slider-handle"
          data-slider-handle
          role="slider"
          tabindex="1"
          aria-controls="sliderOutputNonLinear"
        ></span>
        <!--span class="slider-fill" data-slider-fill></span>
        <input type="hidden" class="slider-input" /-->
      </div>
    </div>
    <div class="cell small-12 medium-2">
      <input id="sliderOutputNonLinear" v-model="dataValue" type="number" />
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Slider",
  data() {
    return {
      dataValue: 50,
      dataEnd: 100,
    };
  },
  mounted() {
    this.slider = new Foundation.Slider($("#slider"), {
      // These options can be declarative using the data attributes
      step: 10,
    });
    this.slider.$element.on("moved.zf.slider", () => {
      this.dataValue = this.slider.inputs.val();
    });
  },
  destroyed() {
    this.slider.destroy();
  },
};
</script>
