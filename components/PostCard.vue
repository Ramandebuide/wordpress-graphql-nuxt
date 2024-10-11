<template lang="">
  <nuxt-link :to="`/posts/${post.id}`" >
    <div class=" border border-gray-800 bg-slate-400 rounded-lg shadow-lg h-52 p-3">
        <div class='flex flex-column items-center justify-between pb-3'>
          <h2 class="font-semibold text-xl" >{{post.title}}</h2>
          <p>{{new Date(post.date).toLocaleDateString()}}</p>
        </div>
            
            <article v-html="post.excerpt"></article>
            
        
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
const props= defineProps<{
    post: Record<'title'|'date'|'excerpt'|'uri'|'id',string>
}>();


</script>
