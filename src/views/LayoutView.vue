<template>
  <div class="layout-container">
    <div class="navb">
      <nav-compo />
    </div>
    
    <div class="view-list">
      <HomeView id="home" class="component-layout"></HomeView>
      <FormationsView id="formations" class="component-layout"></FormationsView>
      <CompetencesView id="competences" class="component-layout"></CompetencesView>
      <ProjetsViews id="projets" class="component-layout"></ProjetsViews>
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
  grid-template-columns: 8% 1fr;
}

.component-layout {
  min-height: max-content;
  margin: auto;
  width: 100%;
}

.navb{
  display: flex;
  align-self: start;
  height: max-content;
  grid-area: y;
}

.view-list {
  grid-area: z;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
