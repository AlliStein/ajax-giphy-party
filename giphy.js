console.log("Let's get this party started!");



async function getGiphy() {
    const searchInput = document.querySelector('#search-input');
    let searchTerm = searchInput.val;
    searchInput.val('');

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: { q: searchTerm, API_key: MCCh5wM3jNWK2ryKu5XQ7YuO4FK2u6xo}
    });
    let random = Math.floor(Math.random() * response.data.lrngth);
    let newGif = response.data[random].images.original.url;
    return newGif;
}


function addGif() {
    const gifUl = document.querySelector('#gif-list');
    const newLi = document.createElement("li");
    gifUl.appendChild(newLi);
    const goBtn = document.querySelector('#submit-button');
    goBtn.addEventListener('submit', getGiphy)
}

const remv = document.querySelector("clear-button");
remv.addEventListener("click", function(event) {
    event.target();
});