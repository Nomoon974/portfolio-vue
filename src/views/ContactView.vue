<template>
  <div class="contact-container">
    <div class="about">
      <h1>CONTACTEZ-MOI</h1>
      <ul>
        <li><img src="@/assets/icon/phone.png" alt="phone">Telephone : <span class="text-contact">0783600962</span></li>
        <li><img src="@/assets/icon/email.png" alt="mail">E-mail : <span class="text-contact">lucas-mazeau@hotmail.fr</span></li>
        <li></li>
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
          <textarea name="commentary" id="message" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button class="btn_submit" type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>



.contact-container{
  display: grid;
  grid-template-areas:
      "a b";
  grid-template-columns: 1fr 1fr;

  align-items: center;

  max-height: max-content;

  border: 1px solid black;
  padding: 30px;
}

.contact-container{
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
  list-style: none;
  text-align: left;
}

.text-contact{
  font-weight: bold;
}

.btn_submit{
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
