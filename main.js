const meme_button = document.querySelector(".meme_generator .meme_button");
const meme_image = document.querySelector(".meme_generator img");
const meme_title = document.querySelector(".meme_generator .meme_title");
const meme_author = document.querySelector(".meme_generator .meme_author");

meme_button.addEventListener("click", generateMeme);

function updateDetails(url, title, author) {
    meme_image.setAttribute("src", url);
    meme_title.innerHTML = title;
    meme_author.innerHTML = `Meme by: ${author}`;
}

function generateMeme() {
    fetch("https://meme-api.com/gimme/memes")
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            updateDetails(data.url, data.title, data.author);
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
