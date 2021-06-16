import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${
      process.env.REACT_APP_KEY || "A62ckDfO-_LHZA-6SHb9fFo-8a4M80NnkFMqpipjsGg"
    }`,
  },
});
