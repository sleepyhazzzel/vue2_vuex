<template>
  <v-app>
    <div>
      <RouterLink to="/user-name">View User</RouterLink> | 
      <RouterLink to="/user-birth">Set User</RouterLink>
    </div>
    <main>
      <RouterView />
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  padding: 10px;
  font: 24px 'Avenir', sans-serif;
}
</style>