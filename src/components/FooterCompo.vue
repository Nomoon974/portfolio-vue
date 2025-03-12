<template>
<div class="footer-contain">
  <h2 class="copyr text-orange-200">Copyright {{ currentYear }} Mazeau Lucas</h2>
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
  width: 100vw;
  font-family: "Poppins", sans-serif;
}

a,h2.copyr{
  background-color: rgba(44, 62, 80, 0);
  font-size: small;
}

</style>
