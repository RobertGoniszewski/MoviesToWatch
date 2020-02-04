<template>
<div class="container">
            <div class="">
                <h5>List of items <span class="badge badge-secondary">1<span></h5>
            </div>
            <div id="card" class="card mb-2" style="width: 80%; height: 20%">
                <div class="card-body p-0 d-flex flex-row">
                    <img class="img-fluid p-0 rounded align-self-center" style="width: 12%; height: auto" src="https://img.yts.am/assets/images/movies/avengers_age_of_ultron_2015/medium-cover.jpg" alt="Card image cap">
                    <div class="d-flex flex-column p-2">
                        <h5 class="card-title mb-0 justify-content-stretch text-nowrap">The Avengers <span class="badge badge-secondary">2012<span></h5>
                        <div class="p-0 d-flex flex-row"><small class="p-0 mb-0"><strong>Genre:</strong> action, adventure, sci-fi | <strong>Language: </strong>english</small>
                            <div class="d-flex flex-row ml-auto mr-5"><small class=""><strong>Download: </strong></small><small class="" style="font-size: 0.8rem"><a href="#"><span class="badge badge-secondary ml-1 mr-0 font-weight-normal">720p </span></a><a href="#"><span class="badge badge-secondary ml-1 mr-0 font-weight-normal">1080p</span></a> (bluray), <a href="#"><span class="badge badge-secondary ml-1 mr-0 font-weight-normal">3D</span></a> (bluray)</small></div>
                        </div>
                        <div class="p-0 d-flex flex-row mb-1"><small><strong>Ratings: </strong>Internet Movie Database: <span class="badge badge-secondary" style="font-size: 0.6rem">7.4/10</span>, Rotten Tomatoes: <span class="badge badge-secondary" style="font-size: 0.6rem">75%</span>, Metacritic: <span class="badge badge-secondary" style="font-size: 0.6rem">66/100</span></small></div>
                        <p class="card-text p-1 align-self-start">Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
  axios
    .get('http://www.omdbapi.com/?s=indiana&apikey=XXXX&page=1&type=movie&Content-Type=application/json')
    .then(response => {
      this.wholeResponse = response.data.Search
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
</style>