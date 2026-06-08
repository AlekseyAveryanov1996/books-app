<script setup lang="ts">
import { computed, type Component } from 'vue'

interface TabBtn {
  label: string
  value: string
}

interface TabsProps {
  tabsButtons: TabBtn[]
  activeTab: string
  tabsContent: Array<{
    component: Component
    props?: Record<string, any>
  }>
}

const props = defineProps<TabsProps>()
const emit = defineEmits<{
  'update:activeTab': [value: string]
}>()

const activeIndex = computed(() => {
  const index = props.tabsButtons.findIndex((tab) => tab.value === props.activeTab)
  return index >= 0 ? index : 0
})

const activeContent = computed(() => {
  return props.tabsContent[activeIndex.value]
})
</script>

<template>
  <div class="tabs">
    <button
      v-for="tab in props.tabsButtons"
      :key="tab.value"
      :class="{ tabs__btn: true, '--active': tab.value === props.activeTab }"
      @click="emit('update:activeTab', tab.value)"
    >
      {{ tab.label }}
    </button>

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
