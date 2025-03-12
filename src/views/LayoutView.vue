<template>
  <div class="layout-container">
    <div class="navb">
      <nav-compo />
    </div>
    <div class="view-list">
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

.layout-container {
  display: grid;
  grid-template-areas: "y z";
  grid-template-rows: max-content;
  grid-template-columns: 1fr 85%;
}

.component-layout {
  min-height: max-content;
  margin: auto;
  width: 75%;
}

.navb{
  display: flex;
  align-self: start;
  height: max-content;
  grid-area: y;
}

.view-list {
  grid-area: z;
  width: 70vw;
}

@media only screen and (max-width: 1000px) {
  .layout-container {
    grid-template-areas:
        "y"
        "z";
    grid-template-columns: 1fr;
  }

  .view-list {
    width: 100vw;
  }

}

</style>
