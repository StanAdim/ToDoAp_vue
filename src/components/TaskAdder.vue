<script setup>
import { ref } from 'vue';
import store from '../store'
const newTask = ref('')
const addTask = ()=> {
    store.dispatch.test
}
</script>

<template>
    <v-alert class="mx-auto mb-1" color="">{{ newTask }}</v-alert>
 <v-text-field class="text-blue" v-model="newTask" label="Add Task">
      <template v-slot:append>
        <v-icon color="blue" @click="addTask()"> mdi-plus </v-icon>
      </template>
    </v-text-field>
</template>

