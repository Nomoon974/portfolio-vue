<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 w-full">
    <div class="h-full flex justify-center w-full"><img class="w-[350px] h-[350px] lg:h-[500px] lg:w-[500px]" src="@/assets/img/clip-education-1.png" alt=""></div>
    <div class="flex p-2 flex-col">
      <div id="c" class=" test flex flex-col" v-for="(stack, key) in STACKS" :key="key">
        <div class="flex over bg-white h-40 w-42 rounded-xl shadow-xl shadow-slate-300/60 mb-2 mt-2" >
          <img class="p-2 lg:p-5 w-20 h-20" :src="imgUrl(stack.logoPath)" alt="">
          <div class="flex flex-col w-96 text-center">
          <div class="p-5 flex align-middle h-8"><p class="align-middle min-h-full">{{ stack.stackName }}</p></div>
          <div><p> {{ level }}</p></div>
          </div>
        </div>
        <img class="w-8 m-3 flex self-center " src="@/assets/icon/more.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>
import {STACKS} from "@/assets/STACKS";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin, ScrollTrigger);

export default {
  name: "StackDiv",
  data: () => ({
    STACKS,
    level: STACKS.level,
    stackID: STACKS.id
  }),
  mounted: function () {
    let bande = document.querySelectorAll("#c");
    this.pierreQuiRoule(bande);
  },
  methods: {
    imgUrl(link) {
      console.log(link)
      return require(`../assets/img/` + link + `.png`)
    },
    starLevel(level){
      if(level){
        return this.replace(level, "⭐")
      }
    },

    pierreQuiRoule(a){
      for (let i = 0; i < a.length; i++) {
        gsap.to(a[i], {
          scrollTrigger: {
            trigger: a[i],
            start: "top center",
            toggleActions: "play pause",
          },
          opacity:1,
          ease: "power1.inOut",
          duration: 1
        })
      }

    }
  }
}
</script>

<style scoped>
.test:last-of-type .w-8 {
  display: none;
}

#c{
  opacity: 0;
}

</style>
