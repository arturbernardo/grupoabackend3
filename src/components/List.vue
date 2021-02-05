<template>
  <div>
    <a href='#/student'>Criar</a>

  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          id
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          cpf
        </th>
        <th class="text-left">
          ca
        </th>
        <th class="text-left">
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(item, key) in infos"
        :key="item.id"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.cpf }}</td>
        <td>{{ item.ca }}</td>
        <td>
          <v-btn
            color="error"
            class="mr-4"
            @click="deleteItem(item.id, key)"
            >
              delete
            </v-btn>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'List',

  data () {
    return {
      infos: null
    }
  },
  created () {
    axios.get(`https://backendgrupoa.herokuapp.com/api/student`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.infos = response.data
      }
      )
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    deleteItem: function (id, key) {
      axios.delete('https://backendgrupoa.herokuapp.com/api/student/' + id)
        .then((response) => {
          this.infos.splice(key, 1)
        }
        )
        .catch(e => {
          this.errors.push(e)
        })
    }
  }

}
</script>

<style>
  .v-btn {
    background-color: #8B0000 !important;
  }
</style>
