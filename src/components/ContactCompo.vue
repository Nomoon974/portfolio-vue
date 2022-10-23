<template>
  <div class="grid lg:grid-cols-2 basis-0 w-full justify-center text-left">
    <div class="w-full h-full flex justify-center items-center"><img class="contact-img" src="@/assets/img/contact.png" alt=""></div>
    <div class="about w-full h-full flex items-center justify-center flex-col">
    <div class="div-form w-[95vw] lg:w-full flex flex-wrap self-center justify-center text-left pl-3 pr-2">
      <form action="">
        <div class="champ">
          <div class="">
          <label class="" for="name">Nom :</label>
          </div>
          <input class="w-[95vw] lg:w-[700px] h-10 p-1 rounded" name="name" type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="surname">Prénom :</label>
          </div>
          <input class="w-[95vw] lg:w-[700px] h-10 p-1 rounded" name="tel" type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="tel">Téléphone :</label>
          </div>
          <input class="w-[95vw] lg:w-[700px] h-10 p-1 rounded" name="tel" type="tel"/>
        </div>
        <div class="champ">
          <div>
          <label for="mail">E-mail :</label>
          </div>
          <input class="w-[95vw] lg:w-[700px] h-10 p-1 rounded" name="mail" type="email"/>
        </div>
        <div>
          <label for="commentary">Message :</label>
        </div>
        <div>
          <textarea class="w-[95vw] lg:w-[700px] p-1 rounded" name="commentary" id="message" maxlength="520" style="resize: none" cols="30" rows="7"></textarea>
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
import {gsap, Power0} from "gsap";

export default {
  name: "ContactCompo.vue",
  components: {
    btnRouge,
  },
  mounted() {
    this.fadeIN()

  },
  methods: {
    fadeIN(){
      let tl = gsap.timeline()

      tl.to(".grid", {duration: 1, opacity: 1, ease: Power0.easeNone})

      tl.play()
    }
  }
}
</script>

<style scoped>

.grid{
  opacity: 0;
}

input:focus, textarea:focus{
  outline-color: indianred;
}

label{
  font-size: 1.5rem;
  margin-bottom: 3px;
}

.contact-img {
  border-radius: 30px;
  width: 500px;
  height: 500px;
}

@media only screen and (max-width: 1000px) {
  .div-form {
    margin-top: 30px;
  }

  .contact-img {
    width: 300px;
    height: 300px;
  }

}



</style>
