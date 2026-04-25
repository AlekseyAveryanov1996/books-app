<script setup lang="ts">
import { ref } from 'vue'
import { registr } from '../api/registr.api'

const userName = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

const onSubmit = async () => {
  const response = await registr({
    email: email.value,
    password: password.value,
    username: userName.value,
    passwordConfirm: passwordConfirm.value,
  })

  console.log(response)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" name="userName" v-model="userName" />
    <input type="text" name="email" v-model="email" />
    <input type="text" name="passwrod" v-model="password" />
    <input type="text" name="passwrod" v-model="passwordConfirm" />
    <button type="submit">Зарегистрироваться</button>
  </form>
</template>
