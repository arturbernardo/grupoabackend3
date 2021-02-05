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
        v-for="item in infos"
        :key="item.id"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.cpf }}</td>
        <td>{{ item.ca }}</td>
        <td></td>
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
  }
}
</script>
