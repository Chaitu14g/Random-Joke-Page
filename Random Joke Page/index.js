let jokeText = document.getElementById("jokeText");

let jokeBtn = document.getElementById("jokeBtn");

let spinner = document.getElementById("spinner");

jokeBtn.addEventListener("click", function() {
    spinner.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            spinner.classList.add("d-none");
            jokeText.textContent = response.value;
        });
})