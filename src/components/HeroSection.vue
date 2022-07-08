<template>
    <div class="flex item-center justify-center flex-col py-20">
        <div class="text-center">
            <h1 class="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500">{{ title }}</h1>
            <p class="text-md md:text-xl max-w-md mx-auto mb-3 text-gray-600 dark:text-gray-300">{{ description }}</p>
            <a href="#" class="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">See Works</a>
        </div>
    </div>
</template>
<script setup>
const title = 'Hi, This is Jhon'
const description = "I'm Jhon Arcila Castano, a software developer based in Manizales, Colombia. I'm a full-stack developer with a passion for building web applications."
</script>