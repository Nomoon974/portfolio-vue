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
  background-color: indianred;
  text-align: center;
  padding: 10px;
  border: solid 3px #2c3e50;
  border-radius: 2rem;
  font-weight: 600;
  color: #2c3e50;
  box-shadow: 3px 3px 10px rgba(44, 62, 80, 0.96);
  transition: ease-in-out 500ms;
}

.btn_submit:hover {
  transform: scale(1.1);
}

</style>