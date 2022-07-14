<template>
     <div class="py-12">
        <SectionTitle :id="'works'" :title="'Recent Works'"/>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <WorkItem
                @show-modal="loadModal"
                v-for="(work, index) in works" :key="index"
                :title="work.title"
                :imgUrl="work.imgUrl"
                :tech="work.tech"
                :url="work.url"
            />
        </div>
        <Modal :hidden="showModal" :url="modalUrl" :closeModal="closeModal" />
     </div> 
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import WorkItem from './WorkItem.vue'
import works from '../data/works'
import Modal from './Modal.vue'
export default {
    name: 'Works',
    components: {
        SectionTitle,
        WorkItem,
        Modal
    },
    data() {
        return {
            works,
            showModal: false,
            modalUrl: ''
        }
    },
    methods: {
        closeModal() {
            console.log('focusout');
            this.showModal = false
        },
        loadModal(url){
            this.showModal = true
            this.modalUrl = url
        }
    }
}
</script>