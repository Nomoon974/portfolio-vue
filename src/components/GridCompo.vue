<template>
  <div class="basis-0 w-full flex space-x-72 justify-center">
    <div class=" ">
      <div class="overflow-auto flex w-[30vw] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
        <img class="object-center" src="@/assets/img/Hello.jpg" alt="">
        <div class="flex justify-evenly">
        Gauche <br>
        {{ projet.email }} <br>
        {{ projet.username }} <br>
        <div><btn-rouge
        name="Voir plus" /></div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="overflow-auto flex w-[30vw] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
        <img class="object-center" src="@/assets/img/Hello.jpg" alt="">
        <div class="flex justify-evenly">
        droite <br>
        {{ projet.email }} <br>
        {{ projet.username }} <br>
        <div class="flex justify-items-center"><btn-rouge
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
.grand-container{
  display: flex;
  width: 100vw;
}


</style>
