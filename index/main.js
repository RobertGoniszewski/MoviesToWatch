new Vue({
  el: '#app',
data: {
      item: null,
      itemYts: null,
      loading: true,
      searchTitleTemp: '',
      searchTitle: 'avengers endgame',
      query: {t: this.searchTitle},
      boxOffice: null,
  },
  methods: {
    search () {
      axios
    .get('https://www.omdbapi.com/?Content-Type=application/json', {
      params: {
        t: this.searchTitleTemp,
        apikey: '4c0df937'
      }
    })
    .then(response => {
      this.item = response.data
      this.loading = false
      this.boxOffice = parseInt(response.data.BoxOffice.replace(/\D/g, ""), 10);
    })
    .catch(error => {
      console.log(error)
    })
    }
  },
  mounted () {
  axios
    .get('https://www.omdbapi.com/?Content-Type=application/json', {
      params: {
        t: this.searchTitle,
        apikey: '4c0df937'
      }
    })
    .then(response => {
      this.item = response.data
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  }
})