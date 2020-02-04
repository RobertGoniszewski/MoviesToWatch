<template>
<div id="singleMovie" class="container">
            <div class="">
                <h5>List of items <span class="badge badge-secondary">1<span></h5>
            </div>
<div id="card" class="card" style="width: 80%; height: 20%">
                <div class="card-body p-0 d-flex flex-row">
                    <img class="img-fluid p-0 rounded align-self-center" style="width: 12%; height: auto" :src="item.Poster" alt="Poster for {{item.Title}}">
                    <div class="d-flex flex-column p-2">
                        <h5 class="card-title mb-0 justify-content-stretch text-nowrap">{{item.Title}} <span class="badge badge-secondary">{{item.Year}}<span></h5>
                        <div class="pl-2 d-flex flex-row"><small class="p-0 mb-0">{{item.Runtime}} | <strong>Genre:</strong> {{item.Genre}} | <strong >Language: </strong>{{item.Language}} | <strong>Rated: </strong>{{item.Rated}}</small>
                            <div class="d-flex flex-row ml-auto mr-5"><small class=""><strong>Download: </strong></small><small class="" style="font-size: 0.8rem"><a href="#"><span class="badge badge-secondary ml-1 mr-0 font-weight-normal">720p </span></a><a href="#"><span class="badge badge-secondary ml-1 mr-0 font-weight-normal">1080p</span></a> (bluray), <a href="#"><span class="badge badge-secondary ml-1 mr-0 font-weight-normal">3D</span></a> (bluray)</small></div>
                        </div>
                        <div class="pl-2 d-flex flex-row mb-1"><small><strong>Ratings: </strong></small><small v-for="rating in item.Ratings">{{rating.Source}}: <span class="badge badge-secondary" style="font-size: 0.6rem">{{rating.Value}}</span></small></div>
                        <p class="card-text pt-1 align-self-start">{{item.Plot}}</p>
                            <div class="pl-2 d-flex flex-row"><small class="p-0 mb-0"><em class="mr-1"><strong>Director: </strong>{{item.Director}}</em><em class="mr-1"><strong>Actors: </strong>{{item.Actors}}</em></small></div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      item: [],
      loading: true
    }
  },
  mounted () {
  axios
    .get('http://www.omdbapi.com/?apikey=4c0df937&t=ultron&Content-Type=application/json')
    .then(response => {
      this.item = response.data.Search
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