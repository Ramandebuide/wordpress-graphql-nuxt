<template lang="">
  <div className='bg-slate-300 h-lvh'>
     <PostDetails :data='data'></PostDetails>
  </div>
</template>
<script setup>
const { id } = useRoute().params;
const org = process.env.GQL_HOST||"http://127.0.0.1:80/wordpress/graphql";


const {data,refresh,error} = await useFetch(org, {
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

if(data){console.log({data:data});
}
if(error){
  console.error({customerror:error})
}

</script>

