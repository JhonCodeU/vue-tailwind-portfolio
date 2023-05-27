<template>
  <section class="section">
    <SectionTitle :id="'Contact'" :title="'Contact'" />
    <div class="container mx-auto">
      <div class="flex flex-col items-center">
        <p class="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
          aliquid, tempora repellat accusamus tenetur explicabo non fugit
          expedita voluptatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
      <div class="flex flex-col lg:gap-x-8 lg:flex-row">
        <!-- info -->
        <div
          class="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2"
        >
          <div v-for="item in data" :key="item.title">
            <div class="flex flex-col lg:flex-row gap-x-4">
              <fa
                class="text-accent rounded-sm w-14 h-14 felx items-start justify-center mt-2 mb-4 lg:mb-0"
                :icon="item.icon"
              />
              <h4 class="font-body text-xl mb-1">{{ item.title }}</h4>
              <p class="mb-1">{{ item.subtitle }}</p>
              <p class="text-accent font-normal">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import SectionTitle from './SectionTitle.vue'
import data from '../data/contact'
export default {
  name: 'Contact',
  components: {
    SectionTitle
  },
  data() {
    return {
      data
    }
  }
}
</script>