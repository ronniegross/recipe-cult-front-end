import axios from "axios";

export const sendData = async (input1, input2) => {
  console.log(`First Input: ${input1}`);
  console.log(`First Input: ${input2}`);
};

export const fetchShowDataExample = async formInput => {
  console.log("fetching movie data for: ", formInput);
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${formInput}`
  );
  return response.data;
};
