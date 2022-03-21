<template>
  <div class="v-sessions">
    <div class="container">
      <SessionsView />
    </div>
  </div>
</template>

<script>
import SessionsView from "@/components/sessions/SessionsView";
export default {
  name: "sessions",
  components: {
    SessionsView
  }
}
</script>

<style scoped>

</style>
