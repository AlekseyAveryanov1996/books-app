<script setup lang="ts">
import { logIn } from '../api/login.api'
import { ButtonComponent } from '@/shared/ui/Button'
import { InputComponent } from '@/shared/ui/Input'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const logInInput = ref<string>('')
const passwordInput = ref<string>('')
const logInEmpty = ref<boolean>(false)
const passwordEmpty = ref<boolean>(false)
const errorMessage = ref<string | null>('')

const router = useRouter()

const handleLogIn = async () => {
  // если поля пустые
  logInEmpty.value = !logInInput.value?.trim()
  passwordEmpty.value = !passwordInput.value?.trim()

  if (logInEmpty.value || passwordEmpty.value) {
    errorMessage.value = 'Заполните все обязательные поля'
    return
  }

  try {
    await logIn({ identity: logInInput.value, password: passwordInput.value })
    router.push('/dashboard')
  } catch (error) {
    if (error?.status === 400) {
      errorMessage.value = 'Неверный логин или пароль'
    } else {
      errorMessage.value = 'Ошибка авторизации'
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleLogIn">
    <InputComponent
      v-model:input-value="logInInput"
      :input-required="logInEmpty"
      :input-placeholder="'Ваш Логин'"
    />
    <InputComponent
      v-model:input-value="passwordInput"
      :input-type="'password'"
      :input-required="passwordEmpty"
      :input-placeholder="'Ваш пароль'"
    />
    <button type="submit">Авторизоваться</button>
    {{ errorMessage }}
  </form>
</template>
