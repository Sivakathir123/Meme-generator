const titleEl = document.querySelector(".title");
const memeEl = document.querySelector(".meme");
const generateMemeBtnEl = document.querySelector(".generateMemeBtn");

async function generateMeme(){
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json()
    memeEl.setAttribute("src",data.url);
    console.log(data);
}

generateMemeBtnEl.addEventListener("click",generateMeme)

generateMeme();