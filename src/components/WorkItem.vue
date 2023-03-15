<template>
    <div class="container">
        <div id="works" class="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700
        hover:-translate-y-2 transition transform rounded-md">
            <img @click="showModal()" class="w-full h-36 md:h-48 object-cover rounded-md" :src="imgUrl" :alt="title">
            <div @click="redirect" class="text-gray-600 dark:text-gray-300 p-5 2-full cursor-pointer">
                <h3 class="text-lg md:text-xl mb-2 md:mb-3">{{ title }}</h3>
                <p class="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
                    <span v-for="(item, index) in tech" :key="index"
                        class="inline-block px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-900">{{ item }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import ToastifyBase from '../libs/toastify'
export default {
    name: 'Works',
    props: {
        id: {
            type: Number,
            default: 0
        },
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
        },
        url: {
            type: String,
            default: ''
        }
    },
    methods: {
        redirect() {
            console.log('redirect', this.url);
            if (this.url === '#') {
                ToastifyBase('This Project is private...', 'info')
            } else {
                ToastifyBase('Redirecting...', 'info')
                window.location.href = this.url
            }
        },
        showModal () {
            this.$emit('show-modal', this.id)
        }
    }
}
</script>