<template>
  <div id="contact-form" class="grid lg:grid-cols-2 basis-0 w-full justify-center text-left">
    <div class="w-full h-full flex justify-center items-center"><img class="contact-img" src="@/assets/img/contact.png" alt=""></div>
    <div class="about w-full h-full flex items-center justify-center flex-col">
    <div class="div-form w-full lg:w-full flex flex-wrap self-center justify-center text-left pl-3 pr-2">
      <form action="">
        <div class="champ">
          <div class="">
          <label class="" for="name"></label>
          </div>
          <input class="w-full lg:w-[900px] h-8 p-1 rounded mb-6 bg-neutral-600" name="name" type="text" placeholder="Nom"/>
        </div>
        <div class="champ">
          <div>
          <label for="surname"></label>
          </div>
          <input class="w-full lg:w-[900px] h-8 p-1 rounded mb-6 bg-neutral-600" name="tel" type="text" placeholder="Prénom"/>
        </div>
        <div class="champ">
          <div>
          <label for="tel"></label>
          </div>
          <input class="w-full lg:w-[900px] h-8 p-1 rounded mb-6 bg-neutral-600" name="tel" type="tel" placeholder="Tel"/>
        </div>
        <div class="champ">
          <div>
          <label for="mail"></label>
          </div>
          <input class="w-full lg:w-[900px] h-8 p-1 rounded mb-6 bg-neutral-600" name="mail" type="email" placeholder="Email"/>
        </div>
        <div>
          <label for="commentary"></label>
        </div>
        <div>
          <textarea class="w-full lg:w-[900px] p-1 rounded bg-neutral-600" name="commentary" id="message" placeholder="Votre message..." maxlength="720" style="resize: none" cols="30" rows="10"></textarea>
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

input:focus, textarea:focus{
  outline-color: #eea342;
}

label{
  font-size: 1.5rem;
  margin-bottom: 3px;
}

.contact-img {
  border-radius: 30px;
  width: 400px;
  height: 400px;
}

.champ {
  width: 600px;
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
