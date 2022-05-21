<template>
  <div class="grid grid-cols-2 gap-20">
    <div class="h-full flex justify-center w-full"><img class="h-[665px] w-[665px]" src="@/assets/img/clip-education-1.png" alt=""></div>
    <div class="flex p-2 flex-col">
      <div class="test flex flex-col" v-for="(stack, key) in STACKS" :key="key">
        <div class="flex over bg-white h-40 w-42 rounded-xl shadow-xl shadow-slate-300/60 mb-2 mt-2" >
          <img class="p-5" :src="imgUrl(stack.logoPath)" alt="">
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

export default {
  name: "StackDiv",
  data: () => ({
   STACKS,
    level: STACKS.level
  }),
  methods: {
    imgUrl(link) {
      console.log(link)
      return require(`../assets/img/` + link + `.png`)
    },
    starLevel(level){
      if(level){
        return this.replace(level, "⭐")
      }
    }
  }
}
</script>

<style scoped>
.test:last-of-type .w-8{
  display: none;
}
</style>
