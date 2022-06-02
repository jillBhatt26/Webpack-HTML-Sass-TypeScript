import axios, { AxiosResponse } from 'axios';

const generateJoke: Function = async (): Promise<string> => {
    const url: string = `https://icanhazdadjoke.com/`;

    const jokeResponse: AxiosResponse = await axios({
        url,
        headers: {
            Accept: 'application/json'
        }
    });

    return jokeResponse.data.joke;
};

export default generateJoke;
