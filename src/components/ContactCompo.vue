<template>
  <div class="grid lg:grid-cols-2 basis-0 w-full justify-center text-left">
    <div class="w-full h-full flex justify-center items-center"><img class="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]" src="@/assets/img/illu2.png" alt=""></div>
    <div class="about w-full h-full flex items-center justify-center flex-col">
    <div class="div-form w-[95vw] lg:w-full flex flex-wrap self-center justify-center text-left pl-2 pr-2">
      <form action="">
        <div class="champ ">
          <div class="">
          <label class="" for="name">Nom :</label>
          </div>
          <input class="w-[95vw] lg:w-96 h-10 p-1 rounded" type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="surname">Prénom :</label>
          </div>
          <input class="w-[95vw] lg:w-96 h-10 p-1 rounded" type="text"/>
        </div>
        <div class="champ">
          <div>
          <label for="tel">Téléphone :</label>
          </div>
          <input class="w-[95vw] lg:w-96 h-10 p-1 rounded" type="tel"/>
        </div>
        <div class="champ">
          <div>
          <label for="mail">E-mail :</label>
          </div>
          <input class="w-[95vw] lg:w-96 h-10 p-1 rounded" type="email"/>
        </div>
        <div>
          <label for="commentary">Message :</label>
        </div>
        <div>
          <textarea class="w-[95vw] lg:w-96 p-1 rounded" name="commentary" id="message" maxlength="520" style="resize: none" cols="30" rows="10"></textarea>
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



</style>
