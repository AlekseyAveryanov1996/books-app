<script lang="ts" setup>
interface Button {
  label: string
}

const props = defineProps<Button>()
</script>

<template>
  <button>{{ props.label }}</button>
</template>
