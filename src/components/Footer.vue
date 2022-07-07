<template>
    <footer class="bg-slate-900 py-12">
        <div class="container mx-auto">
            <div class="flex flex-col space-y-6 lg:space-y-0 items-center justify-between">
                <div class="flex space-x-6 items-center justify-center">
                    <div v-for="item in social" :key="item.title">
                        <a class="text-base" :href="item.url">
                            <fa class="w-8 h-8" :class="item.color" :icon="['fab', item.icon]" />
                        </a>
                    </div>
                </div>
                <!-- logo -->
                <div>
                    <img width="300" src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png"
                        alt="Logo JohnCode">
                </div>
                <!-- copyright -->
                <p class="text-base text-gray-600 dark:text-gray-300">
                    &copy; {{ author }}. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>
<script setup>
import social from '../data/social'
const author = 'Jhon Arcila Castano'
</script>