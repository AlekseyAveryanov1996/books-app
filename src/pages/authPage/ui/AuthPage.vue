<script setup lang="ts">
import { RegistrForm } from '@/features/Auth'
import { LogInForm } from '@/features/Auth/login'
import { ButtonComponent } from '@/shared/ui/Button'
import { TabsComponent } from '@/shared/ui/Tabs'
import { ref } from 'vue'

const activeTab = ref('login')
const tabsContent = [
  { component: LogInForm, props: {}, value: 'login' },
  { component: RegistrForm, props: {}, value: 'registr' },
]

const tabsButtons = [
  { component: ButtonComponent, props: { label: 'Авторизация' }, value: 'login' },
  { component: ButtonComponent, props: { label: 'Регистрация' }, value: 'registr' },
]
</script>

<template>
  <TabsComponent
    :tabs-buttons="tabsButtons"
    ,
    :active-tab="activeTab"
    :tabs-content="tabsContent"
    @update:active-tab="(value) => (activeTab = value)"
  />
</template>
