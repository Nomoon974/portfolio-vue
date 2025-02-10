<template>
<div class="footer-contain">
  <h2 class="copyr">Copyright {{ currentYear }} Mazeau Lucas</h2>
</div>
</template>

<script>
export default {
  name: "FooterCompo.vue",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
.footer-contain{
  display: flex;
  align-items: center;
  align-self: end;
  justify-content: center;
  flex-direction: column;
  background-size: contain;
  height: 25vh;
  /*background-color: #2c3e50;*/
  width: 100vw;
}

a,h2.copyr{
  background-color: rgba(44, 62, 80, 0);
  color: white;
  font-size: small;
}

</style>
