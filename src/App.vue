<script setup>
import { ref } from 'vue';
import HeroSection from './components/HeroSection.vue'
import Services from './components/Services.vue'

const theme = ref(null)

const setEffectTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }
}
setEffectTheme()

const useEffectTheme = () => {
    console.log('works', theme.value);
  if (theme.value === 'dark') {
    document.documentElement.children[1].classList.remove('dark')
  } else {
    document.documentElement.children[1].classList.add('dark')
  }
}

const handleThemeSwitch = () => {
  theme.value === 'dark' ? theme.value = 'light' : theme.value = 'dark'
  useEffectTheme()
}
</script>

<template>
<button type="button" @click="handleThemeSwitch" class="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md">
{{theme === 'light' ? '🌙' : '🌞'}}
</button>
<div class="font-inter bg:white dark:bg-slate-900">
  <div class="max-2-5xl mx-auto w-11/12">
    <HeroSection />
    <Services />
  </div>
</div>
</template>