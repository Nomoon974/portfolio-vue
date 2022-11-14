<template>
<nav>
  <ul>
    <li v-for="(menu, idx) in menuLinks" :key="idx" class="pl-1 nav-list ">
      <router-link
          class="navLink"
          :to="{name:menu.routeName, hash:menu.hash}"       >
        <font-awesome-icon class="ico-aws" :icon=menu.icon size="xl"/>
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
        icon: `fa-solid fa-house`,
        hash: '#home',
      },
      {
        routeName: 'formations',
        label: 'Formations',
        icon: 'fa-solid fa-graduation-cap',
        hash:'#formations'
      },
      {
        routeName: 'competences',
        label: 'Competences',
        icon: 'fa-solid fa-bars-progress',
        hash: '#competences',
      },
      {
        routeName: 'projets',
        label: 'Projets',
        icon: 'fa-solid fa-rocket',
        hash: '#projets',
      },
      {
        routeName: 'contact',
        label: 'Contact',
        icon: 'fa-solid fa-address-card',
        hash: '#contact',
      }
    ],
  }),
}
</script>

<style scoped>

nav {
  padding: 15px 0 10px 0;
  width: 4vw;
  height: 100vh;
  color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: hidden;
  z-index: 100;
  backdrop-filter: blur(7px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: solid 1px rgba(0, 0, 0, 0.3);
}

nav a {
  font-weight: bold;
  width: max-content;
  text-decoration: none;
  display: inline-block;
  padding: 0 10px ;
}

nav a img{
  width: 35px;
}

.navLink.router-link-exact-active.router-link-active{
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-5px, -5px);
  border-radius: 7px;
}

.navLink.router-link-exact-active.router-link-active .ico-aws {
  color: burlywood;
}

ul {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 50%;
}

.nav-list{
  display: flex;
  justify-content: space-around;
  transition: ease-in-out 0.3s;
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
  transform: translate(-3px, -3px);
}

@media only screen and (max-width: 1000px) {
  nav {
    width: 100vw;
    height: max-content;
  }

  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    height: 100%;
  }
}



</style>
