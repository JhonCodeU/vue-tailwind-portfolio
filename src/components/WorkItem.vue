<template>
    <div class="bg-slate-300 dark:bg-slate-800">
       <img class="w-full h-36 md:h-48 object-cover" :src="imgUrl" :alt="title">
       <div class="text-gray-600 dark:text-gray-300 p-5 2-full">
        <h3 class="text-lg md:text-xl mb-2 md:mb-3">{{title}}</h3>
        <p class="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
            <span v-for="(item, index) in tech" :key="index" class="inline-block px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-900">{{item}}</span>
        </p>
       </div>
    </div>
</template>
<script>
export default {
    name: 'Works',
    props: {
        title: {
            type: String,
            default: ''
        },
        imgUrl: {
            type: String,
            default: ''
        },
        tech: {
            type: Array,
            default: () => []
        }
    }
}
</script>