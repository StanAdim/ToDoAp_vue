<template>
  <v-container class="justify-center">
    <div class="text-h4 text-light-blue align-center">{{appName}}</div>
    <v-list border class="mx-auto my-4" max-width="500">
      <v-list-item >
        <TaskAdder />
      </v-list-item>
    <v-list-item v-for="task in tasks" :key="task.id" prepend-icon="mdi-domain" :title="task.title">
      <template v-slot:append>
        <v-badge color="red" @click="chopTask(task.id)" class="" content="x" inline></v-badge>
      </template>
    </v-list-item>
   
  </v-list>
  </v-container>
</template>
<script setup>
import { computed } from "vue";
import TaskAdder from "./TaskAdder.vue";
import store from '../store'

const appName = store.state.appName
const tasks = computed(()=> store.state.tasks)
const chopTask = (id) => {
  console.log(id);
};
</script>
