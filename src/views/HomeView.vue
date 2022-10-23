<template>
  <div id="home" class="home">
    <presentation-home />
  </div>
</template>

<script>
// @ is an alias to /src
import presentationHome from "@/components/PresentationHome";

export default {
  name: 'HomeView',
  components: {
    presentationHome
  }
}
</script>
