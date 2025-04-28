<template>
  <div id="contact" class="contact-container">
    <div class="image-container">
      <img class="contact-img" src="@/assets/img/contact.png" alt="Contact image">
    </div>
    <div class="plz-contact">
      <div class="intro-mail">
        <p>Intéressé par de nouvelles opportunités professionnelles, je reste disponible pour échanger. N'hésitez pas à me contacter :</p>
      </div>
    <div class="mail-container">
    <a href="mailto:lucas-mazeau@hotmail.fr" class="mail-link">
      <svg class="mail-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
        <title>envelope-filled</title>
        <g fill="currentColor">
          <path d="m10,9.905l7.937-3.527c-.301-1.909-1.944-3.378-3.937-3.378H6c-1.993,0-3.636,1.469-3.937,3.378l7.937,3.527Z" stroke-width="0"/>
          <path d="m10.812,11.733c-.258.115-.535.172-.812.172s-.555-.057-.813-.172l-7.187-3.194v4.461c0,2.206,1.794,4,4,4h8c2.206,0,4-1.794,4-4v-4.461l-7.188,3.195Z" stroke-width="0"/>
        </g>
      </svg>
      lucas-mazeau@hotmail.fr
    </a>
  </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ContactCompo",
  mounted() {
    // Animation d'apparition si nécessaire
    const container = document.querySelector('#contact-form');
    container.style.opacity = 1;
  }
}
</script>

<style scoped>
.contact-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  width: max-content;
  margin: 0 auto;
  padding: 2rem;
  transition: opacity 0.5s ease;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-img {
  border-radius: 30px;
  width: 400px;
  height: 400px;
  object-fit: cover;
}

.plz-contact {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.mail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  background: #404040;
  border-radius: 10px;
  margin-top: auto;
  margin-bottom:  auto;
  padding:6px;
}

.mail-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffe4c4;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 2rem;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 1px;
}

.mail-link:hover {
  color: #fff;
  transform: translateY(-2px);
}

.mail-link:hover::before {
  width: 100%;
}

.mail-icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;
}

.mail-link:hover .mail-icon {
  transform: translateY(-2px);
  fill: #fff;
}

@media only screen and (max-width: 1000px) {
  .contact-container {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0;
  }

  .contact-img {
    width: 280px;
    height: 300px;
  }

  .intro-mail {
    width: 90vw;
  }

  .intro-mail p {
    font-size: smaller;
  }

  .mail-container {
    margin-top: 1rem;
    width: 90vw;
    padding: 0;
  }

  .mail-link {
    font-size: 1rem;
    padding: 0.5rem 0;
  }
}
</style>
