<script setup lang="ts">
import { ref } from 'vue'
import { registr } from '../api/registr.api'
import { InputComponent } from '@/shared/ui/Input'

const userName = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const passwordConfirm = ref<string>('')
const errorMessage = ref<string | null>('')
const userNameEmpty = ref<boolean>(false)
const emailEmpty = ref<boolean>(false)
const passwordEmpty = ref<boolean>(false)
const passwordConfirmEmpty = ref<boolean>(false)

const emit = defineEmits<{
  'update:activeTab': [value: string]
}>()

const onSubmit = async () => {
  userNameEmpty.value = !userName.value.trim()
  emailEmpty.value = !email.value.trim()
  passwordEmpty.value = !password.value.trim()
  passwordConfirmEmpty.value = !passwordConfirm.value.trim()

  if (
    userNameEmpty.value ||
    emailEmpty.value ||
    passwordEmpty.value ||
    passwordConfirmEmpty.value
  ) {
    errorMessage.value = 'Заполните все обязательные поля'
    return
  }

  try {
    const response = await registr({
      email: email.value,
      password: password.value,
      username: userName.value,
      passwordConfirm: passwordConfirm.value,
    })

    errorMessage.value = 'Пользователь зарегистрирован'
    setTimeout(() => {
      emit('update:activeTab', 'login')
    }, 1000)

    // Нужно прокинуть в таб авторизации
    console.log(response)
  } catch (error: any) {
    if (error?.response?.data) {
      const errorData = error.response.data

      if (errorData.username) {
        errorMessage.value =
          'Неверное имя пользователя, пожалуйста введите имя на Латинице (Количество символов больше 3х)'
        return
      }
      if (errorData.password) {
        if (errorData.password.message === 'Must be at least 8 character(s).') {
          errorMessage.value = 'Минимальное кличество символов для пароля 8'
          return
        }
      }

      if (errorData.passwordConfirm) {
        if (errorData.passwordConfirm.code === 'validation_values_mismatch') {
          errorMessage.value = 'Пароли не совпадают, проверьте правильность ввода'
          return
        }
      }

      if (errorData.email) {
        if (errorData.email.code === 'validation_is_email') {
          errorMessage.value = 'Направильно заполнено поле Email'
          return
        }
        if (errorData.email.code === 'validation_not_unique') {
          errorMessage.value = 'Пользователь с таким Email уже существует'
          return
        }
      }
    } else {
      errorMessage.value = 'Что-то пошло не так, попробуйте позже'
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <InputComponent
      v-model:input-value="userName"
      :input-required="userNameEmpty"
      :input-placeholder="'Ваше Имя'"
    />
    <InputComponent
      v-model:input-value="email"
      :input-required="emailEmpty"
      :input-placeholder="'Ваш Email'"
    />

    <InputComponent
      v-model:input-value="password"
      :input-required="passwordEmpty"
      :input-type="'password'"
      :input-placeholder="'Пароль для входа'"
    />

    <InputComponent
      v-model:input-value="passwordConfirm"
      :input-required="passwordConfirmEmpty"
      :input-type="'password'"
      :input-placeholder="'Подтвердите пароль'"
    />
    <button type="submit">Зарегистрироваться</button>
    {{ errorMessage }}
  </form>
</template>
