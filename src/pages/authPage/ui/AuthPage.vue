<script setup lang="ts">
import { RegistrForm } from '@/features/Auth'
import { LogInForm } from '@/features/Auth/login'
import { TabsComponent } from '@/shared/ui/Tabs'
import { ref } from 'vue'

const activeTab = ref('login')
const tabsContent = [
  { component: RegistrForm }, // без пропсов
  { component: LogInForm, props: { userId: 123 } }, // с пропсами
]
</script>

<template>
  <TabsComponent
    :tabs-buttons="[
      { label: 'Зарегистрироваться', value: 'registr' },
      { label: 'Авторизоваться', value: 'login' },
    ]"
    ,
    :active-tab="activeTab"
    :tabs-content="tabsContent"
    @update:active-tab="(value) => (activeTab = value)"
  />
</template>
