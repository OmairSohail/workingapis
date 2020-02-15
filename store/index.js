export const state = () => ({
    news:[]
  })

export const actions = {
     async getNews(){
         const response = await $axios.get('https://api.nytimes.com/svc/archive/v1/2019/1.json?',{apiKeys:'gCGqsz1h9rI4jGxA7BDENpkj8s6EEco9'});
         const news = response.data();
         console.log(news)
     }
} 
  
  
export const mutations = {
    setNews(state,news){
      this.state = news
    }
}