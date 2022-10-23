<template>
<div class="presentation_container">
  <div class="bloc-du-haut">
    <div class="div-image"><img class="img-prof border-2 rounded-full" :src="require(`../assets/img/profil.jpg`)" alt="profil"></div>
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra elit in metus sollicitudin consectetur. Suspendisse volutpat hendrerit orci sit amet lobortis. Sed at elementum risus. Curabitur mattis hendrerit nulla ut ultrices. Sed mollis enim id lorem hendrerit pulvinar. Suspendisse nec nisl id ipsum imperdiet vestibulum. Aenean erat justo, faucibus et magna nec, vulputate lobortis leo. Mauris laoreet suscipit gravida. Nulla sit amet euismod turpis.
      Curabitur vulputate aliquam metus vel volutpat. Duis molestie justo ac sapien sagittis, ut bibendum dolor facilisis. Donec libero tortor, scelerisque ac dolor in, rutrum ultricies enim. Duis eu urna vulputate, ultricies ligula sit amet, ullamcorper felis. Nam vestibulum felis ut neque pellentesque volutpat. Integer augue nulla, porta quis ultricies id, rutrum et odio. Pellentesque ullamcorper magna non felis tristique tempus. Integer convallis lacus erat, dictum accumsan libero iaculis ultricies. Praesent volutpat quis dui sit amet volutpat. Nunc consequat pellentesque eros non varius. Proin et mollis nisi.</p>
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

.img-prof {
  border-color: burlywood;
  width: 350px;
  height: 350px;
}

.presentation_container{
  display: grid;
  grid-template-areas:
    "a c"
    "b c";
  grid-template-columns: 1fr 1.2fr;
  grid-template-rows: max-content max-content;
  width: 100%;
  height: 100vh;
  padding: 20px 150px 50px 150px;
  align-items: center;
  justify-content: center;
  align-content: center;
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
  margin-top: 30px;
}

.bloc_pers ul {
  margin-top: 20px;
  margin-bottom: 20px;
}

.bloc_pers > h2,h3 {
  font-size: 2.5rem;
}

.bloc_pers img {
  width: 45px;
}

.text-pres{
  padding: 40px 40px 40px 40px;
  grid-area: c;
  font-weight: 400;
  width: 100%;
  max-width: 1010px;
}

p{
  text-align: justify;
  font-size: 25px;
}


#div-btn_red{
  opacity: 0;
}

.hub, .din {
  margin: 0 5px 0 5px;
}


.div-image{
  display: flex;
  align-self: center;
}

.auteur{
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2rem;
}

.stack{
  opacity: 0;
  width: inherit;
  font-size: 1.9rem;
}

.soc_media_list{
  display: inline-block;
}

@media only screen and (min-width: 2000px){
  .text-pres p {
    font-size: xx-large;
  }

  .img-prof {
    width: 400px;
    height: 400px;
  }
}

@media only screen and (max-width: 1000px) {
  .presentation_container{
    display: grid;
    grid-template-areas:
    "a"
    "b"
    "c";
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content max-content;
    width: 100%;
    height: 100%;
    padding: 25px 10px 15px 10px;
    margin-top: 100px;
  }

  .text-pres{
    padding: 25px;
    height: 100%;
  }

  .bloc_pers{
    position: relative;
    top: 150px;
    height: max-content;
    margin-top: 30px;
  }

  .bloc_pers ul {
    margin-top: 20px;
  }

  p {
    font-size: 20px;
  }

  #div-btn_red {
    margin-top: 15px;
  }

}

</style>
