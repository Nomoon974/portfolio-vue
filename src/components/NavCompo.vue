<template>
<nav>
  <ul>
    <li class="nav-list" v-for="(menu, idx) in menuLinks" :key="idx">
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
  width: max-content;
  text-decoration: none;
  display: inline-block;
  padding: 0 30px 0 30px;
  transition: transform .6s;
}

nav a img{
  width: 40px;
}

.nav-list{
  display: inline-block;
}

nav a:visited{
  color: aliceblue;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
  transform: scale(1.3);
}

</style>