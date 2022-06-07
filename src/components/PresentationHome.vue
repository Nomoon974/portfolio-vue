<template>
<div class="presentation_container">
  <div class="bloc-du-haut">
    <div class="div-gradient poz"></div>
    <div class="div-gradient1 poz"></div>
    <div class="div-gradient2 poz"></div>
    <div class="div-gradient3 "></div>
    <div class="div-gradient4 poz"></div>
  <div class="div-image"><img class="im w-40 h-40 lg:w-52 lg:h-52 border-blue-900 border-8   rounded-full" :src="require(`../assets/img/profil.jpg`)" alt="profil"></div>
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
  <div>

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
          .to(["h2","h3",".soc_media_list"],  {y:-200,duration: 0.7, repeat:0, opacity:1, ease: Power0.easeNone})
          //.to(,  {y:-200,duration:0.7, repeat:0, opacity:1, ease: Power0.easeNone})
          //.to(,  {y:-200,duration: 0.7, repeat:0, opacity:1, ease: Power0.easeNone})
          .to("#div-btn_red",  {y:-200,duration: 0.6, repeat:0, opacity:1, ease: Power0.easeNone})


      tl.play()
    },
    cadre() {
      let tl2 = gsap.timeline();
      tl2.to(".poz", 10, {rotate:"360", repeat: -1, ease: Power0.easeNone})
      tl2.play()
    }
  }
}

</script>

<style scoped>

