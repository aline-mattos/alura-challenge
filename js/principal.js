var buttonSave = document.querySelector("#button-save");

function saveNewMovie(form) {
    var newMovie = {
        title: form.title.value,
        url: form.url.value
    }
    return newMovie;
}

buttonSave.addEventListener("click", function(event) {
    event.preventDefault(); 

    var form = document.querySelector(".form-add-favorite");
    var movie = saveNewMovie(form);

    console.log(movie)

    var tableTR = expandTable(movie);

    var table = document.querySelector(".tbody-table-movies")

    table.appendChild(tableTR);

});

function expandTable(movie) {

    var movieTitle = document.createElement("td");
    movieTitle.textContent = movie.title;

    var movieUrl = document.createElement("td");
    movieUrl.textContent = movie.url;

    var tableTr = document.createElement("tr");

    tableTr.appendChild(movieTitle);
    tableTr.appendChild(movieUrl);
}



