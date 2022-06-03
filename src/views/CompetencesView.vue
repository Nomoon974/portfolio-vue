<template>
  <div class="w-[99vw]">
    <h1 class="text text-6xl lg:text-7xl w-max pl-4 pr-4 pb-8 text-center lg:text-left">Compétences</h1>
    <div class="flex lg:pl-8 lg:pr-8 justify-center">
      <stack-div />
    </div>
  </div>
</template>

<script>
import StackDiv from "@/components/StackDiv";
import {gsap} from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin, ScrollTrigger);

export default {
  name: "CompetencesView",
  components: {
    StackDiv: StackDiv,
  },
  mounted: function () {
    let titre = document.querySelector(".text");
    titre = titre.textContent
    let elem = "";
    console.log(titre.textContent)
    for (let i = 0; i < titre.length; i++) {
      elem = titre[i];
      console.log(elem)
    }

    this.pierreQuiRoule(titre)

  },
  methods: {
    pierreQuiRoule(b){
      for (let i = 0; i < b.length; i++) {
        gsap.to(b[i], {
          scrollTrigger: {
            trigger: b[i],
            start: "top center",
            toggleActions: "play pause",
          },
          x:1,
          ease: "power1.inOut",
          duration: 1
        })
      }
    }
  }
}
</script>

<style scoped>
.text{
  font-family: 'Titillium Web', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
}

</style>
