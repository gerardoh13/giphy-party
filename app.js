const input = document.getElementById("query");
const search = document.getElementById("search");
const remove = document.getElementById("remove");
const API = "http://api.giphy.com/v1/gifs/search";
const key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const gifsDiv = document.getElementById("gifs");

search.addEventListener("click", (e) => {
  e.preventDefault();
  getGifs(input.value);
  input.value = "";
});
remove.addEventListener("click", (e) => {
  e.preventDefault();
  gifsDiv.innerText = "";
});
async function getGifs(val) {
  try {
    let response = await axios.get(API, { params: { q: val, key } });
    let data = response.data.data;
    let random = Math.floor(Math.random() * data.length);
    appendGif(data[random].images.original.url);
  } catch (e) {
    alert(`Oops! couldnt find gifs for ${val}` );
  }
}

function appendGif(url) {
  let newGif = document.createElement("img");
  newGif.setAttribute("src", url);
  gifsDiv.append(newGif);
}
