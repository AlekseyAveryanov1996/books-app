<script setup lang="ts">
import { logIn } from '../api/login.api'
import { ButtonComponent } from '@/shared/ui/Button'
import { InputComponent } from '@/shared/ui/Input'
import { ref } from 'vue'

const logInInput = ref('')
const passwordInput = ref('')
const logInEmpty = ref(false)
const passwordEmpty = ref(false)

const handleLogIn = async () => {
  try {
    await logIn({ identity: logInInput.value, password: passwordInput.value })
    console.log('Пользователь авторизован')
  } catch (error) {
    console.log('Ошибка авторизации', error)
    logInEmpty.value = true
    passwordEmpty.value = true
  }
}
</script>

<template>
  {{ logInInput }}
  {{ passwordInput }}
  <InputComponent
    v-model:input-value="logInInput"
    :input-type="'text'"
    :input-required="logInEmpty"
    :input-placeholder="'Ваш Логин'"
    :error-message="null"
  />

  <InputComponent
    v-model:input-value="passwordInput"
    :input-type="'password'"
    :input-required="passwordEmpty"
    :input-placeholder="'Ваш пароль'"
    :error-message="null"
  />

  <ButtonComponent :label="'Войти в систему'" @click="handleLogIn" />
</template>
