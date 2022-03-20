<template>
  <div>
    <CardsPalette></CardsPalette>
  </div>
</template>

<script>
import Header from "../components/Header";
import CardsPalette from "../components/movies/CardsPalette";
export default {
  name: 'Home',
  components: {CardsPalette, Header},
}
</script>
