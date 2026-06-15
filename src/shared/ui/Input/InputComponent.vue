<script lang="ts" setup>
import { computed } from 'vue'

interface inputProps {
  inputMessError?: string
  inputPlaceholder?: string
  inputRequired?: boolean
  inputType?: 'text' | 'email' | 'password' | 'number'
  errorMessage?: string | null
}

const valueModel = defineModel<string>('inputValue')

const {
  inputMessError = 'Поле не заполнено',
  inputRequired = false,
  inputType = 'text',
  errorMessage = null,
  inputPlaceholder = '',
} = defineProps<inputProps>()

const hasError = computed(() => {
  if (errorMessage) return true // если есть внешняя ошибка

  // если поле пустое и обязательное
  if (inputRequired && (!valueModel.value || valueModel.value.trim() === '')) {
    return true
  }

  return false
})

const displayErrorMessage = computed(() => {
  if (errorMessage) return errorMessage
  if (inputRequired && (!valueModel.value || valueModel.value.trim() === '')) {
    return inputMessError
  }
  return ''
})
</script>

<template>
  <div>
    <div :class="{ 'flex-input': true, '--error': hasError }">
      <div class="flex-input__placeholder">
        {{ inputPlaceholder }}
      </div>
      <input :type="inputType" class="flex-input__input" v-model="valueModel" />
      <div class="flex-input__error" v-if="displayErrorMessage">
        {{ displayErrorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex-input {
  &__input {
    border: 1px solid black;
  }
  &.--error {
    .flex-input__input {
      border: 1px solid red;
    }
  }
}
</style>
