<template>
  <div id="competence_container" class="w-full mb-20">
    <h2 id="competences" class="text text-3xl lg:text-5xl w-full pl-4 pr-4 pb-8 text-center lg:text-left ">Compétences</h2>
    <div class="flex lg:pl-8 lg:pr-8 justify-center">
      <stack-div />
    </div>
  </div>
</template>

<script>
import StackDiv from "@/components/StackDiv";
import {gsap, Power0} from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin, Power0);

export default {
  name: "CompetencesView",
  components: {
    StackDiv: StackDiv,
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
  cursor: default;

  position: relative;
  left: -200px;
  opacity: 0;
}

#competence_container {
  display: flex;
  justify-content: center;
}



</style>
