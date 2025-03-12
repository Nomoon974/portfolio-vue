<template>
  <div class="container-column w-[42vw] ml-auto mr-auto self-center flex flex-col col-span-2">
    <div class="w-full items-center grid grid-cols-2">
      <div id="grille" class="overflow-auto items-center flex w-[85vw] lg:w-[20vw] xl:w-[20vw] bg-neutral-700 text-orange-200 lg:justify-evenly p-3 rounded-lg mb-20"
           v-for="(repo, id) in repos" :key="id">
        <div class="col-span-2 h-full flex align-center w-auto rounded-2xl">
          <img class="object-center w-20" src="https://raw.githubusercontent.com/github/explore/main/topics/github/github.png" alt="GitHub Repo">
        </div>
        <div class="flex w-full text-base justify-start flex-col col-span-1 lg:justify-evenly p-2">
          <h3 class="font-bold">{{ repo.name }}</h3>
          <p>{{ repo.description || 'Aucune description disponible' }}</p>
          <a :href="repo.html_url" target="_blank" class="text-blue-500 underline">Voir sur GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {PROJETS} from "@/assets/projectList";
// import btnRouge from "@/components/BtnRouge";
import {gsap} from "gsap";
import {PixiPlugin} from "gsap/PixiPlugin.js";
import {MotionPathPlugin} from "gsap/MotionPathPlugin.js";
import {Power0} from "gsap";
import axios from "axios";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin, Power0);
export default {
  name: "GridCompo.vue",
  components: {
    // btnRouge
  },
  data: () => ({
    PROJETS,
    modal: "undifined",
    repos: []
  }),
  mounted() {
    this.slideIn("#grille")
    this.fetchGithub()
  },
  methods: {
    slideIn(grille) {
      let tl = gsap.timeline({repeat: 0,});
      tl.to(grille, {y: -200, duration: 0.8, opacity: 1, ease: Power0.easeNone}, "<");

      tl.play()
    },
    async fetchGithub() {
      try {
        const response = await axios.get("https://api.github.com/users/Nomoon974/repos");
        console.log(response.data);
        return this.repos = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données de GitHub", error);
      }
    },
  }
}
</script>

<style scoped>

.container-column {
  color: #252525;
}

.btn_red{
  font-size: 1rem;
}


#grille{
  opacity: 1;
  position: relative;
  font-family: "Poppins", sans-serif;
}


</style>
