<template>



    <div class="card">
        <div class="card-container">
            <img :src="movie.Poster != 'N/A' ? movie.Poster : noAvailableImage" v-bind:alt="movie.Title"
                style="width: 100%">
            <h3 class="card-title">{{ movie.Title }}</h3>
            <p class="release-year">Release year:{{ movie.Year }}</p>
            <p><button @click="addToCart(movie.imdbID)">Add to favourites</button></p>
        </div>
    </div>
</template>

<script>
import noAvailableImage from "../assets/images/noAvailableImage.jpg";
export default {
    props: ['movie'],
    data() {
        return {
            noAvailableImage: noAvailableImage
        }

    },
    methods:{
        addToCart(selectedMovieId) {
            console.log(selectedMovieId)
        },

    }
}
</script>



<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 300px;
    background-color: orange;
    text-align: center;
    font-family: poppins, Helvetica, sans-serif;
    margin: 10px;
    height: auto;
    border-radius: 16px;
}

.card-container {

    padding: 16px;
    display: flex;
    flex-direction: column;

}

.card-container img {
    height: 200px;
}

.card-title {
    text-align: left;
    color: rgb(246, 43, 43);
    font-size: 18px;
    min-height: 60px;
}

.release-year {
    font-size: 20px;
    text-align: left;
}


button {

    border: none;
    outline: 0;
    width: 100%;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

button:hover,
a:hover {
    opacity: 0.7;
}
</style>