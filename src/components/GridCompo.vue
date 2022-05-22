<template>
  <div class="w-[99vw] grid-cols-1 lg:grid-cols-2 grid self-center justify-between ">
    <div class="w-full items-center flex flex-col ">
      <div class="overflow-auto flex w-[80vw] lg:w-[35vw] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
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
      <div class="overflow-auto flex w-[80vw] lg:w-[35vw] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
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

export default {
  name: "GridCompo.vue",
  components:{
    btnRouge
  },
  data: () => ({
    PROJETS,
})
}
</script>

<style scoped>
.btn_red{
  font-size: 1rem;
}


</style>
