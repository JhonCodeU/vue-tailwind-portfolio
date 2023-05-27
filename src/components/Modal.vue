<template>
  <div
    v-if="!hidden"
    class="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center"
    @click.self="closeModal"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-gray-h-full opacity-50"
    ></div>
    <div class="relative z-50 w-full max-w-4xl p-6">
      <div class="relative mb-4">
        <img
          :src="getImageSource(images[currentIndex])"
          alt="image"
          class="object-contain w-full h-96"
        />
        <button
          v-if="images.length > 1"
          @click="previous"
          class="absolute top-0 left-0 w-16 h-96 text-2xl text-gray-500 hover:text-white focus:outline-none"
        >
          &lt;
        </button>
        <button
          v-if="images.length > 1"
          @click="next"
          class="absolute top-0 right-0 w-16 h-96 text-2xl text-gray-500 hover:text-white focus:outline-none"
        >
          &gt;
        </button>
      </div>
      <!-- <h2 class="text-xl font-bold">{{ title }}</h2> -->
      <button
        @click="closeModal"
        class="absolute top-0 right-0 p-2 text-xl font-bold text-gray-500 hover:text-white focus:outline-none"
      >
        &times;
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'Modal',
  props: {
    hidden: {
      type: Boolean,
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    getImageSource(image: any) {
      return image || ''
    },
    closeModal() {
      this.$emit('closeModal')
    },
    next() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    },
    previous() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1
      } else {
        this.currentIndex--
      }
    }
  }
})
</script>
<style>
/* Style the buttons */
button:focus {
  outline: none;
}
button:hover {
  color: white;
}
</style>