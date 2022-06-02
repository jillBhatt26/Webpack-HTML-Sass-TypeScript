// imports
import laughingEmoji from '../assets/laughing.svg';
import generateJoke from './functions/generateJoke';
import '../sass/index.scss';

// selectors
const laughImg = document.querySelector('#laughImg') as HTMLImageElement;
const jokeDiv = document.querySelector('#joke') as HTMLDivElement;
const jokeBtn = document.querySelector('#jokeBtn') as HTMLButtonElement;

laughImg.src = laughingEmoji;

window.addEventListener('DOMContentLoaded', async () => {
    const joke: string = await generateJoke();

    jokeDiv.innerHTML = joke;
});

jokeBtn.addEventListener('click', async () => {
    const joke: string = await generateJoke();

    jokeDiv.innerHTML = joke;
});
