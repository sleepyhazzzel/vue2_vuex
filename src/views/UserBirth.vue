<template>
  <div>
    <v-container>
      <v-form ref="form">
        <v-row>
          <v-col cols="6">Name: {{ $store.state.user.name }}</v-col>
          <v-col cols="6">Gender: {{ $store.state.user.gender }}</v-col>
          <v-col cols="6">
            <v-text-field v-model="user.name" label="Name" required />
          </v-col>
          <v-col cols="6">
            <v-select v-model="user.gender" :items="['Male', 'Female']" label="Gender" required />
          </v-col>
          <v-col cols="12">
            <v-btn @click="submit_1">Submit_1</v-btn>
            <v-btn @click="submit_2">Submit_2</v-btn>
            <v-btn @click="reset">Reset</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'UserBirth',
  data: () => ({
    menu: false,
    user: {
      name: null,
      gender: null,
    },
  }),
  methods: {
    ...mapMutations('user', {
      submit: 'setData',
    }),
    submit_1() {
      this.submit(this.user);
    },
    submit_2() {
      this.$store.commit('user/setData', this.user);
    },
    reset() {
      this.$refs.form.reset()
    }
  }
};
</script>