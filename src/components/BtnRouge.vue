<template>
  <div>
    <button class="btn_submit" type="submit">{{this.name}}</button>
  </div>
</template>

<script>
export default {
  name: "BtnRouge.vue",
  props:{
    name: String,
  },
}
</script>

<style scoped>

.btn_submit{
  cursor: pointer;
  background-color: burlywood;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.57);
  transition: ease-in-out 500ms;
  font-size: 0.8rem;
  line-height: normal;
  font-family: "Poppins", sans-serif;
}

.btn_submit:hover {
  transform: scale(102%);
}

@media screen and (max-width: 700px) {
  .btn_submit {
    padding: 10px;
    font-size: 0.7rem;
    width: 95vw;
  }
}

</style>
