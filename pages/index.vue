<template>
  <div>
    <SearchWithFilter></SearchWithFilter>
    <CardsPalette></CardsPalette>
  </div>
</template>

<script>
import CardsPalette from "@/components/movies/CardsPalette";
import SearchWithFilter from "@/components/SearchWithFilter";

export default {
  name: 'Home',
  components: {
    SearchWithFilter,
    CardsPalette,
  },
}
</script>
