let apiKey = "5a485acd";
let response;
let url = `https://www.omdbapi.com/?apikey=` + apiKey;
const apiCall = () => {
  return fetch(url + "&s=" + $(".form-control").val()).then((res) => {
    return res.json();
  });
};
$("#close").click(() => {
  $(".form-control").val(" ");
});

$("#search").click(() => {
  $(".container").html("");
  apiCall().then((res) => {
    let movies = res.Search;
    movies.forEach((item) => {
      $(".container").append(
        `<div class='movie'><img src=${item.Poster}/><h5>${item.Title}</h5><p class="par">${item.Type}</p><p class="par">${item.Year}</p><button type="button" class="btn btn-success col-12" onclick="showData('${item.imdbID}')" data-bs-toggle="modal" data-bs-target="#exampleModal">More details</button></div>`
      );
    });
  });
});

const movieApi = (id) => {
  return fetch(url + "&i=" + id + "&plot=full").then((res) => {
    return res.json();
  });
};

const showData = (id) => {
  movieApi(id).then((res) => {
    $(".modal-body").html("");
    $(".modal-body").append(`<div class="left"><img class="poster" src="${
      res.Poster
    }"/></div>
    <div class="info">
    <h5 class="title">${res.Title}</h5>
    <p class="genre">${res.Rated + " " + res.Genre}</p>
    <p class="plot">${res.Plot}</p>
    <p class="writer"><b>Written by: </b>${res.Writer}</p>
    <p class="director"><b>Directed by: </b>${res.Director}</p>
    <p class="actors"><b>Starring: </b>${res.Actors}</p>
    <p class="boxOffice"><b>BoxOffice: </b>${res.BoxOffice}</p>
    <p class="awards"><b>Awards: </b>${res.Awards}</p>
    <p class="ratings"><b>Ratting: </b></p>
    </div>
    `);
    res.Ratings.forEach((item) => {
      $(".info").append(`<p>${item.Source} ${item.Value}</p>`);
    });
  });
};
