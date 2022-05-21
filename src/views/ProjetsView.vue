<template>
  <div class="w-[99vw]">
    <h1 class="text-7xl w-full pl-8 flex flex-start">projets</h1>
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
.text-7xl{
  font-family: 'Pathway Gothic One', serif;
  text-transform: uppercase;
}

</style>
