<script setup lang="ts">
import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090')

const test = async () => {
  const posts = await pb.collection('posts').getFullList()
  console.log(posts)
}

const createPost = async () => {
  const record = await pb.collection('posts').create({
    title: 'hello2',
    content: 'my second posts',
  })
}

test()
</script>

<template>
  <h1>You did it!</h1>
  <p
    @click="
      () => {
        createPost()
        test()
      }
    "
  >
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
