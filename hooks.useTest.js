import { useQuery } from "react-query";
import axios from "axios";

export function useTest() {
  return useQuery("tests_values", async () => {
    const { data } = await axios.get(`https://dbve.barpat.fun/api_bikes`);
    return data;
  });
}