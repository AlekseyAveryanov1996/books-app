<script setup lang="ts">
import { computed, type Component } from 'vue'

interface TabButton {
  component: Component
  props?: Record<string, any>
  value: string
}

interface TabContent {
  component: Component
  props?: Record<string, any>
  value: string
}

interface TabsProps {
  tabsButtons: TabButton[]
  activeTab: string
  tabsContent: TabContent[]
}

const props = defineProps<TabsProps>()
const emit = defineEmits<{
  'update:activeTab': [value: string]
}>()

const activeContent = computed(() => {
  return props.tabsContent.find((tab) => tab.value === props.activeTab)
})

console.log(activeContent.value)
</script>

<template>
  <div class="tabs">
    <component
      v-for="tab in props.tabsButtons"
      :key="tab.value"
      :is="tab.component"
      v-bind="tab.props"
      :class="{ tabs__btn: true, '--active': tab.value === props.activeTab }"
      @click="emit('update:activeTab', tab.value)"
    />

    <div class="tabs__content">
      <component v-if="activeContent" :is="activeContent.component" v-bind="activeContent.props" />
    </div>
  </div>
</template>

<style scoped>
.tabs__btn.--active {
  background: red;
}
</style>
