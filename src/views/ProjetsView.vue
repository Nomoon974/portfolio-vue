<template>
  <div class="projet-container">
    <h2 id="projets" class="text text-3xl lg:text-5xl pl-4 pr-4 pb-8 ">projets</h2>
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
.projet-container {
  width: 100%;
}

.grid-wrapper {
  padding-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  width: max-content;
}

@media only screen and (max-width: 1000px) {
  .text {
    text-align: left;
  }
}
</style>
