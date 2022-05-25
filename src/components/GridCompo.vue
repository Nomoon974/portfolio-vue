<template>
  <div class="w-[99vw] grid-cols-1 lg:grid-cols-2 grid self-center justify-between ">
    <div class="w-full items-center flex flex-col ">
      <div id="grille" class="overflow-auto flex w-[90vw] lg:w-[35vw] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
        <img class="object-center" src="@/assets/img/Hello.jpg" alt="">
        <div class="flex w-full flex-col lg:justify-evenly p-2">
        Gauche <br>
        {{ projet.email }} <br>
        {{ projet.username }} <br>
        <div class="flex justify-end items-center"><btn-rouge class="btn_red"
        name="Voir plus" /></div>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center  flex-col ">
      <div id="grille" class="overflow-auto flex w-[90vw] lg:w-[35vw] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
        <img class="object-center" src="@/assets/img/Hello.jpg" alt="">
        <div class="flex w-full flex-col lg:justify-evenly p-2">
        droite <br>
        {{ projet.email }} <br>
        {{ projet.username }} <br>
        <div class="flex justify-end items-center"><btn-rouge class="btn_red"
        name="Voir plus" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {PROJETS} from "@/assets/projectList";
import btnRouge from "@/components/BtnRouge";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { Power0 } from "gsap";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin, Power0);
export default {
  name: "GridCompo.vue",
  components:{
    btnRouge
  },
  data: () => ({
    PROJETS,
}),
  mounted() {
    this.slideIn("#grille")
  },
  methods: {
    slideIn(grille) {
      let tl = gsap.timeline({repeat: 0,});
      tl.to(grille, {y: -200, duration:0.8, opacity: 1, ease: Power0.easeNone}, "<");

      tl.play()
    }
  }
}
</script>

<style scoped>
.btn_red{
  font-size: 1rem;
}

#grille{
  opacity: 0;
  position: relative;
  bottom: -200px;
}


</style>
