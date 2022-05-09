<template>
  <div class="grid grid-cols-2 basis-0 w-full grid-rows-1 text-left">
    <div class="about w-full h-full flex items-center justify-center flex-col">
      <p class="text-4xl text-white">Lorem vnxvlknxclkvn!xcvn</p>
      <ul>
        <div>
        <li class="about-list_1 text-2xl"> Telephone : <span class="text-contact text-3xl">0783620962</span></li>
        </div>
        <div>
          <li class="about-list_2 text-2xl"> E-mail : <span class="text-contact text-3xl">lucas-mazeau@hotmail.fr</span></li>
        </div>
      </ul>
    </div>
    <div class="div-form w-full flex flex-wrap justify-center text-left">
      <form action="">
        <div class="champ">
          <div>
          <label class="w-4" for="name">Nom :</label>
          </div>
          <input type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="surname">Prénom :</label>
          </div>
          <input type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="tel">Téléphone :</label>
          </div>
          <input type="tel"/>
        </div>
        <div class="champ">
          <div>
          <label for="mail">E-mail :</label>
          </div>
          <input type="email"/>
        </div>
        <div>
          <label for="commentary">Message :</label>
        </div>
        <div>
          <textarea name="commentary" id="message" maxlength="320" style="resize: none" cols="30" rows="10"></textarea>
        </div>
        <div class="flex justify-end">
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


</style>
