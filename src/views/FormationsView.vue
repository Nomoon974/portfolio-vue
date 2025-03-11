<template>
  <div class="w-[90vw]">
    <h2 id="formations" class="text text-4xl lg:text-7xl w-full pl-4 pr-4 pb-8 text-center lg:text-left">Formation & Postes</h2>
    <div class="training-container">
      <div class="experience-section">
        <div class="experience-item">
          <p class="experience-period">Septembre 2022 - Aout 2024</p>
          <h3 class="experience-title">Développeur Full Stack</h3>
          <p class="experience-institute">IT-Akademy Lyon</p>
        </div>
        <div class="experience-item">
          <p class="experience-period">Octobre 2021 - Septembre 2022</p>
          <h3 class="experience-title">Développeur Web et Web Mobile</h3>
          <p class="experience-institute">CCI Formation Lyon</p>
        </div>
      </div><div class="experience-section">
        <div class="experience-item">
          <p class="experience-period">Septembre 2022 - Octobre 2024</p>
          <h3 class="experience-title">Développeur Full Stack</h3>
          <p class="experience-institute">DATASOLUTION</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Power0 } from "gsap";

export default {
  name: "FormationsView",
  components: {},
  mounted() {
    this.slideInTitle();
  },
  methods: {
    slideInTitle() {
      let tl = gsap.timeline();
      tl.to(".text", {x: 200, duration: 0.8, opacity: 1, ease: Power0.easeNone});
      tl.play();
    },
  },
};
</script>

<style scoped>
.text {
  font-family: 'Unica One', cursive;
  text-transform: uppercase;
  font-weight: 600;
  cursor: default;
  position: relative;
  left: -200px;
  opacity: 0;
}

.training-container {
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.experience-section {
  font-family: Arial, sans-serif;
  color: #ddd;
  padding: 20px;
}

.experience-period {
  font-weight: bold;
  font-size: 1.2em;
  color: #ccc;
}

.experience-title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 10px 0;
  color: #fff;
}

.experience-institute {
  font-size: 1.1em;
  font-style: italic;
  color: #aaa;
  margin-bottom: 20px;
}

</style>
