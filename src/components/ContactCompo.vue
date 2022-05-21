<template>
  <div class="grid grid-cols-2 basis-0 w-full justify-center text-left">
    <div class="w-full h-full flex justify-center items-center"><img class="w-[600px] h-[600px]" src="@/assets/img/illu2.png" alt=""></div>
    <div class="about w-full h-full flex items-center justify-center flex-col">
    <div class="div-form w-full flex flex-wrap justify-center text-left">
      <form action="">
        <div class="champ">
          <div>
          <label class="w-" for="name">Nom :</label>
          </div>
          <input class="w-96 h-10 p-2 rounded" type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="surname">Prénom :</label>
          </div>
          <input class="w-96 h-10 p-2 rounded" type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="tel">Téléphone :</label>
          </div>
          <input class="w-96 h-10 p-2 rounded" type="tel"/>
        </div>
        <div class="champ">
          <div>
          <label for="mail">E-mail :</label>
          </div>
          <input class="w-96 h-10 p-2 rounded" type="email"/>
        </div>
        <div>
          <label for="commentary">Message :</label>
        </div>
        <div>
          <textarea class="w-96 p-2 rounded" name="commentary" id="message" maxlength="520" style="resize: none" cols="30" rows="10"></textarea>
        </div>
        <div class="flex justify-end">
          <btn-rouge
              name="envoyer"
          />
        </div>
      </form>
    </div>
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
