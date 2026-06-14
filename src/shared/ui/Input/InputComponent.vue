<script lang="ts" setup>
import { computed } from 'vue'

interface inputProps {
  inputMessError?: string
  inputRequired?: boolean
  inputType?: 'text' | 'email' | 'password' | 'number'
}

const valueModel = defineModel<string>('inputValue')

const {
  inputMessError = 'Поле не заполнено',
  inputRequired = false,
  inputType = 'text',
} = defineProps<inputProps>()

const showError = computed(() => {
  return inputRequired && (!valueModel.value || valueModel.value.trim() === '')
})
</script>

<template>
  <div>
    <div class="flex-input">
      <div class="flex-input__placeholder"></div>
      <input :type="inputType" class="flex-input__input" v-model="valueModel" />
      <div class="flex-input__error" v-if="showError">
        {{ inputMessError }}
      </div>
    </div>
  </div>
</template>
