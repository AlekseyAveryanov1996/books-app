<script lang="ts" setup>
import { useAuth } from '@/features/Auth/shared/model/useAuth'
import { pb } from '@/shared/api/pocketbase'
import { onMounted, ref } from 'vue'

const useAuthStore = useAuth()

const books = ref()

async function getBooks() {
  const data = await pb.collection('userBook').getFullList({
    filter: `userId = "${useAuthStore.getIdUserAuth()}"`,
  })
  books.value = data
  console.log(books.value)
}

onMounted(() => {
  console.log(pb.authStore.model?.id)
  console.log(useAuthStore.getIdUserAuth())
  getBooks()
})
</script>

<template>
  <div>{{ books }}</div>
</template>
