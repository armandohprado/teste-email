<template>
  <div id="app">
    <div v-if="tarefas.length <= 0">
      tarefas vazias
    </div>
    <div v-if="tarefas.length > 0">
      exitem {{tarefas.length}} tarefas
      <ul>
          <li v-for="tarefa in tarefas"> {{ tarefa }} </li>
      </ul>
      <input v-model="subtitulo" type="text" placeholder="descricao">
    </div>
  </div>
</template>

<script>
export default {
  name: 'lv-tarefas',
  data () {
    return {
      titulo: 'Listagem de tarefas',
      subtitulo: 'defina uma descrição',
      tarefas: []
    }
  },
  mounted() {
    setTimeout ( () => this.titulo = "Novo titulo",
                       this.tarefas = ['tarefa 1', 'tarefa 2', 'tarefa 3', 'tarefa 4']
      , 3000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
