<template>
    <div class="selected-movies-info">
        <h2 v-if="moviesListData.length===0">No selected movies</h2>
        <table v-else class="styled-table">
            <tr>
                <th>Title</th>
                <th>Year</th>

            </tr>
            <tr  v-for="(movie) in moviesListData" :key="movie.id">
                <td>{{ movie.title }}</td>
                <td>{{ movie.year }}</td>
                <td><button @click="removeMovie(movie.id)">Remove</button></td>
            </tr>

        </table>

    </div>
</template>

<script>
export default {
    props: ['moviesListData','removeMovie'],
    methods: {
    },

}
</script>


<style>
.styled-table {
    border-collapse: collapse;
    padding: 16px;
    width: 100%;
    margin: 20px 0;
    font-size: 1em;
    font-family: sans-serif;
    /* min-width: 400px; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    table-layout:fixed;
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 10px 13px;
}


.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

</style>
