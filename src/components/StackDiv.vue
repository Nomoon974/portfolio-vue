<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10 w-full">
    <div class=" flex justify-center"><img class="img w-[350px] h-[350px] lg:h-[500px] lg:w-[500px]" src="@/assets/img/clip-education-1.png" alt=""></div>
    <!-- <div class="img2 flex justify-center"><img class="img w-[350px] h-[350px] lg:h-[500px] lg:w-[500px]" src="@/assets/img/clip-education-1.png" alt=""></div>
    <div class=" flex justify-center"><img class="img w-[350px] h-[350px] lg:h-[500px] lg:w-[500px]" src="@/assets/img/clip-education-1.png" alt=""></div> -->
    <div class="titi flex p-2 flex-col col-span-2">
      <div id="c" class="test flex flex-col" v-for="stack in STACKS" :key="stack.id" >
        <div class="flex over bg-white h-auto w-74 rounded-xl shadow-xl shadow-slate-300/60 mb-2 mt-2">
          <img class="p-2 w-20 h-20 lg:p-5 lg:w-48 lg:h-48" :src="imgUrl(stack.logoPath)" alt="">
          <div class="flex flex-col w-max text-center">
          <div class="pl-2 pt-4 flex align-middle h-8"><span class="font-extrabold align-middle min-h-full" >{{ stack.stackName }} | {{ starLevel(stack.level) }} </span></div>
          <div class="w-62 overflow-auto h-auto"><p class="font-normal text-left p-2 h-auto">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p></div>
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
      return "⭐".repeat(level)
    },

    pierreQuiRoule(a){
      for (let i = 0; i < a.length; i++) {
        gsap.to(a[i], {
          scrollTrigger: {
            trigger: a[i],
            start: "0 70%",
            toggleActions: "play",
          },
          opacity:1,
          ease: "in",
          duration: 1
        })
      }
    },

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
