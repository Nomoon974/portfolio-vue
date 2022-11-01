<template>
  <div class="stack-div-container">
    <div class="div-img-learn flex justify-center"><img class="learn w-[350px] h-[350px]" src="@/assets/img/skills.png" alt=""></div>
    <!-- <div class="img2 flex justify-center"><img class="img w-[350px] h-[350px] lg:h-[500px] lg:w-[500px]" src="@/assets/img/clip-education-1.png" alt=""></div>
    <div class=" flex justify-center"><img class="img w-[350px] h-[350px] lg:h-[500px] lg:w-[500px]" src="@/assets/img/clip-education-1.png" alt=""></div> -->
    <div class="stacks-card flex p-2 flex-col">
      <div id="c" class="test flex flex-col" v-for="stack in STACKS" :key="stack.id" >
        <div class="stack-line flex over bg-white h-auto rounded-xl shadow-xl shadow-slate-300/60 mb-2 mt-2 h-max">
          <img class="p-2 w-20 h-20 lg:p-5 lg:w-40 lg:h-40" :src="imgUrl(stack.logoPath)" alt="">
          <div class="flex flex-col w-max text-center">
          <div class="pl-2 pt-4 flex align-middle h-8"><span class="font-extrabold align-middle min-h-full" >{{ stack.stackName }} | {{ starLevel(stack.level) }} </span></div>
          <div class="hello h-auto w-auto"><p class="font-normal text-left pt-2 pb-2 pl-2 h-auto">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p></div>
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
.stack-div-container {
  width: 100%;
  display: grid;
  grid-template-areas:
      "img list";
  grid-template-columns: 25% 70%;
  gap: 50px;
}

.div-img-learn {
  grid-area: img;
}

.stacks-card {
  grid-area: list;
  width: 100%;
}

.test:last-of-type .w-8 {
  display: none;
}

.learn {
  border-radius: 50px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.52);
}

#c{
  opacity: 0;
}

.stacks-card {
  color: #252525;
}

@media only screen and (max-width: 1000px) {
  .stack-div-container {
    grid-template-areas:
        "img"
        "list";
    grid-template-columns: 1fr;
  }

  .stacks-card {
    width: 100vw;
  }

  .stack-line {
    flex-direction: column;
    justify-content: center;
  }

  .font-normal {
    overflow-wrap: break-word;
    max-width: 100vw;
  }

}

</style>
