<template>
    <div class = "shop">
      <div class="slider-wrapper">
        <div class="slider-content">
          <slider v-if="sliders.length" :sliders=sliders></slider>
        </div>
      </div>
    </div>
</template>
<script>
import { getCarouselList } from '@/service/shop'
import Slider from '@/components/base/slider/slider'
export default {
  name: 'shop',
  components: {
    Slider
  },
  data() {
    return {
      sliders: []
    }
  },
  async created() {
    const result = await getCarouselList()
    this.sliders = result
  }
}
</script>
<style lang='scss' scoped>
  .shop{
    position:fixed;
    width:100%;
    height:88px;
    .slider-wrapper{
      position:relative;
      width:100%;
      height:0;
      padding-top:40%;
      overflow:hidden;
      .slider-content{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
      }
    }
  }
</style>
