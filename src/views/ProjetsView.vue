<template>
  <div class="w-[90vw]">
    <h1 id="projets" class="text text-4xl lg:text-7xl w-full pl-4 pr-4 pb-8 text-center lg:text-left">projets</h1>
  <div class="pt-8">
    <grid-compo />
  </div>
  </div>
</template>

<script>
import gridCompo from "@/components/GridCompo";
import {gsap, Power0} from "gsap";
export default {
  name: "ProjetsViews",
  components: {
    gridCompo,
  },
  data() {
  },
  mounted() {
    this.slideInTitle()

  },
  methods: {
    slideInTitle(){
      let tl = gsap.timeline()

      tl.to(".text", {x:200, duration: 0.8, opacity: 1, ease: Power0.easeNone})

      tl.play()
    }
  }
}
</script>

<style scoped>
.text{
  font-family: 'Unica One', cursive;
  text-transform: uppercase;
  font-weight: 600;

  position: relative;
  left: -200px;
  opacity: 0;
  cursor: default;
}

</style>
