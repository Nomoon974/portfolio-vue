<template>
<nav>
  <ul>
    <li v-for="(menu, idx) in menuLinks" :key="idx" class="pl-1 pr-2 lg:pl-6 lg:pr-6 nav-list ">
      <router-link
          class="navLink"
          :to="{name:menu.routeName, hash:menu.hash}"       >
        <font-awesome-icon :icon=menu.home size="xl"/>
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script>

export default {
  name: "NavCompo.vue",
  components: {
  },
  data: () => ({
    menuLinks: [
      {
        routeName: 'home',
        label: 'Acceuil',
        home: `fa-solid fa-house`,
        hash: '#home',
      },
      {
        routeName: 'formations',
        label: 'Formations',
        home: 'fa-solid fa-graduation-cap',
        hash:'#formations'
      },
      {
        routeName: 'competences',
        label: 'Competences',
        home: 'fa-solid fa-bars-progress',
        hash: '#competences',
      },
      {
        routeName: 'projets',
        label: 'Projets',
        home: 'fa-solid fa-rocket',
        hash: '#projets',
      },
      {
        routeName: 'contact',
        label: 'Contact',
        home: 'fa-solid fa-address-card',
        hash: '#contact',
      }
    ],
  }),
}
</script>

<style scoped>

nav {
  padding: 15px 0 10px 0;
  width: 100vw;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 30px 40px rgba(0,0,0,.1);
  position: fixed;
  overflow-y: hidden;
  z-index: 100;
  backdrop-filter: blur(7px);
}

nav a {
  font-weight: bold;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  padding: 0 10px ;
}

nav a img{
  width: 35px;
}

.navLink.router-link-exact-active.router-link-active{
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-7px, -7px);
  border-radius: 7px;
}



.nav-list{
  display: inline-block;
  transition: ease-in-out 0.5s;
}

.navLink{
  background-color: rgba(44, 62, 80, 0);
  transition: ease-in-out 500ms;
  border-radius: 5px;
  color: #ffffff;
  padding: 5px;
}


.navLink:hover {
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-7px, -7px);
}



</style>
