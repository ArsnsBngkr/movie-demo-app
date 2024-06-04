<template>
    <div>
        <h1>Your selected Movies Page</h1>
        <SelectedMoviesInfo :moviesListData="moviesListData" :removeMovie="removeFromCart" />
    </div>
</template>

<script>
import SelectedMoviesInfo from "../components/selected-movies-info.vue";
export default {
    components: {
        SelectedMoviesInfo
    },
    props: ['moviesListData', 'removeFromCart'],
}
</script>