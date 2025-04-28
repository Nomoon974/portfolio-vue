<template>
  <div class="container-column">
    <div class="grid-container">
      <div id="grille" class="repo-card"
           v-for="(repo, id) in repos" :key="id">
        <div class="image-container">
          <img class="github-logo" src="https://raw.githubusercontent.com/github/explore/main/topics/github/github.png" alt="GitHub Repo">
        </div>
        <div class="repo-content">
          <h3 class="repo-title">{{ repo.name }}</h3>
          <p class="repo-description">{{ repo.description || 'Aucune description disponible' }}</p>
          <a :href="repo.html_url" target="_blank" class="repo-link">Voir sur GitHub</a>
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
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #252525;
}

.grid-container {
  width: max-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 15px;
  align-self: center;
}

.repo-card {
  width: 85vw;
  display: flex;
  align-items: center;
  background-color: #404040;
  color: #ffe4c4;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 5rem;
  overflow: auto;
  opacity: 1;
  position: relative;
  font-family: "Poppins", sans-serif;
}

.image-container {
  grid-column: span 2;
  height: 100%;
  display: flex;
  align-items: center;
  width: auto;
  border-radius: 1rem;
}

.github-logo {
  width: 5rem;
  object-fit: center;
}

.repo-content {
  display: flex;
  width: 100%;
  font-size: 1rem;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.5rem;
}

.repo-title {
  font-weight: bold;
}

.repo-description {
  margin: 0.5rem 0;
}

.repo-link {
  color: #3b82f6;
  text-decoration: underline;
}

@media only screen and (max-width: 1000px) {
  .container-column {
    width: 100%;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }

  .repo-card {
    width: 90vw;
  }
}

@media only screen and (min-width: 1024px) {
  .repo-card {
    width: 20vw;
    justify-content: space-evenly;
  }
}
</style>
