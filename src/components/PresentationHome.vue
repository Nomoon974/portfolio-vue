<template>
<div class="presentation_container">
  <div class="bloc-du-haut">
    <div class="div-image"><img class="im w-40 h-40 lg:w-64 lg:h-64 border-blue-900 border-8   rounded-full" :src="require(`../assets/img/profil.jpg`)" alt="profil"></div>
  </div>
  <div class="bloc_pers">
      <h2 class="auteur">Mazeau Lucas</h2>
      <h3 class="stack">Développeur Web Junior</h3>
      <ul>
        <li class="soc_media_list din"><img src="@/assets/icon/linkedin.png" alt="linkedin"></li>
        <li class="soc_media_list hub"><img src="@/assets/icon/github.png" alt="github"></li>
      </ul>
    <div id="div-btn_red">
      <router-link :to="{name:menuLinks.routeName}">
        <btn-rouge
            :name="menuLinks.label" />
      </router-link>
    </div>
  </div>
  <div class="text-pres">
    <p>Lorem</p>
  </div>
</div>
</template>

<script>
import btnRouge from "@/components/BtnRouge";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { Power0 } from "gsap";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin, Power0);
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PresentationHome.vue",
  components: {
    btnRouge,
  },
  data:() => ({
    menuLinks: {
        routeName:'contact',
        label:'Contact'
      }
  }),
  mounted(){
    this.animBg()
    this.cadre()
  },
  methods:{

    animBg(){
      let tl = gsap.timeline();
      tl
          //.to([".poz",".div-image",".im",".div-gradient3"], {duration:1.3, opacity:1, ease:Power0.easeNone })
          .to([".auteur",".stack",".soc_media_list"],  {y:-150,duration: 0.7, repeat:0, opacity:1, ease: Power0.easeNone})
          //.to(,  {y:-200,duration:0.7, repeat:0, opacity:1, ease: Power0.easeNone})
          //.to(,  {y:-200,duration: 0.7, repeat:0, opacity:1, ease: Power0.easeNone})
          .to("#div-btn_red",  {y:-150,duration: 0.6, repeat:0, opacity:1, ease: Power0.easeNone})


      tl.play()
    },
    cadre() {
      let tl2 = gsap.timeline();
      tl2.play()
    }
  }
}

</script>

<style scoped>

.presentation_container{
  height: 100vh;
  display: grid;
  grid-template-areas:
    "a c"
    "b c";
  grid-template-columns: 1fr 1.2fr;
  grid-template-rows: 30% 70%;
  width: 100%;
  padding: 80px 150px 50px 150px;
}

.bloc-du-haut{
  grid-area: a;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: start;
}

.bloc_pers{
  grid-area: b;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  height: 100%;
  width: 100%;

  position: relative;
  top: 150px;

}

.text-pres{
  padding: 120px;
  grid-area: c;
}

p{
  text-align: left;
}

h2 {
  opacity: 0;
  width: inherit;
}

#div-btn_red{
  opacity: 0;
}

.hub, .din{
  margin: 0 5px 0 5px;
}




h3{
  font-weight: 600;
  text-transform: uppercase;
}


.div-image{
  display: flex;
  align-self: center;
}

.auteur{
  font-size: 1.7rem;
}

.soc_media_list{
  display: inline-block;
}

@media only screen and (max-width: 1000px) {
  .presentation_container{
    display: grid;
    grid-template-areas:
    "a"
    "b"
    "c";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    padding: 25px 10px 15px 10px;
  }
  .text-pres{
    padding: 25px;
  }
  .bloc_pers{
    position: relative;
    top: 150px;
  }

}



</style>
