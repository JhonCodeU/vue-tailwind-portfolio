<template>
  <div>
    <SectionTitle :id="'works'" :title="'My Skills'" />
    <section class="bg-tertiary py-12">
      <div class="container mx-auto">
        <div class="grid grid-cols-8 md:grid-flow-row">
          <div
            class="flex items-center justify-center"
            v-for="skill in skills"
            :key="skill.title"
          >
            <img :src="skill.img" :alt="skill.title" width="64" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import SectionTitle from './SectionTitle.vue'
import skills from '../data/skills'
export default {
  name: 'Skills',
  components: {
    SectionTitle
  },
  data() {
    return {
      skills
    }
  }
}
</script>