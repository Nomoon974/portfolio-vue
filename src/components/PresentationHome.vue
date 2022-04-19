<template>
<div class="presentation_container">
  <div><img src="@/assets/img/man.png" alt="profil"></div>
  <div>
    <h2 class="auteur">Mazeau Lucas</h2>
    <h3 class="stack">Développeur Web Junior</h3>
    <ul>
      <li class="soc_media_list"><img src="@/assets/icon/linkedin.png" alt="linkedin"></li>
      <li class="soc_media_list"><img src="@/assets/icon/github.png" alt="github"></li>
    </ul>
    <div>
      <router-link :to="{name:menuLinks.routeName}">
        <button class="btn_contact">{{menuLinks.label}}</button></router-link>
    </div>
  </div>
  <div>

  </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PresentationHome.vue",
  components: {
  },
  data:() => ({
    menuLinks: {
        routeName:'contact',
        label:'Contact'
      }
  })
}

</script>

<style scoped>

.presentation_container{
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.auteur{
  font-size: 1.7rem;
}

.soc_media_list{
  display: inline-block;
}

.btn_contact{
  cursor: pointer;
  background-color: indianred;
  text-align: center;
  padding: 10px;
  border: solid 3px #2c3e50;
  border-radius: 2rem;
  font-weight: 600;
  color: #2c3e50;
  box-shadow: 3px 3px 10px rgba(44, 62, 80, 0.96);
}

</style>
