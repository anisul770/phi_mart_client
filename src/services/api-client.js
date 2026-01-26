import axios from 'axios';

export default axios.create({
  baseURL: "https://phi-mart-kappa.vercel.app/api/v1",
})