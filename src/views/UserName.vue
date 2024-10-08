<template>
  <v-container>
    <p>name_0: {{ $store.state.user.name }}</p>
    <p>name_1: {{ name_1 }}</p>
    <p>name_2: {{ name_2 }}</p>
    <p>name_3: {{ name_3 }}</p>
    <p>name_4: {{ name_4 }}</p>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'UserName',
  computed: {
    name_1() {
      return this.$store.state.user.name;
    },
    ...mapState({
      name_2: state => state.user.name,
    }),
    ...mapState('user',{
      name_3: 'name',
    }),
    ...mapGetters('user',{
      name_4: 'getName',
    }),
  }
}
</script>