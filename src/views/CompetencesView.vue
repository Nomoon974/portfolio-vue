<template>
  <div class="w-full">
    <h1 class="text-7xl pl-8 flex flex-start">Compétences</h1>
    <div class="flex p-8 justify-center">
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
.text-7xl{
  font-family: 'Pathway Gothic One',serif;
  text-transform: uppercase;
}

</style>
