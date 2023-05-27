<template>
  <div>
    <h1
      :id="id"
      class="text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500"
    >
      {{ title }}
    </h1>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SectionTitle',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>