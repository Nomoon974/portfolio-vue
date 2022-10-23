<template>
  <div>
    <div class="navb">
      <nav-compo />
    </div>
    <a href="#home"></a>
    <HomeView id="home" class="component-layout"></HomeView>
    <a href="#formations"></a>
    <FormationsView id="formations" class="component-layout"></FormationsView>
    <a href="#competences"></a>
    <CompetencesView id="competences" class="component-layout"></CompetencesView>
    <a href="#projets"></a>
    <ProjetsViews id="projets" class="component-layout"></ProjetsViews>
    <a href="#contact"></a>
    <ContactView id="contact" class="component-layout"></ContactView>
  </div>
</template>

<script>
import CompetencesView from "@/views/CompetencesView";
import HomeView from "@/views/HomeView";
import FormationsView from "@/views/FormationsView";
import ProjetsViews from "@/views/ProjetsView";
import ContactView from "@/views/ContactView";
import NavCompo from "@/components/NavCompo";


export default {
  name: 'LayoutView',
  components: {
    ProjetsViews,
    FormationsView,
    HomeView,
    CompetencesView,
    ContactView,
    NavCompo
  },
  data: () => ({

  })
}
</script>

<style>

.component-layout {
  min-height: 100vh;
}

.component-layout:nth-child(n+2) {
  margin-top: 5%;
}

.navb{
  display: flex;
  align-self: start;
  height: max-content;
}

</style>
