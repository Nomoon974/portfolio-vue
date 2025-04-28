<template>
  <div class="contact-container">
    <h2 id="contact" class="text">Contactez-moi</h2>
    <div class="wrapper">
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
.constact-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wrapper {
  width: max-content;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: stretch;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .text {
    font-size: 3rem;
    text-align: left;
  }
}
</style>
