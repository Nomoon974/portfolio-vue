<template>
  <div class="basis-0 w-screen flex space-x-72 justify-center">
    <div class=" ">
      <div class="overflow-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
        <img class="object-center" src="@/assets/img/Hello.jpg" alt="">
        Gauche <br>
        {{ projet.email }} <br>
        {{ projet.username }} <br>
      </div>
    </div>
    <div class="">
      <div class="overflow-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20" v-for="(projet,id) in PROJETS" :key="id">
        <img class="object-center" src="@/assets/img/Hello.jpg" alt="">
        droite <br>
        {{ projet.email }} <br>
        {{ projet.username }} <br>
      </div>
    </div>
  </div>
</template>

<script>
import {PROJETS} from "@/assets/projectList";

export default {
  name: "GridCompo.vue",
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
