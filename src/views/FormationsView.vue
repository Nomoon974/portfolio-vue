<template>
  <div>
    <h1 class="text text-6xl lg:text-7xl w-max pl-4 pr-4 pb-8 text-center lg:text-left">Formation</h1>
    <div>

    </div>
  </div>
</template>

<script>


import {gsap, Power0} from "gsap";

export default {
  name: "FormationsView",
  components: {

  },
  mounted() {
    this.slideInTitle()

  },
  methods: {
    slideInTitle(){
      let tl = gsap.timeline()

      tl.to(".text", {x:500, duration: 0.8, opacity: 1, ease: Power0.easeNone})

      tl.play()
    }
  }

}
</script>

<style scoped>
.text{
  font-family: 'Titillium Web', sans-serif;
  text-transform: uppercase;
  font-weight: 600;

  position: relative;
  left: -500px;
  opacity: 0;
}

</style>
