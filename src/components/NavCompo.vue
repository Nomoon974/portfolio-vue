<template>
<nav>
  <ul>
    <li v-for="(menu, idx) in menuLinks" :key="idx" class="nav-list hover:scale-150">
      <router-link :to="{name:menu.routeName}"><img :src=labelReplace(menu.label) :alt=menu.label></router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: "NavCompo.vue",
  data:() => ({
    menuLinks:[
      {
        routeName:'home',
        label:'Acceuil'
      },
      {
        routeName: 'formations',
        label:'Formations',
      },
      {
        routeName: 'competences',
        label:'Competences'
      },
      {
        routeName: 'projets',
        label:'Projets'
      },
      {
        routeName: 'contact',
        label:'Contact'
      }
    ]
  }),
  methods: {
    labelReplace (lab) {
      return require(`@/assets/icon/${lab}.png`)
    }
  }
}
</script>

<style scoped>

nav {
  padding-top: 30px;
  width: 100%;
  color: black;
}

nav a {
  font-weight: bold;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  padding: 0 30px 0 30px;
}

nav a img{
  width: 40px;
}

.nav-list{
  display: inline-block;
  transition: ease-in-out 0.5s;
}

nav a:visited{
  color: aliceblue;

}

nav a.router-link-exact-active {
  color: #42b983;
}




</style>
