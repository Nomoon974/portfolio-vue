<template>
  <div class="container mx-auto text-tahiti">
    <div class="about">
      <h1>CONTACTEZ-MOI</h1>
      <p class="text-4xl text-white">Lorem vnxvlknxclkvn!xcvn</p>
      <ul>
        <div>
        <li class="about-list_1"> Telephone : <span class="text-contact">0783620962</span></li>
        </div>
        <div>
          <li class="about-list_2"> E-mail : <span class="text-contact">lucas-mazeau@hotmail.fr</span></li>
        </div>
      </ul>
    </div>
    <div class="div-form">
      <form action="">
        <div class="champ">
          <label for="name">Nom</label>
          <input type="text"/>
        </div>
        <div class="champ">
          <label for="surname">Prénom</label>
          <input type="text"/>
        </div>
        <div class="champ">
          <label for="tel">Téléphone</label>
          <input type="tel"/>
        </div>
        <div class="champ">
          <label for="mail">E-mail</label>
          <input type="email"/>
        </div>
        <div>
          <label for="commentary">Message</label>
        </div>
        <div>
          <textarea name="commentary" id="message" maxlength="320" style="resize: none" cols="30" rows="10"></textarea>
        </div>
        <div>
          <btn-rouge
              name="envoyer"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import btnRouge from "@/components/BtnRouge";

export default {
  name: "ContactCompo.vue",
  components: {
    btnRouge,
  }
}
</script>

<style scoped>
/* .contact-container{
  display: grid;
  grid-template-areas:
      "a b";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30em;
  width: 45%;
  height: max-content;

  align-items: center;

  padding: 50px;
}*/

.about{
  grid-area: a;
  justify-content: center;
  align-items: center;
}

.div-form{
  grid-area: b;
  text-align: left;
}

.champ input{
  display: flex;
  justify-content: flex-end;
  min-width: max-content;
  max-width: max-content;
  border-radius: 20px;
  padding: 5px;

  outline-color: #2c3e50;
}

textarea{
  border-radius: 10px;
}

.about h1{
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
}

.about li{
  text-align: left;
}

.about-list_1{
  list-style-image: url("@/assets/icon/phone.png");
}

.about-list_2{
  list-style-image: url("@/assets/icon/email.png");
}

.about ul div{
  display: flex;
  flex-wrap: wrap;
}

.text-contact{
  font-weight: bold;
}

</style>
