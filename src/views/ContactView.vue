<template>
  <div class="w-[90vw] flex flex-col justify-center">
  <h2 id="contact" class="text text-4xl lg:text-7xl w-full pl-4 pr-4 pb-8 text-center lg:text-left justify-center">Contactez-moi</h2>
  <div class="w-[50vw] h-full pl-4 pr-4 items-stretch mr-auto ml-auto">
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
