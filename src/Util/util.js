import axios from "axios";

export const sendData = async formInput => {
  console.log("sending data");
};

export const fetchMovieDataExample = async formInput => {
  console.log("fetching movie data for: ", formInput);
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${formInput}`
  );

  return response;
};
