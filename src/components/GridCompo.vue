<template>
  <div class="basis-0 w-full flex space-x-72 justify-center">
    <div class=" ">
      <div class="overflow-auto flex w-[30vw] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
        <img class="object-center" src="@/assets/img/Hello.jpg" alt="">
        <div class="flex justify-evenly p-2">
        Gauche <br>
        {{ projet.email }} <br>
        {{ projet.username }} <br>
        <div class="flex justify-end items-center"><btn-rouge class="btn_red"
        name="Voir plus" /></div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="overflow-auto flex w-[30vw] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
        <img class="object-center" src="@/assets/img/Hello.jpg" alt="">
        <div class="flex justify-evenly p-2">
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
  font-size: 15px;
}


</style>
