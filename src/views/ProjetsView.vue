<template>
  <div class="container">
    <h2 id="projets" class="text">projets</h2>
    <div class="grid-wrapper">
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
.container {
  width: 100%;
}

.text {
  font-family: 'Unica One', cursive;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  left: -200px;
  opacity: 0;
  cursor: default;
  font-size: 1.875rem;
  width: max-content;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  text-align: center;
}

.grid-wrapper {
  padding-top: 2rem;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: a1024px) {
  .text {
    font-size: 3rem;
    text-align: left;
  }
}
</style>
