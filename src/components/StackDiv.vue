<template>
<div class="flex p-2 flex-col h-min pl-20 pr-20">
  <div class="flex flex-col" v-for="(projet, key) in PROJETS" :key="key">
    <div class="flex over bg-white h-40 w-42 rounded-2xl shadow-xl shadow-slate-300/60 mb-6 mt-6" >
      <img class="p-5" src="@/assets/img/js.png" alt="">
      <div class="p-5 flex align-middle h-8"><p class="align-middle min-h-full">{{ projet.profile.about }}</p></div>
    </div>
    <img class="w-8 m-3 flex self-center " src="@/assets/icon/more.png" alt="">
  </div>
</div>
</template>

<script>
import {PROJETS} from "@/assets/projectList";
export default {
  name: "StackDiv",
  data: () => ({
    PROJETS,
  })
}
</script>

<style scoped>

</style>
