<template>
    <div class="training-container">
      <h2 id="formations" class="text text-3xl lg:text-5xl pl-4 pr-4 pb-8 ">Formation & Postes</h2>
      <div class="experience-section">
        <div class="experience-item">
          <p class="experience-period text-orange-100">Septembre 2022 - Aout 2024</p>
          <h3 class="experience-title text-orange-200">Développeur Full Stack</h3>
          <p class="experience-institute text-orange-100">IT-Akademy Lyon</p>
        </div>
        <div class="experience-item">
          <p class="experience-period text-orange-100">Octobre 2021 - Septembre 2022</p>
          <h3 class="experience-title text-orange-200">Développeur Web et Web Mobile</h3>
          <p class="experience-institute text-orange-100">CCI Formation Lyon</p>
        </div>
      </div><div class="experience-section">
        <div class="experience-item">
          <p class="experience-period text-orange-100">Septembre 2022 - Octobre 2024</p>
          <h3 class="experience-title text-orange-200">Développeur Full Stack</h3>
          <p class="experience-institute text-orange-100">DATASOLUTION</p>
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
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}

.training-container h2 {
  text-align: left;
  margin-left: 0;
  margin-right: auto;
}

.experience-section {
  font-family: Arial, sans-serif;
  color: #ddd;
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.experience-period {
  font-weight: bold;
  font-size: 1.1em;
}

.experience-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px 0;
}

.experience-institute {
  font-size: 1.1em;
  font-style: italic;
  margin-bottom: 20px;
}

@media only screen and (max-width: 1000px) {
  .training-container {
    flex-direction: column;
    margin-bottom: 50px;
  }

  .experience-section {
    grid-template-columns: repeat(1, 1fr);
  }

  .experience-period {
  font-size: 1em;
  }

  .experience-title {
  font-size: 1em;
  }

  .experience-institute {
  font-size: 1em;
  }

}

</style>
