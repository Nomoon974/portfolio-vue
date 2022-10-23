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
  padding: 15px;
  border-radius: 2rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.95);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.84);
  transition: ease-in-out 500ms;
  font-size: 1rem;
}

.btn_submit:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 700px) {
  .btn_submit {
    padding: 10px;
    font-size: 0.7rem;
  }
}

</style>
