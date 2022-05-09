<template>
  <div class="w-screen flex flex-col justify-center">
  <h1 class="text-9xl w-max pl-8 pb-8">Contactez-moi</h1>
  <div class="w-full pl-8 items-stretch">
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
.text-9xl{
  font-family: 'Pathway Gothic One',serif;
  text-transform: uppercase;
}


</style>
