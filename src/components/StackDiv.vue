<template>
  <div class="stack-div-container">
    <div class="stacks-card flex p-2 flex-col">
      <div id="c" class="test flex flex-col" v-for="stack in STACKS" :key="stack.id">
        <div class="stack-line flex over bg-white h-auto rounded-xl mb-2 mt-2 h-max">
          <div class="logo-stack"><img class="p-2 mt-2 w-14 h-14 lg:p-5 lg:w-40 lg:h-40" :src="imgUrl(stack.logoPath)"
                                       alt="stack.logoPath"></div>
          <div class="stack-title">
            <div class="flex flex-col w-max text-center">
              <div class="pt-2 flex align-middle h-8 mb-2">
                <span class="font-extrabold align-middle min-h-full">{{ stack.stackName }}</span>
              </div>
              <div class="stars-container flex mb-4">
                <img
                    v-for="(star, index) in getStarsArray(stack.level)"
                    :key="index"
                    :src="getStarImage(star)"
                    class="star-icon w-5 h-5"
                    alt="star"
                />
              </div>
            </div>
            <div class="hello h-auto w-auto">
              <p class="font-normal text-left pt-2 pb-2 pl-2 h-auto">
                {{ stack.content }}
              </p>
            </div>
          </div>
        </div>
        <img class="w-6 m-3 flex self-center " src="@/assets/icon/more.png" alt="">
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
    getStarsArray(level) {
      const maxStars = 5;
      const stars = [];
      for (let i = 1; i <= maxStars; i++) {
        if (i <= level) {
          stars.push('full');
        } else {
          stars.push('empty');
        }
      }
      return stars;
    },
    getStarImage(starType) {
      if (starType === 'full') {
        return require('@/assets/img/star-full.png');
      } else {
        return require('@/assets/img/star-empty.png');
      }
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
.stack-div-container {
  width: 80%;
  gap: 50px;
}

.stacks-card {
  width: 100%;
}

.test:last-of-type .w-8 {
  display: none;
}

#c {
  opacity: 0;
}

.stack-line {
  display: grid;
  flex-direction: column;
  border: white 0.1px solid;

  grid-template-areas:
  "logo title"
  "logo parag";
  grid-template-columns: max-content 1fr;
}

.logo-stack {
  grid-area: logo;
}

.stack-title {
  grid-area: title;
}

.hello {
  grid-area: parag;
}

.stacks-card {
  color: #252525;
}

.star-icon {
  margin-right: 2px;
  /* Vous pouvez ajuster la taille des étoiles ici */
}

/* Styles pour les petits écrans */
@media only screen and (max-width: 1000px) {
  .stack-div-container {
    width: 100vw;
  }

  .stack-line {
    display: grid;
    flex-direction: column;
    border: white 0.1px solid;

    grid-template-areas:
  "logo title"
  "parag parag";
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr;
  }

  .logo-stack {
    grid-area: logo;
  }

  .stack-title {
    grid-area: title;
  }

  .hello {
    grid-area: parag;
  }

  .stacks-card {
    width: 100vw;
  }

  .font-normal {
    overflow-wrap: break-word;
    max-width: 100vw;
  }
}
</style>
