Vue.createApp({
    data() {
      return {
        articles: [
          {
            title: 'The Magic of Vue',
            description: "This is your first looping using Vue",
            thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
          }
        ]
      };
    },
    mounted:()=>{    
      axios.get("https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/header.json")
      .then((res)=>{
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }).mount("#app");