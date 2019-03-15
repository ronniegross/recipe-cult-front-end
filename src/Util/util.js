import axios from "axios";

export const sendData = async (input1, input2, input3) => {
  let payload = { input1, input2, input3 };
  let url = 'http://localhost:3001/post-data';
  const response = await axios.post(url, payload);
  return response.data;
};

export const getClients = async () => {
  let url = 'http://localhost:3001/get-clients';
  const response = await axios.get(url);
  return response.data;
}

export const fetchShowDataExample = async formInput => {
  console.log("fetching movie data for: ", formInput);
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${formInput}`
  );
  return response.data;
};