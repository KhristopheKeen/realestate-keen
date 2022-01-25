import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '37418b7f5emshfa699a9e90982fcp1b1b9ajsn4000907ac1c1'
          }
    });
    return data;
}