.presentation_container{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.bloc-du-haut{
  position: absolute;
  bottom: 1200px;
  right: 2100px;
}

.bloc_pers{
  display: flex;
  justify-content: center;
  position: relative;
  top: 100px;
  right: 500px;
  font-size: 2em;
  width: 800px;
  height: max-content;
}

.div-gradient {
  position: absolute;
  top: 100px;
  left: 850px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M876.5%2C625Q844%2C750%2C747.5%2C857.5Q651%2C965%2C507.5%2C942Q364%2C919%2C251.5%2C841Q139%2C763%2C92%2C631.5Q45%2C500%2C108%2C380.5Q171%2C261%2C261%2C151.5Q351%2C42%2C501.5%2C37Q652%2C32%2C757.5%2C134Q863%2C236%2C886%2C368Q909%2C500%2C876.5%2C625Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22%23444cf7%22 d=%22M876.5%2C625Q844%2C750%2C747.5%2C857.5Q651%2C965%2C507.5%2C942Q364%2C919%2C251.5%2C841Q139%2C763%2C92%2C631.5Q45%2C500%2C108%2C380.5Q171%2C261%2C261%2C151.5Q351%2C42%2C501.5%2C37Q652%2C32%2C757.5%2C134Q863%2C236%2C886%2C368Q909%2C500%2C876.5%2C625Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
}

.div-gradient1{
  position: absolute;
  top: 100px;
  left: 850px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M905.5%2C624.5Q843%2C749%2C737.5%2C828Q632%2C907%2C489%2C941Q346%2C975%2C261%2C855Q176%2C735%2C104.5%2C617.5Q33%2C500%2C86.5%2C369.5Q140%2C239%2C254%2C167Q368%2C95%2C511%2C60.5Q654%2C26%2C745%2C141Q836%2C256%2C902%2C378Q968%2C500%2C905.5%2C624.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22%234248bb%22 d=%22M905.5%2C624.5Q843%2C749%2C737.5%2C828Q632%2C907%2C489%2C941Q346%2C975%2C261%2C855Q176%2C735%2C104.5%2C617.5Q33%2C500%2C86.5%2C369.5Q140%2C239%2C254%2C167Q368%2C95%2C511%2C60.5Q654%2C26%2C745%2C141Q836%2C256%2C902%2C378Q968%2C500%2C905.5%2C624.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
}

.div-gradient2{
  position: absolute;
  width: 400px;
  height: 400px;
  top: 100px;
  left: 850px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M839.5%2C611.5Q807%2C723%2C715.5%2C802Q624%2C881%2C493.5%2C901Q363%2C921%2C237.5%2C851.5Q112%2C782%2C118%2C641Q124%2C500%2C158%2C388Q192%2C276%2C291%2C218.5Q390%2C161%2C519.5%2C101Q649%2C41%2C720.5%2C164Q792%2C287%2C832%2C393.5Q872%2C500%2C839.5%2C611.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22%237178f2%22 d=%22M839.5%2C611.5Q807%2C723%2C715.5%2C802Q624%2C881%2C493.5%2C901Q363%2C921%2C237.5%2C851.5Q112%2C782%2C118%2C641Q124%2C500%2C158%2C388Q192%2C276%2C291%2C218.5Q390%2C161%2C519.5%2C101Q649%2C41%2C720.5%2C164Q792%2C287%2C832%2C393.5Q872%2C500%2C839.5%2C611.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
}

.div-gradient3{
  position: absolute;
  top: 100px;
  left: 850px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M841%2C613Q812%2C726%2C720%2C810Q628%2C894%2C515.5%2C846.5Q403%2C799%2C325%2C741.5Q247%2C684%2C124.5%2C592Q2%2C500%2C64.5%2C364.5Q127%2C229%2C264%2C212.5Q401%2C196%2C515%2C150Q629%2C104%2C762%2C158.5Q895%2C213%2C882.5%2C356.5Q870%2C500%2C841%2C613Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22%23303472%22 d=%22M841%2C613Q812%2C726%2C720%2C810Q628%2C894%2C515.5%2C846.5Q403%2C799%2C325%2C741.5Q247%2C684%2C124.5%2C592Q2%2C500%2C64.5%2C364.5Q127%2C229%2C264%2C212.5Q401%2C196%2C515%2C150Q629%2C104%2C762%2C158.5Q895%2C213%2C882.5%2C356.5Q870%2C500%2C841%2C613Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
}

.div-gradient4{
  position: absolute;
  top: 100px;
  left: 850px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M874.5%2C631Q861%2C762%2C756%2C863.5Q651%2C965%2C519.5%2C904.5Q388%2C844%2C288.5%2C785Q189%2C726%2C124%2C613Q59%2C500%2C88.5%2C361Q118%2C222%2C258%2C204.5Q398%2C187%2C511%2C152.5Q624%2C118%2C749%2C173Q874%2C228%2C881%2C364Q888%2C500%2C874.5%2C631Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22%23797fdd%22 d=%22M874.5%2C631Q861%2C762%2C756%2C863.5Q651%2C965%2C519.5%2C904.5Q388%2C844%2C288.5%2C785Q189%2C726%2C124%2C613Q59%2C500%2C88.5%2C361Q118%2C222%2C258%2C204.5Q398%2C187%2C511%2C152.5Q624%2C118%2C749%2C173Q874%2C228%2C881%2C364Q888%2C500%2C874.5%2C631Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
}

h2 {
  opacity: 0;
  top: 80px;
  position: absolute;
  left: 500px ;
  width: inherit;
}

#div-btn_red{
  position: absolute;
  top: 200px;
  left: 830px;
  opacity: 0;
}

.din{
  position: absolute;
  left: 900px;
  top: 140px;
  z-index: 100;
  width: 50px;
  opacity: 0;
}
.hub{
  position: absolute;
  left: 850px;
  top: 140px;
  width: 50px;
  opacity: 0;
}


h3{
  font-weight: 600;
  text-transform: uppercase;
  position: absolute;
  left: 500px;
  width: inherit;
}


.div-image{
  position: absolute;
  top: 170px;
  left: 920px;
  z-index: 100;
  width: max-content;
}



.auteur{
  font-size: 1.7rem;
}

.soc_media_list{
  display: inline-block;
}

@media only screen and (max-width: 1000px) {
  .poz, .div-gradient3{
    width: 300px;
    height: 300px;
    left: 50px;
  }
  .bloc_pers{
    margin-top: 300px;
    top: 300px;
    right: 500px;
  }
  .div-image{
    position: absolute;
    top: 150px;
    left: 100px;
  }
}



</style>
