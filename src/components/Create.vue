<template>
  <v-form @submit.prevent>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="ca"
              label="ca"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="cpf"
              label="cpf"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    </v-form>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    submit () {
      let data = {name: this.name, cpf: this.cpf, email: this.email, ca: this.ca}
      axios.post('https://backendgrupoa.herokuapp.com/api/student', data)
        .then(function (response) {
          // TODO need to use routes.push, but I dont know how to inject it
          window.location.href = 'https://keen-minsky-9d1607.netlify.app/#/'
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
