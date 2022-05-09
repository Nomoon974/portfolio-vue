<template>
  <div>
    <grid-compo />
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

</style>
