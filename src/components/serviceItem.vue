<template>
    <div class="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 
    p-5 hover:-translate-y-2 transition transform rounded-md">
        <div class="text-gray-800 dark:text-gray-300 w-6 h-6 mb-3">
            <fa :icon="icon"/>
        </div>
        <h1 class="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">{{title}}</h1>
        <p class="text-md text-gray-600 dark:text-gray-300">{{description}}</p>
    </div>
</template>
<script>
export default {
    name: "ServiceItem",
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
}
</script>