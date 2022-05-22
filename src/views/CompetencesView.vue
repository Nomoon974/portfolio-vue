<template>
  <div class="w-[99vw]">
    <h1 class="text text-6xl lg:text-7xl w-max pl-4 pr-4 pb-8 text-center lg:text-left">Compétences</h1>
    <div class="flex lg:pl-8 lg:pr-8 justify-center">
      <stack-div />
    </div>
  </div>
</template>

<script>
import StackDiv from "@/components/StackDiv";
export default {
  name: "CompetencesView",
  components: {
    StackDiv: StackDiv,
  }
}
</script>

<style scoped>
.text{
  font-family: 'Pathway Gothic One',serif;
  text-transform: uppercase;
}

</style>
