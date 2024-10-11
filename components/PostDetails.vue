<template lang="">
    <div >
        <h1 class='flex justify-center font-bold text-3xl pt-3 pb-4 '>{{data.title}}</h1>
        <article v-html="data.content"></article>
    </div>
</template>
<script lang="ts" setup>
const props=defineProps<{
    data:Record<'title'|'content'|'featuredImage',string>
}>();
</script>
<style lang="">
    
</style>