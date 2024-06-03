<template>
    <h1>home page</h1>
    <div class="search-bar">
        <label for="">search your movie</label>
        <input type="text" @keyup="searchMovies" v-model="searchText" placeholder="searchText">
    </div>
    <div class="available-movies">
        <div v-if="moviesData != undefined" class="movie-cards-container">
            <MovieCard v-for="(movie) in moviesData" :key="movie.imdbID" :movie="movie" />
        </div>
        <div v-else>no available movies</div>
    </div>



</template>

<script>

import MovieCard from "@/components/movie-card.vue";

export default {
    name: 'home-page',
    components: {
        MovieCard
    },
    data: function () {
        return {
            moviesData: [],
            searchText: "spiderman",
        }
    },
    methods: {
        async searchMovies() {
            const API_URL = "http://www.omdbapi.com?apikey=9af1e3f7";
            console.log("search ", this.searchText)
            const titleSearch = this.searchText;
            const response = await fetch(`${API_URL}&s=${titleSearch}`);
            const data = await response.json();
            this.moviesData = data.Search;
            console.log(this.moviesData)

        }
    },

    created() {
        console.log("created")
    },
    mounted() {
        console.log("mounted")
        this.searchMovies()
    },
    unmounted() {
        console.log("unmounted")
    },


}
</script>

<style>
.available-movies {
    margin-top: 20px;
    background-color: rgb(17, 16, 16);
    color: white;
    padding: 20px;
}

.movie-cards-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}

.search-bar {
    border: 2px solid blue;
    display: inline-block;
    padding: 0.7em;


}

.search-bar input {
    font-size: 18px;
    margin-left: 16px;
}
</style>