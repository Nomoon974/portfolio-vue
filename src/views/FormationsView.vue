<template>
  <div>
<h1 class="text-9xl pl-8 flex flex-start">Formation</h1>
    <div class="flex p-8">
    <stack-div />
      </div>
  </div>
</template>

<script>
import StackDiv from "@/components/StackDiv";

export default {
  name: "FormationsView.vue",
  components: {
    StackDiv
  }
}
</script>

<style scoped>
.text-9xl{
  font-family: 'Pathway Gothic One',serif;
  text-transform: uppercase;
}

</style>
