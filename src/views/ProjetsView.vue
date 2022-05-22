<template>
  <div class="w-[99vw]">
    <h1 class="text text-6xl lg:text-7xl w-max pl-4 pr-4 pb-8 text-center lg:text-left">projets</h1>
  <div class="pt-8">
    <grid-compo />
  </div>
  </div>
</template>

<script>
import gridCompo from "@/components/GridCompo";
export default {
  name: "ProjetsViews",
  components: {
    gridCompo,
  },
  data() {
    return {
      message: 'salut'
    }
  },
}
</script>

<style scoped>
.text{
  font-family: 'Pathway Gothic One', serif;
  text-transform: uppercase;
}

</style>
