<template>
  <div class="w-[90vw] flex flex-col justify-center">
  <h1 id="contact" class="text text-4xl lg:text-7xl w-full pl-4 pr-4 pb-8 text-center lg:text-left">Contactez-moi</h1>
  <div class="w-full h-full pl-4 pr-4 items-stretch">
    <contact-compo />
  </div>
  </div>
</template>

<script>
import contactCompo from "@/components/ContactCompo";
import {gsap, Power0} from "gsap";

export default {
  name: "ContactView",
  components: {
    contactCompo,
  },
  mounted() {
    this.slideInTitle()

  },
  methods: {
    slideInTitle(){
      let tl = gsap.timeline()

      tl.to(".text", {x:200, duration: 0.8, opacity: 1, ease: Power0.easeNone})

      tl.play()
    }
  }
}

</script>

<style scoped>
.text{
  font-family: 'Unica One', cursive;
  text-transform: uppercase;
  font-weight: 600;
  cursor: default;

  position: relative;
  left: -200px;
  opacity: 0;
}


</style>
