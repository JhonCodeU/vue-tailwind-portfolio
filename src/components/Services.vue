<template>
  <div class="py-12">
    <SectionTitle :id="'services'" :title="title"></SectionTitle>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="item in services" :key="item.id">
        <ServiceItem
          :title="item.title"
          :icon="item.icon"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SectionTitle from './SectionTitle.vue'
import ServiceItem from './serviceItem.vue'
import services from '../data/services'
export default {
  name: 'Services',
  components: {
    SectionTitle,
    ServiceItem
  },
  data() {
    return {
      title: 'Our Services',
      services
    }
  }
}
</script>