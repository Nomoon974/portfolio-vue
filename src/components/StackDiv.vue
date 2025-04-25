<template>
  <div class="stack-div-container">
    <div class="stacks-card p-4 grid grid-cols-3">
      <div id="c" class="test" v-for="stack in STACKS" :key="stack.id">
        <div class="stack-line">
          <div class="logo-stack">
            <img class="w-10 h-10 lg:w-20 lg:h-20" :src="imgUrl(stack.logoPath)" :alt="stack.logoPath">
            <div class="stack-title">
              <h3 class="font-bold">{{ stack.stackName }}</h3>
            </div>
          </div>
          <div class="content-wrapper">
            <div v-for="(item, idx) in stack.content" :key="idx" class="hello">
              <p class="item-text">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {STACKS} from "@/assets/STACKS";
import {gsap} from "gsap";
import {PixiPlugin} from "gsap/PixiPlugin.js";
import {MotionPathPlugin} from "gsap/MotionPathPlugin.js";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin, ScrollTrigger);

export default {
  name: "StackDiv",
  data: () => ({
    STACKS,
  }),
  mounted() {
    let bande = document.querySelectorAll("#c");
    this.pierreQuiRoule(bande);
  },
  methods: {
    imgUrl(link) {
      return require(`@/assets/img/${link}.png`);
    },
    pierreQuiRoule(elements) {
      elements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "0 70%",
            toggleActions: "play",
          },
          opacity: 1,
          ease: "in",
          duration: 1,
        });
      });
    },
  },
};
</script>

<style scoped>
.stack-line {
  display: grid;
  width: 350px;
  height: 400px;
  background: #404040;
  border-radius: 0.75rem;
  padding: 1rem;
  margin: 0.5rem 0;
  grid-template-areas:
    "logo title"
    "content content";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 10px;
}

.test {
  display: flex;
  justify-content: start;
}

.stacks-card {
  width: 80vw;
  max-width: 80vw;
  margin: 0 auto;
}

.logo-stack {
  grid-area: logo;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stack-title {
  grid-area: title;
  display: flex;
  align-items: center;
}

.content-wrapper {
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: inherit;
}

.hello {
  width: 100%;
}

.item-text {
  color: #ffe4c4;
  font-size: 0.875rem;
  padding: 0.5rem;
  margin: 0;
  line-height: 1.4;
  text-align: left;
}

@media only screen and (max-width: 1000px) {
  .stack-line {
    width: 100%;
    grid-template-areas:
      "logo title"
      "content content";
  }

  .stacks-card {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .content-wrapper {
    padding: 0 0.5rem;
  }
}
</style>
