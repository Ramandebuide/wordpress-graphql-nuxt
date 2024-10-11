<template lang="">
  <div className='bg-slate-300'>
     <PostDetails :data='data'></PostDetails>
  </div>
</template>
<script setup>
const { id } = useRoute().params;
const config = useRuntimeConfig();

const {data,refresh,error} = await useFetch("http://127.0.0.1:80/wordpress/graphql", {
  method: "POST",
  body: {
    query: `
  query getById($id: ID!) {
  post(id: $id) {
    title
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`,
variables:{
  id:id
}
  },
  transform(data){
    return data.data.post;
  }
  
});

</script>

