import axios from "axios";

export const sendData = async (input1, input2) => {
  console.log(`First Input: ${input1}`);
  console.log(`Second Input: ${input2}`);
  let payload = {
    input1,
    input2
  }
  const response = await axios.post(
    'http://localhost:3001/post-data',
    payload
  );
  return response
};

export const fetchShowDataExample = async formInput => {
  console.log("fetching movie data for: ", formInput);
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${formInput}`
  );
  return response.data;
};