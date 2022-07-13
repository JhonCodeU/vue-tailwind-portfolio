<template>
    <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
        <div class="w-full md:w-6/12">
            <SectionTitle :id="'about'" :title="'About Me'"></SectionTitle>
            <p class="text-md text-gray-600 dark:text-gray-300">
                {{ description }}
            </p>
            <a href="mailto:webcifar.com"
                class="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500">
                {{ email }}
            </a>
        </div>

        <img src="https://media-exp2.licdn.com/dms/image/C5603AQH1xHVMrj8izw/profile-displayphoto-shrink_800_800/0/1657030234654?e=1663200000&v=beta&t=cfcqSvn3-yV1CwYIVIc7mCjVDNCLAjem85SN7grWcSc" alt="Jhon" width="200" class="rounded-lg object-cover" />
    </div>
</template>
<script>
import SectionTitle from './SectionTitle.vue'
export default {
    name: 'About',
    components: {
        SectionTitle
    },
    data() {
        return {
            message: 'Hello Vue!',
            email: 'Jhondeiber3030@gmail.com',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
					debitis, natus cum ad, fugiat excepturi minima culpa atque modi
					accusantium vel voluptatem?`
        }
    }
}
</script>