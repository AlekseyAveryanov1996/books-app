<script setup lang="ts">
import { InputComponent } from '@/shared/ui/Input'
import { ref } from 'vue'

const val = ref('Тест валуе')
</script>

<template>
  {{ val }}
  <InputComponent v-model:input-value="val" :input-required="true" :input-type="'text'" />
</template>
