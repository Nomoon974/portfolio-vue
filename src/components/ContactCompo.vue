<template>
  <div id="contact-form" class="grid lg:grid-cols-2 gap-10 basis-0 w-full justify-center text-left">
    <div class="w-full h-full flex justify-center items-center"><img class="contact-img" src="@/assets/img/contact.png" alt=""></div>
    <div class="about w-full h-full flex items-center justify-center flex-col">
    <div class="div-form w-full lg:w-full flex flex-wrap self-center justify-center text-left pl-3 pr-2">
      <form action="">
        <div class="champ">
          <div class="">
          <label class="" for="name">Nom</label>
          </div>
          <input class="w-full lg:w-[90%] h-8 p-1 rounded mb-4 bg-transparent" name="name" type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="surname">Prenom</label>
          </div>
          <input class="w-full lg:w-[90%] h-8 p-1 rounded mb-4 bg-transparent" name="tel" type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="tel">Telephone</label>
          </div>
          <input class="w-full lg:w-[90%] h-8 p-1 rounded mb-4 bg-transparent" name="tel" type="tel"/>
        </div>
        <div class="champ">
          <div>
          <label for="mail">Email</label>
          </div>
          <input class="w-full lg:w-[90%] h-8 p-1 rounded mb-4 bg-transparent" name="mail" type="email"/>
        </div>
        <div>
          <label for="commentary">Message</label>
        </div>
        <div>
          <textarea class="w-full lg:w-[90%] p-1 rounded bg-transparent" name="commentary" id="message" maxlength="720" style="resize: none" cols="30" rows="10"></textarea>
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

#contact-form input,textarea{
  color: #252525;
  font-family: "Poppins", sans-serif;
}

.grid{
  opacity: 0;
}

label {
  font-size: 0.9rem !important;
}

input, textarea {
  border: 1px solid rgb(82 82 82 / 1) !important;
  color: white !important;
}

input:focus, textarea:focus{
  outline-color: #eea342;
}

label{
  font-size: 1.4rem;
  margin-bottom: 3px;
}

.contact-img {
  border-radius: 30px;
  width: 400px;
  height: 400px;
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
