<template>
    <!-- The Modal -->
    <div v-show="hidden" id="modal" class="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">
        <!-- The close button -->
        <button @click="closeModal" class="fixed z-90 top-6 right-8 text-white text-5xl font-bold">&times;</button>
        <!-- A big image will be displayed here -->
        <img :src="url" class="max-w-[1000px] max-h-[800px] object-cover" />
    </div>
</template>
<script>
export default {
    name: 'Modal',
    props: {
        url: {
            type: String,
            default: ''
        },
        hidden: {
            type: Boolean,
            default: false
        },
        closeModal: {
            type: Function,
            default: () => {}
        }
    },
}
</script>