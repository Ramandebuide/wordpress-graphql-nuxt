<script lang="ts" setup>

const org = process.env.GQL_HOST||"http://127.0.0.1:80/wordpress/graphql";

const {data,refresh,error} = await useFetch(org, {
  method: "POST",
  body: {
    query: `
  query postsDetails{
   posts(first:10) {
   nodes{
    title
    date
    excerpt
    uri
    id
   }
  }
}  
`,
  },
  transform(data){
    // return data.data.posts
return data.data.posts.nodes as Array<Record<'title'|'date'|'excerpt'|'uri'|'id',string>>;
  }
});
if(data){console.log({data:data});
}
if(error){
  console.error({customerror:error})
}

</script>

<template lang="">
  <div class=" bg-slate-300 h-lvh">
    <TheHeader></TheHeader>
    <div class=" grid gap-4 grid-cols-1 lg:grid-cols-3 p-6   ">
    <PostCard class="border-slate-300" v-for="post in data" :post="post" :key="post.uri"></PostCard>
    </div>
  </div>
</template>
