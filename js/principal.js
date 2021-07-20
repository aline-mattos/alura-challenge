var buttonSave = document.querySelector("#button-save");

var form = document.querySelector(".form-add-favorite");


buttonSave.addEventListener("click", function(event) {
    event.preventDefault(); 

    var movieTitle = document.createElement("td");
    movieTitle.textContent = title;

    var movieUrl = document.createElement("td");
    movieUrl.textContent = url;

    var tableTr = document.createElement("tr");

    tableTr.appendChild(movieTitle);
    tableTr.appendChild(movieUrl);

    var table = document.querySelector(".tbody-table-movies")

    table.appendChild(tableTr);

});

function saveNewMovie(form) {
    var newMovie = {
        title: form.title.value,
        url: form.url.value
    }
}


