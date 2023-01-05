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

        <img :src="picture" alt="Jhon" width="200" class="rounded-lg object-cover" />
    </div>
</template>
<script>
import SectionTitle from './SectionTitle.vue'
import pictureProfile from '/profile/my-photo.png'
export default {
    name: 'About',
    components: {
        SectionTitle
    },
    data() {
        return {
            picture: pictureProfile,
            message: 'Hello Vue!',
            email: 'johnarcilaca@gmail.com',
            description: `Jhon Arcila Castano is a software developer with a passion for building web applications and a desire to constantly improve his skills. As a full-stack developer, he has experience in a variety of programming languages and frameworks, and is always looking for new challenges to tackle. Jhon is dedicated to delivering high-quality software solutions and is committed to staying up to date on the latest trends in the industry. In his free time, he enjoys learning about new technologies and staying up to date on the latest developments in the field. Overall, Jhon is a highly motivated and driven developer with a strong commitment to excellence.`
        }
    }
}
</script>