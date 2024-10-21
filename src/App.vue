<template>

  <div id="app">
    <div class="routes-vue">
      <vue-page-transition class="transi" name="fade" >
        <layout-view />
      </vue-page-transition>
    </div>
    <div class="appdiv-footer-compo">
    <footer-compo />
    </div>
  </div>
</template>

<script src="vue-typed-js/dist/vue-page-transition.browser.js"></script>
<script type="text/javascript">
import NavCompo from "@/components/NavCompo";
import footerCompo from "@/components/FooterCompo";
import LayoutView from "@/views/LayoutView";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

export default {
  name: 'App',
  components: {
    NavCompo,
    footerCompo,
    LayoutView
  },
  data: () => ({

  }),
  methods: {
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: burlywood;
  margin: 0;

  font-family: "Sen", sans-serif;
  font-weight: 500;

  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
}

::-webkit-scrollbar {
  width: 0.6em;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #000000;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

*{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1.2rem;
}

div.routes-vue{
  height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 2em 0;
  flex-grow: 1;
}

body,html{
  max-width: 100vw;
  margin: auto;
  min-height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body{
  background-image: linear-gradient(to bottom, #252525, #313131, #3d3d3d, #4a4a4a, #575757);
}


.transi{
  width: 100%;
  height: 100%;
}

.appdiv-footer-compo{
  width: 100%;
  height: 100%;
}

</style>
