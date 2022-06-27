<template>
     <div class="py-12">
        <SectionTitle :id="'works'" :title="'Recent Works'"/>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <WorkItem
                v-for="(work, index) in works" :key="index"
                :title="work.title"
                :imgUrl="work.imgUrl"
                :tech="work.tech"
            />
        </div>
     </div> 
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import WorkItem from './WorkItem.vue'
import works from '../data/works'
export default {
    name: 'Works',
    components: {
        SectionTitle,
        WorkItem
    },
    data() {
        return {
            works
        }
    }
}
</script>