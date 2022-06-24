<template>
<div class="py-12">
    <SectionTitle :title="title"></SectionTitle>
</div>
</template>
<script>
import SectionTitle from "./SectionTitle.vue"
export default {
    name: "Services",
    components: {
        SectionTitle
    },
    data() {
        return {
            title: 'Our Services'
        }
    },
}
</script>