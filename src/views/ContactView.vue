<template>
  <div class="w-[99vw] flex flex-col justify-center">
  <h1 class="text text-6xl lg:text-7xl w-max pl-4 pr-4 pb-8 text-center lg:text-left">Contactez-moi</h1>
  <div class="w-full pl-4 pr-4 items-stretch">
    <contact-compo />
  </div>
  </div>
</template>

<script>
import contactCompo from "@/components/ContactCompo";

export default {
  name: "ContactView",
  components: {
    contactCompo,
  }
}

</script>

<style scoped>
.text{
  font-family: 'Pathway Gothic One',serif;
  text-transform: uppercase;
}


</style>
