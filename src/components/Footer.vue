<template>
  <footer class="dark:bg-slate-900 bg-slate-300 py-12">
    <div class="container mx-auto">
      <div
        class="flex flex-col space-y-6 lg:space-y-0 items-center justify-between"
      >
        <!-- Icons -->
        <div class="flex space-x-6 items-center justify-center">
          <div v-for="item in social" :key="item.title">
            <a class="text-base" :href="item.url">
              <fa
                class="w-8 h-8"
                :class="item.color"
                :icon="['fab', item.icon]"
              />
            </a>
          </div>
        </div>
        <!-- logo -->
        <div class="text-center items-center justify-center">
          <img width="300" :src="logo" alt="Logo JohnCode" />
        </div>
        <!-- copyright -->
        <div class="text-center items-center justify-center">
          <p class="text-base text-gray-800 dark:text-gray-300">
            &copy; {{ year }} {{ author }}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import logoDark from '/logos/logoDark.png'
import logoLight from '/logos/logoLight.png'
import social from '../data/social'
import {defineComponent} from 'vue'

interface SocialItem {
  title: string
  url: string
  color: string
  icon: string
}

interface FooterData {
  year: number
  author: string
  social: SocialItem[]
}

export default defineComponent({
  name: 'Footer',
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    logo() {
      return this.theme === 'dark' ? logoDark : logoLight
    }
  },
  data(): FooterData {
    return {
      year: new Date().getFullYear(),
      author: 'Jhon Arcila Castano' as string,
      social
    }
  }
})
</script>