<template>
<nav>
  <ul>
    <li v-for="(menu, idx) in menuLinks" :key="idx" class="pl-2 pr-2 lg:pl-6 lg:pr-6 nav-list ">
      <router-link class="navLink" :to="{name:menu.routeName}">
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
        home: `fa-solid fa-house`
      },
      {
        routeName: 'formations',
        label: 'Formations',
        home: 'fa-solid fa-graduation-cap'
      },
      {
        routeName: 'competences',
        label: 'Competences',
        home: 'fa-solid fa-bars-progress'
      },
      {
        routeName: 'projets',
        label: 'Projets',
        home: 'fa-solid fa-rocket'
      },
      {
        routeName: 'contact',
        label: 'Contact',
        home: 'fa-solid fa-address-card'
      }
    ],
  }),
}
</script>

<style scoped>

nav {
  padding: 30px 0 20px 0;
  width: 100vw;
  color: black;
  border-bottom: 1px solid #2c3e50;
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
  background-color: indianred;
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
  color: #2c3e50;
  padding: 5px;
}

.navLink:hover {
  background-color: indianred;
  transform: translate(-7px, -7px);
}



</style>
